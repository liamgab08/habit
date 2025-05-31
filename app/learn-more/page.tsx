import { ArrowLeft, Sparkles, Star, Users, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function LearnMorePage() {
  const benefits = [
    {
      icon: Star,
      title: "Priority Access",
      description: "Be among the first to experience our AI-powered habit tracking platform.",
    },
    {
      icon: Users,
      title: "Direct Developer Contact",
      description: "Get direct access to our development team for feedback and feature requests.",
    },
    {
      icon: Clock,
      title: "Extended Trial Period",
      description: "Enjoy an extended trial period with access to all premium features.",
    },
    {
      icon: Shield,
      title: "Lifetime Benefits",
      description: "Special perks and discounts that stay with your account forever.",
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
              <span className="text-sm font-medium text-electric-indigo">Limited Time Offer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-midnight-charcoal mb-4">
              Early Access{" "}
              <span className="relative inline-block">
                Program
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-hot-coral to-neon-sky rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-xl text-midnight-charcoal/70">
              Join our exclusive early access program and help shape the future of habit building.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-midnight-charcoal mb-4">Early Access Benefits</h2>
          <p className="text-midnight-charcoal/70">
            Get exclusive perks and help us build the best habit tracking platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl p-8 shadow-lg shadow-electric-indigo/5 border border-electric-indigo/10 hover:border-electric-indigo/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-electric-indigo/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-electric-indigo" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-midnight-charcoal mb-3">{benefit.title}</h3>
              <p className="text-midnight-charcoal/70">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-electric-indigo to-hot-coral p-[1px] rounded-full">
            <a
              href="https://whop.com/@evolvia/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-8 py-3 bg-white rounded-full hover:bg-transparent transition-colors group"
            >
              <span className="text-electric-indigo group-hover:text-white font-medium">
                Join Early Access Now
              </span>
            </a>
          </div>
          
          <p className="mt-4 text-midnight-charcoal/60">
            Limited spots available. Don't miss out!
          </p>
        </div>
      </div>
    </div>
  )
} 