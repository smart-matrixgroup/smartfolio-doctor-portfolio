import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, Home, Phone, Star, Stethoscope } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const dockLinks = [
  { label: 'Home', href: '#about', icon: Home },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Services', href: '#services', icon: Stethoscope },
  { label: 'Reviews', href: '#testimonials', icon: Star },
  { label: 'Contact', href: '#contact', icon: Phone },
]

export default function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = dockLinks.map((link) => link.href.slice(1))

    const updateActive = () => {
      const marker = window.scrollY + window.innerHeight * 0.42
      let current = '#about'
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const top = el.getBoundingClientRect().top + window.scrollY
        if (top <= marker) current = `#${id}`
      })
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
        current = '#contact'
      }
      setActive(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between border-b border-slate-900/[0.06] px-[5%] py-3 backdrop-blur-[22px] transition-[background-color,box-shadow] duration-500 lg:px-[6%] lg:py-4 ${
          scrolled
            ? 'bg-white/90 shadow-[0_14px_40px_rgba(15,23,42,0.10)]'
            : 'bg-white/75 shadow-[0_8px_30px_rgba(15,23,42,0.04)]'
        }`}
      >
        <a
          href="#about"
          aria-label="Dr. Ananya Menon — Cardiologist, back to top"
          className="inline-flex shrink-0 transition-transform duration-300 hover:scale-[1.02]"
        >
          <Logo markClassName="transition-transform duration-500 hover:rotate-6" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.07 }}
            >
              <a
                href={link.href}
                className="nav-link inline-block text-sm font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-teal-700"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Booking — desktop */}
        <button
          type="button"
          onClick={onBook}
          className="btn-gradient btn-shine group hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(13,148,136,0.25)] transition-all hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_16px_40px_rgba(13,148,136,0.35)] lg:inline-flex"
        >
          <Calendar size={16} className="transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
          Book Appointment
        </button>

        {/* Booking — mobile */}
        <button
          type="button"
          onClick={onBook}
          aria-label="Book appointment"
          className="btn-gradient btn-shine flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-[0_8px_22px_rgba(13,148,136,0.28)] transition-transform active:scale-95 sm:w-auto sm:gap-1.5 sm:px-4 sm:py-2 sm:text-xs sm:font-bold lg:hidden"
        >
          <Calendar size={16} />
          <span className="hidden sm:inline">Book</span>
        </button>
      </motion.nav>

      {/* App-style bottom navigation (mobile) */}
      <motion.nav
        aria-label="Mobile navigation"
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 bottom-0 z-[100] lg:hidden"
        style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
      >
        <ul className="mx-3 flex items-stretch gap-0.5 rounded-[22px] border border-white/70 bg-white/88 p-1.5 shadow-[0_18px_50px_rgba(15,23,42,0.20)] backdrop-blur-2xl">
          {dockLinks.map((link) => {
            const Icon = link.icon
            const isActive = active === link.href
            return (
              <li key={link.href} className="flex-1">
                <a
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={link.label}
                  className={`relative flex h-[52px] flex-col items-center justify-center rounded-2xl transition-colors duration-300 ${
                    isActive ? 'text-teal-800' : 'text-slate-500 hover:text-teal-700'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="dock-active"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      className="absolute inset-0 rounded-2xl border border-teal-600/15 bg-gradient-to-b from-teal-50 to-teal-100/70"
                    />
                  )}
                  <span className="relative flex flex-col items-center gap-[3px]">
                    <Icon size={19} strokeWidth={isActive ? 2.3 : 1.8} />
                    <span className="text-[0.6rem] font-semibold tracking-[0.01em]">{link.label}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </motion.nav>
    </>
  )
}
