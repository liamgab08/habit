import { Brain, Zap, BarChart3, ArrowLeft, Sparkles, Target, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Our advanced AI learns your patterns and provides personalized recommendations to optimize your habit-building journey.",
      color: "electric-indigo",
      gradient: "from-electric-indigo/20 via-electric-indigo/10 to-transparent",
    },
    {
      icon: Zap,
      title: "Smart Habit Stacking",
      description: "Build powerful habit chains by connecting new habits to existing routines, making them stick naturally.",
      color: "hot-coral",
      gradient: "from-hot-coral/20 via-hot-coral/10 to-transparent",
    },
    {
      icon: Target,
      title: "Adaptive Goals",
      description: "Set dynamic goals that adjust based on your progress and lifestyle changes, ensuring consistent growth.",
      color: "neon-sky",
      gradient: "from-neon-sky/20 via-neon-sky/10 to-transparent",
    },
    {
      icon: Clock,
      title: "Time-Based Optimization",
      description: "Find your optimal times for different habits based on your energy levels and schedule patterns.",
      color: "electric-indigo",
      gradient: "from-electric-indigo/20 via-electric-indigo/10 to-transparent",
    },
    {
      icon: Shield,
      title: "Progress Protection",
      description: "Built-in mechanisms to help you maintain streaks even during unexpected disruptions.",
      color: "hot-coral",
      gradient: "from-hot-coral/20 via-hot-coral/10 to-transparent",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed insights and visualizations to track your progress and identify improvement opportunities.",
      color: "neon-sky",
      gradient: "from-neon-sky/20 via-neon-sky/10 to-transparent",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cloud-white via-neon-sky/5 to-cloud-white">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-electric-indigo/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-indigo/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-sky/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-8 relative">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-electric-indigo hover:text-electric-indigo/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-electric-indigo/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-electric-indigo" />
              <span className="text-sm font-medium text-electric-indigo">Powered by AI</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-midnight-charcoal mb-4">
              Features that Make Habit Building{" "}
              <span className="relative inline-block">
                Effortless
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-hot-coral to-neon-sky rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-xl text-midnight-charcoal/70">
              Discover how our AI-powered platform transforms the way you build and maintain habits.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl p-8 shadow-lg shadow-electric-indigo/5 border border-electric-indigo/10 hover:border-electric-indigo/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-cloud-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center border border-${feature.color}/20 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon
                      className={`w-8 h-8 text-${feature.color === "electric-indigo" ? "electric-indigo" : feature.color === "hot-coral" ? "hot-coral" : "electric-indigo"}`}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-midnight-charcoal mb-3 group-hover:text-electric-indigo transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-midnight-charcoal/70 leading-relaxed">{feature.description}</p>

                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-electric-indigo/20 rounded-full group-hover:bg-electric-indigo/40 transition-colors duration-300"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-hot-coral/20 rounded-full group-hover:bg-hot-coral/40 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 