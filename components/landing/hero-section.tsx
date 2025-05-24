import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container flex flex-col items-center text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            AI-Powered Studying Assistant for University Students
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Enhance your learning efficiency with smart note-taking, AI-powered Q&A, contextual learning assistance, and
            personalized study support.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/sign-up">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Get Started for Free
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-16 rounded-lg border shadow-lg">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Cognivia Dashboard"
            className="rounded-lg"
            width={1200}
            height={600}
          />
        </div>
      </div>
    </section>
  )
}
