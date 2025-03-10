"use client";

import { useState, useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarComponent from "@/components/Sidebar";
import HeaderComponent from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-900 text-white">
        {/* Sidebar */}
        <SidebarComponent />

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          <HeaderComponent />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
