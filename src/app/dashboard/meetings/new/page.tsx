"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Video, Users, Settings, Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function NewMeetingPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [meetingId] = useState("324-531-3821")
  const [passcode] = useState("123456")

  const handleStartMeeting = () => {
    setIsLoading(true)
    // Simulate starting a meeting
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Meeting started",
        description: "Your meeting room is ready.",
      })
    }, 1500)
  }

  const copyInvitation = () => {
    const invitation = `Join my meeting\nMeeting ID: ${meetingId}\nPasscode: ${passcode}\nhttps://meethub.com/join/${meetingId}`
    navigator.clipboard.writeText(invitation)
    toast({
      title: "Copied to clipboard",
      description: "Meeting invitation has been copied.",
    })
  }

  return (
    <div className="container max-w-4xl p-8">
      <Card className="border-none bg-gradient-to-br from-gray-900 to-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Personal Meeting Room</CardTitle>
          <CardDescription className="text-gray-400">
            Start an instant meeting or customize your settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Meeting Info */}
          <div className="rounded-lg bg-black/20 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="meeting-id" className="text-gray-400">
                  Meeting ID
                </Label>
                <div className="flex items-center gap-2">
                  <Input id="meeting-id" value={meetingId} readOnly className="bg-black/20 border-0 text-white" />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      navigator.clipboard.writeText(meetingId)
                      toast({
                        title: "Copied",
                        description: "Meeting ID copied to clipboard",
                      })
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="passcode" className="text-gray-400">
                  Passcode
                </Label>
                <div className="flex items-center gap-2">
                  <Input id="passcode" value={passcode} readOnly className="bg-black/20 border-0 text-white" />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      navigator.clipboard.writeText(passcode)
                      toast({
                        title: "Copied",
                        description: "Passcode copied to clipboard",
                      })
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Settings */}
          <div className="space-y-4 rounded-lg bg-black/20 p-6">
            <h3 className="text-lg font-medium text-white">Quick Settings</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-white">Video</Label>
                  <p className="text-sm text-gray-400">Start with video on</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-white">Audio</Label>
                  <p className="text-sm text-gray-400">Join with audio</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Topic */}
          <div className="space-y-2">
            <Label htmlFor="topic" className="text-gray-400">
              Topic (optional)
            </Label>
            <Input
              id="topic"
              placeholder="Enter meeting topic"
              className="bg-black/20 border-0 text-white placeholder:text-gray-500"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-400">
              Description (optional)
            </Label>
            <Textarea
              id="description"
              placeholder="Add meeting description"
              className="bg-black/20 border-0 text-white placeholder:text-gray-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button className="flex-1 gap-2" size="lg" onClick={handleStartMeeting} disabled={isLoading}>
              <Video className="h-5 w-5" />
              {isLoading ? "Starting..." : "Start Meeting"}
            </Button>
            <Button variant="outline" className="flex-1 gap-2" size="lg" onClick={copyInvitation}>
              <Users className="h-5 w-5" />
              Copy Invitation
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

