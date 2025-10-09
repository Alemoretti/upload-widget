import { UploadWidgetUploadItem } from "./upload-widget-upload-item";

export function UploadWidgetUploadList() {
  return (
    <div className="p-3 flex flex-col gap-3">
      <span className="text-xs font-medium">
        Uploaded files{' '}
        <span className="text-zinc-400">(2)</span>
      </span>

      <UploadWidgetUploadItem />
      <UploadWidgetUploadItem />
    </div>
  )
}