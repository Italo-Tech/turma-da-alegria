import { motion } from 'framer-motion'
import { Search, ShoppingCart, MessageCircle, PartyPopper } from 'lucide-react'

const steps = [
  {
    icon: Search,
    emoji: '🔍',
    step: '01',
    title: 'Escolha os brinquedos',
    description: 'Navegue pelo nosso catálogo completo e selecione os brinquedos que mais combinam com sua festa.',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: ShoppingCart,
    emoji: '🛒',
    step: '02',
    title: 'Adicione ao carrinho',
    description: 'Clique em "Adicionar ao orçamento" nos produtos desejados. Seu carrinho é salvo automaticamente.',
    color: 'from-orange-400 to-yellow-400',
  },
  {
    icon: MessageCircle,
    emoji: '💬',
    step: '03',
    title: 'Envie pelo WhatsApp',
    description: 'Com um clique, enviamos a lista completa para nosso WhatsApp. Sem complicação!',
    color: 'from-green-400 to-teal-400',
  },
  {
    icon: PartyPopper,
    emoji: '🎉',
    step: '04',
    title: 'Receba seu orçamento',
    description: 'Nossa equipe responde rapidinho com valores, disponibilidade e todas as informações que você precisa.',
    color: 'from-pink-400 to-purple-400',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Como <span className="gradient-text">funciona</span>
            </h2>
            <p className="section-subtitle">Solicitar seu orçamento é simples e rápido!</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-orange-200 to-pink-200" style={{ left: '12.5%', right: '12.5%' }} />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl mb-5 shadow-lg z-10`}>
                {step.emoji}
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full text-xs font-black text-gray-700 flex items-center justify-center shadow-sm border border-gray-100">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-black text-gray-800 text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
