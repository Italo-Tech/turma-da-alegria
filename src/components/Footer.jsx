import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaWhatsapp, FaMap, FaHeart } from 'react-icons/fa'

const links = [
  { to: '/', label: 'Início' },
  { to: '/brinquedos-tradicionais', label: 'Brinquedos Tradicionais' },
  { to: '/brinquedos-inflaveis', label: 'Brinquedos Infláveis' },
  { to: '/touro-mecanico', label: 'Touro Mecânico' },
  { to: '/combos', label: 'Combos Promocionais' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🎉</span>
              <div>
                <p className="font-black text-xl">Turma da Alegria</p>
                <p className="text-gray-400 text-sm">Aluguel de brinquedos</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transformamos festas em momentos inesquecíveis! Aluguel de brinquedos com segurança, higiene e muito profissionalismo.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-festa-pink transition-colors flex items-center justify-center">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 transition-colors flex items-center justify-center">
                <FaFacebook size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-black text-white mb-4">Menu</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-festa-orange transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-black text-white mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                <FaWhatsapp size={16} className="text-green-400" />
                (11) 99999-9999
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMap size={16} className="text-festa-orange mt-0.5 flex-shrink-0" />
                <span>São Paulo e Grande São Paulo</span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20um%20orçamento!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex text-sm py-2.5 px-5"
              >
                <FaWhatsapp size={16} />
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-4">
        <div className="container-custom mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Turma da Alegria. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <FaHeart size={14} className="text-festa-pink fill-festa-pink" /> para sua festa
          </p>
        </div>
      </div>
    </footer>
  )
}
