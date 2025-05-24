"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarView } from "@/components/study-calendar/calendar-view"
import { UpcomingSessions } from "@/components/study-calendar/upcoming-sessions"
import { PastSessions } from "@/components/study-calendar/past-sessions"
import { StudyAnalytics } from "@/components/study-calendar/study-analytics"
import { ColorThemeSelector } from "@/components/study-calendar/color-theme-selector"

export function StudyCalendar() {
  const [selectedTheme, setSelectedTheme] = useState("blue")

  const themeClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    pink: "from-pink-500 to-pink-600",
    teal: "from-teal-500 to-teal-600",
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeClasses[selectedTheme as keyof typeof themeClasses]} p-6`}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Study Calendar</h1>
            <p className="text-white/80">Plan your learning journey and track your progress</p>
          </div>
          <div className="flex items-center gap-4">
            <ColorThemeSelector selectedTheme={selectedTheme} onThemeChange={setSelectedTheme} />
            <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-white/30">
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
              New Session
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="calendar" className="space-y-6">
          <TabsList className="bg-white/20 border-white/30">
            <TabsTrigger value="calendar" className="data-[state=active]:bg-white data-[state=active]:text-gray-900">
              Calendar
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-white data-[state=active]:text-gray-900">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="past" className="data-[state=active]:bg-white data-[state=active]:text-gray-900">
              Past Sessions
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-white data-[state=active]:text-gray-900">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calendar">
            <CalendarView theme={selectedTheme} />
          </TabsContent>

          <TabsContent value="upcoming">
            <UpcomingSessions theme={selectedTheme} />
          </TabsContent>

          <TabsContent value="past">
            <PastSessions theme={selectedTheme} />
          </TabsContent>

          <TabsContent value="analytics">
            <StudyAnalytics theme={selectedTheme} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
