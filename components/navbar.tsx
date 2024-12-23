"use client";
import Image from "next/image";
import React from "react";
import { items } from "./side-bar";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex h-9 items-center border-b px-4 gap-2 sticky top-0 bg-background z-10 overflow-x-auto flex-nowrap">
      {items.map((item) => {
        // Vérifier si l’URL courante correspond à l'URL de l’item
        const isActive = pathname === item.url;

        return (
          <div
            key={item.title}
            // Exemple : on modifie la couleur de fond et du texte si actif
            className={`flex items-center gap-2 pr-10 border-r border-gray-300 ${
              isActive ? "bg-accent" : ""
            }`}
          >
            <Image
              src={item.src}
              width={20}
              height={20}
              className="shrink-0"
              alt="logoreact"
            />
            <Link href={item.url} className="text-sm">
              {item.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
