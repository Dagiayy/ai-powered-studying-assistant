import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DashboardHeaderProps {
  heading: string
  subheading?: string
}

export function DashboardHeader({ heading, subheading }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{heading}</h2>
        {subheading && <p className="text-muted-foreground">{subheading}</p>}
      </div>
      <div className="flex items-center gap-2">
        <div className="relative w-full md:w-auto">
          <Input placeholder="Search notebooks..." className="w-full md:w-[200px] lg:w-[300px]" />
        </div>
        <Select defaultValue="recent">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Sort by: Recent</SelectItem>
            <SelectItem value="name">Sort by: Name</SelectItem>
            <SelectItem value="activity">Sort by: Activity</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-blue-500 hover:bg-blue-600">
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
            <path d="M12 5v14M5 12h14" />
          </svg>
          Create Notebook
        </Button>
      </div>
    </div>
  )
}
