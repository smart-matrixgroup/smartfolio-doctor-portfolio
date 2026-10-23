import { motion } from 'framer-motion'
import { Star, Heart } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh K.',
    role: 'Patient Family Member',
    text: '"Dr. Menon saved my father\'s life. His calm explanation and swift intervention during an emergency gave us complete confidence."',
    avatar: 'linear-gradient(135deg, #0d9488, #2563eb)',
    quote: 'text-teal-600/[0.18]',
  },
  {
    name: 'Priya S.',
    role: 'Cardiac Patient',
    text: '"The most thorough consultation I have ever had. He takes time to listen and explains everything in simple terms."',
    avatar: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    quote: 'text-blue-600/[0.18]',
  },
  {
    name: 'Arun M.',
    role: 'Post-Procedure Patient',
    text: '"World-class facility and a doctor who genuinely cares. My recovery has been smooth thanks to his preventive guidance."',
    avatar: 'linear-gradient(135deg, #7c3aed, #db2777)',
    quote: 'text-fuchsia-600/[0.16]',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-[5%] py-16 lg:px-[6%] lg:py-24">
      <div className="mb-10 text-center lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-50/70 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-rose-600 shadow-[0_8px_24px_rgba(244,63,94,0.10)] backdrop-blur-lg lg:mb-5 lg:text-xs"
        >
          <Heart size={14} />
          Patient Love
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(1.8rem,8vw,2.4rem)] font-bold lg:text-[clamp(2.2rem,4.8vw,3.4rem)]"
        >
          Patient <span className="shimmer-text">Stories</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-3 max-w-[680px] text-sm leading-relaxed text-muted lg:text-base"
        >
          Real experiences from people whose lives have been transformed by dedicated cardiac care.
        </motion.p>
      </div>

      <div className="mx-auto flex max-w-[520px] flex-col gap-4 lg:grid lg:max-w-[1280px] lg:grid-cols-3 lg:gap-6">
        {testimonials.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -8, rotateX: 3 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-900/[0.06] bg-white/75 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-shadow hover:shadow-[0_20px_40px_rgba(15,23,42,0.10)] lg:p-8"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className={`absolute right-4 top-2 font-display text-6xl leading-none lg:text-7xl ${item.quote}`}>”</span>
            <div className="mb-3 flex gap-0.5 lg:mb-4">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  size={16}
                  className="fill-gold text-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 lg:size-5"
                  style={{ transitionDelay: `${j * 45}ms` }}
                />
              ))}
            </div>
            <p className="relative z-10 mb-5 text-sm leading-relaxed text-muted lg:mb-6 lg:text-base lg:leading-relaxed">{item.text}</p>
            <div className="mt-auto flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white shadow-[0_8px_18px_rgba(13,148,136,0.20)] lg:h-14 lg:w-14 lg:text-base"
                style={{ backgroundImage: item.avatar }}
              >
                {item.name.charAt(0)}
              </div>
              <div>
                <strong className="block text-sm font-bold lg:text-base">{item.name}</strong>
                <span className="text-xs text-muted lg:text-sm">{item.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
