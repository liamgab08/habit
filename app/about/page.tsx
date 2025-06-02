import { ArrowLeft, Brain, Heart, Users, Star, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const teamValues = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We're constantly pushing the boundaries of AI to make habit building truly effortless.",
      color: "electric-indigo",
    },
    {
      icon: Heart,
      title: "User-Centered",
      description: "Every feature we build starts with understanding our users' needs and challenges.",
      color: "hot-coral",
    },
    {
      icon: Target,
      title: "Impact Driven",
      description: "We measure our success by the positive changes we help create in people's lives.",
      color: "neon-sky",
    },
  ]

  const milestones = [
    {
      year: "2023",
      title: "The Beginning",
      description: "Aura Habits was born from a simple idea: make habit building as natural as breathing.",
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Launched our core AI engine to provide personalized habit recommendations.",
    },
    {
      year: "2024",
      title: "Growing Community",
      description: "Reached our first milestone of 10,000+ early access users.",
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
            <h1 className="text-4xl md:text-5xl font-bold text-midnight-charcoal mb-4">
              We're Building the{" "}
              <span className="relative inline-block">
                Future
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-hot-coral to-neon-sky rounded-full"></div>
              </span>{" "}
              of Habit Building
            </h1>
            
            <p className="text-xl text-midnight-charcoal/70">
              Meet the team behind Aura Habits and discover our mission to make personal growth effortless.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-midnight-charcoal mb-6">Our Mission</h2>
          <p className="text-xl text-midnight-charcoal/70 leading-relaxed">
            We believe that everyone has the potential to build life-changing habits. Our mission is to harness the power of AI
            to make that journey easier, more intuitive, and ultimately more successful for millions of people worldwide.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamValues.map((value, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl p-8 shadow-lg shadow-electric-indigo/5 border border-electric-indigo/10 hover:border-electric-indigo/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl bg-${value.color}/10 flex items-center justify-center`}>
                  <value.icon className={`w-6 h-6 text-${value.color}`} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-midnight-charcoal mb-3">{value.title}</h3>
              <p className="text-midnight-charcoal/70">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-electric-indigo/20 transform -translate-x-1/2"></div>
          
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0 animate-fade-in"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className={`md:flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="inline-block px-4 py-1 rounded-full bg-electric-indigo/10 text-electric-indigo font-medium mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-midnight-charcoal mb-2">{milestone.title}</h3>
                  <p className="text-midnight-charcoal/70">{milestone.description}</p>
                </div>

                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-electric-indigo"></div>
                </div>

                <div className="flex-1"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in [--animation-delay:800ms]">
          <div className="text-center">
            <Users className="w-8 h-8 text-electric-indigo mx-auto mb-2" />
            <div className="text-2xl font-bold text-midnight-charcoal">10k+</div>
            <div className="text-sm text-midnight-charcoal/60">Active Users</div>
          </div>
          <div className="text-center">
            <Star className="w-8 h-8 text-hot-coral mx-auto mb-2" />
            <div className="text-2xl font-bold text-midnight-charcoal">4.9</div>
            <div className="text-sm text-midnight-charcoal/60">User Rating</div>
          </div>
          <div className="text-center">
            <Target className="w-8 h-8 text-electric-indigo mx-auto mb-2" />
            <div className="text-2xl font-bold text-midnight-charcoal">1M+</div>
            <div className="text-sm text-midnight-charcoal/60">Habits Tracked</div>
          </div>
          <div className="text-center">
            <Brain className="w-8 h-8 text-hot-coral mx-auto mb-2" />
            <div className="text-2xl font-bold text-midnight-charcoal">24/7</div>
            <div className="text-sm text-midnight-charcoal/60">AI Support</div>
          </div>
        </div>
      </div>
    </div>
  )
} 