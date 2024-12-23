import { Files, Search, GitBranch, Box, Settings, User } from "lucide-react";
import Link from "next/link";

export function ActivityBar() {
  return (
    <div className="w-12 border-r flex flex-col justify-between py-2">
      <div className="flex flex-col items-center gap-2">
        <button className="p-2 hover:bg-accent rounded-md text-accent-foreground/60 hover:text-accent-foreground">
          <Link href="/home">
            <Files className="h-5 w-5" />
          </Link>
        </button>
        <button className="p-2 hover:bg-accent rounded-md text-accent-foreground/60 hover:text-accent-foreground">
          <Link href="/project">
            <Search className="h-5 w-5" />
          </Link>
        </button>
        <button className="p-2 hover:bg-accent rounded-md text-accent-foreground/60 hover:text-accent-foreground">
          <Link href="http://github.com/miharyjoe" target="_blank">
            <GitBranch className="h-5 w-5" />
          </Link>
        </button>
        <button className="p-2 hover:bg-accent rounded-md text-accent-foreground/60 hover:text-accent-foreground">
          <Link href="/contact">
            <Box className="h-5 w-5" />
          </Link>
        </button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <button className="p-2 hover:bg-accent rounded-md text-accent-foreground/60 hover:text-accent-foreground">
          <Link href="/about">
            <User className="h-5 w-5" />
          </Link>
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
