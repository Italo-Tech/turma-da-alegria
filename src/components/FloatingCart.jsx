import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, X, Trash2, MessageCircle } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import { openWhatsApp } from '../utils/whatsapp'

export default function FloatingCart() {
  const { cartItems, itemCount, isCartOpen, toggleCart, closeCart, removeItem, clearCart } = useCart()

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
        )}
      </AnimatePresence>

      {/* Cart drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="gradient-bg p-5 flex items-center justify-between">
              <div className="flex items-center gap-3 text-white">
                <ShoppingCart size={22} />
                <div>
                  <h2 className="font-black text-lg">Meu Orçamento</h2>
                  <p className="text-white/80 text-sm">{itemCount} {itemCount === 1 ? 'item' : 'itens'} selecionados</p>
                </div>
              </div>
              <button onClick={closeCart} className="text-white/80 hover:text-white">
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-10">
                  <span className="text-6xl mb-4">🛒</span>
                  <p className="font-bold text-gray-600 text-lg">Seu orçamento está vazio</p>
                  <p className="text-gray-400 text-sm mt-1">Adicione brinquedos para solicitar um orçamento</p>
                </div>
              ) : (
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl flex-shrink-0`}>
                        {item.emoji}
                      </div>
                      <span className="flex-1 font-bold text-gray-800 text-sm">{item.name}</span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      >
                        <X size={16} />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer actions */}
            {cartItems.length > 0 && (
              <div className="p-4 border-t border-gray-100 space-y-3">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    openWhatsApp(cartItems)
                    closeCart()
                  }}
                  className="btn-whatsapp w-full justify-center text-base py-4"
                >
                  <MessageCircle size={20} />
                  Solicitar orçamento pelo WhatsApp
                </motion.button>
                <button
                  onClick={clearCart}
                  className="flex items-center justify-center gap-2 w-full text-gray-400 hover:text-red-500 text-sm font-medium transition-colors py-2"
                >
                  <Trash2 size={14} />
                  Limpar orçamento
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleCart}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full gradient-bg text-white shadow-festa-lg flex items-center justify-center"
      >
        <ShoppingCart size={22} />
        {itemCount > 0 && (
          <motion.span
            key={itemCount}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-festa-yellow text-gray-900 text-xs font-black w-6 h-6 rounded-full flex items-center justify-center"
          >
            {itemCount}
          </motion.span>
        )}
      </motion.button>
    </>
  )
}
