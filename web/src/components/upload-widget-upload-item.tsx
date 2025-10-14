import { Download, ImageUp, Link2, RefreshCcw, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import * as progress from "@radix-ui/react-progress";
import type { Upload } from "../store/uploads";
import { formatBytes } from "../utils/format-bytes";

interface UploadWidgetUploadItemProps {
  upload: Upload
}

export function UploadWidgetUploadItem({ upload}: UploadWidgetUploadItemProps) {
  return (
    <motion.div 
      className="p-3 rounded-lg flex flex-col gap-3 shadow-shape-content bg-white/2 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium flex items-center gap-1">
          <ImageUp className="size-3 text-zinc-300" strokeWidth={1.5} />
          <span>{ upload.name }</span>
        </span>

        <span className="text-xxs text-zinc-400 flex gap-1.5 items-center">
          <span className="line-through">{ formatBytes(upload.file.size) }</span>
          <div className="size-1 rounded-full bg-zinc-700" />
          <span>
            300KB
            <span className="text-green-400 ml-1">
              -94%
            </span>
          </span>
          <div className="size-1 rounded-full bg-zinc-700" />
          <span>45%</span>
        </span>
      </div>

      <progress.Root className="bg-zinc-800 rounded-full h-1 overflow-hidden">
        <progress.Indicator className="bg-indigo-500 h-1 " style={{ width: '43%' }} />
      </progress.Root>

      <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
        <Button size="icon-sm">
          <Download className="size-4" strokeWidth={1.5} />
          <span className="sr-only">Download compressed image</span>
        </Button>

        <Button size="icon-sm">
          <Link2 className="size-4" strokeWidth={1.5} />
          <span className="sr-only">Copy remote URL</span>
        </Button>

        <Button size="icon-sm">
          <RefreshCcw className="size-4" strokeWidth={1.5} />
          <span className="sr-only">Retry upload</span>
        </Button>

        <Button size="icon-sm">
          <X className="size-4" strokeWidth={1.5} />
          <span className="sr-only">Cancel upload</span>
        </Button>
      </div>
    </motion.div>
  )
}