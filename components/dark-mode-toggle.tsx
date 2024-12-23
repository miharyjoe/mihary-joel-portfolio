"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggleIcon } from "./mode-toggle-icon";
import { useTheme } from "@/lib/theme-provider";

export function DarkModeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dark Mode</CardTitle>
        <CardDescription>
          Toggle between light and dark mode. Your preference will be saved
          automatically.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          size="icon"
          className="w-full h-16 relative overflow-hidden"
          onClick={() => setIsDark(!isDark)}
        >
          <ModeToggleIcon />
          <span className="sr-only">Toggle dark mode</span>
        </Button>
      </CardContent>
    </Card>
  );
}
