import type { Metadata } from "next"
import { ArrowRight, CheckCircle2, GitPullRequest, Rocket, Sparkles, Users } from "lucide-react"
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Build With Straw Labs",
  description:
    "An execution-first cohort for students who want hands-on exposure to AI products, automation systems, startup operations, client execution workflows, tech sales, and real-world problem solving.",
}

const ecosystemAreas = [
  "Product & App Development",
  "AI Transformation Systems",
  "Workflow Automation",
  "AI Agents & Copilots",
  "Conversational AI Systems",
  "Internal Tools & Dashboards",
  "AI-native Operational Workflows",
]

const atlasLearning = [
  "Understand client problems",
  "Recommend AI solutions",
  "Support AI adoption conversations",
  "Explore AI enablement offerings",
  "Understand modern AI ecosystem solutions",
  "Present operational AI workflows",
  "Assist with ecosystem partnerships and rollout initiatives",
]

const learningOutcomes = [
  "Agile & Scrum workflows",
  "Tech sales discovery and client communication exposure",
  "AI-assisted product development",
  "Automation systems & AI agents",
  "Startup execution workflows",
  "Client problem-solving approaches",
  "AI adoption & operational systems",
  "Product thinking & execution",
  "Modern AI-native workflows",
]

const workflowSteps = [
  {
    title: "Get Assigned Tasks",
    description: "Receive structured startup-style tasks, operational responsibilities, and execution problems.",
  },
  {
    title: "Build & Execute With AI Tools",
    description: "Work with modern AI coding, automation, operational, and productivity systems.",
  },
  {
    title: "Submit Through GitHub & Workflow Systems",
    description: "Push work through GitHub workflows, operational systems, and structured review pipelines.",
  },
  {
    title: "Reviewed By Agents + Mentors",
    description: "AI systems and mentors review work before approvals, integrations, or deployments.",
  },
  {
    title: "Ship & Showcase",
    description: "Selected work gets integrated into ecosystem initiatives or showcased publicly.",
  },
]

const roles = [
  {
    title: "Forge Intern",
    subtitle: "Product & App Development",
    items: [
      "Build complete applications and product systems",
      "Work on frontend, backend, APIs, dashboards, and workflows",
      "Design and improve product experiences and interfaces",
      "Work with GitHub and structured pull request systems",
      "Use AI-assisted development workflows",
      "Support ecosystem product execution",
      "Collaborate on automation and operational workflows",
      "Learn startup-style execution systems",
    ],
  },
  {
    title: "Atlas Intern",
    subtitle: "AI Enablement & Tech Sales",
    items: [
      "Understand client pain points and workflows",
      "Support AI adoption conversations",
      "Explore AI enablement and ecosystem solutions",
      "Assist with AI solution recommendations",
      "Learn solution-oriented tech sales workflows",
      "Support ecosystem partnership activities",
      "Help position AI systems for operational use cases",
      "Travel may be required to meet clients and will be reimbursed as required",
    ],
  },
]

const faqs = [
  {
    question: "Is this a paid internship?",
    answer:
      "No. This is not a paid internship program. The Straw Labs Cohort is designed as an execution-focused learning ecosystem for students who want practical exposure to AI-native startup workflows, systems, products, automation, operations, and client execution.",
  },
  {
    question: "Is prior experience mandatory?",
    answer: "No. Strong curiosity, consistency, communication, execution mindset, and willingness to learn matter more.",
  },
  {
    question: "Is this remote?",
    answer: "Hybrid/remote depending on role and ecosystem requirements.",
  },
  {
    question: "Will I receive certificates?",
    answer: "Yes, based on participation quality, execution consistency, and contribution level.",
  },
  {
    question: "Will participants work on real projects?",
    answer:
      "Yes. Participants may work on ecosystem initiatives, operational systems, automation workflows, AI experiments, product systems, and execution activities.",
  },
  {
    question: "What tools will participants be exposed to?",
    answer:
      "Participants may work with GitHub, AI coding agents, automation platforms, AI tools, operational systems, product workflows, and startup execution frameworks.",
  },
  {
    question: "Is this only for developers?",
    answer:
      "No. The cohort includes opportunities across Product & App Development, AI Enablement & Tech Sales, Operations & Execution Systems, and UI/UX & Visual Systems.",
  },
  {
    question: "Will there be interviews or selection rounds?",
    answer:
      "Yes. Applications may go through shortlisting, discussions, or evaluation rounds before final selection.",
  },
  {
    question: "Do participants need a laptop or specific setup?",
    answer:
      "Yes. Participants are expected to have a personal laptop, a stable internet connection (WiFi preferred), and basic familiarity with online collaboration tools and workflows. Since the cohort involves practical execution, GitHub workflows, AI tools, automation systems, and collaborative startup-style activities, having a reliable working setup is important.",
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-primary">{children}</p>
}

function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http")

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-white/80 bg-white px-7 py-4 text-sm font-bold text-black shadow-[0_18px_55px_rgba(255,255,255,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_24px_70px_rgba(255,255,255,0.24)] md:min-h-[60px] md:px-8 md:text-base"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}

function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/18 bg-white/[0.045] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/38 hover:bg-white/[0.09] md:min-h-[60px] md:px-8 md:text-base"
    >
      {children}
    </a>
  )
}

function ContactModalLink({ children }: { children: React.ReactNode }) {
  return (
    <Modal>
      <ModalTrigger>
        <button className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/18 bg-white/[0.045] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/38 hover:bg-white/[0.09] md:min-h-[60px] md:px-8 md:text-base">
          {children}
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-300 md:text-base">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function BuildWithStrawLabsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <section className="relative px-6 pb-20 pt-36 md:px-12 lg:px-24 lg:pb-28 lg:pt-44">
        <div className="absolute left-[-12%] top-20 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-12%] top-56 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionLabel>Student Builder Cohort</SectionLabel>
            <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tighter text-white md:text-7xl lg:text-8xl">
              Build With Straw Labs
            </h1>
            <p className="mt-8 max-w-3xl text-lg font-light leading-relaxed text-neutral-300 md:text-2xl">
              An execution-first cohort for students who want hands-on exposure to AI products, automation systems, startup operations, client execution workflows, tech sales, and real-world problem solving across the Straw Labs ecosystem.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PrimaryLink href="https://tally.so/r/7RaYqa">Apply Now</PrimaryLink>
              <SecondaryLink href="#roles">Explore Roles</SecondaryLink>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-neutral-950/65 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                <Rocket className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">Program Timeline</p>
                <h2 className="text-3xl font-bold tracking-tight">14 Weeks</h2>
              </div>
            </div>
            <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
              A 14-week execution-focused program where participants progressively work on real ecosystem initiatives, workflows, product systems, operational execution, and AI-native startup environments.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {["Build", "Ship", "Showcase"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 text-sm font-semibold text-neutral-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>The Straw Labs Ecosystem</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">A focused AI-native execution ecosystem.</h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-neutral-400">
                A focused ecosystem of AI-native studios, systems, automation layers, and operational frameworks designed to help businesses adopt AI, automate workflows, and launch modern AI-powered products.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-neutral-950/60 p-6 md:p-8">
              <h3 className="mb-6 text-2xl font-bold tracking-tight text-white">Forge • Catalyst • Nexus • Sentinel • Echo</h3>
              <BulletList items={ecosystemAreas} />
              <p className="mt-8 border-t border-white/10 pt-6 text-base leading-relaxed text-neutral-300">
                Participants are expected to work across the complete execution cycle — from ideation and design to development, automation, deployment, operational workflows, and execution support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionLabel>Atlas — AI Enablement & Partnerships</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">Execution, communication, and solution-led AI adoption.</h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-neutral-400">
              Atlas focuses on AI enablement, ecosystem partnerships, and solution-driven tech sales. This is a more execution + communication + tech-sales focused role within the Straw Labs ecosystem.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {atlasLearning.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-neutral-950/60 p-5 text-sm text-neutral-300 backdrop-blur-sm md:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Not A Traditional Internship</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">A builder program for practical startup exposure.</h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-neutral-400">
                Straw Labs Cohort is an execution-first builder program designed for students who want practical exposure to modern AI-native startup workflows.
              </p>
              <p className="mt-5 text-lg font-light leading-relaxed text-neutral-400">
                Participants work on real ecosystem initiatives, products, automation systems, operational workflows, AI agents, and client-facing execution while collaborating through AI-assisted workflows, GitHub systems, and startup-style execution models.
              </p>
              <p className="mt-5 text-lg font-light leading-relaxed text-neutral-400">
                The focus is on learning by building, shipping, automating, documenting, solving problems, and understanding how modern AI-native companies operate.
              </p>
            </div>
            <div className="rounded-[2rem] border border-primary/30 bg-primary/10 p-6 md:p-8">
              <p className="text-xl font-semibold leading-relaxed text-white">This is not a paid internship program.</p>
              <p className="mt-5 text-base leading-relaxed text-neutral-300">
                The cohort is designed as a practical learning ecosystem for students who want startup exposure, portfolio-building opportunities, and hands-on AI-native execution experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>What You’ll Learn</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">Practical exposure and guided learning.</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {learningOutcomes.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-neutral-950/60 p-5 text-sm text-neutral-300 md:text-base">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>How The Workflow Works</SectionLabel>
          <div className="grid gap-5 lg:grid-cols-5">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="rounded-[1.5rem] border border-white/10 bg-neutral-950/60 p-5">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-black">{index + 1}</div>
                <h3 className="text-xl font-bold tracking-tight text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roles" className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Open Cohort Roles</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-2">
            {roles.map((role) => (
              <div key={role.title} className="rounded-[2rem] border border-white/10 bg-neutral-950/60 p-6 md:p-8">
                <div className="mb-8 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.08] text-primary">
                    {role.title.startsWith("Forge") ? <GitPullRequest className="h-6 w-6" /> : <Users className="h-6 w-6" />}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white">{role.title}</h2>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-neutral-500">{role.subtitle}</p>
                  </div>
                </div>
                <h3 className="mb-5 text-lg font-semibold text-white">What You Will Do</h3>
                <BulletList items={role.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>FAQ</SectionLabel>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-neutral-950/60 p-6">
                <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                <p className="mt-3 leading-relaxed text-neutral-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 text-center md:px-12 lg:px-24">
        <div className="absolute inset-x-0 bottom-0 mx-auto h-[420px] max-w-4xl rounded-full bg-primary/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Sparkles className="mx-auto mb-6 h-10 w-10 text-primary" />
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">Ready To Build With Straw Labs?</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-light leading-relaxed text-neutral-400 md:text-xl">
            Join an execution-focused cohort built around AI-native workflows, startup systems, automation, operational execution, and real-world problem solving.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryLink href="https://tally.so/r/7RaYqa">Apply Now</PrimaryLink>
            <ContactModalLink>Contact Us</ContactModalLink>
          </div>
          <p className="mt-12 font-mono text-xs uppercase tracking-[0.28em] text-neutral-500">Built for students who want to learn by shipping.</p>
        </div>
      </section>
    </div>
  )
}
