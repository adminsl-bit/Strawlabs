"use client"

import { TransitionLink } from "./transition-link"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal"
import { ContactForm } from "@/components/contact-form"
import { HeaderSwirl } from "./header-swirl"

export function Header() {
  const headerRef = useRef(null)
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
            <TransitionLink href="/#hero" className="text-sm hover:text-white/80 transition-colors">
              Home
            </TransitionLink>

            <TransitionLink href="/#ecosystem" className="text-sm hover:text-white/80 transition-colors">
              Ecosystem
            </TransitionLink>

            <TransitionLink href="/#impact" className="text-sm hover:text-white/80 transition-colors">
              Impact
            </TransitionLink>
            <TransitionLink href="/#insights" className="text-sm hover:text-white/80 transition-colors">
              Insights
            </TransitionLink>
            <TransitionLink href="/#company" className="text-sm hover:text-white/80 transition-colors">
              Company
            </TransitionLink>
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
      </div>
    </motion.header>
  )
}
