import type { Metadata } from "next"
import { NotebookHeader } from "@/components/notebook/notebook-header"
import { NotebookTabs } from "@/components/notebook/notebook-tabs"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"

export const metadata: Metadata = {
  title: "Notebook - Cognivia",
  description: "Study with AI assistance",
}

export default function NotebookPage({ params }: { params: { notebookId: string } }) {
  // In a real app, we would fetch the notebook data based on the ID
  const notebookData = {
    id: params.notebookId,
    title: "Biology 101",
    icon: "📘",
  }

  return (
    <DashboardShell>
      <NotebookHeader notebook={notebookData} />
      <NotebookTabs notebookId={params.notebookId} />
    </DashboardShell>
  )
}
