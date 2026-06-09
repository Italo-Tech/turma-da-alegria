import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }

  const t = testimonials[current]

  return (
    <section className="section-padding bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">O que as famílias dizem <span className="gradient-text">sobre nós</span></h2>
            <p className="section-subtitle">Mais de 5.000 famílias já confiaram na Turma da Alegria</p>
          </motion.div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4 }}
              className="card p-8 md:p-10 text-center"
            >
              <div className="text-5xl mb-4">{t.avatar}</div>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-festa-yellow fill-festa-yellow" />
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-black text-gray-800">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-12 w-10 h-10 bg-white rounded-full shadow-card flex items-center justify-center text-gray-600 hover:text-festa-orange transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-12 w-10 h-10 bg-white rounded-full shadow-card flex items-center justify-center text-gray-600 hover:text-festa-orange transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-festa-orange w-6' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
