"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { QuizInterface } from "@/components/notebook/quiz-interface"

interface PrepPilotProps {
  notebookId: string
}

export function PrepPilot({ notebookId }: PrepPilotProps) {
  const [selectedChapters, setSelectedChapters] = useState<string[]>([])
  const [questionCount, setQuestionCount] = useState(5)
  const [difficulty, setDifficulty] = useState("easy")
  const [isQuizActive, setIsQuizActive] = useState(false)

  const chapters = [
    { id: "chapter-1", title: "Chapter 1: Introduction" },
    { id: "chapter-2", title: "Chapter 2: Cell Structure" },
    { id: "chapter-3", title: "Chapter 3: Genetics" },
    { id: "chapter-4", title: "Chapter 4: Botany" },
  ]

  const toggleChapter = (chapterId: string) => {
    if (selectedChapters.includes(chapterId)) {
      setSelectedChapters(selectedChapters.filter((id) => id !== chapterId))
    } else {
      setSelectedChapters([...selectedChapters, chapterId])
    }
  }

  const startQuiz = () => {
    setIsQuizActive(true)
  }

  if (isQuizActive) {
    return <QuizInterface onExitQuiz={() => setIsQuizActive(false)} />
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
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          PrepPilot
        </h3>
      </div>

      <div className="rounded-lg border p-6">
        <h3 className="mb-6 flex items-center text-lg font-medium">
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
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
          Create a Practice Quiz
        </h3>

        <div className="mb-6">
          <h4 className="mb-2 flex items-center text-sm font-medium">
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
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <path d="M15 2v4" />
              <path d="M9 2v4" />
              <path d="M12 14v3" />
              <path d="M8 14h8" />
            </svg>
            Choose Section(s)
          </h4>
          <div className="space-y-2">
            {chapters.map((chapter) => (
              <div key={chapter.id} className="flex items-center space-x-2">
                <Checkbox
                  id={chapter.id}
                  checked={selectedChapters.includes(chapter.id)}
                  onCheckedChange={() => toggleChapter(chapter.id)}
                />
                <Label htmlFor={chapter.id}>{chapter.title}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="mb-2 flex items-center text-sm font-medium">
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
              <path d="M8 6h13" />
              <path d="M8 12h13" />
              <path d="M8 18h13" />
              <path d="M3 6h.01" />
              <path d="M3 12h.01" />
              <path d="M3 18h.01" />
            </svg>
            Number of Questions
          </h4>
          <div className="px-2">
            <Slider
              value={[questionCount]}
              min={1}
              max={20}
              step={1}
              onValueChange={(value) => setQuestionCount(value[0])}
              className="mb-2"
            />
            <div className="text-center font-medium">{questionCount}</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="mb-2 flex items-center text-sm font-medium">
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
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            Difficulty
          </h4>
          <RadioGroup value={difficulty} onValueChange={setDifficulty} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="easy" id="easy" />
              <Label htmlFor="easy">Easy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hard" id="hard" />
              <Label htmlFor="hard">Hard</Label>
            </div>
          </RadioGroup>
        </div>

        <Button onClick={startQuiz} className="w-full bg-blue-500 hover:bg-blue-600">
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Start Quiz
        </Button>
      </div>
    </div>
  )
}
