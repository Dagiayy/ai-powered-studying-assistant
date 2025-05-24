"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface PastSessionsProps {
  theme: string
}

export function PastSessions({ theme }: PastSessionsProps) {
  const pastSessions = [
    {
      id: 1,
      subject: "Biology",
      topic: "Photosynthesis",
      date: "Dec 24, 2024",
      duration: "2h 15m",
      completed: true,
      score: 92,
      type: "Study + Quiz",
    },
    {
      id: 2,
      subject: "Mathematics",
      topic: "Integration",
      date: "Dec 23, 2024",
      duration: "1h 45m",
      completed: true,
      score: 88,
      type: "Practice",
    },
    {
      id: 3,
      subject: "Chemistry",
      topic: "Atomic Structure",
      date: "Dec 22, 2024",
      duration: "3h 00m",
      completed: false,
      score: 0,
      type: "Lab Session",
    },
    {
      id: 4,
      subject: "Physics",
      topic: "Thermodynamics",
      date: "Dec 21, 2024",
      duration: "2h 30m",
      completed: true,
      score: 95,
      type: "Review",
    },
    {
      id: 5,
      subject: "Spanish",
      topic: "Verb Conjugations",
      date: "Dec 20, 2024",
      duration: "1h 20m",
      completed: true,
      score: 78,
      type: "Vocabulary",
    },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-blue-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const totalHours = pastSessions.reduce((acc, session) => {
    const [hours, minutes] = session.duration.split("h ")
    return acc + Number.parseInt(hours) + Number.parseInt(minutes.replace("m", "")) / 60
  }, 0)

  const completedSessions = pastSessions.filter((s) => s.completed).length
  const averageScore =
    pastSessions.filter((s) => s.completed && s.score > 0).reduce((acc, s) => acc + s.score, 0) /
    pastSessions.filter((s) => s.completed && s.score > 0).length

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white/95 backdrop-blur-sm border-white/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{totalHours.toFixed(1)}h</div>
            <p className="text-sm text-gray-600">Total Study Time</p>
          </CardContent>
        </Card>
        <Card className="bg-white/95 backdrop-blur-sm border-white/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{completedSessions}</div>
            <p className="text-sm text-gray-600">Sessions Completed</p>
          </CardContent>
        </Card>
        <Card className="bg-white/95 backdrop-blur-sm border-white/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{averageScore.toFixed(0)}%</div>
            <p className="text-sm text-gray-600">Average Score</p>
          </CardContent>
        </Card>
        <Card className="bg-white/95 backdrop-blur-sm border-white/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{pastSessions.length}</div>
            <p className="text-sm text-gray-600">Total Sessions</p>
          </CardContent>
        </Card>
      </div>

      {/* Sessions List */}
      <Card className="bg-white/95 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle>Recent Study Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pastSessions.map((session) => (
              <div key={session.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">{session.subject}</h3>
                    <p className="text-sm text-gray-600">{session.topic}</p>
                  </div>
                  <div className="text-right">
                    {session.completed ? (
                      session.score > 0 ? (
                        <span className={`text-lg font-bold ${getScoreColor(session.score)}`}>{session.score}%</span>
                      ) : (
                        <span className="text-green-600 font-medium">✓ Completed</span>
                      )
                    ) : (
                      <span className="text-red-600 font-medium">Incomplete</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>
                    {session.date} • {session.duration}
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">{session.type}</span>
                </div>
                {session.completed && session.score > 0 && <Progress value={session.score} className="h-2" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
