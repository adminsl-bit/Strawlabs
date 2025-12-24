"use client"

import { Canvas } from "@react-three/fiber"

import { motion } from "framer-motion"
import { TransitionLink } from "@/components/transition-link"
import { ArrowRight } from "lucide-react"
import { Hero } from "@/components/hero"
import { Scene } from "@/components/scene"
import { InsightsScene } from "@/components/insights-scene"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { Footer } from "@/components/footer"
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal"
import { ContactForm } from "@/components/contact-form"

interface CardItem {
    title: string
    description: string
    image?: string
}

interface StepItem {
    title: string
    description: string
    icon: string
}

interface SectionProps {
    id: string
    type?: string
    title: string
    subtitle: string
    content: string
    isActive: boolean
    showButton: boolean
    buttonText: string
    cards?: CardItem[]
    steps?: StepItem[]
    testimonials?: any[]
}

export default function Section({
    id,
    type,
    title,
    subtitle,
    content,
    isActive,
    showButton,
    buttonText,
    cards,
    steps,
    testimonials,
}: SectionProps) {

    // Custom Hero Implementation
    if (type === "hero") {
        return (
            <div className="w-full snap-start">
                <Hero />
            </div>
        )
    }

    // CTA Section
    if (type === "cta") {
        return (
            <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center items-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 z-0" />
                <div className="flex-grow flex flex-col justify-center relative z-10 p-8 md:p-16 lg:p-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isActive ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">{title}</h2>
                        {showButton && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isActive ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Modal>
                                    <ModalTrigger>
                                        <button className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform mx-auto">
                                            {buttonText} <ArrowRight className="w-6 h-6" />
                                        </button>
                                    </ModalTrigger>
                                    <ModalBody>
                                        <ModalContent>
                                            <ContactForm />
                                        </ModalContent>
                                    </ModalBody>
                                </Modal>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full z-10">
                    <Footer />
                </div>
            </section>
        )
    }

    // Process Section (How We Work)
    if (type === "process") {
        const iconMap: Record<string, any> = {
            Search: () => (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                    <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            PenTool: () => (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="m12 19 7-7 3 3-7 7-3-3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="m2 2 7.586 7.586" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="11" cy="11" r="2" strokeWidth="2" />
                </svg>
            ),
            Hammer: () => (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.64 15 22 10.64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            TrendingUp: () => (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="16 7 22 7 22 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        };

        return (
            <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 pt-32 md:pt-40">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isActive ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">{title}</h2>
                    <p className="text-lg md:text-xl text-neutral-400 font-light">{subtitle}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative">
                    {/* Connection line for desktop */}
                    <div className="hidden lg:block absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent z-0" />

                    {steps?.map((step, index) => {
                        const IconComponent = iconMap[step.icon];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isActive ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.15) }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-full bg-neutral-900 border-2 border-neutral-700 flex items-center justify-center mb-6 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-lg">
                                    {IconComponent && <IconComponent />}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{step.title}</h3>
                                <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        )
    }

    // Cards Section (Portfolio)
    if (type === "cards") {
        return (
            <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 pt-32 md:pt-40">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isActive ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="mb-6 md:mb-8"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-white tracking-tight">{title}</h2>
                    <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl">{subtitle}</p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-7xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={isActive ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {cards?.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isActive ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="h-full"
                        >
                            <div className="h-[180px] md:h-[220px] flex flex-col justify-end p-6 bg-neutral-900/40 border border-white/10 rounded-2xl transition-all duration-500 hover:border-primary/50 relative overflow-hidden group cursor-pointer">
                                {card.image && (
                                    <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                                        <img src={card.image} alt={card.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0 pointer-events-none" />
                                <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                                    <p className="text-neutral-300 text-sm md:text-base group-hover:text-white transition-colors">{card.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        )
    }

    // Standard Section
    return (
        <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-hidden">
            {id === "insights" && (
                <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">
                            {isActive ? "// " + title : ""}
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter mb-8 text-white mix-blend-difference">
                            {title}
                        </h2>

                        <div className="flex flex-col gap-12 items-start mt-12">
                            <motion.p
                                className="text-xl md:text-2xl text-neutral-400 max-w-xl leading-relaxed font-light"
                                initial={{ opacity: 0 }}
                                animate={isActive ? { opacity: 1 } : {}}
                                transition={{ delay: 0.4, duration: 1 }}
                            >
                                {content || subtitle}
                            </motion.p>

                            {showButton && (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={isActive ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ delay: 0.6 }}
                                >
                                    {id === "insights" ? (
                                        <TransitionLink href="/blog">
                                            <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all text-white font-medium uppercase tracking-wider text-sm">
                                                {buttonText}
                                            </button>
                                        </TransitionLink>
                                    ) : (
                                        <Modal>
                                            <ModalTrigger>
                                                <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all text-white font-medium uppercase tracking-wider text-sm">
                                                    {buttonText}
                                                </button>
                                            </ModalTrigger>
                                            <ModalBody>
                                                <ModalContent>
                                                    <ContactForm />
                                                </ModalContent>
                                            </ModalBody>
                                        </Modal>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {id === "about" && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isActive ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="hidden lg:block h-full"
                        >
                            <AnimatedTestimonials testimonials={testimonials || []} />
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </section>
    )
}
