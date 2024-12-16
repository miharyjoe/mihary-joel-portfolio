import { ChevronDown, FileIcon, Folder } from "lucide-react";

export function SideBar() {
  return (
    <div className="w-60 border-r">
      <div className="p-2">
        <div className="flex items-center justify-between p-1">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium uppercase">
              Espace de travail
            </span>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
            <ChevronDown className="h-4 w-4 shrink-0" />
            <Folder className="h-4 w-4 shrink-0" />
            <span className="text-sm">Mihary portfolio</span>
          </div>
          <div className="ml-4">
            <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
              <FileIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm">.air.toml</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
              <FileIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm">.gitignore</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
              <FileIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm">CHANGELOG.md</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
              <FileIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm">docker-compose.yml</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
              <FileIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm">Dockerfile</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
              <FileIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm">go.mod</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
              <FileIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm">go.sum</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer">
              <FileIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm">Makefile</span>
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
