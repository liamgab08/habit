import { EmailSignup } from "@/components/email-signup"
import { Brain, Zap, Target, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-cloud-white via-neon-sky/5 to-cloud-white overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-indigo/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-sky/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-hot-coral/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-electric-indigo/30 rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Enhanced Main Headline */}
        <div className="inline-block mb-2">
          <div className="flex items-center justify-center gap-2 px-4 py-1 bg-electric-indigo/10 rounded-full mb-6 text-electric-indigo">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">The Future of Habit Building</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-midnight-charcoal mb-6 leading-tight">
          Unlock Effortless{" "}
          <span className="text-electric-indigo relative inline-block">
            Flow
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-indigo via-hot-coral to-neon-sky rounded-full"></div>
          </span>
        </h1>

        {/* Enhanced Sub-headline */}
        <h2 className="text-xl md:text-2xl text-midnight-charcoal/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Your AI Co-Pilot for Habit Mastery is Launching Soon.
          <br className="hidden md:block" />
          <span className="text-hot-coral font-medium">Goodbye Procrastination</span>, Hello Consistent Progress.
        </h2>

        {/* Enhanced Key Visual */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-indigo via-hot-coral to-neon-sky rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative w-64 h-64 bg-gradient-to-br from-electric-indigo/20 to-neon-sky/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-electric-indigo/20 group-hover:border-electric-indigo/40 transition-all">
              <div className="relative transform group-hover:scale-105 transition-transform duration-500">
                <Brain className="w-24 h-24 text-electric-indigo" />
                <div className="absolute -top-2 -right-2">
                  <Zap className="w-8 h-8 text-hot-coral animate-pulse" />
                </div>
                <div className="absolute -bottom-2 -left-2">
                  <Target className="w-8 h-8 text-neon-sky animate-bounce" />
                </div>
              </div>
            </div>
            {/* Enhanced Floating elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-hot-coral rounded-full animate-bounce"></div>
            <div className="absolute bottom-8 left-2 w-2 h-2 bg-electric-indigo rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-2 h-2 bg-neon-sky rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Email Signup */}
        <EmailSignup />

        {/* Enhanced benefit promise */}
        <p className="text-sm text-midnight-charcoal/60 mt-6 max-w-md mx-auto">
          Be the first to experience the future of habits.{" "}
          <span className="text-hot-coral font-medium">Exclusive launch offers</span> for waitlist members.
        </p>
      </div>
    </section>
  )
}
