import Link from "next/link";
import { items } from "./side-bar";

export function MainContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-1 overflow-auto">
      <div className="flex h-9 items-center border-b px-4 gap-2">
        {items.map((item) => (
          <div
            className="flex items-center gap-2 border-r pr-2"
            key={item.title}
          >
            <Link href={item.url} className="text-sm">
              {item.title}
            </Link>
            <button className="p-0.5 hover:bg-accent rounded-sm">
              &times;
            </button>
          </div>
        ))}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
