"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { StudyStreakDetail } from "@/components/edu-tuner/study-streak-detail"
import { PointsEarnedDetail } from "@/components/edu-tuner/points-earned-detail"
import { QuizPerformanceDetail } from "@/components/edu-tuner/quiz-performance-detail"
import { StudyStreakLeetcode } from "@/components/edu-tuner/study-streak-leetcode"

interface EduTunerProps {
  notebookId: string
}

export function EduTuner({ notebookId }: EduTunerProps) {
  const [studyStreak, setStudyStreak] = useState(28)
  const [pointsEarned, setPointsEarned] = useState(2560)
  const [quizPerformance, setQuizPerformance] = useState(85)
  const [areasForImprovement, setAreasForImprovement] = useState([
    { topic: "Cell Respiration", level: "Low" },
    { topic: "Enzyme Kinetics", level: "Below Avg" },
  ])

  const [activePopup, setActivePopup] = useState<string | null>(null)

  const openPopup = (popupType: string) => {
    setActivePopup(popupType)
  }

  const closePopup = () => {
    setActivePopup(null)
  }

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex items-center">
        <h3 className="flex items-center text-lg font-medium">
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
            className="mr-2 text-blue-500"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
          EduTuner
        </h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => openPopup("study-streak-leetcode")}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h4 className="flex items-center text-sm font-medium">
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
                  className="mr-2 text-orange-500"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
                Study Streak
              </h4>
              <span className="text-sm text-muted-foreground">{studyStreak} days</span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Progress value={70} className="h-2" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Consistent for 4 weeks</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => openPopup("points-earned")}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h4 className="flex items-center text-sm font-medium">
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
                  className="mr-2 text-yellow-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Points Earned
              </h4>
              <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 inline"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                Top 10%
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-blue-500">{pointsEarned.toLocaleString()}</h3>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Keep earning for badges!</p>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => openPopup("quiz-performance")}
        >
          <CardContent className="p-6">
            <h4 className="flex items-center text-sm font-medium">
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
                className="mr-2 text-blue-500"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              Quiz Performance
            </h4>
            <div className="mt-4 flex items-center justify-between">
              <div className="h-[100px] w-full">
                {/* Placeholder for chart */}
                <div className="flex h-full w-full items-end justify-between gap-1">
                  <div className="h-[60%] w-8 rounded-t bg-blue-200"></div>
                  <div className="h-[40%] w-8 rounded-t bg-blue-200"></div>
                  <div className="h-[70%] w-8 rounded-t bg-blue-200"></div>
                  <div className="h-[50%] w-8 rounded-t bg-blue-200"></div>
                  <div className="h-[85%] w-8 rounded-t bg-blue-500"></div>
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 inline"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                +5% this week
              </span>
              <span className="text-xs text-muted-foreground">Last 8 quizzes</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h4 className="flex items-center text-sm font-medium">
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
                className="mr-2 text-purple-500"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" x2="22" y1="12" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Interest Zones
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-800">Genetics</span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800">Botany</span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-800">Zoology</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h4 className="flex items-center text-sm font-medium">
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
                className="mr-2 text-red-500"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <line x1="12" x2="12" y1="9" y2="13" />
                <line x1="12" x2="12.01" y1="17" y2="17" />
              </svg>
              Areas for Improvement
            </h4>
            <div className="mt-4 space-y-2">
              {areasForImprovement.map((area, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                    {area.topic}
                  </div>
                  <span className={`text-xs ${area.level === "Low" ? "text-red-500" : "text-orange-500"}`}>
                    {area.level}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-gray-50 p-2 text-xs">
              <p className="font-medium text-gray-700">Recommendation:</p>
              <p className="text-gray-600">
                Review notes & practice quizzes for weak topics. Try revisiting Chapter 3 and Chapter 5.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h4 className="flex items-center text-sm font-medium">
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
                className="mr-2 text-green-500"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Strong Suits & Badges
            </h4>
            <div className="mt-4 flex justify-around">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className="mt-2 text-xs font-medium">Quiz Ace</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <span className="mt-2 text-xs font-medium">Study Streak</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-500"
                  >
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="mt-2 text-xs font-medium">Fast Learner</span>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Earn more badges by scoring above 85% in quizzes & maintaining streaks!
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <Button variant="outline">
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Export Report
        </Button>
        <Button variant="outline" className="bg-purple-500 text-white hover:bg-purple-600">
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
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
          Share
        </Button>
      </div>

      {/* Popup Components */}
      {activePopup === "study-streak" && <StudyStreakDetail onClose={closePopup} />}
      {activePopup === "study-streak-leetcode" && <StudyStreakLeetcode onClose={closePopup} />}
      {activePopup === "points-earned" && <PointsEarnedDetail onClose={closePopup} />}
      {activePopup === "quiz-performance" && <QuizPerformanceDetail onClose={closePopup} />}
    </div>
  )
}
