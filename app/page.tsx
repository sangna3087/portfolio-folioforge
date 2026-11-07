import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  GitBranch,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
} from 'lucide-react'

const skills = [
  { label: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript'], icon: Terminal },
  { label: 'Frontend & Tools', items: ['React', 'Vite', 'Tailwind CSS', 'Git', 'GitHub', 'Vercel'], icon: Code2 },
  { label: 'AI & Data Stack', items: ['LangChain', 'ChromaDB'], icon: BrainCircuit },
]

const projects = [
  {
    number: '01',
    title: 'Datheon GenAI RAG Pipeline',
    description: 'A focused retrieval-augmented generation pipeline that turns a document collection into useful, grounded answers.',
    stack: ['Python', 'LangChain', 'Streamlit'],
    href: 'https://github.com/sangna3087/Datheon_Python_Generative_AI_LangChain_Internship',
  },
  {
    number: '02',
    title: 'Personal Developer Portfolio',
    description: 'A responsive, typography-led portfolio for sharing selected work, curious experiments, and the person behind the code.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    href: 'https://github.com/sangna3087',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0d0e] text-[#eef1ed]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[520px] w-[700px] -translate-x-1/2 rounded-full bg-[#b38cff]/[0.07] blur-[130px]" />

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-8">
        <a href="#top" className="font-mono text-sm tracking-tight text-[#b38cff]">SAB<span className="text-white/30">/</span>26</a>
        <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-white/50 md:flex">
          <a className="transition-colors hover:text-[#b38cff]" href="#about">About</a>
          <a className="transition-colors hover:text-[#b38cff]" href="#work">Work</a>
          <a className="transition-colors hover:text-[#b38cff]" href="#contact">Contact</a>
        </div>
        <a href="#contact" className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/70 transition hover:border-[#b38cff]/60 hover:text-[#b38cff]">Let&apos;s talk</a>
      </nav>

      <section id="top" className="relative z-10 mx-auto flex min-h-[680px] max-w-6xl flex-col justify-center px-6 pb-28 pt-20 lg:px-8">
        <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#b38cff]"><span className="h-px w-10 bg-[#b38cff]" /> Available for interesting problems</div>
        <h1 className="max-w-5xl text-[clamp(3.8rem,10vw,9.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">Building useful<br /><span className="text-white/35">things with</span> intent.</h1>
        <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/10 pt-7 md:flex-row md:items-end">
          <p className="max-w-md text-lg leading-relaxed text-white/55">I&apos;m <strong className="font-medium text-white">Sangna Acharya BM</strong> — a B.Tech CSE student at MSRUAS exploring AI/ML, thoughtful interfaces, and the space between an idea and its shipped version.</p>
          <div className="flex shrink-0 gap-3"><a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-[#b38cff] px-5 py-3 text-sm font-medium text-[#f5f1ff] transition hover:bg-white">View projects <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a><a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/75 transition hover:border-white/50 hover:text-white">Get in touch</a></div>
        </div>
      </section>

      <section id="about" className="relative z-10 border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div><p className="mb-5 font-mono text-xs text-[#b38cff]">01 / ABOUT</p><h2 className="max-w-sm text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">Curiosity, but with a compiler.</h2></div>
          <div className="max-w-2xl"><p className="text-2xl leading-relaxed tracking-tight text-white/80">A computer science undergrad bridging the gap between algorithms and real-world applications.</p><p className="mt-7 leading-7 text-white/50">I&apos;m passionate about AI/ML pipelines, clean frontend architecture, and expressing creativity through classical Indian dance. My favorite work usually sits where technical depth meets a clear, human experience.</p><div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/45"><span className="inline-flex items-center gap-2"><MapPin className="size-4 text-[#b38cff]" /> Bengaluru, India</span><span className="inline-flex items-center gap-2"><GraduationCap className="size-4 text-[#b38cff]" /> MSRUAS · CSE</span></div></div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:px-8"><div className="mb-12 flex items-end justify-between"><div><p className="mb-5 font-mono text-xs text-[#b38cff]">02 / TOOLKIT</p><h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">Things I speak.</h2></div><Sparkles className="hidden size-7 text-[#b38cff] md:block" /></div><div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">{skills.map(({ label, items, icon: Icon }) => <div key={label} className="bg-[#101313] p-7"><Icon className="mb-14 size-6 text-[#b38cff]" /><h3 className="mb-5 text-sm uppercase tracking-[0.16em] text-white/45">{label}</h3><div className="flex flex-wrap gap-2">{items.map(item => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/75">{item}</span>)}</div></div>)}</div></section>

      <section id="work" className="relative z-10 border-y border-white/10 bg-[#101313]"><div className="mx-auto max-w-6xl px-6 py-24 lg:px-8"><p className="mb-5 font-mono text-xs text-[#b38cff]">03 / SELECTED WORK</p><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">Small set. High intent.</h2><p className="max-w-xs text-sm leading-6 text-white/40">Projects made to learn something properly, not just to fill a grid.</p></div><div className="grid gap-5 md:grid-cols-2">{projects.map(project => <a key={project.number} href={project.href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-[#161a19] p-7 transition hover:-translate-y-1 hover:border-[#b38cff]/45"><div className="mb-20 flex items-start justify-between"><span className="font-mono text-xs text-[#b38cff]">{project.number}</span><ArrowUpRight className="size-5 text-white/30 transition group-hover:text-[#b38cff]" /></div><h3 className="max-w-sm text-2xl font-medium tracking-tight">{project.title}</h3><p className="mt-4 max-w-md text-sm leading-6 text-white/45">{project.description}</p><div className="mt-7 flex flex-wrap gap-2">{project.stack.map(tag => <span key={tag} className="text-xs text-white/55">{tag}<span className="ml-2 text-[#b38cff]">/</span></span>)}</div></a>)}</div></div></section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:px-8"><div className="grid gap-12 md:grid-cols-[1fr_1.4fr]"><div><p className="mb-5 font-mono text-xs text-[#b38cff]">04 / MILESTONES</p><h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">A few signals<br />of momentum.</h2></div><div className="divide-y divide-white/10 border-y border-white/10">{[['Google Student Ambassador', 'Selected for Semester 2 · MSRUAS · Nov 2026'], ['Academic standing', '9.28 overall CGPA · 1st year'], ['Registration number', '25ETCS002269']].map(([title, sub]) => <div key={title} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between"><span className="text-lg text-white/80">{title}</span><span className="font-mono text-xs text-white/40 sm:text-right">{sub}</span></div>)}</div></div></section>

      <section id="contact" className="relative z-10 border-t border-white/10 bg-[#b38cff] text-[#f5f1ff]"><div className="mx-auto max-w-6xl px-6 py-24 lg:px-8"><p className="mb-7 font-mono text-xs uppercase tracking-[0.2em] text-[#f5f1ff]/60">05 / CONTACT</p><div className="flex flex-col justify-between gap-12 md:flex-row md:items-end"><h2 className="max-w-2xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">Have a good problem?<br />Let&apos;s make it real.</h2><div className="flex flex-col gap-4 text-sm"><a className="inline-flex items-center gap-3 border-b border-[#f5f1ff]/25 pb-2 transition hover:border-[#f5f1ff]" href="mailto:sangna3.14@gmail.com"><Mail className="size-4" /> sangna3.14@gmail.com</a><a className="inline-flex items-center gap-3 border-b border-[#f5f1ff]/25 pb-2 transition hover:border-[#f5f1ff]" href="https://github.com/sangna3087" target="_blank" rel="noreferrer"><GitBranch className="size-4" /> github.com/sangna3087</a></div></div></div></section>

      <footer className="relative z-10 flex flex-col justify-between gap-3 bg-[#b38cff] px-6 pb-8 text-xs text-[#f5f1ff]/50 sm:flex-row lg:px-8"><span>© 2026 Sangna Acharya BM</span><span className="inline-flex items-center gap-2"><Globe2 className="size-3" /> Built with intent</span></footer>
    </main>
  )
}
