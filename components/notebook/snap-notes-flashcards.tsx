"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface SnapNotesFlashcardsProps {
  notebookId: string
  hasUploadedFiles: boolean
}

export function SnapNotesFlashcards({ notebookId, hasUploadedFiles }: SnapNotesFlashcardsProps) {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const flashcards = [
    {
      question: "What is the fundamental unit of life?",
      answer: "The cell is the fundamental unit of life.",
    },
    {
      question: "What is osmosis?",
      answer: "Osmosis is the diffusion of water molecules through a selectively permeable membrane.",
    },
    {
      question: "What are the main components of a cell?",
      answer: "Cell membrane, cytoplasm, and genetic material (DNA/RNA).",
    },
  ]

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
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <line x1="9" x2="15" y1="9" y2="15" />
            <line x1="15" x2="9" y1="9" y2="15" />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-medium">No flashcards available</h3>
        <p className="text-muted-foreground">Upload your study materials first to generate flashcards</p>
      </div>
    )
  }

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length)
    setIsFlipped(false)
  }

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length)
    setIsFlipped(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Flashcards</h3>
        <Button variant="outline" size="sm">
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
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
          </svg>
          Generate More
        </Button>
      </div>

      <div className="flex items-center justify-center">
        <Button variant="outline" size="icon" className="mr-4" onClick={prevCard}>
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
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Button>

        <div
          className="relative h-[200px] w-[400px] cursor-pointer rounded-lg border p-6 text-center shadow-sm transition-transform hover:shadow-md"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="absolute right-2 top-2">
            <Button variant="ghost" size="icon" className="h-6 w-6 text-red-500">
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
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              </svg>
            </Button>
          </div>
          <div className="flex h-full flex-col items-center justify-center">
            <p className="text-lg font-medium">
              {isFlipped ? flashcards[currentCard].answer : flashcards[currentCard].question}
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              {currentCard + 1}/{flashcards.length}
            </p>
          </div>
        </div>

        <Button variant="outline" size="icon" className="ml-4" onClick={nextCard}>
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
      </div>

      <div className="flex justify-center">
        <Button variant="outline" size="sm" onClick={() => setIsFlipped(!isFlipped)}>
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
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <line x1="9" x2="15" y1="9" y2="15" />
            <line x1="15" x2="9" y1="9" y2="15" />
          </svg>
          Flip Card
        </Button>
      </div>
    </div>
  )
}
