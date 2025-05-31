import { Brain, Zap, BarChart3, Sparkles } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      headline: "Predictive Guidance, Just for You",
      description:
        "Our AI learns your patterns, anticipates challenges, and offers personalized nudges before you even know you need them.",
      color: "electric-indigo",
      gradient: "from-electric-indigo/20 via-electric-indigo/10 to-transparent",
    },
    {
      icon: Zap,
      headline: "Master Habits Without Willpower Burnout",
      description:
        "We design friction out of good habits and integrate them seamlessly into your daily rhythm, making consistency feel automatic.",
      color: "hot-coral",
      gradient: "from-hot-coral/20 via-hot-coral/10 to-transparent",
    },
    {
      icon: BarChart3,
      headline: "See Your Progress, Understand Your Flow",
      description:
        "Get actionable insights that reveal what truly works for you, guiding you to your Ideal Self with clarity.",
      color: "neon-sky",
      gradient: "from-neon-sky/20 via-neon-sky/10 to-transparent",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cloud-white to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric-indigo/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-sky/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-electric-indigo/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-electric-indigo" />
            <span className="text-sm font-medium text-electric-indigo">Powered by AI</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-midnight-charcoal mb-4">
            This Isn't Just Another{" "}
            <span className="relative inline-block">
              Habit Tracker
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-hot-coral to-neon-sky rounded-full"></span>
            </span>
            .
          </h3>
          <div className="text-xl text-electric-indigo font-semibold">
            It's Your{" "}
            <span className="relative inline-block">
              Intelligent Co-Pilot
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-electric-indigo to-neon-sky rounded-full opacity-50"></span>
            </span>
            .
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl p-8 shadow-lg shadow-electric-indigo/5 border border-electric-indigo/10 hover:border-electric-indigo/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-cloud-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="mb-6 flex justify-center">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center border border-${feature.color}/20 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon
                      className={`w-10 h-10 text-${feature.color === "electric-indigo" ? "electric-indigo" : feature.color === "hot-coral" ? "hot-coral" : "electric-indigo"}`}
                    />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-midnight-charcoal mb-4 group-hover:text-electric-indigo transition-colors duration-300">
                  {feature.headline}
                </h4>

                <p className="text-midnight-charcoal/70 leading-relaxed">{feature.description}</p>

                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-electric-indigo/20 rounded-full group-hover:bg-electric-indigo/40 transition-colors duration-300"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-hot-coral/20 rounded-full group-hover:bg-hot-coral/40 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
