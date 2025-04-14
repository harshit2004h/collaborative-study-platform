import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Download, Share2, MoreHorizontal, Clock, Calendar } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function RecordingsPage() {
  // Sample recordings data
  const recordings = [
    {
      id: 1,
      title: "Weekly Team Standup",
      date: "May 15, 2025",
      duration: "30 minutes",
      size: "120 MB",
    },
    {
      id: 2,
      title: "Product Review",
      date: "May 14, 2025",
      duration: "1 hour",
      size: "250 MB",
    },
    {
      id: 3,
      title: "Client Presentation",
      date: "May 10, 2025",
      duration: "1 hour 30 minutes",
      size: "350 MB",
    },
    {
      id: 4,
      title: "Marketing Strategy",
      date: "May 8, 2025",
      duration: "1 hour",
      size: "200 MB",
    },
    {
      id: 5,
      title: "Team Retrospective",
      date: "May 5, 2025",
      duration: "45 minutes",
      size: "180 MB",
    },
    {
      id: 6,
      title: "Quarterly Planning",
      date: "May 1, 2025",
      duration: "2 hours",
      size: "450 MB",
    },
  ]

  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Recordings</h1>
        <p className="text-muted-foreground">Access and manage your meeting recordings</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search recordings..." className="pl-8" />
        </div>
      </div>

      <div className="grid gap-4">
        {recordings.map((recording) => (
          <Card key={recording.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{recording.title}</CardTitle>
                  <CardDescription>Recorded on {recording.date}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Rename</DropdownMenuItem>
                      <DropdownMenuItem>Add to folder</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{recording.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{recording.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Size: {recording.size}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

