"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TransitionLink } from "@/components/transition-link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const container = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()
      tl.fromTo(
        ".hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      )
        .fromTo(
          ".hero-image",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-subtitle",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.8",
        )
        .fromTo(
          ".hero-button",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" },
          "-=0.5",
        )
    },
    { scope: container },
  )

  return (
    <div ref={container} id="hero" className="relative w-full h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-black text-white">
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl">
        <h1 className="hero-title font-bold text-6xl md:text-8xl lg:text-[10rem] mb-4 tracking-tighter leading-none text-white mix-blend-difference z-20">
          Concept. Clarity. Impact.
        </h1>

        <div className="hero-image relative w-full max-w-2xl aspect-square -my-20 md:-my-40 pointer-events-none z-10">
          <img
            src="/hero-swirl.png"
            alt="Abstract Swirl"
            className="w-full h-full object-contain animate-slow-spin-subtle"
          />
        </div>

        <motion.p
          className="hero-subtitle text-xl md:text-2xl text-neutral-300 max-w-2xl mb-12 leading-relaxed z-20 relative font-light"
        >
          We transform complex AI concepts into clear, actionable solutions for businesses worldwide.
        </motion.p>

        <div className="hero-button z-20 relative">
          <TransitionLink href="/#services">
            <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-lg">
              See What We Do <ArrowRight className="w-5 h-5" />
            </button>
          </TransitionLink>
        </div>
      </div>
    </div>
  )
}
