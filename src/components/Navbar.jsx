import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Menu, X, Phone } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const links = [
  { to: '/', label: 'Início' },
  { to: '/brinquedos-tradicionais', label: 'Tradicionais' },
  { to: '/brinquedos-inflaveis', label: 'Infláveis' },
  { to: '/touro-mecanico', label: 'Touro Mecânico' },
  { to: '/combos', label: 'Combos' },
]

export default function Navbar() {
  const { itemCount, toggleCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 20 }}
              className="text-3xl"
            >
              🎉
            </motion.div>
            <div>
              <span className={`font-black text-xl leading-none block ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Turma da
              </span>
              <span className="font-black text-xl leading-none gradient-text block">
                Alegria
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-200 ${
                    location.pathname === link.to
                      ? 'bg-gradient-to-r from-festa-orange to-festa-pink text-white shadow-festa'
                      : scrolled
                      ? 'text-gray-700 hover:text-festa-orange hover:bg-orange-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Cart button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleCart}
              className="relative p-2 rounded-full bg-gradient-to-r from-festa-orange to-festa-pink text-white shadow-festa"
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-festa-yellow text-gray-900 text-xs font-black w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </motion.button>

            {/* WhatsApp CTA (desktop) */}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-green-500 text-white font-bold text-sm px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
            >
              <Phone size={14} />
              Falar conosco
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={`lg:hidden p-2 rounded-full ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[70px] left-0 right-0 z-40 bg-white shadow-xl border-t border-gray-100 lg:hidden overflow-hidden"
          >
            <div className="p-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                    location.pathname === link.to
                      ? 'bg-gradient-to-r from-festa-orange to-festa-pink text-white'
                      : 'text-gray-700 hover:bg-orange-50 hover:text-festa-orange'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full px-4 py-3 bg-green-500 text-white font-bold text-sm rounded-2xl mt-2"
              >
                <Phone size={16} />
                Falar pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
