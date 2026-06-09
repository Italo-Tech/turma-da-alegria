import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingCart from '../components/FloatingCart'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Confetti from '../components/Confetti'

export default function MainLayout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingCart />
      <Confetti />
    </div>
  )
}
