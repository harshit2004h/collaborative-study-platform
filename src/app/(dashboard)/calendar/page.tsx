"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, ChevronLeft, ChevronRight, Plus, Clock } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Weekly Team Standup",
      date: new Date(2025, 4, 15, 14, 0), // May 15, 2025, 2:00 PM
      duration: "30 minutes",
    },
    {
      id: 2,
      title: "Product Review",
      date: new Date(2025, 4, 15, 16, 0), // May 15, 2025, 4:00 PM
      duration: "1 hour",
    },
    {
      id: 3,
      title: "Client Presentation",
      date: new Date(2025, 4, 16, 10, 0), // May 16, 2025, 10:00 AM
      duration: "1 hour 30 minutes",
    },
    {
      id: 4,
      title: "Marketing Strategy",
      date: new Date(2025, 4, 16, 15, 0), // May 16, 2025, 3:00 PM
      duration: "1 hour",
    },
  ]

  // Filter events for the selected date
  const selectedDateEvents = events.filter(
    (event) =>
      date &&
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear(),
  )

  // Format time from Date object
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="text-muted-foreground">Manage your schedule and upcoming meetings</p>
      </div>

      <div className="flex justify-end">
        <Button asChild>
          <a href="/dashboard/meetings/schedule">
            <Plus className="mr-2 h-4 w-4" />
            Schedule Meeting
          </a>
        </Button>
      </div>

      <div className="grid lg:grid-cols-[350px_1fr] gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Select a date to view scheduled meetings</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center">
            <div className="flex-1">
              <CardTitle>
                {date
                  ? date.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "No date selected"}
              </CardTitle>
              <CardDescription>
                {selectedDateEvents.length} {selectedDateEvents.length === 1 ? "meeting" : "meetings"} scheduled
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  if (date) {
                    const newDate = new Date(date)
                    newDate.setDate(newDate.getDate() - 1)
                    setDate(newDate)
                  }
                }}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous day</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  if (date) {
                    const newDate = new Date(date)
                    newDate.setDate(newDate.getDate() + 1)
                    setDate(newDate)
                  }
                }}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next day</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="space-y-1">
                      <h3 className="font-medium">{event.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>
                          {formatTime(event.date)} • {event.duration}
                        </span>
                      </div>
                    </div>
                    <Button size="sm">Join</Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-40 text-center">
                <CalendarIcon className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="font-medium">No meetings scheduled</h3>
                <p className="text-sm text-muted-foreground mt-1">Schedule a meeting or select a different date</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

