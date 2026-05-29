"use client"

import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"
import { TransitionLink } from "@/components/transition-link"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Scene } from "@/components/scene"
import { InsightsScene } from "@/components/insights-scene"
import { Footer } from "@/components/footer"
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal"
import { ContactForm } from "@/components/contact-form"

interface CardItem {
    title: string
    description: string
    label?: string
    image?: string
}

interface SectionProps {
    id: string
    type?: string
    eyebrow?: string
    title: string
    subtitle: string
    content: string
    isActive: boolean
    showButton: boolean
    buttonText: string
    secondaryButtonText?: string
    cards?: CardItem[]
    chips?: string[]
}

const primaryCtaClass = "group relative inline-flex min-h-[56px] w-full sm:w-auto sm:min-w-[240px] items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full border border-white/80 bg-white px-7 py-4 text-sm font-bold text-black shadow-[0_18px_55px_rgba(255,255,255,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_24px_70px_rgba(255,255,255,0.24)] focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black md:min-h-[60px] md:px-8 md:text-base"
const secondaryCtaClass = "group relative inline-flex min-h-[56px] w-full sm:w-auto sm:min-w-[282px] items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full border border-white/18 bg-white/[0.045] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/38 hover:bg-white/[0.09] hover:shadow-[0_24px_70px_rgba(255,255,255,0.08)] focus:outline-none focus:ring-2 focus:ring-white/35 focus:ring-offset-2 focus:ring-offset-black md:min-h-[60px] md:px-8 md:text-base"

function CtaArrow() {
    return <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 md:h-5 md:w-5" />
}

function ContactModalButton({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "secondary" }) {
    const className = variant === "primary" ? primaryCtaClass : secondaryCtaClass

    return (
        <Modal>
            <ModalTrigger>
                <button className={className}>
                    <span className="relative z-10">{children}</span>
                    <CtaArrow />
                </button>
            </ModalTrigger>
            <ModalBody>
                <ModalContent className="bg-[#0a0a0a] border-white/10">
                    <ContactForm />
                </ModalContent>
            </ModalBody>
        </Modal>
    )
}

function SectionHeader({ eyebrow, title, subtitle, align = "left" }: { eyebrow?: string; title: string; subtitle: string; align?: "left" | "center" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${align === "center" ? "text-center mx-auto" : ""} mb-8 md:mb-12 max-w-4xl`}
        >
            {eyebrow && (
                <span className="text-primary font-mono text-xs md:text-sm uppercase tracking-[0.28em] mb-4 block">
                    {eyebrow}
                </span>
            )}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4">
                {title}
            </h2>
            <p className="text-base md:text-xl text-neutral-400 font-light leading-relaxed max-w-3xl">
                {subtitle}
            </p>
        </motion.div>
    )
}

function SystemCard({ card, index, isActive, compact = false }: { card: CardItem; index: number; isActive: boolean; compact?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
            className="h-full"
        >
            <div className={`${compact ? "min-h-[145px] md:min-h-[175px] p-4 md:p-5" : "min-h-[155px] md:min-h-[205px] p-5 md:p-6"} h-full rounded-2xl border border-white/10 bg-neutral-950/55 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-neutral-900/80 group relative overflow-hidden`}>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {card.label && (
                    <p className={`${compact ? "text-[9px] md:text-[10px] tracking-[0.18em] mb-3" : "text-[11px] tracking-[0.22em] mb-4"} text-primary font-mono uppercase`}>
                        {card.label}
                    </p>
                )}
                <h3 className={`${compact ? "text-xl md:text-2xl mb-3" : "text-2xl md:text-3xl mb-4"} font-bold text-white tracking-tight group-hover:text-primary transition-colors`}>
                    {card.title}
                </h3>
                <p className={`${compact ? "text-xs md:text-sm leading-relaxed" : "text-sm md:text-base leading-relaxed"} text-neutral-400`}>
                    {card.description}
                </p>
            </div>
        </motion.div>
    )
}

export default function Section({
    id,
    type,
    eyebrow,
    title,
    subtitle,
    content,
    isActive,
    showButton,
    buttonText,
    secondaryButtonText,
    cards,
    chips,
}: SectionProps) {

    if (type === "hero") {
        return (
            <section id={id} className="relative min-h-screen md:h-screen w-full snap-start flex items-center justify-center px-6 py-28 md:p-16 lg:p-24 overflow-hidden">
                <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isActive ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="z-10 relative order-1 text-left"
                    >
                        {eyebrow && (
                            <span className="text-primary font-mono text-xs md:text-sm uppercase tracking-[0.28em] mb-5 block">
                                {eyebrow}
                            </span>
                        )}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-[0.95] tracking-tighter mb-5 text-white mix-blend-difference">
                            {title}
                        </h1>
                        <p className="text-base md:text-xl text-neutral-300 mb-6 max-w-2xl font-light leading-relaxed">
                            {subtitle}
                        </p>
                        {chips && (
                            <div className="flex flex-wrap gap-2 mb-7 max-w-2xl">
                                {chips.map((chip) => (
                                    <span key={chip} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs md:text-sm text-neutral-300 backdrop-blur-sm">
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        )}
                        {showButton && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isActive ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <TransitionLink href="/#ecosystem" className={primaryCtaClass}>
                                    <span className="relative z-10">{buttonText}</span>
                                    <CtaArrow />
                                </TransitionLink>
                                {secondaryButtonText && <ContactModalButton variant="secondary">{secondaryButtonText}</ContactModalButton>}
                            </motion.div>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isActive ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative z-0 hidden md:flex justify-center items-center order-2 h-[220px] md:h-[420px] lg:h-[520px] w-full"
                    >
                        <div className="absolute inset-8 rounded-full bg-primary/10 blur-3xl" />
                        <div className="relative w-full h-full opacity-85">
                            <Canvas camera={{ position: [0, 0, 3.5], fov: 75 }} gl={{ antialias: false, alpha: true }}>
                                <Scene />
                            </Canvas>
                        </div>
                    </motion.div>
                </div>
            </section>
        )
    }

    if (type === "ecosystem") {
        return (
            <section id={id} className="relative min-h-screen md:h-screen w-full snap-start flex flex-col justify-start md:justify-center px-6 py-28 md:p-16 lg:p-24 overflow-visible md:overflow-hidden">
                <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 w-full max-w-[90rem]" initial={{ opacity: 0 }} animate={isActive ? { opacity: 1 } : {}}>
                    {cards?.map((card, index) => <SystemCard key={card.title} card={card} index={index} isActive={isActive} compact />)}
                </motion.div>
            </section>
        )
    }

    if (type === "featured-product") {
        return (
            <section id={id} className="relative min-h-screen md:h-screen w-full snap-start flex items-center px-6 py-28 md:p-16 lg:p-24 overflow-visible md:overflow-hidden">
                <div className="absolute right-[-12%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isActive ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 max-w-7xl w-full items-center"
                >
                    <div className="rounded-[2rem] border border-white/10 bg-neutral-950/60 p-6 md:p-8 min-h-[320px] flex flex-col justify-between backdrop-blur-md">
                        <div>
                            <span className="text-primary font-mono text-xs uppercase tracking-[0.28em] mb-5 block">{eyebrow}</span>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-5">{title}</h2>
                            <p className="text-xl md:text-2xl text-neutral-300 font-light">{subtitle}</p>
                        </div>
                        {chips && (
                            <div className="flex flex-wrap gap-2 mt-8">
                                {chips.map((chip) => <span key={chip} className="rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-neutral-300">{chip}</span>)}
                            </div>
                        )}
                    </div>
                    <div>
                        <p className="text-2xl md:text-4xl text-white font-light leading-tight max-w-3xl mb-10">{content}</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={id === "seeenly" ? "https://www.seeenly.com" : "/#contact"}
                                target={id === "seeenly" ? "_blank" : undefined}
                                rel={id === "seeenly" ? "noopener noreferrer" : undefined}
                                className={primaryCtaClass}
                            >
                                <span className="relative z-10">{buttonText}</span>
                                <CtaArrow />
                            </a>
                            {secondaryButtonText && <ContactModalButton variant="secondary">{secondaryButtonText}</ContactModalButton>}
                        </div>
                    </div>
                </motion.div>
            </section>
        )
    }

    if (type === "operating-layers" || type === "impact" || type === "company") {
        const compact = type === "impact" || type === "company"
        return (
            <section id={id} className="relative min-h-screen md:h-screen w-full snap-start flex flex-col justify-start md:justify-center px-6 py-28 md:p-16 lg:p-24 overflow-visible md:overflow-hidden">
                <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
                {content && type === "company" && (
                    <p className="text-xl md:text-3xl text-white/90 font-light leading-relaxed max-w-5xl mb-8">
                        {content}
                    </p>
                )}
                <div className={`grid grid-cols-1 md:grid-cols-2 ${type === "operating-layers" ? "lg:grid-cols-3 xl:grid-cols-5 max-w-[90rem]" : "xl:grid-cols-4 max-w-7xl"} gap-4 md:gap-5 w-full`}>
                    {cards?.map((card, index) => <SystemCard key={card.title} card={card} index={index} isActive={isActive} compact={compact || type === "operating-layers"} />)}
                </div>
                {showButton && (
                    <motion.div className="mt-9" initial={{ opacity: 0, y: 20 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
                        <ContactModalButton>{buttonText}</ContactModalButton>
                    </motion.div>
                )}
            </section>
        )
    }

    if (type === "cohort") {
        return (
            <section id={id} className="relative min-h-screen md:h-screen w-full snap-start flex items-center px-6 py-24 md:p-14 lg:p-20 overflow-visible md:overflow-hidden">
                <div className="absolute left-[-12%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isActive ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-14 max-w-7xl w-full items-center"
                >
                    <div>
                        {eyebrow && <span className="text-primary font-mono text-xs md:text-sm uppercase tracking-[0.28em] mb-5 block">{eyebrow}</span>}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tighter mb-5 text-white mix-blend-difference">{title}</h2>
                        <p className="text-base md:text-xl text-neutral-400 font-light leading-relaxed max-w-3xl">{subtitle}</p>
                        {showButton && (
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Link href="/build-with-strawlabs" prefetch className={primaryCtaClass}>
                                    <span className="relative z-10">{buttonText}</span>
                                    <CtaArrow />
                                </Link>
                                {secondaryButtonText && (
                                    <Link href="/build-with-strawlabs" prefetch className={secondaryCtaClass}>
                                        <span className="relative z-10">{secondaryButtonText}</span>
                                        <CtaArrow />
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="rounded-[2rem] border border-white/10 bg-neutral-950/60 p-5 md:p-6 backdrop-blur-md">
                        <p className="text-primary font-mono text-xs uppercase tracking-[0.28em] mb-5">COHORT STATUS</p>
                        <div className="space-y-4">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Applications Closed</h3>
                                <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Selection cycle complete</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Build Mode Active</h3>
                                <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Selected cohort moving into execution</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        )
    }

    if (type === "cta") {
        return (
            <section id={id} className="relative min-h-screen md:h-screen w-full snap-start flex flex-col justify-center items-center text-center overflow-hidden px-6 py-28 md:p-16 lg:p-24">
                <div className="absolute inset-0 bg-primary/5 z-0" />
                <div className="flex-grow flex flex-col justify-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={isActive ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="max-w-5xl mx-auto"
                    >
                        {eyebrow && <span className="text-primary font-mono text-xs md:text-sm uppercase tracking-[0.28em] mb-5 block">{eyebrow}</span>}
                        <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-7 text-white">{title}</h2>
                        <p className="text-lg md:text-2xl text-neutral-400 font-light leading-relaxed max-w-3xl mx-auto mb-10">{subtitle}</p>
                        {showButton && <ContactModalButton>{buttonText}</ContactModalButton>}
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full z-10">
                    <Footer />
                </div>
            </section>
        )
    }

    return (
        <section id={id} className="relative min-h-screen md:h-screen w-full snap-start flex flex-col justify-start md:justify-center px-6 py-28 md:p-16 lg:p-24 overflow-visible md:overflow-hidden">
            {id === "insights" && (
                <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0 opacity-70 hidden lg:block">
                    <Canvas camera={{ position: [0, 0, 3.5], fov: 75 }} gl={{ antialias: false, alpha: true }}>
                        <InsightsScene />
                    </Canvas>
                </div>
            )}
            <motion.div
                className="max-w-7xl relative z-10 w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <span className="text-primary font-mono text-xs md:text-sm uppercase tracking-[0.28em] mb-5 block">{eyebrow || title}</span>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter mb-8 text-white mix-blend-difference">
                    {title}
                </h2>
                <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed font-light mb-10">
                    {content || subtitle}
                </p>
                {showButton && id === "insights" && (
                    <TransitionLink href="/blog">
                        <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all text-white font-medium uppercase tracking-wider text-sm">
                            {buttonText}
                        </button>
                    </TransitionLink>
                )}
            </motion.div>
        </section>
    )
}
