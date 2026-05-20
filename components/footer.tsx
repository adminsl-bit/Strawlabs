"use client"

import { TransitionLink } from "./transition-link"

export function Footer() {
  return (
    <footer className="relative text-white py-4 md:py-6 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="border-t border-white/10 flex flex-col md:flex-row justify-between items-center pt-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-neutral-400">&copy; 2025 Straw Labs. Concept to Clarity.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-neutral-500">
              <a
                href="https://www.google.com/maps/search/?api=1&query=18+Arul+Malar+Convent+Street+KK+Nagar+Madurai+625020"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors opacity-70"
              >
                18, Arul Malar Convent Street, KK Nagar, Madurai-625020
              </a>
              <a href="mailto:info@strawlabs.in" className="hover:text-white transition-colors">info@strawlabs.in</a>
            </div>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/straw-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="LinkedIn">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
