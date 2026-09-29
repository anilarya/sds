import { ArrowRight, BookOpen, Building2, ChevronRight, CircleCheck, Globe2, GraduationCap, HeartHandshake, Menu, Microscope, Sparkles, Users, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  ['Approach', '#approach'],
  ['Community', '#community'],
  ['Healthy Mind', '#professional'],
  ['Research', '#research'],
  ['Programs', '#programs'],
  ['About', '#about'],
]

function SectionLabel({ children }) {
  return <div className="eyebrow">{children}</div>
}

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f3eb] text-[#1d2b27]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f7f3eb]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Samyak Dhyaan Sangha home">
            <div className="grid size-10 place-items-center rounded-full border border-[#28493f]/15 bg-white/70 font-serif text-lg font-semibold text-[#28493f]">S</div>
            <div>
              <div className="font-serif text-lg font-semibold leading-none tracking-tight">Samyak Dhyaan Sangha</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-[#6d786f]">SDS · Healthy Mind Initiative</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-sm text-[#4c5b55] transition hover:text-[#163c31]">{label}</a>
            ))}
            <a href="#engage" className="rounded-full bg-[#173f34] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#245444]">Explore programs</a>
          </nav>

          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-black/5 bg-[#f7f3eb] px-5 py-5 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="text-sm">{label}</a>)}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden pt-20">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#183f34]/10 bg-white/55 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#365b50]">
                <Sparkles size={14} /> Towards an Indian science of mental wellbeing
              </div>
              <h1 className="font-serif text-5xl font-medium leading-[.98] tracking-[-0.045em] text-[#17342c] sm:text-6xl lg:text-[5.6rem]">
                Understand the mind.<br/><span className="italic text-[#a65d32]">Cultivate it for life.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#55645e] md:text-xl">
                A living approach to mental wellbeing that brings India’s traditions of Sāṃkhya, Yoga and Upāsanā into dialogue with contemporary research, learning and everyday practice.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#community" className="btn-primary">Explore the community <ArrowRight size={17}/></a>
                <a href="#professional" className="btn-secondary">Healthy Mind Initiatives</a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
              <div className="rounded-[2.2rem] border border-white/70 bg-white/55 p-6 shadow-[0_30px_90px_rgba(41,54,47,.12)] backdrop-blur-xl md:p-8">
                <SectionLabel>One vision · two pathways</SectionLabel>
                <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-[#1a382f]">Mental fitness as part of everyday life.</h2>
                <div className="mt-7 space-y-4">
                  <a href="#community" className="group block rounded-3xl bg-[#e7efe8] p-5 transition hover:-translate-y-1">
                    <div className="flex items-start justify-between gap-4">
                      <Users className="mt-1 text-[#28594b]" />
                      <ChevronRight className="text-[#587168] transition group-hover:translate-x-1" />
                    </div>
                    <div className="mt-8 text-xs uppercase tracking-[.18em] text-[#60776e]">Community</div>
                    <div className="mt-1 font-serif text-2xl">Samyak Dhyaan Sangha</div>
                    <p className="mt-2 text-sm leading-6 text-[#5c6c66]">Practice, learning and a community for people cultivating a healthy mind.</p>
                  </a>
                  <a href="#professional" className="group block rounded-3xl bg-[#efe5d7] p-5 transition hover:-translate-y-1">
                    <div className="flex items-start justify-between gap-4">
                      <Building2 className="mt-1 text-[#865637]" />
                      <ChevronRight className="text-[#8b735f] transition group-hover:translate-x-1" />
                    </div>
                    <div className="mt-8 text-xs uppercase tracking-[.18em] text-[#8f725d]">Professional</div>
                    <div className="mt-1 font-serif text-2xl">Healthy Mind Initiatives</div>
                    <p className="mt-2 text-sm leading-6 text-[#756b62]">Programs for individuals, institutions, teams and leaders.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="border-y border-black/5 bg-[#193d33] py-24 text-[#f7f3eb] md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>Why this work, why now</SectionLabel>
              <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-tight md:text-5xl">Begin before something goes wrong.</h2>
            </div>
            <div className="max-w-3xl space-y-7 text-lg leading-8 text-[#d5ddd9]">
              <p>Mental wellbeing is often approached reactively—after distress becomes visible. SDS begins earlier: by understanding how the mind functions, how it responds to experience, and how it can be developed through regular practice.</p>
              <p>The aim is not to place traditional and modern knowledge in opposition. It is to create meaningful dialogue between India’s long traditions of inquiry into the mind and the evidence, methods and tools of contemporary science.</p>
              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {['Clarity', 'Resilience', 'Flourishing'].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 font-serif text-xl text-white">{item}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-3xl">
              <SectionLabel>Community division</SectionLabel>
              <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-6xl">Samyak Dhyaan Sangha</h2>
              <p className="mt-5 text-xl leading-8 text-[#5b6964]">Built for practitioners — connect with people cultivating a healthy mind.</p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                ['Sandhyā', 'Reviving Sandhyā as a living cultural practice for cultivating a healthy mind and balanced life.', BookOpen],
                ['Patanjal Upasana', 'A simple, accessible practice shaped around a structural understanding of the mind and contemporary life.', Sparkles],
                ['Sāṃkhya–Yoga Fellowship', 'Deep conceptual learning of Sāṃkhya and Yogadarśana through weekly study and inquiry.', GraduationCap],
              ].map(([title, text, Icon]) => (
                <article key={title} className="card">
                  <Icon className="text-[#8f5a37]" />
                  <h3 className="mt-10 font-serif text-3xl">{title}</h3>
                  <p className="mt-3 leading-7 text-[#66716d]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="professional" className="bg-[#eee4d5] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
              <div>
                <SectionLabel>Professional division</SectionLabel>
                <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-6xl">Build a stronger mind.<br/><span className="italic text-[#985b36]">Live a fuller life.</span></h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#665f58] lg:ml-auto">Healthy Mind Initiatives brings the work into professional and contemporary settings, with pathways for individuals, institutions, teams and high-performance roles.</p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {[
                ['For organizations', 'Custom learning and training programs for teams, leadership and high-performance roles.', Building2, 'Request corporate training'],
                ['For institutions', 'Structured modules for students and educators focused on attention, learning and mental development.', GraduationCap, 'Explore institutional programs'],
                ['For individuals', 'Personal learning and practice pathways focused on clarity, focus and mental control.', HeartHandshake, 'Join Patanjal Upasana'],
              ].map(([title, text, Icon, cta]) => (
                <article key={title} className="rounded-[2rem] border border-[#715846]/10 bg-[#f8f4ec] p-7 md:p-8">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#e8dac7]"><Icon size={22}/></div>
                  <h3 className="mt-9 font-serif text-3xl">{title}</h3>
                  <p className="mt-3 min-h-24 leading-7 text-[#6b655f]">{text}</p>
                  <a href="#engage" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#754629]">{cta}<ArrowRight size={16}/></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <SectionLabel>Research & inquiry</SectionLabel>
              <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">Tradition, examined with a contemporary lens.</h2>
              <p className="mt-5 leading-8 text-[#65716d]">The work draws on sustained study of Sāṃkhya, Yoga and Vedic thought while engaging contemporary questions around cognition, wellbeing and human development.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['30 years', 'Research and study informing the conceptual framework described in the source material.'],
                ['400+', 'Participants in a structured five-session series on Sandhyā and its framework.'],
                ['Global learning', 'Fellowship participation described across India, the USA and the UK.'],
                ['Academic engagement', 'Paper and abstract submissions/selection described for conferences in Surat, Oxford and Paris.'],
              ].map(([big, text]) => (
                <div key={big} className="rounded-3xl border border-black/5 bg-white/55 p-6">
                  <Microscope className="text-[#45675d]" size={21}/>
                  <div className="mt-7 font-serif text-3xl">{big}</div>
                  <p className="mt-2 text-sm leading-6 text-[#69746f]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="border-y border-black/5 bg-white/35 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-2xl">
              <SectionLabel>What we are building</SectionLabel>
              <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">Practice. Study. Community. Research.</h2>
            </div>
            <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
              {[
                ['01', 'Weekend Sandhyopāsanā Practice', 'Continuous community practice with morning and evening formats described in the source document.'],
                ['02', 'Structured Sandhyā Learning', 'A framework-based course designed to make the practice and its underlying principles accessible.'],
                ['03', 'Heritage Awareness', 'Public awareness around Sandhyā and Pañca Mahāyajña as elements of India’s cultural heritage.'],
                ['04', 'Sāṃkhya–Yoga Fellowship', 'A weekly program for deeper conceptual study and a method for engaging the work of the Ṛṣis.'],
              ].map(([n, title, text]) => (
                <div key={n} className="grid gap-3 py-7 md:grid-cols-[80px_1fr_1fr] md:items-center">
                  <div className="text-xs tracking-[.2em] text-[#8a948f]">{n}</div>
                  <div className="font-serif text-2xl">{title}</div>
                  <div className="max-w-xl text-sm leading-6 text-[#69746f]">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2">
            <div>
              <SectionLabel>Conceptual foundation</SectionLabel>
              <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">Rooted in India.<br/>Intended for humanity.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-[#606d68]">
              <p>The source material describes the work as being informed by the research of Dr. Harishchandra, an internationally recognized combustion scientist, Vedic scholar and author, and an alumnus of IIT Kanpur and Princeton University.</p>
              <p>Its purpose is to translate deep philosophical inquiry into an accessible framework for understanding and developing the mind—not simply as a response to problems, but as part of living well.</p>
            </div>
          </div>
        </section>

        <section id="engage" className="px-5 pb-8 md:px-8 md:pb-12">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] bg-[#173f34] px-6 py-16 text-white md:px-12 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <SectionLabel>Get involved</SectionLabel>
                <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-6xl">A healthier mind can become a lifelong practice.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d3ded9]">Join the practitioner community, explore a learning program, or speak with us about bringing Healthy Mind Initiatives to your organization or institution.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://youtube.com/@quarkwellbeing" target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#173f34]">Explore our work</a>
                <a href="mailto:hello@example.com" className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold">Contact us</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 text-sm text-[#707b76] md:flex-row md:items-center md:justify-between md:px-8">
        <div>© {new Date().getFullYear()} Samyak Dhyaan Sangha</div>
        <div className="flex flex-wrap gap-5">
          <a href="https://youtube.com/@quarkwellbeing" target="_blank" rel="noreferrer">Quark Wellbeing</a>
          <a href="https://youtube.com/@darshan-quest" target="_blank" rel="noreferrer">Darshan Quest</a>
          <a href="https://quarkwellbeing.substack.com/" target="_blank" rel="noreferrer">Blog</a>
        </div>
      </footer>
    </div>
  )
}

export default App
