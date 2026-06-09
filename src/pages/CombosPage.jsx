import { motion } from 'framer-motion'
import { Check, Sparkles, ShoppingCart } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { combos } from '../data/combos'
import { allProducts } from '../data/products'
import { useCart } from '../contexts/CartContext'
import { openWhatsAppDirect } from '../utils/whatsapp'

function ComboCard({ combo, delay }) {
  const { addItem, isInCart } = useCart()
  const comboProducts = combo.products.map((id) => allProducts.find((p) => p.id === id)).filter(Boolean)
  const allInCart = comboProducts.every((p) => isInCart(p.id))

  const addAll = () => comboProducts.forEach((p) => addItem(p))

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -8 }}
      className={`relative card overflow-hidden ${combo.highlight ? 'ring-4 ring-festa-orange ring-offset-4' : ''}`}
    >
      {combo.highlight && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-festa-orange text-white font-black text-xs px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
            ⭐ Mais recomendado
          </span>
        </div>
      )}

      {/* Header gradient */}
      <div className={`bg-gradient-to-br ${combo.gradient} p-8 pt-10 text-white text-center relative overflow-hidden`}>
        <div className="absolute inset-0 overflow-hidden">
          {['✨', '🎈', '⭐'].map((em, i) => (
            <motion.span
              key={i}
              className="absolute text-2xl opacity-20"
              style={{ left: `${20 + i * 30}%`, top: `${10 + i * 20}%` }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity }}
            >
              {em}
            </motion.span>
          ))}
        </div>
        <motion.span
          className="text-5xl block mb-3 relative"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {combo.emoji}
        </motion.span>
        <h3 className="font-black text-2xl mb-1 relative">{combo.name}</h3>
        <span className="inline-block bg-white/30 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full relative">
          {combo.savings}
        </span>
      </div>

      <div className="p-6">
        <p className="text-gray-500 text-sm mb-4">{combo.description}</p>

        <div className="flex items-center gap-2 mb-4 text-sm font-bold text-gray-600">
          <span>👥</span>
          <span>{combo.idealFor}</span>
        </div>

        {/* Products list */}
        <div className="space-y-2 mb-6">
          {combo.productEmojis.map((em, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-2.5">
              <span className="text-xl">{em}</span>
              <span className="text-gray-700 font-medium text-sm">{combo.productNames[i]}</span>
              <Check size={14} className="text-green-500 ml-auto flex-shrink-0" />
            </div>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={addAll}
          disabled={allInCart}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-bold text-sm transition-all ${
            allInCart
              ? 'bg-green-100 text-green-700 cursor-default'
              : 'btn-primary'
          }`}
        >
          {allInCart ? (
            <><Check size={16} /> Combo adicionado ao orçamento</>
          ) : (
            <><ShoppingCart size={16} /> Adicionar combo ao orçamento</>
          )}
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function CombosPage() {
  return (
    <>
      <SEOHead
        title="Combos Promocionais"
        description="Combos completos com desconto especial para festas infantis! Escolha o pacote ideal e economize."
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-500 text-white text-center px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-6xl block mb-4">🎊</span>
          <h1 className="text-4xl md:text-5xl font-black mb-3">Combos Promocionais</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Pacotes completos com desconto especial! Mais diversão por menos. Escolha o combo ideal para sua festa.
          </p>
        </motion.div>
      </section>

      {/* Banner */}
      <section className="py-8 bg-festa-yellow">
        <div className="container-custom mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 text-gray-900 font-black text-lg"
          >
            <Sparkles size={22} className="text-festa-orange" />
            <span>Combos com até 25% de desconto — oferta por tempo limitado!</span>
            <Sparkles size={22} className="text-festa-orange" />
          </motion.div>
        </div>
      </section>

      {/* Combos grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="section-title">Escolha o combo <span className="gradient-text">perfeito</span></h2>
              <p className="section-subtitle">Cada combo é pensado para garantir o máximo de diversão</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {combos.map((combo, i) => (
              <ComboCard key={combo.id} combo={combo} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom combo */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 md:p-12 text-center max-w-2xl mx-auto"
          >
            <span className="text-5xl block mb-4">🎯</span>
            <h2 className="section-title text-3xl mb-4">Monte seu <span className="gradient-text">pacote ideal</span></h2>
            <p className="text-gray-500 mb-8">
              Não encontrou o combo perfeito? Nossa equipe monta um pacote exclusivo para a sua festa!
              Fale com a gente pelo WhatsApp e faça sua combinação personalizada.
            </p>
            <button
              onClick={() => openWhatsAppDirect('Olá! Gostaria de montar um combo personalizado para minha festa. Poderia me ajudar?')}
              className="btn-whatsapp mx-auto"
            >
              💬 Montar meu pacote ideal
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-bg text-white text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-black mb-4">Pronto para uma festa incrível?</h2>
          <p className="text-white/80 mb-6">Adicione seu combo ao orçamento e envie pelo WhatsApp!</p>
          <button
            onClick={() => openWhatsAppDirect('Olá! Gostaria de solicitar um orçamento para um combo de brinquedos!')}
            className="inline-flex items-center gap-2 bg-white text-festa-orange font-black px-8 py-4 rounded-full hover:shadow-2xl transition-all"
          >
            💬 Solicitar orçamento agora
          </button>
        </motion.div>
      </section>
    </>
  )
}
