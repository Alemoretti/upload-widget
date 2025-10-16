import { create } from "zustand";
import { enableMapSet } from "immer";
import { immer } from "zustand/middleware/immer";
import { uploadFileToStorage } from "../http/upload-file-to-storage";
import { CanceledError } from "axios";
import { useShallow } from "zustand/shallow";

export type Upload = {
  name: string;
  file: File;
  abortController: AbortController
  status: 'progress' | 'success' | 'error'| 'canceled',
  originalSizeInBytes: number
  uploadSizeInBytes: number
};

type UploadState = {
  uploads: Map<string, Upload>;
  addUploads: (files: File[]) => void;
  cancelUpload: (uploadId: string) => void
};

enableMapSet();

export const useUploads = create<UploadState>()(
  immer((set, get) => {
    function updateUpload(uploadId: string, data: Partial<Upload>) {
      const upload = get().uploads.get(uploadId);

      if (!upload) {
        return;
      }

      set(state => {
        state.uploads.set(uploadId, { ...upload, ...data })
      })
    }

    async function processUpload(uploadId: string) {
      const upload = get().uploads.get(uploadId);

      if (!upload) {
        return;
      }

      try {
        await uploadFileToStorage(
          {
            file: upload.file,
            onProgress(sizeInBytes) {
              updateUpload(uploadId, { uploadSizeInBytes: sizeInBytes })
            },
          },
          { signal: upload.abortController.signal}
        );


        updateUpload(uploadId, { status: 'success' })
      } catch (err) {
        if (err instanceof CanceledError) {
          updateUpload(uploadId, { status: 'canceled' })

          return
        }

        updateUpload(uploadId, { status: 'error' })
      }
    }

    async function cancelUpload(uploadId: string) {
      const upload = get().uploads.get(uploadId);

      if (!upload) {
        return;
      }

      upload.abortController.abort()

      set((state) => {
        state.uploads.set(uploadId, {
          ...upload,
          status: 'canceled',
        });
      });
    }

    function addUploads(files: File[]) {
      for (const file of files) {
        const uploadId = crypto.randomUUID();
        const abortController = new AbortController()

        const upload: Upload = {
          name: file.name,
          file,
          abortController,
          status: 'progress',
          originalSizeInBytes: file.size,
          uploadSizeInBytes: 0,
        };

        set((state) => {
          state.uploads.set(uploadId, upload);
        });

        processUpload(uploadId);
      }
    }

    return {
      uploads: new Map(),
      addUploads,
      cancelUpload,
    };
  })
);

export const usePendingUploads = () => {
  return useUploads(useShallow(store => {
    const isThereAnyPendingUploads = Array
      .from(store.uploads.values())
      .some(upload => upload.status === 'progress')

    if (!isThereAnyPendingUploads) {
      return { isThereAnyPendingUploads, globalPercentage: 100 }
    }

    const { total, uploaded } = Array.from(store.uploads.values()).reduce(
      (acc, upload) => {
        acc.total += upload.originalSizeInBytes
        acc.uploaded += upload.uploadSizeInBytes

        return acc
      },
      { total: 0, uploaded: 0 }
    )

    const globalPercentage = Math.min(
      Math.round((uploaded * 100) / total),
      100
    )

    return {
      isThereAnyPendingUploads,
      globalPercentage,
    }
  }))
}