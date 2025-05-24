import type { Metadata } from "next"
import { StudyCalendar } from "@/components/study-calendar/study-calendar"

export const metadata: Metadata = {
  title: "Study Calendar - Cognivia",
  description: "Plan and track your study sessions",
}

export default function StudyCalendarPage() {
  return <StudyCalendar />
}
