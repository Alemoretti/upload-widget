import * as Collapsible from "@radix-ui/react-collapsible"
import { UploadWidgetDropzone } from "./upload-widget-dropzone";
import { UploadWidgetHeader } from "./upload-widget-header";
import { UploadWidgetUploadList } from "./upload-widget-upload-list";
import { motion } from "motion/react";
import { UploadWidgetMinimizedButton } from "./upload-widget-minimized-button";
import { useState } from "react";

export function UploadWidget() {
  const isThereAnyPendingUpload = false

  const [isWidgetOpen, setIsWidgetOpen] = useState(false)
  
  return (
    <Collapsible.Root open={isWidgetOpen} onOpenChange={setIsWidgetOpen} asChild>
      <motion.div
        data-progress={isThereAnyPendingUpload}
        className="bg-zinc-900 overflow-hidden w-[360px] rounded-xl data-[state=open]:shadow-shape border border-transparent animate-border data-[state=closed]:rounded-3xl data-[state=closed]:data-[progress=false]:shadow-shape  data-[state=closed]:data-[progress=true]:[background:linear-gradient(45deg,#09090B,theme(colors.zinc.900)_50%,#09090B)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.zinc.700/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.zinc.600/.48))_border-box]"
        animate={isWidgetOpen ? 'open' : 'closed'}
        variants={{
          closed: {
            width: 'max-content',
            height: '44',
            transition: {
              type: 'inertia',
            },
          },
          open: {
            width: 360,
            height: 'auto',
            transition: {
              duration: 0.9,
            },
          },
        }}
      >
        {!isWidgetOpen && <UploadWidgetMinimizedButton />}
        <Collapsible.Content>
          <UploadWidgetHeader />

          <div className="flex flex-col gap-4 py-3">
            <UploadWidgetDropzone />

            <div className="h-0.5 bg-zinc-800 border-t border-black/50"></div>

            <UploadWidgetUploadList />
          </div>
        </Collapsible.Content>

      </motion.div>
    </Collapsible.Root>
  )
}