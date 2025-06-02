import { Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cloud-white via-neon-sky/5 to-cloud-white">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-electric-indigo/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-indigo/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-sky/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 py-8 relative">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-electric-indigo hover:text-electric-indigo/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-electric-indigo/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-electric-indigo" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-midnight-charcoal">Privacy Policy</h1>
          </div>
          
          <p className="text-midnight-charcoal/60">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 animate-fade-in [--animation-delay:200ms]">
            <h2 className="text-2xl font-bold text-midnight-charcoal mb-4">Introduction</h2>
            <p className="text-midnight-charcoal/70 leading-relaxed">
              At Aura Habits, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
            </p>
          </section>

          <section className="mb-12 animate-fade-in [--animation-delay:400ms]">
            <h2 className="text-2xl font-bold text-midnight-charcoal mb-4">Information We Collect</h2>
            <ul className="space-y-4 text-midnight-charcoal/70">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-electric-indigo/20 rounded-full mt-2"></div>
                <span>Personal information you provide (email, name)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-hot-coral/20 rounded-full mt-2"></div>
                <span>Usage data and analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-neon-sky/20 rounded-full mt-2"></div>
                <span>Habit tracking and progress information</span>
              </li>
            </ul>
          </section>

          <section className="mb-12 animate-fade-in [--animation-delay:600ms]">
            <h2 className="text-2xl font-bold text-midnight-charcoal mb-4">How We Use Your Information</h2>
            <p className="text-midnight-charcoal/70 leading-relaxed mb-4">
              We use the collected information for:
            </p>
            <ul className="space-y-4 text-midnight-charcoal/70">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-electric-indigo/20 rounded-full mt-2"></div>
                <span>Providing and improving our services</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-hot-coral/20 rounded-full mt-2"></div>
                <span>Personalizing your experience</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-neon-sky/20 rounded-full mt-2"></div>
                <span>Communication about updates and features</span>
              </li>
            </ul>
          </section>

          <section className="animate-fade-in [--animation-delay:800ms]">
            <h2 className="text-2xl font-bold text-midnight-charcoal mb-4">Contact Us</h2>
            <p className="text-midnight-charcoal/70 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@aurahabits.app" className="text-electric-indigo hover:text-electric-indigo/80 transition-colors">
                privacy@aurahabits.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 