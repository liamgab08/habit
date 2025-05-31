import { EmailSignup } from "@/components/email-signup"

export function SecondaryCtaSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-electric-indigo/5 to-neon-sky/10">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-midnight-charcoal mb-8">
          Your Journey to Effortless Mastery Starts Here
        </h3>

        <div className="mb-8">
          <EmailSignup />
        </div>

        <p className="text-midnight-charcoal/60">Join thousands of others ready to transform their daily flow</p>
      </div>
    </section>
  )
}
