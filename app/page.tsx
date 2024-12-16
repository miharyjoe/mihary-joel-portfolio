import { ActivityBar } from "@/components/activity-bar";
import { MainContent } from "@/components/main-content";
import { SideBar } from "@/components/side-bar";
import { StatusBar } from "@/components/status-bar";
import { TopBar } from "@/components/top-bar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      <TopBar />
      <div className="flex-1 flex overflow-hidden">
        <ActivityBar />
        <SideBar />
        <MainContent />
      </div>
      <StatusBar />
    </div>
  );
}
