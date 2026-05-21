"use client"

import { TransitionLink } from "./transition-link"
import { AnimatePresence, motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal"
import { ContactForm } from "@/components/contact-form"
import { HeaderSwirl } from "./header-swirl"

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#ecosystem", label: "Ecosystem" },
  { href: "/#impact", label: "Impact" },
  { href: "/#insights", label: "Insights" },
  { href: "/#company", label: "Company" },
]

export function Header() {
  const headerRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.prefetch("/build-with-strawlabs")
  }, [router])

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.4,
    })
  }, [])

  return (
    <motion.header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 p-4">
      <TransitionLink href="/" className="absolute top-1/2 -translate-y-1/2 left-8 md:left-12 z-50" aria-label="S.T.R.A.W. Labs Home">
        <Image
          src="/images/strawlabs-20-281-29.png"
          alt="S.T.R.A.W. Labs Logo"
          width={150}
          height={100}
          className="w-auto h-20 md:h-28 opacity-90 hover:opacity-100 transition-opacity mix-blend-difference relative z-50"
          priority
        />
      </TransitionLink>

      <div className="container mx-auto flex justify-center items-center relative h-full min-h-[72px]">
        <nav className="hidden md:flex items-center gap-6 text-white font-medium tracking-wide bg-black/30 backdrop-blur-md px-7 py-3 rounded-full border border-white/10 relative overflow-visible group/nav">
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <HeaderSwirl />
          </div>
          <div className="flex items-center gap-6 relative z-10">
            {navLinks.map((link) => (
              <TransitionLink key={link.href} href={link.href} className="text-sm hover:text-white/80 transition-colors">
                {link.label}
              </TransitionLink>
            ))}
            <Link href="/build-with-strawlabs" prefetch className="text-sm hover:text-white/80 transition-colors">
              Cohort
            </Link>
            <Modal>
              <ModalTrigger>
                <button className="text-sm hover:text-white/80 transition-colors">
                  Contact
                </button>
              </ModalTrigger>
              <ModalBody>
                <ModalContent className="bg-[#0a0a0a] border-white/10">
                  <ContactForm />
                </ModalContent>
              </ModalBody>
            </Modal>
          </div>
        </nav>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="md:hidden fixed top-6 right-5 z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white shadow-lg shadow-black/30 backdrop-blur-md transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden fixed left-4 right-4 top-24 z-[60] overflow-hidden rounded-3xl border border-white/10 bg-black/85 p-5 text-white shadow-2xl shadow-black/40 backdrop-blur-xl"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-white/5" />
              <div className="relative z-10 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <TransitionLink
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium tracking-wide text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </TransitionLink>
                ))}
                <Link
                  href="/build-with-strawlabs"
                  prefetch
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium tracking-wide text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                >
                  Cohort
                </Link>
                <Modal>
                  <ModalTrigger>
                    <button
                      type="button"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="mt-2 w-full rounded-2xl border border-white/15 bg-white px-4 py-3 text-left text-base font-semibold tracking-wide text-black transition-colors hover:bg-white/90"
                    >
                      Contact
                    </button>
                  </ModalTrigger>
                  <ModalBody>
                    <ModalContent className="bg-[#0a0a0a] border-white/10">
                      <ContactForm />
                    </ModalContent>
                  </ModalBody>
                </Modal>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
