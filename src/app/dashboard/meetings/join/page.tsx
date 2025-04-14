"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, ArrowRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function JoinMeetingPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [meetingId, setMeetingId] = useState("")
  const [passcode, setPasscode] = useState("")

  const handleJoinMeeting = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate joining a meeting
    setTimeout(() => {
      setIsLoading(false)
      if (meetingId && passcode) {
        toast({
          title: "Joining meeting",
          description: "Connecting to the meeting room...",
        })
      } else {
        toast({
          title: "Error",
          description: "Please enter meeting ID and passcode",
          variant: "destructive",
        })
      }
    }, 1500)
  }

  return (
    <div className="container max-w-md p-8">
      <Card className="border-none bg-gradient-to-br from-gray-900 to-gray-800">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-white">Join Meeting</CardTitle>
          <CardDescription className="text-gray-400">Enter a meeting ID and passcode to join</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleJoinMeeting} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meeting-id" className="text-gray-400">
                  Meeting ID
                </Label>
                <Input
                  id="meeting-id"
                  placeholder="Enter meeting ID"
                  value={meetingId}
                  onChange={(e) => setMeetingId(e.target.value)}
                  className="bg-black/20 border-0 text-white placeholder:text-gray-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="passcode" className="text-gray-400">
                  Passcode
                </Label>
                <Input
                  id="passcode"
                  type="password"
                  placeholder="Enter passcode"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="bg-black/20 border-0 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Button type="submit" className="w-full gap-2" size="lg" disabled={isLoading}>
                <Video className="h-5 w-5" />
                {isLoading ? "Joining..." : "Join Meeting"}
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-gradient-to-br from-gray-900 to-gray-800 px-2 text-gray-400">
                    Or join via link
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="invite-link" className="text-gray-400">
                  Invitation Link
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="invite-link"
                    placeholder="Paste invitation link"
                    className="bg-black/20 border-0 text-white placeholder:text-gray-500"
                  />
                  <Button type="button" size="icon" className="h-10 w-10">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

