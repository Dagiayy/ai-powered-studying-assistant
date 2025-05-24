"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface StudyStreakLeetcodeProps {
  onClose: () => void
}

export function StudyStreakLeetcode({ onClose }: StudyStreakLeetcodeProps) {
  const [selectedYear, setSelectedYear] = useState(2024)

  // Generate calendar data for the year
  const generateCalendarData = () => {
    const data = []
    const startDate = new Date(selectedYear, 0, 1)
    const endDate = new Date(selectedYear, 11, 31)

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const intensity = Math.random() > 0.3 ? Math.floor(Math.random() * 4) + 1 : 0
      data.push({
        date: new Date(d),
        intensity,
        hours: intensity * 0.5 + Math.random() * 2,
      })
    }
    return data
  }

  const calendarData = generateCalendarData()
  const totalDays = calendarData.filter((day) => day.intensity > 0).length
  const currentStreak = 28
  const longestStreak = 45

  const getIntensityColor = (intensity: number) => {
    switch (intensity) {
      case 0:
        return "bg-gray-100"
      case 1:
        return "bg-green-200"
      case 2:
        return "bg-green-300"
      case 3:
        return "bg-green-400"
      case 4:
        return "bg-green-500"
      default:
        return "bg-gray-100"
    }
  }

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Study Activity - {selectedYear}</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-500">{currentStreak}</div>
              <p className="text-sm text-muted-foreground">Current Streak</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">{longestStreak}</div>
              <p className="text-sm text-muted-foreground">Longest Streak</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-500">{totalDays}</div>
              <p className="text-sm text-muted-foreground">Total Active Days</p>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-medium">Study Activity Calendar</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Less</span>
                <div className="flex gap-1">
                  <div className="h-3 w-3 rounded-sm bg-gray-100"></div>
                  <div className="h-3 w-3 rounded-sm bg-green-200"></div>
                  <div className="h-3 w-3 rounded-sm bg-green-300"></div>
                  <div className="h-3 w-3 rounded-sm bg-green-400"></div>
                  <div className="h-3 w-3 rounded-sm bg-green-500"></div>
                </div>
                <span className="text-sm text-muted-foreground">More</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Month labels */}
                <div className="mb-2 flex">
                  {months.map((month, index) => (
                    <div key={index} className="flex-1 text-center text-xs text-muted-foreground">
                      {month}
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-53 gap-1">
                  {calendarData.map((day, index) => (
                    <div
                      key={index}
                      className={`h-3 w-3 rounded-sm ${getIntensityColor(day.intensity)} cursor-pointer hover:ring-2 hover:ring-blue-300`}
                      title={`${day.date.toDateString()}: ${day.hours.toFixed(1)} hours`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="mb-4 font-medium">Weekly Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">This week</span>
                  <span className="font-medium">12.5 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Last week</span>
                  <span className="font-medium">15.2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Average per week</span>
                  <span className="font-medium">13.8 hours</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-medium">Study Goals</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Daily Goal (2 hours)</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Weekly Goal (15 hours)</span>
                    <span>83%</span>
                  </div>
                  <Progress value={83} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
