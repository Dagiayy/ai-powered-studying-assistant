"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface SnapNotesUploadProps {
  onFilesUploaded: (files: File[]) => void
}

export function SnapNotesUpload({ onFilesUploaded }: SnapNotesUploadProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      onFilesUploaded(files)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files)
    onFilesUploaded(files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center">
      <div
        className={`w-full max-w-2xl rounded-lg border-2 border-dashed p-12 text-center transition-colors ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="mb-6 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </div>
        <h3 className="mb-4 text-2xl font-bold">Upload Your Study Materials</h3>
        <p className="mb-6 text-lg text-muted-foreground">
          Upload books, notes, or research documents to get started with AI-powered summarization and flashcard
          generation.
        </p>
        <p className="mb-8 text-sm text-muted-foreground">
          Supported formats: PDF, DOCX, TXT • Maximum file size: 10MB per file
        </p>
        <input
          type="file"
          id="file-upload"
          className="hidden"
          multiple
          accept=".pdf,.docx,.txt"
          onChange={handleFileUpload}
        />
        <label htmlFor="file-upload">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
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
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Choose Files to Upload
          </Button>
        </label>
        <p className="mt-4 text-sm text-muted-foreground">or drag and drop files here</p>
      </div>
    </div>
  )
}
