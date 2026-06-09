import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import SEOHead from '../components/SEOHead'
import { tradicionais } from '../data/products'
import { openWhatsAppDirect } from '../utils/whatsapp'

const subcategories = ['Todos', ...new Set(tradicionais.map((p) => p.subcategory))]

export default function TradicionaisPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = tradicionais.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = activeCategory === 'Todos' || p.subcategory === activeCategory
    return matchSearch && matchCat
  })

  return (
    <>
      <SEOHead
        title="Brinquedos Tradicionais"
        description="Alugue camas elásticas, piscinas de bolinhas, fliperama, pebolim e muito mais para sua festa!"
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-orange-400 to-yellow-400 text-white text-center px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-6xl block mb-4">🤸</span>
          <h1 className="text-4xl md:text-5xl font-black mb-3">Brinquedos Tradicionais</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Clássicos que toda criança adora! Camas elásticas, piscinas de bolinhas, jogos e muito mais.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm sticky top-[72px] z-30 px-4">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar brinquedo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-festa-orange font-medium text-gray-700"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              <Filter size={16} className="text-gray-400 flex-shrink-0" />
              {subcategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-festa-orange to-festa-pink text-white shadow-festa'
                      : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-festa-orange'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <span className="text-6xl block mb-4">🔍</span>
              <p className="font-black text-gray-600 text-xl">Nenhum brinquedo encontrado</p>
              <p className="text-gray-400 mt-2">Tente outro termo ou categoria</p>
            </div>
          ) : (
            <>
              <p className="text-gray-500 font-medium mb-6">{filtered.length} brinquedos encontrados</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} delay={i * 0.05} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-black mb-4">Não encontrou o que procura?</h2>
          <p className="text-white/80 mb-6">Fale com nossa equipe! Temos mais opções disponíveis.</p>
          <button
            onClick={() => openWhatsAppDirect('Olá! Estou procurando brinquedos tradicionais para minha festa e gostaria de um orçamento!')}
            className="inline-flex items-center gap-2 bg-white text-festa-orange font-black px-8 py-4 rounded-full hover:shadow-xl transition-all"
          >
            💬 Falar pelo WhatsApp
          </button>
        </motion.div>
      </section>
    </>
  )
}
