"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-white"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <span className="text-xl font-bold">Cognivia</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-blue-500">
            Features
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-blue-500">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-blue-500">
            Pricing
          </Link>
          <Link href="/sign-in" className="text-sm font-medium hover:text-blue-500">
            Sign In
          </Link>
          <Link href="/sign-up">
            <Button className="bg-blue-500 hover:bg-blue-600">Get Started</Button>
          </Link>
        </nav>
        <button className="flex items-center md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 pb-6">
            <Link href="#features" className="text-sm font-medium hover:text-blue-500">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-blue-500">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-blue-500">
              Pricing
            </Link>
            <Link href="/sign-in" className="text-sm font-medium hover:text-blue-500">
              Sign In
            </Link>
            <Link href="/sign-up">
              <Button className="w-full bg-blue-500 hover:bg-blue-600">Get Started</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
