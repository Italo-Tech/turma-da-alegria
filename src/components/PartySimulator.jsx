import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Sparkles } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import { tradicionais, inflaveis } from '../data/products'

function getSuggestions(count) {
  if (count <= 10) {
    return {
      label: 'Festa íntima',
      emoji: '🎈',
      description: 'Perfeito para uma festinha aconchegante com a família mais próxima!',
      products: [tradicionais[0], tradicionais[2]],
    }
  } else if (count <= 25) {
    return {
      label: 'Festa pequena',
      emoji: '🎉',
      description: 'Ótimo mix de atrações para uma festa pequena e animada!',
      products: [tradicionais[1], tradicionais[3], inflaveis[0]],
    }
  } else if (count <= 50) {
    return {
      label: 'Festa média',
      emoji: '🎊',
      description: 'Várias atrações para manter todas as crianças entretidas!',
      products: [tradicionais[1], tradicionais[5], inflaveis[0], inflaveis[6]],
    }
  } else {
    return {
      label: 'Grande evento',
      emoji: '🌟',
      description: 'Para uma festa épica que todo mundo vai lembrar para sempre!',
      products: [tradicionais[1], tradicionais[5], inflaveis[1], inflaveis[7], inflaveis[8]],
    }
  }
}

export default function PartySimulator() {
  const [children, setChildren] = useState(15)
  const [result, setResult] = useState(null)
  const { addItem } = useCart()

  const simulate = () => {
    setResult(getSuggestions(children))
  }

  return (
    <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="section-title">
              Simulador de <span className="gradient-text">festa ideal</span>
            </h2>
            <p className="section-subtitle">Diga quantas crianças virão e sugerimos os melhores brinquedos!</p>
          </div>

          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-festa-orange" size={24} />
              <label className="font-bold text-gray-700 text-lg">
                Quantas crianças vão participar?
              </label>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>5 crianças</span>
                <span className="font-black text-festa-orange text-xl">{children}</span>
                <span>100 crianças</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={children}
                onChange={(e) => { setChildren(Number(e.target.value)); setResult(null) }}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-festa-orange"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={simulate}
              className="btn-primary w-full justify-center mt-4"
            >
              <Sparkles size={18} />
              Mostrar sugestões para {children} crianças
            </motion.button>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-5 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl border border-orange-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{result.emoji}</span>
                    <div>
                      <h3 className="font-black text-gray-800">{result.label}</h3>
                      <p className="text-gray-500 text-sm">{result.description}</p>
                    </div>
                  </div>

                  <p className="font-bold text-gray-700 mb-3 text-sm">Sugestão de brinquedos:</p>
                  <div className="space-y-2 mb-4">
                    {result.products.map((p) => (
                      <div key={p.id} className="flex items-center gap-2 text-sm">
                        <span>{p.emoji}</span>
                        <span className="text-gray-700 font-medium">{p.name}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => result.products.forEach((p) => addItem(p))}
                    className="btn-primary w-full justify-center text-sm"
                  >
                    Adicionar todos ao orçamento
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
