"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface StudyGPTVoiceProps {
  onExitVoiceMode: () => void
}

export function StudyGPTVoice({ onExitVoiceMode }: StudyGPTVoiceProps) {
  const [isListening, setIsListening] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const toggleListening = () => {
    setIsListening(!isListening)
    if (!isListening) {
      // Start listening
      setIsProcessing(false)
    } else {
      // Stop listening and process
      setIsProcessing(true)
      setTimeout(() => {
        setIsProcessing(false)
      }, 2000)
    }
  }

  return (
    <div className="flex min-h-[600px] flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
      <div className="text-center">
        <div className="mb-8">
          <Avatar className="mx-auto h-24 w-24 border-4 border-white shadow-lg">
            <AvatarImage src="/placeholder-ai.jpg" alt="AI Assistant" />
            <AvatarFallback className="bg-blue-500 text-white text-2xl">AI</AvatarFallback>
          </Avatar>
        </div>

        <h2 className="mb-4 text-2xl font-bold">Voice Mode Active</h2>
        <p className="mb-8 text-muted-foreground">
          {isProcessing
            ? "Processing your question..."
            : isListening
              ? "I'm listening... Ask me anything about your studies"
              : "Tap the microphone to start speaking"}
        </p>

        <div className="mb-8">
          <Button
            size="lg"
            className={`h-20 w-20 rounded-full ${
              isListening
                ? "bg-red-500 hover:bg-red-600 animate-pulse"
                : isProcessing
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={toggleListening}
            disabled={isProcessing}
          >
            {isProcessing ? (
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
                className="animate-spin"
              >
                <path d="M21 12a9 9 0 11-6.219-8.56" />
              </svg>
            ) : (
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
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="22" />
              </svg>
            )}
          </Button>
        </div>

        {isListening && (
          <div className="mb-8 flex justify-center space-x-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s]"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500"></div>
          </div>
        )}

        <div className="flex gap-4">
          <Button variant="outline" onClick={onExitVoiceMode}>
            Exit Voice Mode
          </Button>
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
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            Settings
          </Button>
        </div>
      </div>
    </div>
  )
}
