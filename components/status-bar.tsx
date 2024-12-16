import { CheckCheckIcon, GitBranch } from "lucide-react";

export function StatusBar() {
  return (
    <div className="h-6 border-t flex flex-wrap items-center px-2 text-xs text-muted-foreground justify-between bg-accent/30">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <span className=" border border-blue-400 rounded px-1 py-0.5 bg-blue-400 ">
              Mihary Joel
            </span>
          </span>
          <span className="flex items-center gap-1">
            <GitBranch className="h-4 w-4" />
            <span>prod</span>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <span className="hidden sm:inline">L 3, col 24</span>
        <span className="hidden sm:inline">Espaces : 2</span>
        <span>UTF-8</span>
        <span>LF</span>
        <span className="hidden sm:inline">TypeScript JSX</span>
        <span className="flex gap-1 hover:bg-accent/50 px-1 rounded-sm">
          <CheckCheckIcon className="w-4 h-4" />
          <span>Prettier</span>
        </span>
      </div>
    </div>
  );
}
