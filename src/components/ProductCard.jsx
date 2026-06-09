import { motion } from 'framer-motion'
import { ShoppingCart, Check, Shield, Star } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

export default function ProductCard({ product, delay = 0 }) {
  const { addItem, isInCart } = useCart()
  const inCart = isInCart(product.id)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="card overflow-hidden group cursor-pointer"
    >
      {/* Image area */}
      <div className={`relative h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}>
        <motion.span
          className="text-7xl select-none"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {product.emoji}
        </motion.span>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.badge && (
            <span className="badge bg-white/90 text-gray-800 shadow-sm">
              <Star size={10} className="text-festa-yellow fill-festa-yellow" />
              {product.badge}
            </span>
          )}
          {product.safety && (
            <span className="badge bg-green-500/90 text-white">
              <Shield size={10} />
              Seguro
            </span>
          )}
        </div>

        {/* Category */}
        <div className="absolute top-3 right-3">
          <span className="badge bg-black/30 text-white backdrop-blur-sm">
            {product.subcategory}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-black text-gray-800 text-lg leading-tight mb-1">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => addItem(product)}
          disabled={inCart}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
            inCart
              ? 'bg-green-100 text-green-700 cursor-default'
              : 'btn-primary text-sm py-3'
          }`}
        >
          {inCart ? (
            <>
              <Check size={16} />
              Adicionado ao orçamento
            </>
          ) : (
            <>
              <ShoppingCart size={16} />
              Adicionar ao orçamento
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  )
}
