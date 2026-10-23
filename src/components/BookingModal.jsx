import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Heart,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  User,
  X,
} from 'lucide-react'

const services = [
  'Cardiac Diagnostics',
  'Preventive Cardiology',
  'Interventional Procedures',
  'Second Opinion',
  'General Consultation',
]

const timeSlots = ['Any time', 'Morning (9am – 12pm)', 'Afternoon (12pm – 4pm)', 'Evening (4pm – 7pm)']

const initialForm = { name: '', phone: '', email: '', service: '', date: '', time: '', message: '' }

const inputBase =
  'h-10 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 sm:h-11'
const selectBase = `${inputBase} cursor-pointer appearance-none pr-9`
const labelBase = 'mb-1 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mb-1.5'

function Field({ label, htmlFor, icon: Icon, error, className = '', align = 'center', required = false, children }) {
  const iconPos = align === 'top' ? 'top-3.5' : 'top-1/2 -translate-y-1/2'
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={labelBase}>
        {label}
        {required && <span className="ml-0.5 text-rose-500">*</span>}
      </label>
      <div className="group relative">
        <Icon
          size={16}
          className={`pointer-events-none absolute left-3.5 z-10 text-slate-400 transition-all duration-300 group-focus-within:scale-110 group-focus-within:text-teal-600 ${iconPos}`}
        />
        {children}
      </div>
      {error && <p className="mt-1 text-xs font-medium text-rose-600">{error}</p>}
    </div>
  )
}

export default function BookingModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [submitted, setSubmitted] = useState(null)
  const nameRef = useRef(null)
  const today = new Date().toISOString().split('T')[0]

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    if (!window.matchMedia('(min-width: 768px)').matches) return
    const timer = setTimeout(() => nameRef.current?.focus(), 380)
    return () => clearTimeout(timer)
  }, [open])

  useEffect(() => {
    if (open) return
    const timer = setTimeout(() => {
      setForm(initialForm)
      setErrors({})
      setStatus('idle')
      setSubmitted(null)
    }, 350)
    return () => clearTimeout(timer)
  }, [open])

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^[+\d][\d\s-]{8,}$/.test(form.phone.trim())) next.phone = 'Enter a valid phone number'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.service) next.service = 'Choose a service'
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) return

    setStatus('sending')
    await new Promise((r) => setTimeout(r, 900))
    try {
      const key = 'dr-menon-booking-requests'
      const stored = JSON.parse(localStorage.getItem(key) || '[]')
      stored.push({ ...form, createdAt: new Date().toISOString() })
      localStorage.setItem(key, JSON.stringify(stored))
    } catch {
      /* storage may be unavailable — the request flow still completes */
    }
    setSubmitted({ ...form })
    setStatus('success')
  }

  const bookAnother = () => {
    setForm(initialForm)
    setErrors({})
    setSubmitted(null)
    setStatus('idle')
  }

  const prettyDate = submitted?.date
    ? new Date(`${submitted.date}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Flexible'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="booking-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[200] flex items-end justify-center bg-slate-950/50 backdrop-blur-sm sm:items-center sm:px-6 sm:py-6"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={{ opacity: 0, y: 26, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 max-h-[92dvh] w-full max-w-[980px] overflow-y-auto rounded-t-[28px] bg-white shadow-[0_40px_120px_rgba(2,6,23,0.35)] sm:max-h-[92vh] sm:rounded-[26px] lg:grid lg:grid-cols-[0.92fr_1.08fr]"
          >
            {/* Gradient story panel */}
            <div className="cta-gradient relative hidden flex-col justify-between overflow-hidden p-9 text-white lg:flex">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,255,255,0.28),transparent_45%)]" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/15" />
              <div className="pointer-events-none absolute -right-8 top-10 h-40 w-40 rounded-full border border-dashed border-white/20" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                  <Sparkles size={13} />
                  Appointments
                </span>
                <h3 id="booking-title" className="mt-6 font-display text-[2rem] font-bold leading-tight">
                  Let&apos;s take care of your heart.
                </h3>
                <p className="mt-3 max-w-[300px] text-sm leading-relaxed text-white/80">
                  Share a few details and the clinic team will call you back to confirm your appointment.
                </p>

                <div className="mt-8 flex gap-3">
                  {[
                    { Icon: Heart, delay: '0s' },
                    { Icon: Stethoscope, delay: '0.45s' },
                    { Icon: Calendar, delay: '0.9s' },
                  ].map(({ Icon, delay }, i) => (
                    <div
                      key={i}
                      className="cta-icon flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white/90 backdrop-blur-md"
                      style={{ animationDelay: delay }}
                    >
                      <Icon size={22} strokeWidth={1.7} />
                    </div>
                  ))}
                </div>

                <ul className="mt-8 space-y-3.5 text-sm text-white/85">
                  {[
                    { Icon: Clock, text: 'Same-week slots, Mon – Sat' },
                    { Icon: ShieldCheck, text: 'Private & secure consultation' },
                    { Icon: Heart, text: 'Personalised cardiac care' },
                  ].map(({ Icon, text }) => (
                    <li key={text} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/12">
                        <Icon size={15} />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-10 space-y-2 border-t border-white/15 pt-5 text-sm">
                <a href="tel:+919840012345" className="group flex items-center gap-3 text-white/85 transition-colors hover:text-white">
                  <Phone size={15} className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  +91 98400 12345
                </a>
                <a
                  href="mailto:care@drananyamenon.com"
                  className="group flex items-center gap-3 text-white/85 transition-colors hover:text-white"
                >
                  <Mail size={15} className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  care@drananyamenon.com
                </a>
              </div>
            </div>

            {/* Form panel */}
            <div className="relative p-5 sm:p-8 lg:p-9">
              <span
                aria-hidden="true"
                className="mx-auto mb-3 block h-1.5 w-10 rounded-full bg-slate-200 sm:hidden"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close booking form"
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:rotate-90 hover:border-teal-500/30 hover:text-teal-700"
              >
                <X size={17} />
              </button>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex h-full flex-col justify-center py-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.1 }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal to-cyan shadow-[0_18px_40px_rgba(13,148,136,0.35)]"
                  >
                    <Check size={38} strokeWidth={3} className="text-white" />
                  </motion.div>

                  <h3 className="mt-5 font-display text-2xl font-bold">Request received!</h3>
                  <p className="mx-auto mt-2 max-w-[340px] text-sm leading-relaxed text-muted">
                    Thank you, {submitted?.name.split(' ')[0]}. The clinic team will call you on{' '}
                    <strong className="text-slate-800">{submitted?.phone}</strong> to confirm your appointment.
                  </p>

                  <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-left text-sm">
                    {[
                      ['Service', submitted?.service],
                      ['Preferred date', prettyDate],
                      ['Time slot', submitted?.time || 'Any time'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between gap-3 py-1.5">
                        <span className="text-xs uppercase tracking-wide text-slate-500">{label}</span>
                        <span className="font-semibold text-slate-800">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={bookAnother}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-teal-500/30 hover:text-teal-700"
                    >
                      Book another
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="btn-gradient btn-shine inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(13,148,136,0.26)] transition-all hover:-translate-y-0.5"
                    >
                      Done
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <>
                  <span className="inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-teal-50 px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-teal-700">
                    <Calendar size={12} />
                    Book Appointment
                  </span>
                  <h3 className="mt-3 font-display text-[1.5rem] font-bold leading-tight sm:text-[1.65rem] lg:text-[1.9rem]">
                    Request an appointment
                  </h3>
                  <p className="mt-1 hidden text-sm leading-relaxed text-muted sm:mt-1.5 sm:block">
                    Fill in your details — we&apos;ll confirm within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
                    <Field label="Full name" htmlFor="bk-name" icon={User} error={errors.name} required>
                      <input
                        ref={nameRef}
                        id="bk-name"
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Your full name"
                        className={inputBase}
                        autoComplete="name"
                      />
                    </Field>

                    <Field label="Phone" htmlFor="bk-phone" icon={Phone} error={errors.phone} required>
                      <input
                        id="bk-phone"
                        type="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="+91 98765 43210"
                        className={inputBase}
                        autoComplete="tel"
                      />
                    </Field>

                    <Field label="Email (optional)" htmlFor="bk-email" icon={Mail} error={errors.email}>
                      <input
                        id="bk-email"
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="you@example.com"
                        className={inputBase}
                        autoComplete="email"
                      />
                    </Field>

                    <Field label="Service" htmlFor="bk-service" icon={Stethoscope} error={errors.service} required>
                      <select id="bk-service" value={form.service} onChange={update('service')} className={selectBase}>
                        <option value="" disabled>
                          Choose a service
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </Field>

                    <Field label="Preferred date" htmlFor="bk-date" icon={Calendar}>
                      <input
                        id="bk-date"
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={update('date')}
                        className={inputBase}
                      />
                    </Field>

                    <Field label="Time slot" htmlFor="bk-time" icon={Clock}>
                      <select id="bk-time" value={form.time} onChange={update('time')} className={selectBase}>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </Field>

                    <Field
                      label="Message (optional)"
                      htmlFor="bk-message"
                      icon={MessageSquare}
                      className="sm:col-span-2"
                      align="top"
                    >
                      <textarea
                        id="bk-message"
                        value={form.message}
                        onChange={update('message')}
                        rows={2}
                        placeholder="Briefly describe your concern or symptoms"
                        className="min-h-[64px] w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 sm:min-h-[96px] sm:py-3"
                      />
                    </Field>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="btn-gradient btn-shine group flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(13,148,136,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(13,148,136,0.36)] disabled:cursor-wait disabled:opacity-90 disabled:hover:translate-y-0"
                      >
                        {status === 'sending' ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending request…
                          </>
                        ) : (
                          <>
                            <Calendar size={18} />
                            Request Appointment
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                      <p className="mt-2 flex items-center justify-center gap-1.5 text-[0.7rem] text-muted sm:mt-3">
                        <ShieldCheck size={13} className="text-teal-600" />
                        Your details stay private and are never shared.
                      </p>
                    </div>
                  </form>
                </>
              )}
              <div aria-hidden="true" className="h-[env(safe-area-inset-bottom)] sm:hidden" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
