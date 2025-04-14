"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Users, Calendar, PlayCircle } from "lucide-react";
import { AvatarGroup } from "@/components/avatar-group";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextMeeting, setNextMeeting] = useState("12:30 PM");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    <div className="w-full h-full bg-gray-900">
      <div className="w-full h-full p-4 md:p-6 overflow-y-auto">
        {/* Clock Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <Card className="w-full bg-gray-800/50 backdrop-blur-sm border-0 rounded-2xl overflow-hidden">
            <div className="p-6 md:p-8 text-center">
              <p className="text-gray-400 text-sm">
                Next Meeting: {nextMeeting}
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 tracking-tight">
                {currentTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </h1>
              <p className="mt-2 text-gray-300">
                {currentTime.toLocaleDateString([], {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
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

        {/* Meetings Section */}
        <div className="mt-6 w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">
              Upcoming Meetings
            </h2>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/meetings">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </div>
  );
}
