import ContactForm from "@/components/ContactForm";

type Project = {
  name: string;
  tag: string;
  blurb: string;
  href: string;
};

const AI_WORK: Project[] = [
  {
    name: "FinRAG",
    tag: "RAG",
    blurb: "Hybrid retrieval over real financial filings. Dense vectors and full-text search fused with reciprocal rank fusion, reranked, then answered with inline citations back to the source page.",
    href: "https://finrag.ersaptaaristo.dev",
  },
  {
    name: "AgentDesk",
    tag: "Agents",
    blurb: "A support agent that investigates with tools, keeps memory across conversations, and pauses for human approval before it issues a refund or sends an email.",
    href: "https://agentdesk.ersaptaaristo.dev",
  },
  {
    name: "SQLGuard",
    tag: "Guardrails",
    blurb: "Plain English to SQL with three independent guardrail layers that block a destructive query before it can ever reach the database.",
    href: "https://sqlguard.ersaptaaristo.dev",
  },
  {
    name: "SemCache",
    tag: "LLMOps",
    blurb: "A semantic cache that reuses a stored answer when a new question means the same thing, cutting model spend and latency to near zero on a hit.",
    href: "https://semcache.ersaptaaristo.dev",
  },
  {
    name: "EvalForge",
    tag: "Evals",
    blurb: "Turns real support logs into a rubric test suite, then scores a model against it with a separate LLM acting as the judge.",
    href: "https://evalforge.ersaptaaristo.dev",
  },
  {
    name: "LoRALab",
    tag: "Fine-tuning",
    blurb: "A real LoRA fine-tune of a small model on a laptop GPU, doubling its labeling accuracy on a held-out test set.",
    href: "https://loralab.ersaptaaristo.dev",
  },
];

const WORK: Project[] = [
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

function WorkCard({ w, i }: { w: Project; i: number }) {
  return (
    <a
      href={w.href}
      target="_blank"
      rel="noreferrer"
      className="card group flex w-[270px] shrink-0 flex-col p-5 transition-colors hover:bg-surface-2 sm:w-[300px]"
    >
      <div className="flex items-center justify-between">
        <span className="mono text-[12px] text-accent">
          {String(i + 1).padStart(2, "0")}
        </span>
        <span className="mono text-[11px] text-ink-3">{w.tag}</span>
      </div>
      <span className="mt-5 text-[19px] font-semibold tracking-tight text-ink group-hover:text-accent">
        {w.name}
      </span>
      <span className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-2">
        {w.blurb}
      </span>
      <span className="mono mt-5 text-[12px] text-ink-3 group-hover:text-accent">
        Open <span className="work-arrow">↗</span>
      </span>
    </a>
  );
}

// Auto-scrolling marquee: the set is rendered twice so the loop is seamless;
// the track animates continuously and pauses on hover (see globals.css).
function WorkList({ items, duration }: { items: Project[]; duration: number }) {
  return (
    <div className="marquee mt-6">
      <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
        {[0, 1].map((dup) => (
          <div className="marquee-set" key={dup} aria-hidden={dup === 1}>
            {items.map((w, i) => (
              <WorkCard key={`${dup}-${w.name}`} w={w} i={i} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1120px] px-6">
      {/* nav */}
      <nav className="flex items-center justify-between py-6">
        <span className="flex items-center gap-2.5">
          <svg viewBox="0 0 100 100" className="h-7 w-7 shrink-0" aria-hidden="true">
            <path d="M12 88 L50 14 L88 88" fill="none" stroke="#d4a24e" strokeWidth="10" strokeLinejoin="miter" />
            <rect x="34" y="42" width="31" height="7" fill="#d4a24e" />
            <rect x="34" y="56.5" width="18" height="7" fill="#d4a24e" />
            <rect x="34" y="71" width="31" height="7" fill="#d4a24e" />
          </svg>
          <span
            className="text-[16px] font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-cinzel), Georgia, serif" }}
          >
            Ersapta Aristo
          </span>
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
        <div className="order-1">
          <h1 className="rise rise-1 text-[clamp(46px,9vw,92px)] font-semibold leading-[0.95] tracking-[-0.03em]">
            Ersapta
            <br />
            Aristo
          </h1>
          <p className="rise rise-2 mt-4 text-[clamp(19px,2.6vw,24px)] font-medium text-ink">
            Full-Stack Developer
          </p>
          <p className="rise rise-3 mt-5 max-w-[48ch] text-[17px] leading-relaxed text-ink-2">
            I help entrepreneurs turn ideas into real products and new
            businesses. Full-stack from database to interface, with AI and Web3
            in my toolkit.
          </p>
          <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
            <a href="#work" className="text-[14px] text-ink-2 hover:text-accent">
              See the work
            </a>
          </div>
        </div>

        <div className="rise-img order-2 mt-4 md:mt-0">
          <div className="portrait-fade overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portrait.webp"
              alt="Ersapta Aristo"
              className="portrait h-[56vh] max-h-[680px] w-full object-cover object-[center_30%] md:h-[82vh] md:max-h-[760px]"
            />
          </div>
        </div>
      </header>

      {/* Portfolio, field 1: AI engineering capability demos */}
      <section id="work" className="pt-10">
        <div className="eyebrow">AI Engineering</div>
        <WorkList items={AI_WORK} duration={45} />
      </section>

      {/* Portfolio, field 2: full-stack app builds */}
      <section className="pt-14">
        <div className="eyebrow">Full Stack</div>
        <WorkList items={WORK} duration={30} />
      </section>

      {/* breadth: full-stack range, builder-for-founders framing */}
      <section className="py-20">
        <div className="eyebrow">How I work</div>
        <p className="mt-6 max-w-[60ch] text-[clamp(20px,2.6vw,27px)] font-medium leading-[1.4] tracking-[-0.01em]">
          Full-stack, end to end. Frontend, backend, data, AI, and Web3,
          delivered as clean, typed code a team can pick up cold. I build like
          the business is mine. Fast, but I read every diff.
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
            Have an idea to build?
          </h2>
          <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-ink-2">
            Tell me about your idea and where you want to take it. I&apos;ll reply
            with how I&apos;d build it.
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
        <span className="mono text-[12px]">Ersapta Aristo, Full-Stack Developer</span>
        <span className="mono text-[12px]">ersaptaaristo.dev</span>
      </footer>
    </main>
  );
}
