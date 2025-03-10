"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import {
  Video,
  Home,
  Calendar,
  Clock,
  Users,
  MessageSquare,
  BarChart,
  FileText,
  LogOut,
} from "lucide-react";

export default function SidebarComponent() {
  const pathname = usePathname();

  return (
    <Sidebar className="w-64 bg-gray-800 p-6 rounded-r-3xl shadow-lg">
      <SidebarHeader className="border-b border-gray-700 pb-4">
        <div className="flex items-center gap-2">
          <Video className="h-6 w-6 text-blue-400" />
          <span className="font-bold text-xl text-white">MeetHub</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {[
                { href: "/dashboard", icon: Home, label: "Dashboard" },
                { href: "/dashboard/meetings", icon: Video, label: "Meetings" },
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
  );
}
