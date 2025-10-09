import { UploadCloud } from "lucide-react"

export function UploadWidgetTitle() {
  return (
    <div className="flex items-center gap-1.5 text-sm font-medium">
      <UploadCloud strokeWidth={1.5} className="size-4 text-zinc-400" />
      <span>Upload files</span>
    </div>
  )
}