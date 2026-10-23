import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, ChevronDown, CheckCircle, Heart, HeartPulse } from 'lucide-react'
import { LogoMark } from './Logo'
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from './SocialIcons'

export default function Hero({ onBook }) {
  const cardRef = useRef(null)
  const sceneRef = useRef(null)

  useEffect(() => {
    const scene = sceneRef.current
    const card = cardRef.current
    if (!scene || !card) return

    const handleMove = (e) => {
      const rect = scene.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -18
      const rotateY = ((x - centerX) / centerX) * 18
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleLeave = () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)'
    }

    scene.addEventListener('mousemove', handleMove)
    scene.addEventListener('mouseleave', handleLeave)

    return () => {
      scene.removeEventListener('mousemove', handleMove)
      scene.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <section id="about" className="relative flex min-h-screen items-center overflow-hidden px-[5%] pb-24 pt-28 lg:px-[6%] lg:pb-20 lg:pt-36">
      <div className="mx-auto grid w-full max-w-[520px] grid-cols-1 items-center gap-10 text-center lg:max-w-[1360px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:text-left">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mb-5 inline-flex items-center justify-center gap-2 rounded-full border border-teal-700/20 bg-teal-50/80 px-4 py-2 text-xs font-semibold text-teal-700 shadow-[0_8px_24px_rgba(13,148,136,0.10)] backdrop-blur-lg lg:mb-6 lg:text-sm">
            <CheckCircle size={16} />
            Board-Certified Cardiologist
          </div>

          <p className="mb-1.5 flex items-center justify-center gap-2.5 text-base font-medium tracking-wide text-muted lg:mb-2 lg:justify-start lg:text-lg">
            <span aria-hidden="true" className="h-px w-7 bg-gradient-to-r from-transparent to-teal-600/70 lg:w-9" />
            Hi, I&apos;m
          </p>

          <h1 className="font-display text-[clamp(2.5rem,10.5vw,3.35rem)] font-bold leading-[1.03] tracking-[-0.02em] lg:text-[clamp(3.1rem,5.3vw,4.7rem)]">
            Dr. Ananya <span className="shimmer-text">Menon</span>
          </h1>

          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-teal-700 lg:mt-4 lg:justify-start lg:text-[0.78rem]">
            Cardiologist
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-teal-500/50" />
            MD, DM Cardiology
          </p>

          <p className="mx-auto mb-8 mt-4 max-w-[330px] px-1 text-[0.97rem] leading-relaxed text-muted lg:mx-0 lg:mb-10 lg:mt-6 lg:max-w-[540px] lg:px-0 lg:text-xl lg:leading-[1.75]">
            For the past 18 years, I&apos;ve helped people protect and recover their heart health — with clear
            guidance, advanced care and genuine compassion.
          </p>

          <div className="mx-auto flex w-full max-w-[320px] flex-col gap-3 lg:mx-0 lg:w-auto lg:max-w-none lg:flex-row lg:gap-4">
            <button
              type="button"
              onClick={onBook}
              className="btn-gradient btn-shine inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-4 text-base font-bold text-white shadow-[0_14px_36px_rgba(13,148,136,0.30)] transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_22px_50px_rgba(13,148,136,0.38)] lg:px-6 lg:py-4 xl:px-9"
            >
              <Mail size={20} />
              Book Consultation
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-slate-900/10 bg-white/75 px-6 py-4 text-base font-semibold text-slate-800 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-lg transition-all hover:-translate-y-1 hover:border-teal-600/40 hover:bg-white hover:shadow-[0_16px_36px_rgba(15,23,42,0.10)] lg:px-6 lg:py-4 xl:px-9"
            >
              <ChevronDown size={20} className="rotate-180" />
              Explore Services
            </a>
          </div>
        </motion.div>

        {/* 3D Hero Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative flex min-h-[360px] items-center justify-center lg:min-h-[560px]"
          style={{ transformStyle: 'preserve-3d' }}
          ref={sceneRef}
        >
          {/* Colour glow behind the card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal/30 via-cyan/25 to-violet/30 blur-3xl lg:h-[440px] lg:w-[440px]"
          />

          {/* Orbit rings */}
          <div className="orbit-ring r1">
            <div className="orbit-dot" />
          </div>
          <div className="orbit-ring r2">
            <div className="orbit-dot" />
          </div>
          <div className="orbit-ring r3">
            <div className="orbit-dot" />
          </div>

          {/* Card + floating badges (badges sit outside the clipped card layer) */}
          <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
            <div
              ref={cardRef}
              className="hero-card relative flex h-[380px] w-[260px] flex-col items-center justify-end rounded-[28px] border border-white/70 bg-gradient-to-br from-white/95 to-white/60 p-5 shadow-[0_30px_70px_rgba(15,23,42,0.14)] backdrop-blur-2xl transition-transform duration-100 ease-out lg:h-[540px] lg:w-[380px] lg:rounded-[34px] lg:p-8"
              style={{ transformStyle: 'preserve-3d' }}
            >
            {/* Portrait */}
            <div className="relative z-[2] mb-4 w-full lg:mb-5" style={{ transform: 'translateZ(35px)' }}>
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[26px] bg-gradient-to-br from-teal/25 via-cyan/20 to-violet/30 blur-xl"
              />
              <div className="relative rounded-[24px] bg-gradient-to-br from-teal/80 via-blue-500/70 to-violet/80 p-[3px] shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
                <div className="relative overflow-hidden rounded-[21px] bg-slate-100">
                  <img
                    src="/images/dr-ananya-menon.jpg"
                    alt="Dr. Ananya Menon, consultant cardiologist"
                    className="h-[210px] w-full scale-[1.15] object-cover object-[center_25%] lg:h-[325px]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/0 to-transparent" />
                  <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full border border-white/50 bg-white/85 px-2 py-1 text-[0.56rem] font-bold uppercase tracking-[0.12em] text-slate-700 shadow-sm backdrop-blur-md lg:right-3 lg:top-3 lg:text-[0.62rem]">
                    <HeartPulse size={11} className="text-teal-600 lg:size-3" />
                    18+ years
                  </span>
                  <span className="absolute bottom-2.5 left-2.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/60 bg-white/90 shadow-[0_8px_18px_rgba(15,23,42,0.18)] backdrop-blur-md lg:bottom-3 lg:left-3 lg:h-11 lg:w-11">
                    <LogoMark size={24} className="lg:hidden" />
                    <LogoMark size={28} className="hidden lg:block" />
                  </span>
                </div>
              </div>
            </div>

            <h3 className="relative z-[2] text-xl font-bold lg:text-[1.7rem]" style={{ transform: 'translateZ(25px)' }}>
              Dr. Ananya Menon
            </h3>
            <p className="relative z-[2] mb-3.5 text-sm font-semibold text-teal-700 lg:mb-4 lg:text-base" style={{ transform: 'translateZ(20px)' }}>
              MD, DM Cardiology
            </p>

            <div className="relative z-[2] flex gap-3 lg:gap-4" style={{ transform: 'translateZ(30px)' }}>
              {[
                {
                  name: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/drananyamenon',
                  Icon: LinkedInIcon,
                  hover: 'hover:border-[#0a66c2]/30 hover:bg-[#0a66c2]/10 hover:text-[#0a66c2]',
                },
                {
                  name: 'Instagram',
                  href: 'https://www.instagram.com/drananyamenon',
                  Icon: InstagramIcon,
                  hover: 'hover:border-[#d62976]/30 hover:bg-[#d62976]/10 hover:text-[#d62976]',
                },
                {
                  name: 'YouTube',
                  href: 'https://www.youtube.com/@drananyamenon',
                  Icon: YouTubeIcon,
                  hover: 'hover:border-red-600/30 hover:bg-red-50 hover:text-red-600',
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.name} (sample link)`}
                  title={social.name}
                  className={`group flex h-9 w-9 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-slate-700 shadow-[0_6px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_8px_20px_rgba(15,23,42,0.10)] lg:h-[46px] lg:w-[46px] ${social.hover}`}
                >
                  <social.Icon
                    size={20}
                    className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-110 lg:h-[21px] lg:w-[21px]"
                  />
                </a>
              ))}
            </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute left-[-14px] top-[10%] z-[3] flex items-center gap-1.5 rounded-xl border border-white/80 bg-white/90 px-2.5 py-1.5 text-[0.72rem] font-semibold text-slate-800 shadow-[0_10px_26px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:left-[-42px] lg:top-[12%] lg:px-4 lg:py-2.5 lg:text-[0.86rem]"
              style={{ transform: 'translateZ(50px) rotateY(-8deg)' }}
            >
              <CheckCircle size={14} className="text-teal-600 lg:size-5" />
              Verified
            </div>
            <div
              className="absolute bottom-[-16px] right-[-14px] z-[3] flex items-center gap-1.5 rounded-xl border border-white/80 bg-white/90 px-2.5 py-1.5 text-[0.72rem] font-semibold text-slate-800 shadow-[0_10px_26px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:bottom-[-20px] lg:right-[-52px] lg:px-4 lg:py-2.5 lg:text-[0.86rem]"
              style={{ transform: 'translateZ(45px) rotateY(8deg)' }}
            >
              <Heart size={14} className="fill-gold/20 text-gold lg:size-5" />
              Top Rated
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-muted lg:flex">
        <ChevronDown size={20} />
        Scroll to explore
      </div>
    </section>
  )
}
