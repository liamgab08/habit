"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center gap-3 p-6 bg-neon-sky/10 rounded-2xl border border-neon-sky/20">
        <CheckCircle className="w-6 h-6 text-electric-indigo" />
        <p className="text-lg font-medium text-midnight-charcoal">
          Welcome to the VIP waitlist! Check your email for confirmation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-midnight-charcoal/40" />
        <Input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-10 h-12 text-lg border-2 border-electric-indigo/20 focus:border-electric-indigo rounded-xl"
          required
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="h-12 px-8 text-lg font-semibold bg-hot-coral hover:bg-hot-coral/90 text-white rounded-xl transition-all duration-200 transform hover:scale-105"
      >
        {isLoading ? "Joining..." : "Join the VIP Waitlist"}
      </Button>
    </form>
  )
}
