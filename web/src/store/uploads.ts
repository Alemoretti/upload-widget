import { create } from "zustand";
import { enableMapSet } from "immer";
import { immer } from "zustand/middleware/immer";

export type Upload = {
  name: string;
  file: File;
};

type UploadState = {
  uploads: Map<string, Upload>;
  addUploads: (files: File[]) => void;
};

enableMapSet();

export const useUploads = create<UploadState>()(
  // @ts-expect-error - Zustand + Immer type compatibility issue
  immer((set) => ({
    uploads: new Map(),
    addUploads: (files: File[]) => {
      set((state) => {
        for (const file of files) {
          const uploadId = crypto.randomUUID();

          const upload: Upload = {
            name: file.name,
            file,
          };

          state.uploads.set(uploadId, upload);
        }
      });
    },
  }))
);