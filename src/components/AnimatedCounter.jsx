import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

function Counter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString('pt-BR')}{suffix}
    </span>
  )
}

const stats = [
  { label: 'Festas Realizadas', value: 5000, suffix: '+', emoji: '🎉' },
  { label: 'Crianças Atendidas', value: 50000, suffix: '+', emoji: '👦' },
  { label: 'Brinquedos Disponíveis', value: 50, suffix: '+', emoji: '🎠' },
  { label: 'Anos de Experiência', value: 10, suffix: '+', emoji: '⭐' },
]

export default function AnimatedCounter() {
  return (
    <section className="py-16 gradient-bg">
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-4xl">{stat.emoji}</div>
              <div className="text-4xl md:text-5xl font-black">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/80 font-semibold text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
