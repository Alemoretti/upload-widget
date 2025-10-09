import * as Collapsible from "@radix-ui/react-collapsible";
import { Maximize2 } from "lucide-react";

export function UploadWidgetMinimizedButton() {
  return (
    <Collapsible.Trigger className="group w-full bg-white/2 py-3 px-5 flex items-center justify-between">
      <span className="text-sm font-medium">Upload files</span>

      <Maximize2
        strokeWidth={1.5}
        className="size-4 text-zinc-400 group-hover:text-zinc-100"
      />
    </Collapsible.Trigger>
  );
}