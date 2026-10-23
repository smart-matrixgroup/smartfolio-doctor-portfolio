import { useEffect, useRef } from 'react'

const icons = [
  { path: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z', top: '10%', left: '4%', size: 52, delay: 0 },
  { path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z', top: '22%', right: '6%', size: 38, delay: -1.2 },
  { path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6H8v-2h3V7h2v2h3v2h-3v6z', top: '60%', right: '3%', size: 64, delay: -2.4 },
  { path: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z', top: '76%', left: '6%', size: 42, delay: -3.6 },
  { path: 'M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z', top: '42%', left: '2%', size: 34, delay: -4.8 },
  { path: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z', top: '84%', right: '16%', size: 48, delay: -5.2 },
  { path: 'M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z', top: '8%', right: '22%', size: 30, delay: -2 },
  { path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z', top: '54%', left: '12%', size: 40, delay: -6 },
]

export default function FloatingIcons() {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const x = (window.innerWidth / 2 - e.clientX) / 40
      const y = (window.innerHeight / 2 - e.clientY) / 40
      containerRef.current.querySelectorAll('.floater').forEach((el, i) => {
        const depth = (i + 1) * 0.5
        el.style.transform = `translate(${x * depth}px, ${y * depth}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-[-1]">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="floaterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      {icons.map((icon, i) => (
        <div
          key={i}
          className={`floater absolute ${[0, 1, 3, 6].includes(i) ? '' : 'hidden sm:block'}`}
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            width: icon.size,
            height: icon.size,
            animation: `bob 6s ease-in-out ${icon.delay}s infinite`,
          }}
        >
          <svg viewBox="0 0 24 24" className="h-full w-full" style={{ fill: 'url(#floaterGrad)', opacity: 0.5 }}>
            <path d={icon.path} />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes bob {
          0%, 100% { transform: translateY(0) rotateY(0deg) rotateX(0deg); }
          25% { transform: translateY(-18px) rotateY(10deg) rotateX(5deg); }
          50% { transform: translateY(6px) rotateY(-6deg) rotateX(-3deg); }
          75% { transform: translateY(-12px) rotateY(5deg) rotateX(6deg); }
        }
      `}</style>
    </div>
  )
}
