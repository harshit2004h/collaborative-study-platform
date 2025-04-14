"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Search, Plus, Users, Clock, MapPin, Tag, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Company Conference",
      date: "June 15-16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Grand Hotel Conference Center",
      attendees: 120,
      type: "Conference",
      tags: ["Company-wide", "Annual"],
    },
    {
      id: 2,
      title: "Product Launch Webinar",
      date: "May 28, 2025",
      time: "2:00 PM - 3:30 PM",
      location: "Virtual",
      attendees: 350,
      type: "Webinar",
      tags: ["Marketing", "Product"],
    },
    {
      id: 3,
      title: "Team Building Workshop",
      date: "June 5, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "Adventure Park",
      attendees: 25,
      type: "Workshop",
      tags: ["Team Building", "HR"],
    },
    {
      id: 4,
      title: "Quarterly Business Review",
      date: "June 10, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Main Conference Room",
      attendees: 45,
      type: "Meeting",
      tags: ["Quarterly", "Business"],
    },
  ]

  const pastEvents = [
    {
      id: 101,
      title: "Customer Appreciation Day",
      date: "May 10, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Company Headquarters",
      attendees: 75,
      type: "Social",
      tags: ["Customer", "Appreciation"],
    },
    {
      id: 102,
      title: "Sales Training Workshop",
      date: "May 5, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Training Center",
      attendees: 30,
      type: "Workshop",
      tags: ["Sales", "Training"],
    },
    {
      id: 103,
      title: "Tech Talk: Future of AI",
      date: "April 28, 2025",
      time: "3:00 PM - 4:30 PM",
      location: "Virtual",
      attendees: 200,
      type: "Webinar",
      tags: ["Tech", "AI"],
    },
    {
      id: 104,
      title: "New Employee Orientation",
      date: "April 15, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Training Room B",
      attendees: 12,
      type: "Orientation",
      tags: ["HR", "Onboarding"],
    },
  ]

  // Filter events based on search query
  const filteredUpcomingEvents = upcomingEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const filteredPastEvents = pastEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Events</h1>
        <p className="text-muted-foreground">Manage and discover upcoming and past events</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search events..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button asChild>
            <Link href="/dashboard/events/create">
              <Plus className="mr-2 h-4 w-4" />
              Create Event
            </Link>
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-2">
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Event Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="conference">Conference</SelectItem>
              <SelectItem value="webinar">Webinar</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
              <SelectItem value="meeting">Meeting</SelectItem>
              <SelectItem value="social">Social</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="upcoming">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="next-month">Next Month</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          {filteredUpcomingEvents.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              {filteredUpcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription>{event.date}</CardDescription>
                      </div>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} Attendees</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Tag className="h-4 w-4 text-muted-foreground" />
                        <div className="flex flex-wrap gap-1">
                          {event.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Register</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-40 text-center">
              <Calendar className="h-10 w-10 text-muted-foreground mb-2" />
              <h3 className="font-medium">No events found</h3>
              <p className="text-sm text-muted-foreground mt-1">Try adjusting your search or filters</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="past" className="space-y-4">
          {filteredPastEvents.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              {filteredPastEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription>{event.date}</CardDescription>
                      </div>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} Attendees</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Tag className="h-4 w-4 text-muted-foreground" />
                        <div className="flex flex-wrap gap-1">
                          {event.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="secondary" size="sm">
                      View Recording
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-40 text-center">
              <Calendar className="h-10 w-10 text-muted-foreground mb-2" />
              <h3 className="font-medium">No past events found</h3>
              <p className="text-sm text-muted-foreground mt-1">Try adjusting your search or filters</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

