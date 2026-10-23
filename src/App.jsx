import { useState } from 'react'
import { motion, MotionConfig, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Experience from './components/Experience'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingIcons from './components/FloatingIcons'
import BookingModal from './components/BookingModal'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 })
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-hidden pb-[calc(98px_+_env(safe-area-inset-bottom))] lg:pb-0">
        <div className="bg-mesh" />
        <div className="grid-lines" />
        <div className="aurora" aria-hidden="true">
          <span className="aurora-blob a1" />
          <span className="aurora-blob a2" />
          <span className="aurora-blob a3" />
          <span className="aurora-blob a4" />
        </div>
        <motion.div
          style={{ scaleX }}
          className="fixed inset-x-0 top-0 z-[110] h-[3px] origin-left bg-gradient-to-r from-[#14b8a6] via-[#3b82f6] to-[#a855f7] shadow-[0_0_12px_rgba(59,130,246,0.55)]"
        />
        <FloatingIcons />
        <Navbar onBook={() => setBookingOpen(true)} />
        <main>
          <Hero onBook={() => setBookingOpen(true)} />
          <Stats />
          <Experience />
          <Services />
          <Testimonials />
          <CTA onBook={() => setBookingOpen(true)} />
        </main>
        <Footer />
        <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      </div>
    </MotionConfig>
  )
}

export default App
