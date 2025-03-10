"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Users, Calendar, PlayCircle } from "lucide-react";
import { AvatarGroup } from "@/components/avatar-group";
import { motion } from "framer-motion";
import { useSidebar } from "@/components/ui/sidebar"; // Import sidebar state

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextMeeting, setNextMeeting] = useState("12:30 PM");
  const { isOpen } = useSidebar(); // Check if sidebar is open

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Sample upcoming meetings
  const upcomingMeetings = [
    {
      id: 1,
      title: "Team Sync: Sprint Planning & Updates",
      time: "10:00 AM",
      participants: [
        "/avatars/01.png",
        "/avatars/02.png",
        "/avatars/03.png",
        "/avatars/04.png",
      ],
      participantsCount: 9,
    },
    {
      id: 2,
      title: "Project Pulse Check: Weekly Standup",
      time: "2:00 PM",
      participants: ["/avatars/05.png", "/avatars/06.png", "/avatars/07.png"],
      participantsCount: 9,
    },
  ];

  const featureCards = [
    {
      title: "New Meeting",
      description: "Setup a new recording",
      icon: Plus,
      bgColor: "bg-orange-500",
      href: "/dashboard/meetings/new",
    },
    {
      title: "Join Meeting",
      description: "Via invitation link",
      icon: Users,
      bgColor: "bg-blue-500",
      href: "/dashboard/meetings/join",
    },
    {
      title: "Schedule Meeting",
      description: "Plan your meeting",
      icon: Calendar,
      bgColor: "bg-purple-500",
      href: "/dashboard/meetings/schedule",
    },
    {
      title: "View Recordings",
      description: "Meeting recordings",
      icon: PlayCircle,
      bgColor: "bg-yellow-500",
      href: "/dashboard/recordings",
    },
  ];

  return (
    <div
      className={`bg-gray-900 text-white px-8 py-6 flex flex-col items-center transition-all duration-300 ${
        isOpen ? "w-[calc(100vw-320px)]" : "w-full"
      }`}
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gray-800 p-8 text-center w-full max-w-5xl">
        <p className="text-sm text-gray-400">
          Upcoming Meeting at: {nextMeeting}
        </p>
        <h1 className="mt-2 text-6xl font-bold text-white">
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          {currentTime.toLocaleDateString([], {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl">
        {featureCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={card.href}>
              <Card
                className={`${card.bgColor} p-6 text-white rounded-3xl transition-all hover:scale-105 shadow-lg`}
              >
                <card.icon className="h-8 w-8" />
                <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm opacity-80">{card.description}</p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Meetings */}
      <div className="mt-6 space-y-4 w-full max-w-5xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Today's Upcoming Meetings</h2>
          <Button variant="outline" size="sm" asChild>
            <Link href="#">See all</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {upcomingMeetings.map((meeting) => (
            <Card
              key={meeting.id}
              className="p-6 bg-gray-800 rounded-3xl shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-white">{meeting.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    March 15, 2024 - {meeting.time}
                  </p>
                </div>
                <Button className="rounded-full">Start</Button>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <AvatarGroup
                  avatars={meeting.participants}
                  count={meeting.participantsCount}
                />
                <Button variant="outline" size="sm" className="rounded-full">
                  Copy Invitation
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
