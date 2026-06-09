import { motion } from 'framer-motion'
import { Shield, Star, Users, Zap, Check, ArrowRight } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import SEOHead from '../components/SEOHead'
import { touroMecanico } from '../data/products'
import { openWhatsAppDirect } from '../utils/whatsapp'

const highlights = [
  { emoji: '🎯', title: 'Desafio e Adrenalina', desc: 'Tente ficar 8 segundos! Diversão garantida para todos.' },
  { emoji: '👨‍👩‍👧‍👦', title: 'Para Todas as Idades', desc: 'Crianças e adultos adoram esse desafio!' },
  { emoji: '🏆', title: 'Atração Principal', desc: 'O ponto focal de qualquer festa ou evento.' },
  { emoji: '😂', title: 'Muito Humor', desc: 'Momentos hilários que todo mundo vai querer repetir.' },
]

const features = [
  'Estrutura inflável de proteção ao redor',
  'Operador profissional incluso',
  'Velocidade ajustável por faixa etária',
  'Colchonete de queda incluído',
  'Equipamento certificado e seguro',
  'Montagem e desmontagem incluída',
  'Assistência durante todo o evento',
]

const events = ['Festas de aniversário', 'Eventos corporativos', 'Festas juninas', 'Formaturas', 'Confraternizações', 'Festas temáticas']

export default function TouroMecanicoPage() {
  const { addItem, isInCart } = useCart()
  const inCart = isInCart(touroMecanico.id)

  return (
    <>
      <SEOHead
        title="Touro Mecânico"
        description="Aluguel de Touro Mecânico para festas em São Paulo! Adrenalina, diversão e emoção para crianças e adultos."
      />

      {/* Hero */}
      <section className="min-h-screen pt-20 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 text-white flex items-center relative overflow-hidden">
        {/* BG decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['🐂', '⭐', '🔥', '🤠', '🏆', '🎯'].map((em, i) => (
            <motion.span
              key={i}
              className="absolute text-4xl opacity-20"
              style={{ left: `${5 + i * 18}%`, top: `${20 + (i % 2) * 40}%` }}
              animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity }}
            >
              {em}
            </motion.span>
          ))}
        </div>

        <div className="container-custom mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring' }}>
              <motion.span
                className="text-8xl md:text-9xl block mb-6"
                animate={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                🐂
              </motion.span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white font-bold text-sm px-4 py-2 rounded-full mb-6">
                <Zap size={14} className="fill-yellow-300 text-yellow-300" />
                Atração exclusiva
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Touro<br />
                <span className="text-yellow-300">Mecânico!</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
                A atração mais emocionante das festas! Desafio, adrenalina e gargalhadas garantidas para crianças e adultos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => addItem(touroMecanico)}
                  disabled={inCart}
                  className={`inline-flex items-center justify-center gap-2 font-black text-lg px-8 py-4 rounded-full transition-all ${
                    inCart
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-red-600 hover:shadow-2xl'
                  }`}
                >
                  {inCart ? '✅ Adicionado ao orçamento' : '🛒 Adicionar ao orçamento'}
                </motion.button>
                <button
                  onClick={() => openWhatsAppDirect('Olá! Tenho interesse no Touro Mecânico para minha festa! Gostaria de um orçamento.')}
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black text-lg px-8 py-4 rounded-full transition-all"
                >
                  💬 Solicitar orçamento
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="#FFFBF7" />
          </svg>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="section-title">Por que o <span className="gradient-text">Touro Mecânico</span>?</h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 text-center"
              >
                <span className="text-5xl block mb-4">{h.emoji}</span>
                <h3 className="font-black text-gray-800 mb-2">{h.title}</h3>
                <p className="text-gray-500 text-sm">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Safety */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-green-500" size={28} />
                <h2 className="section-title text-3xl">Segurança em <span className="gradient-text">primeiro lugar</span></h2>
              </div>
              <p className="text-gray-500 mb-6 leading-relaxed">
                O Touro Mecânico da Turma da Alegria é equipado com todos os itens de segurança necessários. Nosso operador profissional garante que cada participante tenha uma experiência divertida e segura.
              </p>
              <div className="space-y-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <Check size={18} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="card p-8">
                <h3 className="font-black text-gray-800 text-xl mb-4 flex items-center gap-2">
                  <Star className="text-festa-yellow fill-festa-yellow" size={22} />
                  Ideal para qualquer evento
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {events.map((e) => (
                    <div key={e} className="flex items-center gap-2 bg-orange-50 rounded-xl p-3">
                      <span className="text-lg">✅</span>
                      <span className="text-gray-700 font-medium text-sm">{e}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-5 text-white text-center">
                  <p className="font-black text-3xl mb-1">🏆</p>
                  <p className="font-black text-xl">Atração nº 1</p>
                  <p className="text-white/80 text-sm mt-1">em festas e eventos</p>
                </div>

                <button
                  onClick={() => openWhatsAppDirect('Olá! Tenho interesse no Touro Mecânico. Poderia me enviar o orçamento e disponibilidade?')}
                  className="btn-whatsapp w-full justify-center mt-4"
                >
                  💬 Verificar disponibilidade
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-500 text-white text-center px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-black mb-4">Garanta o Touro Mecânico na sua festa!</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Não perca essa atração! Entre em contato agora e garante a data para seu evento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => addItem(touroMecanico)}
              disabled={inCart}
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 font-black text-lg px-8 py-4 rounded-full hover:shadow-2xl transition-all"
            >
              {inCart ? '✅ Adicionado!' : '🛒 Adicionar ao orçamento'}
            </motion.button>
            <button
              onClick={() => openWhatsAppDirect('Olá! Quero garantir o Touro Mecânico para minha festa!')}
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black text-lg px-8 py-4 rounded-full transition-all"
            >
              💬 Falar agora
            </button>
          </div>
        </motion.div>
      </section>
    </>
  )
}
