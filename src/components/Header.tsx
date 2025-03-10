"use client";

import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Bell } from "lucide-react";

export default function HeaderComponent() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-700 bg-gray-900 px-6">
      <SidebarTrigger />
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 text-gray-300" />
        </Button>
        <ModeToggle />
        <Button variant="outline" size="sm" asChild>
          <Link href="/profile">John Doe</Link>
        </Button>
      </div>
    </header>
  );
}
