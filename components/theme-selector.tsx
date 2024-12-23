"use client";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "@/lib/theme-provider";

const themes = [
  {
    name: "Zinc",
    value: "zinc",
  },
  {
    name: "Slate",
    value: "slate",
  },
  {
    name: "Stone",
    value: "stone",
  },
  {
    name: "Gray",
    value: "gray",
  },
  {
    name: "Neutral",
    value: "neutral",
  },
  {
    name: "Red",
    value: "red",
  },
  {
    name: "Rose",
    value: "rose",
  },
  {
    name: "Orange",
    value: "orange",
  },
  {
    name: "Green",
    value: "green",
  },
  {
    name: "Blue",
    value: "blue",
  },
  {
    name: "Yellow",
    value: "yellow",
  },
  {
    name: "Violet",
    value: "violet",
  },
] as const;

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme</CardTitle>
        <CardDescription>
          Select a theme for the dashboard. This will change the appearance of
          all elements.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4">
        {themes.map((t) => (
          <Button
            key={t.value}
            variant={theme === t.value ? "default" : "outline"}
            className="justify-start gap-2"
            onClick={() => setTheme(t.value)}
          >
            <div className={`h-4 w-4 rounded-full bg-primary`} />
            {t.name}
            {theme === t.value && <Check className="w-4 h-4 ml-auto" />}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
