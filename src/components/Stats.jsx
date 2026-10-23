import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Users, Star, Award } from 'lucide-react'

const stats = [
  { icon: Clock, value: 18, suffix: '+', label: 'Years Experience', from: '#0d9488', to: '#0891b2', glow: 'rgba(13,148,136,0.18)' },
  { icon: Users, value: 12, suffix: 'K+', label: 'Patients Treated', from: '#2563eb', to: '#6366f1', glow: 'rgba(37,99,235,0.18)' },
  { icon: Star, value: 4.9, suffix: '', label: 'Patient Rating', isDecimal: true, from: '#7c3aed', to: '#d946ef', glow: 'rgba(124,58,237,0.18)' },
  { icon: Award, value: 35, suffix: '+', label: 'Awards & Honors', from: '#f59e0b', to: '#f97316', glow: 'rgba(245,158,11,0.20)' },
]

function AnimatedNumber({ value, suffix, isDecimal }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const duration = 2000
            const steps = 60
            const increment = value / steps
            let current = 0
            const timer = setInterval(() => {
              current += increment
              if (current >= value) {
                setCount(value)
                clearInterval(timer)
              } else {
                setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
              }
            }, duration / steps)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, isDecimal])

  return <span ref={ref}>{isDecimal ? count.toFixed(1) : count}{suffix}</span>
}

export default function Stats() {
  return (
    <div className="px-[5%] pb-4 lg:px-[6%]">
      <div className="mx-auto grid w-full max-w-[520px] grid-cols-2 gap-3 lg:flex lg:max-w-none lg:justify-center lg:gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          whileHover={{ y: -6, rotateX: 8 }}
          className="group relative overflow-hidden rounded-2xl border border-slate-900/[0.06] bg-white/75 p-4 text-center shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-shadow hover:shadow-[0_18px_36px_rgba(15,23,42,0.10)] lg:min-w-[200px] lg:p-7"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl transition-opacity duration-500 opacity-60 group-hover:opacity-100" style={{ background: stat.glow }} />
          <div
            className="absolute left-0 right-0 top-0 h-0.5 scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            style={{ background: `linear-gradient(90deg, ${stat.from}, ${stat.to})` }}
          />
          <stat.icon
            size={32}
            className="relative mx-auto mb-2 text-transparent transition-transform duration-500 group-hover:scale-110 lg:mb-3 lg:size-[46px]"
            style={{ fill: `url(#statGrad${i})` }}
          />
          <h4
            className="relative text-2xl font-bold text-transparent lg:text-[2.5rem]"
            style={{ background: `linear-gradient(135deg, ${stat.from}, ${stat.to})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
          </h4>
          <span className="relative text-xs text-muted lg:text-[0.95rem]">{stat.label}</span>
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id={`statGrad${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={stat.from} />
                <stop offset="100%" stopColor={stat.to} />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
      </div>
    </div>
  )
}
