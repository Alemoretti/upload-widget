import { useUploads } from "../store/uploads";
import { UploadWidgetUploadItem } from "./upload-widget-upload-item";

export function UploadWidgetUploadList() {
  const uploads = useUploads(store => store.uploads)
  const isUploadListEmpty = uploads.size === 0

  return (
    <div className="p-3 flex flex-col gap-3">
      <span className="text-xs font-medium">
        Uploaded files{' '}
        <span className="text-zinc-400">(2)</span>
      </span>

      {isUploadListEmpty ? (
          <span className="text-xs text-zinc-400">No uploads added</span>
      ) : (
        <div className="flex flex-col gap-2">
          { Array.from(uploads.entries()).map(([uploadId, upload]) => {
            return (
              <UploadWidgetUploadItem key={uploadId} upload={upload} />
            )
          })}
          
        </div>
      )}
    </div>
  )
}