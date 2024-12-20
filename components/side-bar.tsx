import { ChevronDown, FileIcon, Folder } from "lucide-react";
import Link from "next/link";

export const items = [
  {
    title: "Home.tsx",
    url: "/home",
    icon: FileIcon,
  },
  {
    title: "About.tsx",
    url: "/about",
    icon: FileIcon,
  },
  {
    title: "Project.tsx",
    url: "/project",
    icon: FileIcon,
  },
  {
    title: "Blog.tsx",
    url: "/blog",
    icon: FileIcon,
  },
  {
    title: "README.md",
    url: "/readme",
    icon: FileIcon,
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
          <div className="ml-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer"
              >
                <item.icon className="h-4 w-4 shrink-0" />
                <span className="text-sm">
                  <Link href={item.url}>{item.title}</Link>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
