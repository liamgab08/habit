import { EmailSignup } from "@/components/email-signup"
import { Star, Users, ArrowRight } from "lucide-react"

export function SecondaryCtaSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-electric-indigo/5 via-neon-sky/10 to-cloud-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-hot-coral/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-electric-indigo/5 rounded-full blur-3xl"></div>
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
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

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Stats Section */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-hot-coral" />
            <span className="text-sm font-medium text-midnight-charcoal">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-electric-indigo" />
            <span className="text-sm font-medium text-midnight-charcoal">10k+ Early Access</span>
          </div>
        </div>

        <div className="relative mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-electric-indigo via-hot-coral to-neon-sky rounded-2xl blur opacity-20"></div>
          <div className="relative bg-white p-8 rounded-2xl border border-electric-indigo/10">
            <h3 className="text-3xl md:text-4xl font-bold text-midnight-charcoal mb-4">
              Your Journey to{" "}
              <span className="relative inline-block">
                Effortless
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-hot-coral to-neon-sky rounded-full"></div>
              </span>{" "}
              Mastery Starts Here
            </h3>

            <p className="text-lg text-midnight-charcoal/70 mb-8 max-w-2xl mx-auto">
              Join the waitlist today and be among the first to experience the future of habit building.
            </p>

            <div className="mb-8">
              <EmailSignup />
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-midnight-charcoal/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-electric-indigo/20 rounded-full"></div>
                <span>Early Access Benefits</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-hot-coral/20 rounded-full"></div>
                <span>Lifetime Discount</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-sky/20 rounded-full"></div>
                <span>Priority Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-electric-indigo hover:text-electric-indigo/80 transition-colors cursor-pointer group">
          <span className="font-medium">Learn more about our early access program</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </section>
  )
}
