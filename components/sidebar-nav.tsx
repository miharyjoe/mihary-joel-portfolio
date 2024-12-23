"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { items } from "./side-bar";
import { usePathname } from "next/navigation";

export const SidebarNav = () => {
  const pathname = usePathname();
  return (
    <div className="ml-4">
      {items.map((item) => {
        const isActive = pathname === item.url;
        return (
          <div
            key={item.title}
            className={`flex items-center gap-1 px-2 py-1 hover:bg-accent rounded-sm cursor-pointer
             ${isActive ? "bg-accent" : ""}`}
          >
            {/* <item.icon className="h-4 w-4 shrink-0" /> */}
            <Image
              src={item.src}
              width={20}
              height={20}
              className="shrink-0"
              alt="logoreact"
            />
            <span className="text-sm">
              <Link href={item.url}>{item.title}</Link>
            </span>
          </div>
        );
      })}
    </div>
  );
};
