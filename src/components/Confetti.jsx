import { useEffect, useState } from 'react'
import { useCart } from '../contexts/CartContext'

const COLORS = ['#FF6B35', '#FF4D9E', '#FFD60A', '#7C3AED', '#22C55E', '#3B82F6']

function ConfettiPiece({ x, y, color, delay }) {
  return (
    <div
      className="confetti-piece"
      style={{
        left: x,
        top: y,
        backgroundColor: color,
        animationDelay: `${delay}ms`,
        borderRadius: Math.random() > 0.5 ? '50%' : '2px',
        width: 8 + Math.random() * 8,
        height: 8 + Math.random() * 8,
      }}
    />
  )
}

export default function Confetti() {
  const { confettiTrigger } = useCart()
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    if (!confettiTrigger) return
    const newPieces = Array.from({ length: 20 }, (_, i) => ({
      id: `${confettiTrigger.ts}-${i}`,
      x: `${20 + Math.random() * 60}%`,
      y: `${20 + Math.random() * 40}%`,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: i * 30,
    }))
    setPieces(newPieces)
    const timer = setTimeout(() => setPieces([]), 1200)
    return () => clearTimeout(timer)
  }, [confettiTrigger])

  if (!pieces.length) return null
  return (
    <>
      {pieces.map((p) => (
        <ConfettiPiece key={p.id} {...p} />
      ))}
    </>
  )
}
