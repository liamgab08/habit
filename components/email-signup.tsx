"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, Loader2, Sparkles } from "lucide-react"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist")
      }

      setStatus("success")
      setMessage(data.message)
      setEmail("")
    } catch (error) {
      setStatus("error")
      setMessage(error instanceof Error ? error.message : "Failed to join waitlist")
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim())
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-3 p-8 bg-gradient-to-r from-electric-indigo/5 via-neon-sky/10 to-electric-indigo/5 rounded-2xl border border-neon-sky/30 transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-neon-sky/20 rounded-full blur-sm animate-pulse"></div>
            <CheckCircle className="w-6 h-6 text-electric-indigo relative" />
          </div>
          <div>
            <p className="text-lg font-medium text-midnight-charcoal">
              Welcome to the VIP waitlist!
            </p>
            <p className="text-sm text-midnight-charcoal/60">
              Check your email for confirmation and exclusive updates.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-electric-indigo via-hot-coral to-neon-sky rounded-2xl blur opacity-30"></div>
      <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-4 max-w-md mx-auto bg-cloud-white p-2 rounded-xl">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-electric-indigo/40" />
          <Input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={handleEmailChange}
            className="pl-10 h-12 text-lg border-2 border-electric-indigo/20 focus:border-electric-indigo focus:ring-2 focus:ring-neon-sky/20 rounded-xl bg-cloud-white"
            required
            disabled={status === "loading"}
          />
        </div>
        <Button
          type="submit"
          disabled={status === "loading"}
          className={`h-12 px-8 text-lg font-semibold bg-hot-coral hover:bg-hot-coral/90 text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-hot-coral/20 flex items-center gap-2 ${
            status === "loading" ? "opacity-90" : ""
          }`}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Joining...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Join the VIP Waitlist</span>
            </>
          )}
        </Button>
      </form>
      
      {message && (
        <p
          className={`mt-2 text-sm ${
            status === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  )
}
