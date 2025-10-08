import { UploadWidgetDropzone } from "./upload-widget-dropzone";
import { UploadWidgetHeader } from "./upload-widget-header";
import { UploadWidgetUploadList } from "./upload-widget-upload-list";

export function UploadWidget() {
  return (
    <div className="bg-zinc-900 w-full overflow-hidden max-w-[360px] rounded-xl shadow-shape">
      <UploadWidgetHeader />

      <div className="flex flex-col gap-4 py-3">
        <UploadWidgetDropzone />

        <div className="h-0.5 bg-zinc-800 border-t border-black/50"></div>

        <UploadWidgetUploadList />
      </div>
    </div>
  )
}