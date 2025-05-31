import { Shield, Youtube, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 bg-midnight-charcoal text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-white/80">© {currentYear} Habit Flow App. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Shield className="w-4 h-4" />
              Privacy Policy
            </a>

            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
