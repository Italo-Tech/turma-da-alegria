import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Truck, Sparkles, Users, Star, CheckCircle } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import HowItWorks from '../components/HowItWorks'
import AnimatedCounter from '../components/AnimatedCounter'
import TestimonialSlider from '../components/TestimonialSlider'
import FAQAccordion from '../components/FAQAccordion'
import PartySimulator from '../components/PartySimulator'
import SEOHead from '../components/SEOHead'
import { tradicionais, inflaveis } from '../data/products'
import { useCart } from '../contexts/CartContext'
import { openWhatsAppDirect } from '../utils/whatsapp'

const featured = [tradicionais[0], tradicionais[1], tradicionais[3], tradicionais[5], inflaveis[0], inflaveis[4], inflaveis[6], inflaveis[8]]

const benefits = [
  { icon: Truck, emoji: '🚚', title: 'Montagem Inclusa', desc: 'Nossa equipe monta e desmonta tudo para você' },
  { icon: Shield, emoji: '🛡️', title: 'Segurança Garantida', desc: 'Equipamentos certificados e seguros para as crianças' },
  { icon: Sparkles, emoji: '✨', title: 'Higienizados', desc: 'Limpeza completa antes e após cada evento' },
  { icon: Users, emoji: '👨‍👩‍👧', title: 'Todas as Idades', desc: 'Brinquedos para todas as faixas etárias' },
  { icon: Star, emoji: '⭐', title: 'Alta Qualidade', desc: 'Equipamentos premium para festas inesquecíveis' },
  { icon: CheckCircle, emoji: '✅', title: 'Atendimento Rápido', desc: 'Resposta em minutos via WhatsApp' },
]

const categories = [
  {
    to: '/brinquedos-tradicionais',
    emoji: '🤸',
    title: 'Brinquedos Tradicionais',
    description: 'Camas elásticas, piscinas de bolinhas, fliperama e muito mais',
    gradient: 'from-orange-400 to-yellow-400',
    count: '11 opções',
  },
  {
    to: '/brinquedos-inflaveis',
    emoji: '🏰',
    title: 'Brinquedos Infláveis',
    description: 'Castelos, tobogãs, futebol de sabão e opções temáticas',
    gradient: 'from-pink-400 to-purple-500',
    count: '10 opções',
  },
  {
    to: '/touro-mecanico',
    emoji: '🐂',
    title: 'Touro Mecânico',
    description: 'A atração mais emocionante! Diversão para todas as idades',
    gradient: 'from-red-500 to-orange-500',
    count: 'Exclusivo',
  },
  {
    to: '/combos',
    emoji: '🎊',
    title: 'Combos Promocionais',
    description: 'Pacotes completos com desconto especial',
    gradient: 'from-cyan-400 to-blue-500',
    count: '4 combos',
  },
]

export default function Home() {
  return (
    <>
      <SEOHead />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-festa-orange via-festa-pink to-festa-purple pt-20">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['🎈', '⭐', '🎊', '🎉', '🌟', '🎈', '⭐', '🎊'].map((em, i) => (
            <motion.span
              key={i}
              className="absolute text-2xl md:text-4xl opacity-30"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 3) * 25}%`,
              }}
              animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
            >
              {em}
            </motion.span>
          ))}
        </div>

        <div className="container-custom mx-auto px-4 py-20 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white font-bold text-sm px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={14} />
              Especialistas em festas infantis desde 2015
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Transformamos sua festa em uma<br />
              <span className="text-festa-yellow">experiência inesquecível!</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto font-medium">
              Aluguel de brinquedos para festas infantis com montagem inclusa, segurança garantida e muito mais diversão!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/brinquedos-tradicionais"
                  className="inline-flex items-center gap-2 bg-white text-festa-orange font-black text-lg px-8 py-4 rounded-full hover:shadow-2xl transition-all"
                >
                  Ver catálogo completo
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <button
                  onClick={() => openWhatsAppDirect('Olá! Gostaria de solicitar um orçamento para minha festa!')}
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black text-lg px-8 py-4 rounded-full transition-all shadow-lg"
                >
                  💬 Solicitar orçamento
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
            {[
              { label: 'Festas realizadas', value: '5.000+' },
              { label: 'Clientes satisfeitos', value: '4.900+' },
              { label: 'Brinquedos disponíveis', value: '50+' },
            ].map((s) => (
              <div key={s.label} className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 text-center">
                <p className="font-black text-2xl text-white">{s.value}</p>
                <p className="text-white/70 text-sm">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="#FFFBF7" />
          </svg>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="section-title">Explore nossas <span className="gradient-text">categorias</span></h2>
              <p className="section-subtitle">Encontre o brinquedo perfeito para sua festa</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link to={cat.to} className="block card overflow-hidden group">
                  <div className={`h-36 bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-6xl relative`}>
                    <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                      {cat.emoji}
                    </motion.span>
                    <span className="absolute top-3 right-3 badge bg-white/90 text-gray-700 text-xs">
                      {cat.count}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-gray-800 mb-1 group-hover:text-festa-orange transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{cat.description}</p>
                    <div className="flex items-center gap-1 text-festa-orange text-sm font-bold mt-3">
                      Ver todos <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="section-title">Por que escolher a <span className="gradient-text">Turma da Alegria?</span></h2>
              <p className="section-subtitle">Comprometidos com a diversão e segurança das crianças</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="card p-6 flex gap-4 items-start"
              >
                <div className="text-4xl flex-shrink-0">{b.emoji}</div>
                <div>
                  <h3 className="font-black text-gray-800 mb-1">{b.title}</h3>
                  <p className="text-gray-500 text-sm">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="section-title">Brinquedos em <span className="gradient-text">destaque</span></h2>
              <p className="section-subtitle">Os mais amados pelas crianças e pais!</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} delay={i * 0.07} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/brinquedos-tradicionais" className="btn-primary">
              Ver todos os brinquedos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks />
      <AnimatedCounter />
      <PartySimulator />
      <TestimonialSlider />
      <FAQAccordion />

      {/* Final CTA */}
      <section className="section-padding gradient-bg text-white text-center">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl block mb-6">🎉</span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Pronto para a festa dos sonhos?</h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
              Monte seu orçamento agora mesmo e fale com nossa equipe pelo WhatsApp!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/brinquedos-tradicionais" className="inline-flex items-center gap-2 bg-white text-festa-orange font-black text-lg px-8 py-4 rounded-full hover:shadow-2xl transition-all">
                Ver catálogo <ArrowRight size={20} />
              </Link>
              <button
                onClick={() => openWhatsAppDirect('Olá! Gostaria de solicitar um orçamento para minha festa!')}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black text-lg px-8 py-4 rounded-full transition-all"
              >
                💬 Falar pelo WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
