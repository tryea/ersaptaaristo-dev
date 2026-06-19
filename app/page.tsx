import ContactForm from "@/components/ContactForm";

const WORK = [
  {
    name: "Reform",
    tag: "AI vision",
    blurb: "Body-composition tracker. Scan photos run through a vision LLM that returns a structured read and progress over time.",
    href: "https://reform.ersaptaaristo.dev",
  },
  {
    name: "RecruitCRM",
    tag: "RAG · doc AI",
    blurb: "AI applicant tracking. Resumes parsed into structured fields, embedded with pgvector, scored and ranked against the role.",
    href: "https://recruitcrm.ersaptaaristo.dev",
  },
  {
    name: "ReelGrid",
    tag: "Real-time PWA",
    blurb: "Visibility-aware video feed. Playback follows on-screen visibility, streaming live HLS off Mux. Installable, battery aware.",
    href: "https://reelgrid.ersaptaaristo.dev",
  },
  {
    name: "Hostly",
    tag: "Payments · PWA",
    blurb: "Supabase, Stripe and PWA foundation. Auth, subscriptions, entitlement gating, and an installable shell, ready to extend.",
    href: "https://hostly.ersaptaaristo.dev",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1120px] px-6">
      {/* nav */}
      <nav className="flex items-center justify-between py-6">
        <span className="mono text-[15px] font-semibold tracking-tight">
          Ersapta<span className="text-accent">.</span>
        </span>
        <div className="flex gap-6">
          <a href="#work" className="navlink eyebrow hover:text-ink">
            Work
          </a>
          <a href="#contact" className="navlink eyebrow hover:text-ink">
            Contact
          </a>
        </div>
      </nav>

      {/* hero: text left, real portrait right (Breedlove layout, Gustaf restraint) */}
      <header className="grid items-center gap-8 pb-10 pt-6 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:pb-16 md:pt-10">
        <div className="order-2 md:order-1">
          <div className="eyebrow flex items-center gap-2 rise rise-1">
            <span className="h-1 w-1 rounded-full bg-accent" />
            AI Integration Engineer
          </div>
          <h1 className="rise rise-2 mt-6 text-[clamp(46px,9vw,92px)] font-semibold leading-[0.95] tracking-[-0.03em]">
            Ersapta
            <br />
            Aristo
          </h1>
          <p className="rise rise-3 mt-7 max-w-[46ch] text-[17px] leading-relaxed text-ink-2">
            I build production AI into real products. RAG, agents, vision, and
            automation, wired into things people actually use, on Next.js and
            Supabase.
          </p>
          <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
            <a href="#work" className="mono text-[13px] text-ink-2 hover:text-accent">
              Selected work ↓
            </a>
          </div>
        </div>

        <div className="rise-img order-1 md:order-2">
          <div className="portrait-fade overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portrait.jpg"
              alt="Ersapta Aristo"
              className="portrait h-[68vh] max-h-[720px] w-full object-cover object-[center_88%] md:h-[82vh]"
            />
          </div>
        </div>
      </header>

      {/* work: indexed editorial list (Gustaf), not cards */}
      <section id="work" className="pt-10">
        <div className="flex items-baseline justify-between">
          <div className="eyebrow">Selected work</div>
          <div className="mono text-[12px] text-ink-3">04 / shipped, live</div>
        </div>
        <div className="mt-6">
          {WORK.map((w, i) => (
            <a
              key={w.name}
              href={w.href}
              target="_blank"
              rel="noreferrer"
              className="work-row group"
            >
              <span className="work-idx">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="text-[20px] font-semibold tracking-tight group-hover:text-accent">
                  {w.name}
                </span>
                <span className="mono ml-3 text-[11px] text-ink-3">{w.tag}</span>
                <span className="mt-1 block max-w-[60ch] text-[14px] leading-relaxed text-ink-2">
                  {w.blurb}
                </span>
              </span>
              <span className="mono self-center text-[12px] text-ink-3 group-hover:text-accent">
                Open <span className="work-arrow">↗</span>
              </span>
            </a>
          ))}
          <div className="border-t border-line" />
        </div>
      </section>

      {/* breadth (polymath in the body, not the headline) */}
      <section className="py-20">
        <div className="eyebrow">How I work</div>
        <p className="mt-6 max-w-[60ch] text-[clamp(20px,2.6vw,27px)] font-medium leading-[1.4] tracking-[-0.01em]">
          Full-stack, with AI as the multiplier. I go deep across the stack,
          retrieval, agents, vision, automation, payments, and ship clean, typed
          code a team can pick up cold. Fast, but I read every diff.
        </p>
      </section>

      {/* contact: heading + secondary links left, working form right */}
      <section
        id="contact"
        className="grid gap-10 border-t border-line py-16 md:grid-cols-[1fr_420px] md:gap-12"
      >
        <div>
          <div className="eyebrow">Let&apos;s build</div>
          <h2 className="mt-5 max-w-[14ch] text-[clamp(30px,6vw,56px)] font-semibold leading-[1.02] tracking-[-0.02em]">
            Have something to ship?
          </h2>
          <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-ink-2">
            Tell me what you&apos;re building and where AI fits. I&apos;ll reply
            with how I&apos;d approach it.
          </p>
          <div className="mt-7 flex flex-wrap gap-5">
            <a
              href="mailto:aristoersapta@gmail.com"
              className="navlink mono text-[13px] text-ink-2 hover:text-ink"
            >
              aristoersapta@gmail.com
            </a>
            <a
              href="https://github.com/tryea"
              target="_blank"
              rel="noreferrer"
              className="navlink mono text-[13px] text-ink-2 hover:text-ink"
            >
              github.com/tryea
            </a>
          </div>
        </div>
        <ContactForm />
      </section>

      <footer className="flex flex-col gap-2 py-8 text-ink-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="mono text-[12px]">Ersapta Aristo, AI Integration Engineer</span>
        <span className="mono text-[12px]">ersaptaaristo.dev</span>
      </footer>
    </main>
  );
}
