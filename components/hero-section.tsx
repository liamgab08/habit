import { EmailSignup } from "@/components/email-signup"
import { Brain, Zap, Target } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-cloud-white to-neon-sky/10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-indigo/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-sky/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-midnight-charcoal mb-6 leading-tight">
          Unlock Effortless{" "}
          <span className="text-electric-indigo relative">
            Flow
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-indigo to-neon-sky rounded-full"></div>
          </span>
        </h1>

        {/* Sub-headline */}
        <h2 className="text-xl md:text-2xl text-midnight-charcoal/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Your AI Co-Pilot for Habit Mastery is Launching Soon.
          <br className="hidden md:block" />
          Goodbye Procrastination, Hello Consistent Progress.
        </h2>

        {/* Key Visual */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-br from-electric-indigo/20 to-neon-sky/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-electric-indigo/20">
              <div className="relative">
                <Brain className="w-24 h-24 text-electric-indigo" />
                <div className="absolute -top-2 -right-2">
                  <Zap className="w-8 h-8 text-hot-coral animate-pulse" />
                </div>
                <div className="absolute -bottom-2 -left-2">
                  <Target className="w-8 h-8 text-neon-sky" />
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-hot-coral rounded-full animate-bounce"></div>
            <div className="absolute bottom-8 left-2 w-2 h-2 bg-electric-indigo rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Email Signup */}
        <EmailSignup />

        {/* Small benefit promise */}
        <p className="text-sm text-midnight-charcoal/60 mt-4 max-w-md mx-auto">
          Be the first to experience the future of habits. Exclusive launch offers for waitlist members.
        </p>
      </div>
    </section>
  )
}
