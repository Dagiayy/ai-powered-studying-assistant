"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StudyGPT } from "@/components/notebook/study-gpt"
import { PrepPilot } from "@/components/notebook/prep-pilot"
import { SnapNotes } from "@/components/notebook/snap-notes"
import { EduTuner } from "@/components/notebook/edu-tuner"

interface NotebookTabsProps {
  notebookId: string
}

export function NotebookTabs({ notebookId }: NotebookTabsProps) {
  const [activeTab, setActiveTab] = useState("snapnotes")

  return (
    <Tabs defaultValue="snapnotes" className="mt-6" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-4 rounded-none border-b bg-transparent p-0">
        <TabsTrigger
          value="snapnotes"
          className={`rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
            activeTab === "snapnotes" ? "border-blue-500 font-medium" : ""
          }`}
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
            className="mr-2"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          SnapNotes
        </TabsTrigger>
        <TabsTrigger
          value="studygpt"
          className={`rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
            activeTab === "studygpt" ? "border-blue-500 font-medium" : ""
          }`}
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
            className="mr-2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          StudyGPT
        </TabsTrigger>
        <TabsTrigger
          value="preppilot"
          className={`rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
            activeTab === "preppilot" ? "border-blue-500 font-medium" : ""
          }`}
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
            className="mr-2"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          PrepPilot
        </TabsTrigger>
        <TabsTrigger
          value="edutuner"
          className={`rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
            activeTab === "edutuner" ? "border-blue-500 font-medium" : ""
          }`}
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
            className="mr-2"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
          EduTuner
        </TabsTrigger>
      </TabsList>
      <TabsContent value="snapnotes" className="mt-6 border-none p-0">
        <SnapNotes notebookId={notebookId} />
      </TabsContent>
      <TabsContent value="studygpt" className="mt-6 border-none p-0">
        <StudyGPT notebookId={notebookId} />
      </TabsContent>
      <TabsContent value="preppilot" className="mt-6 border-none p-0">
        <PrepPilot notebookId={notebookId} />
      </TabsContent>
      <TabsContent value="edutuner" className="mt-6 border-none p-0">
        <EduTuner notebookId={notebookId} />
      </TabsContent>
    </Tabs>
  )
}
