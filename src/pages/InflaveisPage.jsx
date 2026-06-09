import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import SEOHead from '../components/SEOHead'
import { inflaveis } from '../data/products'
import { openWhatsAppDirect } from '../utils/whatsapp'

const subcategories = ['Todos', ...new Set(inflaveis.map((p) => p.subcategory))]

export default function InflaveisPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = inflaveis.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = activeCategory === 'Todos' || p.subcategory === activeCategory
    return matchSearch && matchCat
  })

  return (
    <>
      <SEOHead
        title="Brinquedos Infláveis"
        description="Castelos, tobogãs, futebol de sabão e infláveis temáticos para festas infantis!"
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-pink-400 to-purple-500 text-white text-center px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-6xl block mb-4">🏰</span>
          <h1 className="text-4xl md:text-5xl font-black mb-3">Brinquedos Infláveis</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Castelos, tobogãs, futebol de sabão e opções temáticas que vão deixar as crianças loucas de alegria!
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
                placeholder="Buscar inflável..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-festa-pink font-medium text-gray-700"
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
                      ? 'bg-gradient-to-r from-festa-pink to-festa-purple text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-pink-50 hover:text-festa-pink'
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
              <p className="font-black text-gray-600 text-xl">Nenhum inflável encontrado</p>
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
      <section className="py-16 bg-gradient-to-r from-pink-400 to-purple-500 text-white text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-black mb-4">Quer saber sobre disponibilidade?</h2>
          <p className="text-white/80 mb-6">Nossa equipe está pronta para ajudar você!</p>
          <button
            onClick={() => openWhatsAppDirect('Olá! Gostaria de saber sobre os infláveis disponíveis para minha festa!')}
            className="inline-flex items-center gap-2 bg-white text-festa-pink font-black px-8 py-4 rounded-full hover:shadow-xl transition-all"
          >
            💬 Falar pelo WhatsApp
          </button>
        </motion.div>
      </section>
    </>
  )
}
