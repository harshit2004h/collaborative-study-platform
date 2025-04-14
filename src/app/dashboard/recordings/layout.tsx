"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Video,
  Home,
  Calendar,
  Clock,
  Users,
  Settings,
  LogOut,
  Bell,
  MessageSquare,
  BarChart,
  FileText,
  HelpCircle,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
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
        <Sidebar className="w-64 bg-gray-800 p-6 rounded-r-3xl shadow-lg">
          <SidebarHeader className="border-b border-gray-700 pb-4">
            <div className="flex items-center gap-2">
              <Video className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-xl text-white">MeetHub</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-gray-400">
                Main
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {[
                    { href: "/dashboard", icon: Home, label: "Dashboard" },
                    {
                      href: "/dashboard/meetings",
                      icon: Video,
                      label: "Meetings",
                    },
                    {
                      href: "/dashboard/calendar",
                      icon: Calendar,
                      label: "Calendar",
                    },
                    {
                      href: "/dashboard/recordings",
                      icon: Clock,
                      label: "Recordings",
                    },
                  ].map(({ href, icon: Icon, label }) => (
                    <SidebarMenuItem key={label}>
                      <SidebarMenuButton asChild isActive={pathname === href}>
                        <Link
                          href={href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-700 transition"
                        >
                          <Icon className="h-5 w-5 text-blue-300" />
                          <span>{label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-gray-400">
                Collaboration
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {[
                    { href: "/dashboard/teams", icon: Users, label: "Teams" },
                    {
                      href: "/dashboard/messages",
                      icon: MessageSquare,
                      label: "Messages",
                    },
                  ].map(({ href, icon: Icon, label }) => (
                    <SidebarMenuItem key={label}>
                      <SidebarMenuButton asChild isActive={pathname === href}>
                        <Link
                          href={href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-700 transition"
                        >
                          <Icon className="h-5 w-5 text-blue-300" />
                          <span>{label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-gray-400">
                Analytics
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {[
                    {
                      href: "/dashboard/reports",
                      icon: BarChart,
                      label: "Reports",
                    },
                    {
                      href: "/dashboard/documents",
                      icon: FileText,
                      label: "Documents",
                    },
                  ].map(({ href, icon: Icon, label }) => (
                    <SidebarMenuItem key={label}>
                      <SidebarMenuButton asChild isActive={pathname === href}>
                        <Link
                          href={href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-700 transition"
                        >
                          <Icon className="h-5 w-5 text-blue-300" />
                          <span>{label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-700 pt-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-700 transition"
                  >
                    <LogOut className="h-5 w-5 text-blue-300" />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
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
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
