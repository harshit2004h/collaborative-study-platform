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
      <div className="flex h-screen w-full bg-gradient-to-br from-gray-900 to-gray-950 text-white overflow-hidden">
        {/* Sidebar */}
        <SidebarComponent />

        {/* Main Content */}
        <div className="flex-1 flex flex-col w-full overflow-hidden transition-all duration-300 ease-in-out relative">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>

          <HeaderComponent />

          <main className="flex-1 w-full overflow-auto relative">
            <div className="w-full h-full">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
