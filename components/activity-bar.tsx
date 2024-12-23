import { Files, Search, GitBranch, Box, Settings, User } from "lucide-react";
import Link from "next/link";

export function ActivityBar() {
  return (
    <div className="w-12 border-r flex flex-col justify-between py-2">
      <div className="flex flex-col items-center gap-2">
        <button className="p-2 hover:bg-accent rounded-md text-accent-foreground/60 hover:text-accent-foreground">
          <Files className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-accent rounded-md text-accent-foreground/60 hover:text-accent-foreground">
          <Search className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-accent rounded-md text-accent-foreground/60 hover:text-accent-foreground">
          <GitBranch className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-accent rounded-md text-accent-foreground/60 hover:text-accent-foreground">
          <Box className="h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <button className="p-2 hover:bg-accent rounded-md text-accent-foreground/60 hover:text-accent-foreground">
          <User className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-accent rounded-md text-accent-foreground/60 hover:text-accent-foreground">
          <Link href="/setting">
            <Settings className="h-5 w-5" />
          </Link>
        </button>
      </div>
    </div>
  );
}
