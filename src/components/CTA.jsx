import { motion } from 'framer-motion'
import { Calendar, Heart, Stethoscope, Plus, Phone, Mail } from 'lucide-react'

const icons = [Heart, Stethoscope, Plus]

export default function CTA({ onBook }) {
  return (
    <section id="contact" className="px-[5%] py-10 lg:px-[6%] lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="cta-gradient relative mx-auto max-w-[520px] overflow-hidden rounded-[28px] border border-white/30 p-8 text-center shadow-[0_30px_70px_rgba(13,148,136,0.25)] lg:max-w-[1160px] lg:rounded-[40px] lg:p-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_92%,rgba(244,114,182,0.30),transparent_45%)]" />

        <div className="relative z-10 mb-5 flex justify-center gap-4 lg:mb-6">
          {icons.map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <Icon
                size={32}
                strokeWidth={1.6}
                className="cta-icon lg:size-11"
                style={{ stroke: 'url(#ctaGrad)', fill: 'none', animationDelay: `${i * 0.45}s` }}
              />
            </motion.div>
          ))}
        </div>

        <h2 className="relative z-10 font-display text-[clamp(1.6rem,7vw,2.2rem)] font-bold text-white lg:text-[clamp(2rem,4.8vw,3.2rem)]">
          Ready to Take Care of Your Heart?
        </h2>
        <p className="relative z-10 mx-auto mb-7 mt-3 max-w-[620px] text-sm leading-relaxed text-white/80 lg:mb-8 lg:mt-4 lg:text-base">
          Schedule a consultation today and take the first step toward a healthier, stronger heart.
        </p>

        <button
          type="button"
          onClick={onBook}
          className="group relative z-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-slate-900 shadow-[0_14px_36px_rgba(2,6,23,0.20)] transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_22px_50px_rgba(2,6,23,0.28)] lg:px-9"
        >
          <Calendar size={20} className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
          Book an Appointment
        </button>

        <div className="relative z-10 mt-5 flex flex-wrap items-center justify-center gap-2.5 lg:mt-6">
          <a
            href="tel:+919840012345"
            className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20 hover:text-white lg:text-sm"
          >
            <Phone size={14} className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
            +91 98400 12345
          </a>
          <a
            href="mailto:care@drananyamenon.com"
            className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20 hover:text-white lg:text-sm"
          >
            <Mail size={14} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            care@drananyamenon.com
          </a>
        </div>

        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="ctaGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="24">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#a7f3d0" />
              <stop offset="100%" stopColor="#ddd6fe" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  )
}
