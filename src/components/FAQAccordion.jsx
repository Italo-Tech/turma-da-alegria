import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'A montagem e desmontagem estão incluídas no aluguel?',
    a: 'Sim! Nossa equipe faz toda a montagem e desmontagem dos equipamentos. Você não precisa se preocupar com nada disso!',
  },
  {
    q: 'Com quanto tempo de antecedência devo reservar?',
    a: 'Recomendamos reservar com pelo menos 7 dias de antecedência para garantir a disponibilidade dos equipamentos. Em datas comemorativas (aniversários, carnaval, etc.), reserve com mais antecedência.',
  },
  {
    q: 'Os equipamentos são higienizados?',
    a: 'Sim! Todos os nossos equipamentos passam por higienização completa antes e após cada uso. A segurança e saúde das crianças é nossa prioridade.',
  },
  {
    q: 'Atendem em quais regiões?',
    a: 'Atendemos na Grande São Paulo e região. Entre em contato via WhatsApp para verificar a disponibilidade na sua cidade.',
  },
  {
    q: 'Qual a faixa etária recomendada para cada brinquedo?',
    a: 'Cada brinquedo tem sua indicação de faixa etária. Em geral, piscinas de bolinhas são para 1-5 anos, camas elásticas a partir de 3 anos, e infláveis a partir de 3 anos. Nossa equipe orienta no momento da reserva.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Aceitamos Pix, transferência bancária e cartões. Solicite seu orçamento via WhatsApp e nossa equipe irá orientar sobre as formas de pagamento disponíveis.',
  },
  {
    q: 'E se chover no dia da festa?',
    a: 'Temos políticas de reagendamento em caso de chuva. Entre em contato com nossa equipe o mais rápido possível para reorganizarmos o evento.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Perguntas <span className="gradient-text">frequentes</span></h2>
            <p className="section-subtitle">Tire suas dúvidas sobre nossos serviços</p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-orange-50 transition-colors"
              >
                <span className="font-bold text-gray-800 pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-festa-orange flex-shrink-0"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-500 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
