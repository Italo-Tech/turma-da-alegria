const WHATSAPP_NUMBER = '5511999999999' // Substituir pelo número real

export function generateWhatsAppMessage(cartItems) {
  if (!cartItems || cartItems.length === 0) return ''

  const productList = cartItems
    .map((item) => `🎉 ${item.name}`)
    .join('\n')

  const message = `Olá, equipe Turma da Alegria! 🎊

Gostaria de solicitar um orçamento para os seguintes brinquedos:

${productList}

Aguardo retorno com os valores e disponibilidade.

Obrigado! 😊`

  return message
}

export function openWhatsApp(cartItems) {
  const message = generateWhatsAppMessage(cartItems)
  const encodedMessage = encodeURIComponent(message)
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
  window.open(url, '_blank')
}

export function openWhatsAppDirect(customMessage) {
  const encodedMessage = encodeURIComponent(customMessage)
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
  window.open(url, '_blank')
}
