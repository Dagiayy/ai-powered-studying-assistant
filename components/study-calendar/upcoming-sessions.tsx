"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface UpcomingSessionsProps {
  theme: string
}

export function UpcomingSessions({ theme }: UpcomingSessionsProps) {
  const upcomingSessions = [
    {
      id: 1,
      subject: "Biology",
      topic: "Cell Division",
      date: "Today",
      time: "2:00 PM - 4:00 PM",
      type: "Study Session",
      priority: "high",
    },
    {
      id: 2,
      subject: "Mathematics",
      topic: "Calculus Review",
      date: "Tomorrow",
      time: "10:00 AM - 11:30 AM",
      type: "Practice Quiz",
      priority: "medium",
    },
    {
      id: 3,
      subject: "Chemistry",
      topic: "Organic Compounds",
      date: "Dec 28",
      time: "3:00 PM - 5:00 PM",
      type: "Lab Review",
      priority: "high",
    },
    {
      id: 4,
      subject: "Physics",
      topic: "Quantum Mechanics",
      date: "Dec 30",
      time: "1:00 PM - 3:00 PM",
      type: "Study Session",
      priority: "low",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-white/95 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingSessions.map((session) => (
            <div key={session.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold">{session.subject}</h3>
                  <p className="text-sm text-gray-600">{session.topic}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(session.priority)}`}>
                  {session.priority}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>
                  {session.date} • {session.time}
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{session.type}</span>
              </div>
              <div className="mt-3 flex gap-2">
                <Button size="sm" variant="outline">
                  Edit
                </Button>
                <Button size="sm" variant="outline">
                  Cancel
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full justify-start" variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            Schedule New Session
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
            Set Study Reminder
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
              <path d="M10 9H8" />
            </svg>
            Create Study Plan
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            View Progress
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
