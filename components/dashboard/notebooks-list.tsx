"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data for notebooks
const mockNotebooks = [
  {
    id: "biology-101",
    title: "Biology 101",
    icon: "📘",
    color: "blue",
    lastUpdated: "2 days ago",
    streak: 7,
    chapters: 12,
    active: true,
  },
  {
    id: "mathematics",
    title: "Mathematics",
    icon: "📐",
    color: "green",
    lastUpdated: "5 days ago",
    streak: 3,
    chapters: 8,
    active: false,
  },
  {
    id: "chemistry",
    title: "Chemistry",
    icon: "🧪",
    color: "orange",
    lastUpdated: "Yesterday",
    streak: 1,
    chapters: 15,
    active: true,
  },
  {
    id: "spanish",
    title: "Spanish",
    icon: "🌍",
    color: "purple",
    lastUpdated: "1 week ago",
    streak: 0,
    chapters: 10,
    active: false,
  },
]

export function NotebooksList() {
  const router = useRouter()
  const [notebooks, setNotebooks] = useState(mockNotebooks)

  const handleCreateNotebook = () => {
    router.push("/dashboard/create-notebook")
  }

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {notebooks.map((notebook) => (
          <Link
            key={notebook.id}
            href={`/dashboard/${notebook.id}`}
            className="group relative rounded-lg border p-4 hover:border-blue-200 hover:shadow-sm"
          >
            <div className={`absolute inset-x-0 top-0 h-1 rounded-t-lg bg-${notebook.color}-500`} />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="text-xl">{notebook.icon}</div>
                <h3 className="font-semibold">{notebook.title}</h3>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
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
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="12" cy="19" r="1" />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Rename</DropdownMenuItem>
                  <DropdownMenuItem>Change Icon</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: {notebook.lastUpdated}</p>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-orange-500">
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
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
                Streak: {notebook.streak}d
              </div>
              <div className="flex items-center gap-1 text-sm">
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                  <path d="M10 9H8" />
                </svg>
                {notebook.chapters} chapters
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              {notebook.active ? (
                <span className="flex items-center gap-1 text-xs text-green-500">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Active
                </span>
              ) : (
                <span className="text-xs text-muted-foreground">
                  {notebook.lastUpdated === "Yesterday" ? "1d" : notebook.lastUpdated.includes("week") ? "7d" : "3d"}{" "}
                  ago
                </span>
              )}
            </div>
          </Link>
        ))}
        <button
          onClick={handleCreateNotebook}
          className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center hover:border-blue-200 hover:shadow-sm"
        >
          <div className="mb-2 rounded-full bg-blue-100 p-2">
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
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <h3 className="font-semibold">Create Notebook</h3>
          <p className="text-sm text-muted-foreground">Add a new study area</p>
        </button>
      </div>
    </div>
  )
}
