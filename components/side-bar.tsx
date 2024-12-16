import { ChevronDown, FileIcon, Folder } from "lucide-react";

export function SideBar() {
  return (
    <div className="w-0 sm:w-60 border-r transition-all hidden sm:block">
      <div className="p-2">
        <div className="flex items-center justify-between p-1">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium uppercase">
              Espace de travail
            </span>
          </div>
        </div>
        <div className="mt-2 hidden sm:block">
          <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
            <ChevronDown className="h-4 w-4 shrink-0" />
            <Folder className="h-4 w-4 shrink-0" />
            <span className="text-sm">Mihary portfolio</span>
          </div>
          <div className="ml-4">
            <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
              <FileIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm">Home.tsx</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
              <FileIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm">About.tsx</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
              <FileIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm">Project.tsx</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
              <FileIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm">Blog.tsx</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
              <FileIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm">README.md</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
