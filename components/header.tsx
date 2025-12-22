"use client"

import { TransitionLink } from "./transition-link"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import Image from "next/image"
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal"
import { ContactForm } from "@/components/contact-form"
// import { HeaderSwirl } from "./header-swirl"

export function Header() {
  const headerRef = useRef(null)

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 2,
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
          className="w-auto h-24 md:h-32 opacity-90 hover:opacity-100 transition-opacity mix-blend-difference relative z-50"
          priority
        />
      </TransitionLink>
      <div className="container mx-auto flex justify-center items-center relative h-full min-h-[80px]">
        <nav className="hidden md:flex items-center gap-6 text-white font-medium tracking-wide bg-black/20 backdrop-blur-sm px-8 py-3 rounded-full border border-white/5 relative overflow-hidden group">
          {/* <HeaderSwirl /> */}
          <div className="flex items-center gap-6">
            <TransitionLink href="/" className="hover:text-white transition-colors">
              Home
            </TransitionLink>
            <TransitionLink href="/#services" className="hover:text-white transition-colors">
              Services
            </TransitionLink>
            <TransitionLink href="/#how-we-work" className="hover:text-white transition-colors">
              Process
            </TransitionLink>
            <TransitionLink href="/#work" className="hover:text-white transition-colors">
              Work
            </TransitionLink>
            <TransitionLink href="/#insights" className="hover:text-white transition-colors">
              Insights
            </TransitionLink>
            <TransitionLink href="/#about" className="hover:text-white transition-colors">
              Why Us
            </TransitionLink>
            <Modal>
              <ModalTrigger>
                <button className="hover:text-white transition-colors">
                  Contact
                </button>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
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
