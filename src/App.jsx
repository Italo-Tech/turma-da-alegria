import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import TradicionaisPage from './pages/TradicionaisPage'
import InflaveisPage from './pages/InflaveisPage'
import TouroMecanicoPage from './pages/TouroMecanicoPage'
import CombosPage from './pages/CombosPage'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brinquedos-tradicionais" element={<TradicionaisPage />} />
            <Route path="/brinquedos-inflaveis" element={<InflaveisPage />} />
            <Route path="/touro-mecanico" element={<TouroMecanicoPage />} />
            <Route path="/combos" element={<CombosPage />} />
          </Routes>
        </MainLayout>
      </CartProvider>
    </BrowserRouter>
  )
}
