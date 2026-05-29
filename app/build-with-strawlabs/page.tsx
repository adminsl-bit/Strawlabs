import type { Metadata } from "next"
import { CheckCircle2, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Build With Straw Labs — Cohort Closed",
  description:
    "Straw Labs Cohort 1.0 applications are now closed. The selected cohort is moving into build mode across AI-native products, workflows, systems, and execution.",
}

const buildModeFocus = [
  "Selected participants are moving from application review into active onboarding and execution.",
  "The cohort will now focus on building, documenting, reviewing, and improving real AI-native workflows and product systems.",
  "Public applications and intake forms are closed for this cohort cycle.",
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-primary">{children}</p>
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-relaxed text-neutral-300 md:text-lg">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function BuildWithStrawLabsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <section className="relative flex min-h-screen items-center px-6 py-32 md:px-12 lg:px-24">
        <div className="absolute left-[-12%] top-20 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-12%] bottom-20 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-[360px] max-w-5xl rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionLabel>Student Builder Cohort</SectionLabel>
            <div className="mb-8 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Applications Closed
            </div>
            <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tighter text-white md:text-7xl lg:text-8xl">
              Cohort 1.0 is closed. We’re entering build mode.
            </h1>
            <p className="mt-8 max-w-3xl text-lg font-light leading-relaxed text-neutral-300 md:text-2xl">
              Thank you to everyone who applied to Build With Straw Labs. Applications for this cohort cycle are now closed, and the selected student builders are moving into onboarding, execution, and hands-on project work.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-neutral-950/65 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">Current Status</p>
                <h2 className="text-3xl font-bold tracking-tight">Build Mode</h2>
              </div>
            </div>
            <BulletList items={buildModeFocus} />
            <p className="mt-8 border-t border-white/10 pt-6 text-base leading-relaxed text-neutral-400 md:text-lg">
              Future cohort updates will be shared after this build cycle progresses. For now, our focus is on helping the selected group learn by building, shipping, and improving real systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
