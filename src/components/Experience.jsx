import { motion } from 'framer-motion'
import {
  Award,
  BadgeCheck,
  Briefcase,
  GraduationCap,
  HeartPulse,
  MapPin,
  Quote,
  Sparkles,
  Stethoscope,
} from 'lucide-react'
import { LogoMark } from './Logo'

const journey = [
  {
    period: '2021 — Present',
    current: true,
    role: 'Senior Consultant — Interventional Cardiology',
    place: 'Apollo Hospitals, Chennai',
    icon: HeartPulse,
    summary:
      'Leading complex coronary and structural heart interventions, and mentoring the next generation of cardiologists.',
    tags: ['Complex PCI', 'TAVR', 'Structural Heart'],
    from: '#0d9488',
    to: '#0891b2',
    glow: 'rgba(13,148,136,0.20)',
  },
  {
    period: '2016 — 2021',
    role: 'Consultant Interventional Cardiologist',
    place: 'Fortis Malar Hospital, Chennai',
    icon: Stethoscope,
    summary:
      'Built a high-volume cath-lab practice with 4,000+ angioplasties and a dedicated preventive cardiology clinic.',
    tags: ['Angioplasty', 'Pacemakers', 'Preventive Care'],
    from: '#2563eb',
    to: '#6366f1',
    glow: 'rgba(37,99,235,0.20)',
  },
  {
    period: '2012 — 2016',
    role: 'Fellowship — Interventional Cardiology',
    place: 'AIIMS, New Delhi',
    icon: GraduationCap,
    summary:
      'Advanced training in complex angioplasty and structural interventions; co-authored 12 peer-reviewed papers.',
    tags: ['Fellowship', 'Research', 'AIIMS'],
    from: '#7c3aed',
    to: '#c026d3',
    glow: 'rgba(124,58,237,0.20)',
  },
  {
    period: '2008 — 2012',
    role: 'MD — General Medicine',
    place: 'Madras Medical College, Chennai',
    icon: BadgeCheck,
    summary:
      'Specialised in internal medicine and graduated with a gold medal for academic excellence.',
    tags: ['Gold Medal', 'Internal Medicine'],
    from: '#f59e0b',
    to: '#f97316',
    glow: 'rgba(245,158,11,0.22)',
  },
  {
    period: '2003 — 2008',
    role: 'MBBS — Medicine & Surgery',
    place: 'Stanley Medical College, Chennai',
    icon: Award,
    summary:
      'Five years of rigorous clinical training, graduating with honours and a lasting passion for cardiac physiology.',
    tags: ['Honours', 'Clinical Training'],
    from: '#e11d48',
    to: '#db2777',
    glow: 'rgba(225,29,72,0.18)',
  },
]

const credentials = [
  { icon: GraduationCap, label: 'MBBS — Stanley Medical College', color: '#0d9488' },
  { icon: BadgeCheck, label: 'MD (General Medicine) — Madras Medical College', color: '#2563eb' },
  { icon: HeartPulse, label: 'DM (Cardiology) — AIIMS New Delhi', color: '#7c3aed' },
  { icon: Award, label: 'Fellowship — Interventional Cardiology', color: '#f59e0b' },
  { icon: Sparkles, label: 'Board-Certified — National Medical Commission', color: '#e11d48' },
  { icon: Stethoscope, label: '18+ Years of Clinical Practice', color: '#0891b2' },
]

function CredentialChips() {
  return credentials.map(({ icon: Icon, label, color }) => (
    <span
      key={label}
      className="flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-900/[0.07] bg-white/75 px-4 py-2 text-[0.7rem] font-semibold text-slate-700 shadow-[0_6px_18px_rgba(15,23,42,0.05)] backdrop-blur-lg lg:text-xs"
    >
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full"
        style={{ background: `${color}16`, color }}
      >
        <Icon size={13} />
      </span>
      {label}
    </span>
  ))
}

export default function Experience() {
  return (
    <section id="experience" className="relative px-[5%] py-16 lg:px-[6%] lg:py-24">
      <div className="mb-9 text-center lg:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50/70 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700 shadow-[0_8px_24px_rgba(37,99,235,0.10)] backdrop-blur-lg lg:mb-5 lg:text-xs"
        >
          <Briefcase size={14} />
          Career Journey
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(1.8rem,8vw,2.4rem)] font-bold lg:text-[clamp(2.2rem,4.8vw,3.4rem)]"
        >
          A Legacy of <span className="shimmer-text">Heart Care</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-3 max-w-[680px] text-sm leading-relaxed text-muted lg:text-base"
        >
          Two decades of training, research and hands-on care — from India&apos;s leading institutes to
          thousands of recovered hearts.
        </motion.p>
      </div>

      {/* Credential marquee */}
      <div
        className="credential-marquee relative -mx-[5%] py-2 lg:-mx-[6%]"
        role="group"
        aria-label="Degrees, fellowships and certifications"
      >
        <div className="credential-track">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-3 pr-3"
              aria-hidden={group === 1 ? 'true' : undefined}
            >
              <CredentialChips />
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto mt-10 max-w-[560px] lg:mt-16 lg:max-w-[1120px]">
        <div
          className="absolute bottom-2 left-[21px] top-2 w-[2px] rounded-full bg-gradient-to-b from-teal via-blue-500 to-violet opacity-40 lg:left-1/2 lg:-translate-x-1/2"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-7 lg:gap-10">
          {journey.map((entry, i) => {
            const Icon = entry.icon
            const left = i % 2 === 0
            return (
              <div key={entry.role} className="relative lg:grid lg:grid-cols-[1fr_84px_1fr] lg:items-center">
                {/* Node */}
                <div className="absolute left-0 top-2 z-10 lg:static lg:col-start-2 lg:row-start-1 lg:justify-self-center">
                  <div
                    className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 lg:h-[58px] lg:w-[58px]"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${entry.from}, ${entry.to})`,
                      boxShadow: `0 12px 28px ${entry.glow}, inset 0 1px 0 rgba(255,255,255,0.35)`,
                    }}
                  >
                    <Icon size={20} className="text-white lg:size-6" />
                    {entry.current && (
                      <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Card */}
                <motion.article
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.65, ease: 'easeOut' }}
                  whileHover={{ y: -5 }}
                  className={`group relative ml-14 overflow-hidden rounded-2xl border border-slate-900/[0.06] bg-white/75 p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-shadow hover:shadow-[0_20px_44px_rgba(15,23,42,0.10)] lg:ml-0 lg:p-7 ${
                    left ? 'lg:col-start-1 lg:mr-10' : 'lg:col-start-3 lg:ml-10'
                  }`}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-0.5 scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${entry.from}, ${entry.to})`,
                      transformOrigin: left ? 'right' : 'left',
                    }}
                  />
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: entry.glow }}
                  />

                  <div className="relative flex flex-wrap items-center gap-2">
                    <span
                      className="rounded-full px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-[0.14em] text-white shadow-sm"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${entry.from}, ${entry.to})`,
                        boxShadow: `0 6px 16px ${entry.glow}`,
                      }}
                    >
                      {entry.period}
                    </span>
                    {entry.current && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-50 px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-emerald-600">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                        Current
                      </span>
                    )}
                    <span className="ml-auto hidden font-display text-2xl font-bold leading-none text-slate-900/[0.08] lg:block">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="relative mt-3 text-[1.02rem] font-bold leading-snug text-slate-900 lg:text-[1.18rem]">
                    {entry.role}
                  </h3>
                  <p
                    className="relative mt-1 flex items-center gap-1.5 text-[0.82rem] font-semibold"
                    style={{ color: entry.from }}
                  >
                    <MapPin size={13} className="shrink-0" />
                    {entry.place}
                  </p>
                  <p className="relative mt-2.5 text-[0.85rem] leading-relaxed text-muted lg:text-[0.92rem]">
                    {entry.summary}
                  </p>

                  <div className="relative mt-3 flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-900/[0.06] bg-white/80 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </div>
            )
          })}
        </div>
      </div>

      {/* Signature quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-auto mt-12 max-w-[560px] overflow-hidden rounded-[26px] border border-slate-900/[0.06] bg-white/75 p-6 shadow-[0_16px_44px_rgba(15,23,42,0.07)] backdrop-blur-xl lg:mt-16 lg:max-w-[1120px] lg:p-10"
      >
        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-10 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />
        <svg
          className="pointer-events-none absolute -bottom-1 right-0 h-24 w-[78%] text-teal-700/[0.09] lg:h-32 lg:w-[55%]"
          viewBox="0 0 400 100"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 60h90l14-26 20 52 18-36 12 10h36l10-18 14 34 10-16h156"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Quote size={34} className="relative text-teal-600/30 lg:size-10" />
        <p className="relative mt-3 font-display text-lg font-semibold leading-relaxed text-slate-800 lg:mt-4 lg:max-w-[860px] lg:text-[1.55rem] lg:leading-[1.55]">
          Every heart has a story worth protecting. My work is to make sure it keeps beating to its own
          rhythm — for many years to come.
        </p>

        <div className="relative mt-6 flex items-center gap-3 border-t border-slate-900/[0.06] pt-5 lg:mt-8">
          <LogoMark size={44} className="shrink-0 drop-shadow-[0_6px_14px_rgba(13,148,136,0.25)]" />
          <div>
            <p className="font-display text-base font-bold text-slate-900 lg:text-lg">Dr. Ananya Menon</p>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted lg:text-[0.72rem]">
              MD, DM (Cardiology) · Apollo Hospitals
            </p>
          </div>
          <span className="ml-auto hidden font-display text-xl font-semibold italic text-slate-900/25 lg:block">
            A. Menon
          </span>
        </div>
      </motion.blockquote>
    </section>
  )
}
