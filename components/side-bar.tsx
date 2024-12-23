import { ChevronDown, Folder } from "lucide-react";
import { SidebarNav } from "./sidebar-nav";

export const items = [
  {
    title: "Home.tsx",
    url: "/home",
    src: "./assets/react-2.svg",
  },
  {
    title: "About.css",
    url: "/about",
    src: "./assets/tailwindcss-icon.svg",
  },
  {
    title: "Project.sql",
    url: "/project",
    src: "./assets/postgresql.svg",
  },
  {
    title: "Contact.md",
    url: "/contact",
    src: "./assets/markdown.svg",
  },
];

export function SideBar() {
  return (
    <div className="w-0 sm:w-60 border-r transition-all hidden sm:block ">
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
          <SidebarNav />
        </div>
      </div>
    </div>
  );
}
