import { useEffect } from 'react'

export default function SEOHead({ title, description, image }) {
  const fullTitle = title ? `${title} | Turma da Alegria` : 'Turma da Alegria — Aluguel de Brinquedos para Festas'
  const desc = description || 'Aluguel de brinquedos para festas infantis em São Paulo. Piscinas de bolinhas, camas elásticas, infláveis, touro mecânico e muito mais!'

  useEffect(() => {
    document.title = fullTitle
    const setMeta = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        if (property) el.setAttribute('property', name)
        else el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    setMeta('description', desc)
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', desc, true)
    setMeta('og:type', 'website', true)
    if (image) setMeta('og:image', image, true)
  }, [fullTitle, desc, image])

  return null
}
