"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface StudyAnalyticsProps {
  theme: string
}

export function StudyAnalytics({ theme }: StudyAnalyticsProps) {
  const weeklyData = [
    { day: "Mon", hours: 2.5, target: 3 },
    { day: "Tue", hours: 3.2, target: 3 },
    { day: "Wed", hours: 1.8, target: 3 },
    { day: "Thu", hours: 2.9, target: 3 },
    { day: "Fri", hours: 3.5, target: 3 },
    { day: "Sat", hours: 1.2, target: 2 },
    { day: "Sun", hours: 2.1, target: 2 },
  ]

  const subjectProgress = [
    { subject: "Biology", progress: 85, hours: 24.5, color: "bg-green-500" },
    { subject: "Mathematics", progress: 72, hours: 18.2, color: "bg-blue-500" },
    { subject: "Chemistry", progress: 91, hours: 28.7, color: "bg-orange-500" },
    { subject: "Physics", progress: 68, hours: 15.3, color: "bg-purple-500" },
    { subject: "Spanish", progress: 79, hours: 12.8, color: "bg-pink-500" },
  ]

  const totalHours = weeklyData.reduce((acc, day) => acc + day.hours, 0)
  const targetHours = weeklyData.reduce((acc, day) => acc + day.target, 0)

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white/95 backdrop-blur-sm border-white/20">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{totalHours.toFixed(1)}h</div>
            <p className="text-sm text-gray-600">This Week</p>
            <Progress value={(totalHours / targetHours) * 100} className="mt-2" />
            <p className="text-xs text-gray-500 mt-1">{((totalHours / targetHours) * 100).toFixed(0)}% of target</p>
          </CardContent>
        </Card>
        <Card className="bg-white/95 backdrop-blur-sm border-white/20">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600">28</div>
            <p className="text-sm text-gray-600">Study Streak</p>
            <div className="mt-2 text-xs text-gray-500">Days in a row</div>
          </CardContent>
        </Card>
        <Card className="bg-white/95 backdrop-blur-sm border-white/20">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">87%</div>
            <p className="text-sm text-gray-600">Avg Performance</p>
            <div className="mt-2 text-xs text-gray-500">Across all subjects</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Hours Chart */}
        <Card className="bg-white/95 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle>Weekly Study Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 text-sm font-medium">{day.day}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{day.hours}h</span>
                      <span className="text-xs text-gray-500">Target: {day.target}h</span>
                    </div>
                    <div className="relative">
                      <Progress value={(day.hours / day.target) * 100} className="h-3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subject Progress */}
        <Card className="bg-white/95 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle>Subject Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjectProgress.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${subject.color}`} />
                      <span className="font-medium">{subject.subject}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{subject.progress}%</div>
                      <div className="text-xs text-gray-500">{subject.hours}h total</div>
                    </div>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Study Patterns */}
      <Card className="bg-white/95 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle>Study Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-900">Most Productive Time</h3>
              <p className="text-2xl font-bold text-blue-600">2:00 PM - 4:00 PM</p>
              <p className="text-sm text-blue-700">Average focus: 92%</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-medium text-green-900">Strongest Subject</h3>
              <p className="text-2xl font-bold text-green-600">Chemistry</p>
              <p className="text-sm text-green-700">91% completion rate</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-medium text-orange-900">Improvement Area</h3>
              <p className="text-2xl font-bold text-orange-600">Physics</p>
              <p className="text-sm text-orange-700">Needs 2h more/week</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
