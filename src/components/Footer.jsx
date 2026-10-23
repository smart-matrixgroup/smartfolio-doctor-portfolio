import {
  ArrowUpRight,
  Clock,
  Heart,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import Logo from './Logo'
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from './SocialIcons'

const explore = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/drananyamenon',
    hover: 'hover:border-[#0a66c2]/30 hover:bg-[#0a66c2]/10 hover:text-[#0a66c2]',
  },
  {
    label: 'Instagram',
    Icon: InstagramIcon,
    href: 'https://www.instagram.com/drananyamenon',
    hover: 'hover:border-[#d62976]/30 hover:bg-[#d62976]/10 hover:text-[#d62976]',
  },
  {
    label: 'YouTube',
    Icon: YouTubeIcon,
    href: 'https://www.youtube.com/@drananyamenon',
    hover: 'hover:border-red-600/30 hover:bg-red-50 hover:text-red-600',
  },
]

const contact = [
  {
    Icon: Phone,
    label: 'Call the clinic',
    value: '+91 98400 12345',
    href: 'tel:+919840012345',
    tint: 'border-teal-600/15 bg-teal-50 text-teal-700',
  },
  {
    Icon: Mail,
    label: 'Email',
    value: 'care@drananyamenon.com',
    href: 'mailto:care@drananyamenon.com',
    tint: 'border-blue-600/15 bg-blue-50 text-blue-700',
  },
]

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden px-[5%] pb-6 pt-12 lg:mt-16 lg:px-[6%] lg:pb-8 lg:pt-16">
      <div className="absolute inset-x-[5%] top-0 h-px bg-gradient-to-r from-transparent via-teal/45 to-transparent lg:inset-x-[6%]" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1280px] gap-10 text-center lg:grid-cols-[1.35fr_0.65fr_1fr] lg:gap-14 lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          <Logo />
          <p className="mt-5 max-w-[380px] text-sm leading-relaxed text-muted">
            Compassionate, evidence-based cardiac care for every stage of life — from prevention and
            diagnostics to advanced interventional procedures.
          </p>
          <div className="mt-5 flex gap-2.5">
            {socials.map(({ label, Icon, href, hover }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${label} (sample link)`}
                title={label}
                className={`group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-900/10 bg-white/70 text-slate-500 shadow-[0_6px_16px_rgba(15,23,42,0.04)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(15,23,42,0.10)] ${hover}`}
              >
                <Icon size={19} className="transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-slate-500">Explore</h4>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:flex-col lg:items-start lg:gap-2.5">
            {explore.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-teal-700"
                >
                  <span className="h-1 w-1 rounded-full bg-teal-600/0 transition-colors duration-300 group-hover:bg-teal-600" />
                  {link.label}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-slate-500">Get in touch</h4>
          <ul className="mt-4 space-y-3">
            {contact.map(({ Icon, label, value, href, tint }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-center justify-center gap-3 lg:justify-start"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:-rotate-6 group-hover:scale-105 ${tint}`}
                  >
                    <Icon size={15} />
                  </span>
                  <span className="text-left">
                    <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {label}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-teal-700">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-600/15 bg-violet-50 text-violet-700">
                <MapPin size={15} />
              </span>
              <span className="text-left">
                <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Clinic
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  Apollo Hospitals, Greams Road, Chennai
                </span>
              </span>
            </li>
            <li className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/15 bg-amber-50 text-amber-600">
                <Clock size={15} />
              </span>
              <span className="text-left">
                <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Hours
                </span>
                <span className="text-sm font-semibold text-slate-700">Mon – Sat · 9:00 am – 6:00 pm</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-[1280px] flex-col items-center justify-between gap-3 border-t border-slate-900/[0.06] pt-5 text-center text-[0.74rem] text-muted lg:mt-12 lg:flex-row lg:text-left lg:text-[0.8rem]">
        <p>&copy; 2026 Dr. Ananya Menon. All rights reserved.</p>
        <p className="inline-flex items-center gap-1.5">
          Crafted with
          <Heart size={13} className="fill-rose-500/20 text-rose-500" aria-hidden="true" />
          for healthier hearts in Chennai
        </p>
      </div>
    </footer>
  )
}
