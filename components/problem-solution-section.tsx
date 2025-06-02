import { Brain, Zap, Target, ArrowRight } from "lucide-react"

export function ProblemSolutionSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-cloud-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-sky/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-electric-indigo/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <div className="inline-block">
          <h3 className="text-3xl md:text-4xl font-bold text-midnight-charcoal mb-2 relative">
            Tired of Willpower
            <span className="relative ml-2">
              <span className="text-hot-coral">Failing</span>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-hot-coral to-neon-sky rounded-full"></div>
            </span>
            You?
          </h3>
        </div>

        <p className="text-lg md:text-xl text-midnight-charcoal/70 mb-12 leading-relaxed max-w-3xl mx-auto">
          We've all been there. The endless cycle of starting strong, losing motivation, and battling procrastination.
          Traditional habit-building methods often rely on sheer willpower, which inevitably runs out.
        </p>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg shadow-electric-indigo/5 border border-electric-indigo/10 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-electric-indigo/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Brain className="w-6 h-6 text-electric-indigo" />
            </div>
            <h4 className="text-lg font-semibold text-midnight-charcoal mb-2">Motivation Fatigue</h4>
            <p className="text-midnight-charcoal/60">Relying on willpower alone leads to inevitable burnout</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg shadow-hot-coral/5 border border-hot-coral/10 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-hot-coral/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Zap className="w-6 h-6 text-hot-coral" />
            </div>
            <h4 className="text-lg font-semibold text-midnight-charcoal mb-2">Inconsistent Progress</h4>
            <p className="text-midnight-charcoal/60">Starting strong but failing to maintain momentum</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg shadow-neon-sky/5 border border-neon-sky/10 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-neon-sky/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Target className="w-6 h-6 text-electric-indigo" />
            </div>
            <h4 className="text-lg font-semibold text-midnight-charcoal mb-2">Missing Structure</h4>
            <p className="text-midnight-charcoal/60">Lack of personalized guidance and accountability</p>
          </div>
        </div>

        {/* Solution Box */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-electric-indigo via-hot-coral to-neon-sky rounded-2xl blur opacity-20"></div>
          <div className="relative bg-white p-8 rounded-2xl border border-electric-indigo/10 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-electric-indigo to-transparent"></div>
              <span className="text-electric-indigo font-medium">The Solution</span>
              <div className="h-px w-12 bg-gradient-to-l from-electric-indigo to-transparent"></div>
            </div>
            <p className="text-lg md:text-xl text-midnight-charcoal leading-relaxed">
              Imagine a <span className="font-semibold text-electric-indigo">smarter way</span>. The Aura Habits App learns
              your <span className="font-semibold text-electric-indigo">unique brain</span>, helps identify your triggers,
              and guides you to consistent action, making lasting change truly{" "}
              <span className="font-semibold text-electric-indigo">effortless</span>.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-hot-coral hover:text-hot-coral/80 transition-colors cursor-pointer group">
              <span className="font-medium">Learn how it works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
