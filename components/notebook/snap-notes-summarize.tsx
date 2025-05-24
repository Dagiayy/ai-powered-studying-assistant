"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface SnapNotesSummarizeProps {
  notebookId: string
  hasUploadedFiles: boolean
}

export function SnapNotesSummarize({ notebookId, hasUploadedFiles }: SnapNotesSummarizeProps) {
  const [expandedChapters, setExpandedChapters] = useState<string[]>(["chapter-1"])

  const toggleChapter = (chapterId: string) => {
    if (expandedChapters.includes(chapterId)) {
      setExpandedChapters(expandedChapters.filter((id) => id !== chapterId))
    } else {
      setExpandedChapters([...expandedChapters, chapterId])
    }
  }

  if (!hasUploadedFiles) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
        <div className="mb-4 rounded-full bg-gray-100 p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
            <path d="M10 9H8" />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-medium">No files uploaded yet</h3>
        <p className="text-muted-foreground">Upload your study materials first to generate summaries</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="mb-6 flex items-center justify-end">
        <Button className="bg-blue-500 hover:bg-blue-600">
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
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M12 12v9" />
            <path d="m8 17 4 4 4-4" />
          </svg>
          Summarize
        </Button>
      </div>

      <div className="space-y-4">
        <div className="rounded-lg border">
          <button
            className="flex w-full items-center justify-between p-4 text-left"
            onClick={() => toggleChapter("chapter-1")}
          >
            <div className="flex items-center">
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
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <span className="font-medium">Chapter 1: Introduction to Biology</span>
            </div>
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
              className={`transition-transform ${expandedChapters.includes("chapter-1") ? "rotate-180" : ""}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          {expandedChapters.includes("chapter-1") && (
            <div className="border-t p-4">
              <div className="mb-2">
                <h4 className="font-medium">Summary:</h4>
                <p className="text-sm">
                  Biology is the study of living organisms and their interactions with the environment. Key themes
                  include cell theory, genetics, evolution, and ecology.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Key Points:</h4>
                <ul className="ml-6 list-disc text-sm">
                  <li>Definition of Biology</li>
                  <li>Characteristics of living things</li>
                  <li>Levels of biological organization</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="rounded-lg border">
          <button
            className="flex w-full items-center justify-between p-4 text-left"
            onClick={() => toggleChapter("chapter-2")}
          >
            <div className="flex items-center">
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
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <span className="font-medium">Chapter 2: Cell Structure</span>
            </div>
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
              className={`transition-transform ${expandedChapters.includes("chapter-2") ? "rotate-180" : ""}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          {expandedChapters.includes("chapter-2") && (
            <div className="border-t p-4">
              <div className="mb-2">
                <h4 className="font-medium">Summary:</h4>
                <p className="text-sm">
                  Cells are the basic structural and functional units of all living organisms. They contain various
                  organelles that perform specific functions.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Key Points:</h4>
                <ul className="ml-6 list-disc text-sm">
                  <li>Cell theory</li>
                  <li>Prokaryotic vs. eukaryotic cells</li>
                  <li>Cell membrane structure and function</li>
                  <li>Organelles and their functions</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
