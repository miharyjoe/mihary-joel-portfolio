import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function TopBar() {
  return (
    <div className="h-12 border-b flex items-center px-4 justify-between">
      <div className="flex items-center gap-2">
        <button className="p-1.5 hover:bg-accent rounded-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 3L4.5 8L9.5 13"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
        <button className="p-1.5 hover:bg-accent rounded-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 3L11.5 8L6.5 13"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-8"
            type="search"
            placeholder="Mihary Joël - Portfolio"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-1.5 hover:bg-accent rounded-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="12"
              height="12"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
        <button className="p-1.5 hover:bg-accent rounded-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 2H7V7H2V2Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 2H14V7H9V2Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 9H7V14H2V9Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 9H14V14H9V9Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
