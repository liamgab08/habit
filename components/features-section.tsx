import { Brain, Zap, BarChart3 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      headline: "Predictive Guidance, Just for You",
      description:
        "Our AI learns your patterns, anticipates challenges, and offers personalized nudges before you even know you need them.",
      color: "electric-indigo",
    },
    {
      icon: Zap,
      headline: "Master Habits Without Willpower Burnout",
      description:
        "We design friction out of good habits and integrate them seamlessly into your daily rhythm, making consistency feel automatic.",
      color: "hot-coral",
    },
    {
      icon: BarChart3,
      headline: "See Your Progress, Understand Your Flow",
      description:
        "Get actionable insights that reveal what truly works for you, guiding you to your Ideal Self with clarity.",
      color: "neon-sky",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-cloud-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-midnight-charcoal mb-4">
            This Isn't Just Another Habit Tracker.
          </h3>
          <p className="text-xl text-electric-indigo font-semibold">It's Your Intelligent Co-Pilot.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/10 flex items-center justify-center border border-${feature.color}/20 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon
                    className={`w-10 h-10 text-${feature.color === "electric-indigo" ? "electric-indigo" : feature.color === "hot-coral" ? "hot-coral" : "midnight-charcoal"}`}
                  />
                </div>
              </div>

              <h4 className="text-xl font-bold text-midnight-charcoal mb-4">{feature.headline}</h4>

              <p className="text-midnight-charcoal/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
