import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { ThemePreview } from "@/components/theme-preview";
import { ThemeSelector } from "@/components/theme-selector";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="space-y-6 p-6 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your theme preferences and customize your experience.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/4">
          <h3 className="font-semibold">Appearance</h3>
          <p className="text-sm text-muted-foreground">
            Customize the appearance of the app. Automatically switch between
            themes and toggle dark mode.
          </p>
        </aside>
        <div className="flex-1 space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <DarkModeToggle />
            <ThemeSelector />
          </div>
        </div>
      </div>
    </div>
  );
}
