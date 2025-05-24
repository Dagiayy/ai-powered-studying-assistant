"use client"

import { useState } from "react"
import { SnapNotesUpload } from "@/components/notebook/snap-notes-upload"
import { SnapNotesTabs } from "@/components/notebook/snap-notes-tabs"

interface SnapNotesProps {
  notebookId: string
}

export function SnapNotes({ notebookId }: SnapNotesProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const handleFilesUploaded = (files: File[]) => {
    setUploadedFiles([...uploadedFiles, ...files])
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
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4L18.5 2.5z" />
          </svg>
          SnapNotes
        </h3>
      </div>

      {uploadedFiles.length === 0 ? (
        <SnapNotesUpload onFilesUploaded={handleFilesUploaded} />
      ) : (
        <SnapNotesTabs notebookId={notebookId} hasUploadedFiles={uploadedFiles.length > 0} />
      )}
    </div>
  )
}
