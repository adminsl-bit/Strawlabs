'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './section-scroll'
import Layout from './layout-scroll'
import { SECTIONS } from './constants-sections'

import { HeroSwirl } from './hero-swirl'

export default function LandingPage() {
    const [activeSection, setActiveSection] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ container: containerRef })
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

    useEffect(() => {
        const getSectionTop = (targetId: string) => {
            if (!containerRef.current) return 0
            if (targetId === "hero" || targetId === "home") return 0
            const targetElement = containerRef.current.querySelector<HTMLElement>(`#${targetId}`)
            return targetElement?.offsetTop ?? 0
        }

        const handleScroll = () => {
            if (containerRef.current) {
                const scrollPosition = containerRef.current.scrollTop
                const sectionElements = Array.from(containerRef.current.querySelectorAll<HTMLElement>("section[id]"))
                const newActiveSection = sectionElements.reduce((closestIndex, section, index) => {
                    const currentDistance = Math.abs(section.offsetTop - scrollPosition)
                    const closestDistance = Math.abs(sectionElements[closestIndex]?.offsetTop - scrollPosition)
                    return currentDistance < closestDistance ? index : closestIndex
                }, 0)
                setActiveSection(newActiveSection)
            }
        }

        const handleScrollToSection = (e: CustomEvent) => {
            const targetId = e.detail.targetId;
            if (containerRef.current) {
                containerRef.current.scrollTo({
                    top: getSectionTop(targetId),
                    behavior: 'smooth'
                })
            }
        }

        const container = containerRef.current
        if (container) {
            container.addEventListener('scroll', handleScroll)
        }

        window.addEventListener('scrollToSection', handleScrollToSection as EventListener);

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll)
            }
            window.removeEventListener('scrollToSection', handleScrollToSection as EventListener);
        }
    }, [])

    const handleNavClick = (index: number) => {
        if (containerRef.current) {
            const targetSection = containerRef.current.querySelectorAll<HTMLElement>("section[id]")[index]
            containerRef.current.scrollTo({
                top: targetSection?.offsetTop ?? 0,
                behavior: 'smooth'
            })
        }
    }

    return (
        <Layout>
            <div className="fixed inset-0 z-0 pointer-events-none">
                <HeroSwirl />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            <nav className="fixed top-0 right-4 h-screen flex flex-col justify-center z-30 p-4 hidden md:flex">
                {SECTIONS.map((section, index) => (
                    <button
                        key={section.id}
                        className={`w-3 h-3 rounded-full my-2 transition-all duration-300 ${index === activeSection ? 'bg-white scale-150' : 'bg-neutral-600 hover:bg-neutral-400'
                            }`}
                        onClick={() => handleNavClick(index)}
                        aria-label={`Scroll to ${section.label}`}
                    />
                ))}
            </nav>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-30"
                style={{ scaleX }}
            />
            <div
                ref={containerRef}
                className="h-screen overflow-y-auto snap-y snap-proximity md:snap-mandatory scroll-smooth relative z-10"
            >
                {SECTIONS.map((section, index) => (
                    <Section
                        key={section.id}
                        {...section}
                        isActive={index === activeSection}
                    />
                ))}
            </div>
        </Layout>
    )
}
