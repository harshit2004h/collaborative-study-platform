import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Video, Calendar, Users, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function MeetingsPage() {
  // Sample meetings data
  const upcomingMeetings = [
    {
      id: 1,
      title: "Weekly Team Standup",
      time: "Today, 2:00 PM - 2:30 PM",
      participants: 8,
      host: "John Doe",
    },
    {
      id: 2,
      title: "Product Review",
      time: "Today, 4:00 PM - 5:00 PM",
      participants: 12,
      host: "Jane Smith",
    },
    {
      id: 3,
      title: "Client Presentation",
      time: "Tomorrow, 10:00 AM - 11:30 AM",
      participants: 5,
      host: "John Doe",
    },
    {
      id: 4,
      title: "Marketing Strategy",
      time: "Tomorrow, 3:00 PM - 4:00 PM",
      participants: 6,
      host: "Alex Johnson",
    },
  ]

  const pastMeetings = [
    {
      id: 101,
      title: "Project Kickoff",
      time: "Yesterday, 1:00 PM - 2:00 PM",
      participants: 10,
      host: "John Doe",
    },
    {
      id: 102,
      title: "Design Review",
      time: "Yesterday, 3:30 PM - 4:30 PM",
      participants: 7,
      host: "Sarah Williams",
    },
    {
      id: 103,
      title: "Team Retrospective",
      time: "Monday, 11:00 AM - 12:00 PM",
      participants: 9,
      host: "John Doe",
    },
    {
      id: 104,
      title: "Quarterly Planning",
      time: "Last Friday, 2:00 PM - 4:00 PM",
      participants: 15,
      host: "Michael Brown",
    },
  ]

  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Meetings</h1>
        <p className="text-muted-foreground">Manage your scheduled and past meetings</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search meetings..." className="pl-8" />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button asChild>
            <Link href="/dashboard/meetings/new">
              <Plus className="mr-2 h-4 w-4" />
              New Meeting
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard/meetings/schedule">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          {upcomingMeetings.map((meeting) => (
            <Card key={meeting.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{meeting.title}</CardTitle>
                    <CardDescription>{meeting.time}</CardDescription>
                  </div>
                  <Button>Join</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{meeting.participants} Participants</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Video className="h-4 w-4" />
                    <span>Host: {meeting.host}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="past" className="space-y-4">
          {pastMeetings.map((meeting) => (
            <Card key={meeting.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{meeting.title}</CardTitle>
                    <CardDescription>{meeting.time}</CardDescription>
                  </div>
                  <Button variant="outline">View Recording</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{meeting.participants} Participants</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Video className="h-4 w-4" />
                    <span>Host: {meeting.host}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

