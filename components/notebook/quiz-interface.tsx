"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"

interface QuizInterfaceProps {
  onExitQuiz: () => void
}

export function QuizInterface({ onExitQuiz }: QuizInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const questions = [
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
      correct: 1,
      explanation:
        "Mitochondria are called the powerhouse of the cell because they produce ATP (adenosine triphosphate), which is the main energy currency used by cells for various metabolic processes.",
    },
    {
      question: "Which process converts glucose into energy?",
      options: ["Photosynthesis", "Cellular Respiration", "Osmosis", "Diffusion"],
      correct: 1,
      explanation:
        "Cellular respiration is the process by which cells break down glucose and other organic molecules to release energy in the form of ATP. This process occurs in the mitochondria and involves glycolysis, the citric acid cycle, and the electron transport chain.",
    },
    {
      question: "What is the basic unit of heredity?",
      options: ["Chromosome", "DNA", "Gene", "Protein"],
      correct: 2,
      explanation:
        "A gene is the basic unit of heredity. It is a specific sequence of DNA that contains the instructions for making a particular protein or performing a specific function. Genes are passed from parents to offspring and determine inherited traits.",
    },
  ]

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      // Quiz completed
      setShowResult(true)
    }
  }

  const handleCheckAnswer = () => {
    setShowResult(true)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
  }

  if (showResult && currentQuestion === questions.length - 1) {
    return (
      <div className="flex min-h-[600px] flex-col items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Quiz Complete!</h2>
              <p className="text-muted-foreground">Great job on completing the quiz</p>
            </div>
            <div className="mb-6">
              <div className="text-4xl font-bold text-blue-500">
                {score}/{questions.length}
              </div>
              <p className="text-sm text-muted-foreground">{Math.round((score / questions.length) * 100)}% Correct</p>
            </div>
            <div className="space-y-2">
              <Button onClick={restartQuiz} className="w-full">
                Try Again
              </Button>
              <Button variant="outline" onClick={onExitQuiz} className="w-full">
                Back to PrepPilot
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between">
        <Button variant="outline" onClick={onExitQuiz}>
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
            <path d="m15 18-6-6 6-6" />
          </svg>
          Exit Quiz
        </Button>
        <div className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>

      <div className="mb-6">
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
      </div>

      <Card>
        <CardContent className="p-8">
          <h2 className="mb-6 text-xl font-medium">{questions[currentQuestion].question}</h2>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`w-full rounded-lg border p-4 text-left transition-colors ${
                  selectedAnswer === index
                    ? showResult
                      ? index === questions[currentQuestion].correct
                        ? "border-green-500 bg-green-50"
                        : "border-red-500 bg-red-50"
                      : "border-blue-500 bg-blue-50"
                    : showResult && index === questions[currentQuestion].correct
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => !showResult && handleAnswerSelect(index)}
                disabled={showResult}
              >
                <div className="flex items-center">
                  <div
                    className={`mr-3 flex h-6 w-6 items-center justify-center rounded-full border text-sm ${
                      selectedAnswer === index
                        ? showResult
                          ? index === questions[currentQuestion].correct
                            ? "border-green-500 bg-green-500 text-white"
                            : "border-red-500 bg-red-500 text-white"
                          : "border-blue-500 bg-blue-500 text-white"
                        : showResult && index === questions[currentQuestion].correct
                          ? "border-green-500 bg-green-500 text-white"
                          : "border-gray-300"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  {option}
                  {showResult && selectedAnswer === index && index !== questions[currentQuestion].correct && (
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
                      className="ml-auto text-red-500"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  )}
                  {showResult && index === questions[currentQuestion].correct && (
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
                      className="ml-auto text-green-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>

          {showResult && (
            <div className="mt-6 rounded-lg bg-blue-50 p-4">
              <h3 className="mb-2 font-medium text-blue-900">Explanation:</h3>
              <p className="text-sm text-blue-800">{questions[currentQuestion].explanation}</p>
            </div>
          )}

          <div className="mt-6 flex justify-end">
            {!showResult ? (
              <Button onClick={handleCheckAnswer} disabled={selectedAnswer === null}>
                Check Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion}>
                {currentQuestion + 1 === questions.length ? "Finish Quiz" : "Next Question"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
