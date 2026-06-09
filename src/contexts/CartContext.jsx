import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('turma-alegria-cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [confettiTrigger, setConfettiTrigger] = useState(null)

  useEffect(() => {
    localStorage.setItem('turma-alegria-cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addItem = useCallback((product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id)
      if (exists) return prev
      return [...prev, { id: product.id, name: product.name, emoji: product.emoji, gradient: product.gradient }]
    })
    setConfettiTrigger({ id: product.id, ts: Date.now() })
  }, [])

  const removeItem = useCallback((id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  const isInCart = useCallback(
    (id) => cartItems.some((item) => item.id === id),
    [cartItems]
  )

  const toggleCart = useCallback(() => setIsCartOpen((v) => !v), [])
  const closeCart = useCallback(() => setIsCartOpen(false), [])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemCount: cartItems.length,
        isCartOpen,
        confettiTrigger,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        toggleCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
