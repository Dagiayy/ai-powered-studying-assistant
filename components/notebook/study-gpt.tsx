"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StudyGPTVoice } from "@/components/notebook/study-gpt-voice"

interface StudyGPTProps {
  notebookId: string
}

export function StudyGPT({ notebookId }: StudyGPTProps) {
  const [messages, setMessages] = useState([
    {
      role: "user",
      content: "What is osmosis?",
      timestamp: new Date().toISOString(),
    },
    {
      role: "assistant",
      content:
        "Osmosis is the diffusion of water molecules through a selectively permeable membrane from a region of lower solute concentration to higher solute concentration.",
      timestamp: new Date().toISOString(),
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isVoiceMode, setIsVoiceMode] = useState(false)

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    // Add user message
    setMessages([
      ...messages,
      {
        role: "user",
        content: newMessage,
        timestamp: new Date().toISOString(),
      },
    ])

    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `This is a simulated response to: "${newMessage}"`,
          timestamp: new Date().toISOString(),
        },
      ])
    }, 1000)

    setNewMessage("")
  }

  if (isVoiceMode) {
    return <StudyGPTVoice onExitVoiceMode={() => setIsVoiceMode(false)} />
  }

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex items-center justify-between">
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
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          StudyGPT
        </h3>
        <div className="flex items-center gap-2">
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
              <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
              <circle cx="17" cy="7" r="5" />
            </svg>
            Powered by AI
          </span>
          <Button variant="outline" size="sm" onClick={() => setIsVoiceMode(true)}>
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
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="22" />
            </svg>
            Voice Mode
          </Button>
        </div>
      </div>

      <div className="mb-4 flex-1 space-y-4 overflow-auto rounded-lg border p-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-start" : "justify-end"}`}>
            <div
              className={`flex max-w-[80%] items-start gap-2 rounded-lg p-3 ${
                message.role === "user" ? "bg-blue-100" : "bg-purple-100"
              }`}
            >
              {message.role === "user" ? (
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
              ) : null}
              <div>
                <p>{message.content}</p>
              </div>
              {message.role === "assistant" ? (
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder-ai.jpg" alt="AI" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Input
            placeholder="Ask a question..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
            className="pr-10"
          />
          <Button
            size="icon"
            className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-blue-500 p-1 text-white hover:bg-blue-600"
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
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
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}
