import { Shield, Youtube, Instagram, Twitter, Brain } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="pt-20 pb-12 px-4 bg-gradient-to-b from-midnight-charcoal to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-indigo/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-hot-coral/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="w-8 h-8 bg-gradient-to-br from-electric-indigo to-hot-coral rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-electric-indigo to-hot-coral bg-clip-text text-transparent">
                Habit Flow
              </span>
            </div>
            <p className="text-white/60 text-sm">
              Transforming daily habits into effortless routines with the power of AI.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#features" className="text-white/60 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-white/60 hover:text-white transition-colors">About Us</a>
              <a href="#blog" className="text-white/60 hover:text-white transition-colors">Blog</a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <a href="mailto:hello@habitflow.app" className="text-white/60 hover:text-white transition-colors">
              hello@habitflow.app
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-white/60 text-sm">
              © {currentYear} Habit Flow App. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <a
              href="/privacy-policy"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
            >
              <Shield className="w-4 h-4 group-hover:text-hot-coral transition-colors" />
              <span>Privacy Policy</span>
            </a>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white/60 hover:text-white transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
