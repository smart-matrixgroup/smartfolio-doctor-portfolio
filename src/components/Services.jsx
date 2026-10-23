import { motion } from 'framer-motion'
import { Heart, ShieldPlus, Stethoscope, ClipboardCheck, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Cardiac Diagnostics',
    description: 'ECG, echocardiography, stress tests and advanced cardiac imaging for precise diagnosis.',
    from: '#0d9488',
    to: '#0891b2',
    glow: 'rgba(13,148,136,0.22)',
  },
  {
    icon: ShieldPlus,
    title: 'Preventive Cardiology',
    description: 'Personalized plans to manage cholesterol, blood pressure and reduce heart disease risk.',
    from: '#2563eb',
    to: '#6366f1',
    glow: 'rgba(37,99,235,0.22)',
  },
  {
    icon: Stethoscope,
    title: 'Interventional Procedures',
    description: 'Angioplasty, stenting and minimally invasive procedures with excellent outcomes.',
    from: '#7c3aed',
    to: '#d946ef',
    glow: 'rgba(124,58,237,0.22)',
  },
  {
    icon: ClipboardCheck,
    title: 'Second Opinions',
    description: 'Clear, expert second opinions on complex cardiac cases and treatment pathways.',
    from: '#f59e0b',
    to: '#f97316',
    glow: 'rgba(245,158,11,0.24)',
  },
]

export default function Services() {
  return (
    <section id="services" className="px-[5%] py-16 lg:px-[6%] lg:py-24">
      <div className="mb-10 text-center lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-white/70 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-teal-700 shadow-[0_8px_24px_rgba(13,148,136,0.10)] backdrop-blur-lg lg:mb-5 lg:text-xs"
        >
          <Sparkles size={14} />
          Our Services
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(1.8rem,8vw,2.4rem)] font-bold lg:text-[clamp(2.2rem,4.8vw,3.4rem)]"
        >
          Specialized <span className="shimmer-text">Care</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-3 max-w-[680px] text-sm leading-relaxed text-muted lg:text-base lg:leading-relaxed"
        >
          Comprehensive cardiac and internal medicine services using the latest technology and evidence-based treatments.
        </motion.p>
      </div>

      <div className="mx-auto flex max-w-[520px] flex-col gap-4 lg:grid lg:max-w-[1280px] lg:grid-cols-2 lg:gap-6 xl:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -10, rotateX: 5, scale: 1.02 }}
            className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-slate-900/[0.06] bg-white/75 p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-shadow hover:shadow-[0_20px_40px_rgba(15,23,42,0.10)] lg:flex-col lg:p-7"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div
              className="absolute left-0 right-0 top-0 h-0.5 scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              style={{ background: `linear-gradient(90deg, ${service.from}, ${service.to})` }}
            />
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition-opacity duration-500 opacity-50 group-hover:opacity-90"
              style={{ background: service.glow }}
            />
            <div
              className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl shadow-[0_10px_24px_rgba(13,148,136,0.22)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105 lg:mb-4 lg:h-[68px] lg:w-[68px] lg:rounded-2xl"
              style={{ backgroundImage: `linear-gradient(135deg, ${service.from}, ${service.to})`, boxShadow: `0 10px 24px ${service.glow}` }}
            >
              <service.icon size={24} className="text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 lg:size-8" />
            </div>
            <div className="relative flex-1">
              <h3 className="mb-1 text-lg font-bold lg:mb-2 lg:text-[1.32rem] xl:text-[1.22rem]">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted lg:text-[0.98rem] lg:leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
