import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { CreateNotebookForm } from "@/components/notebook/create-notebook-form"

export const metadata: Metadata = {
  title: "Create Notebook - Cognivia",
  description: "Create a new study notebook",
}

export default function CreateNotebookPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-blue-100 p-3">
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
          <h1 className="text-3xl font-bold">Create New Notebook</h1>
          <p className="mt-2 text-muted-foreground">
            Create a new study notebook to organize your materials and track your progress
          </p>
        </div>
        <CreateNotebookForm />
      </div>
    </DashboardShell>
  )
}
