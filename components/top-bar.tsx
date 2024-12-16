import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function TopBar() {
  return (
    <div className="flex flex-col border-b">
      <div className="flex items-center h-8 px-4">
        <div className="flex items-center gap-2">
          <Image src="/vscode.svg" alt="VSCode Logo" width={20} height={20} />
          <button className="hover:bg-accent px-2 py-1 rounded-sm text-sm">
            Fichier
          </button>
          <button className="hover:bg-accent px-2 py-1 rounded-sm text-sm">
            Edition
          </button>
          <button className="hover:bg-accent px-2 py-1 rounded-sm text-sm">
            Sélection
          </button>
          <button className="hover:bg-accent px-2 py-1 rounded-sm text-sm">
            Affichage
          </button>
        </div>

        {/* Middle Section */}
        <div className="flex-1 flex items-center px-4 gap-2">
          <div className="flex-1 max-w-xl relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="h-6 pl-8"
              type="search"
              placeholder="Mihary Joël - Portfolio"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <button
              aria-label="Maximize"
              className="w-3.5 h-3.5 bg-green-500 rounded-full hover:bg-green-600"
            ></button>
            <button
              aria-label="Minimize"
              className="w-3.5 h-3.5 bg-yellow-500 rounded-full hover:bg-yellow-600"
            ></button>
            <button
              aria-label="Close"
              className="w-3.5 h-3.5 bg-red-500 rounded-full hover:bg-red-600"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
