import { Navbar } from "./navbar";

export function MainContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-1 overflow-auto">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
