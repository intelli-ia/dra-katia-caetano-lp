"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RegistrationModal } from "@/components/ui/RegistrationModal";

const faqs = [
  {
    q: "Como funciona a aplicação?",
    a: "A aplicação é um formulário simples para você apresentar seu momento profissional e suas demandas clínicas atuais. Não é uma prova e não exige nenhum compromisso financeiro. Após preencher, avaliaremos o alinhamento com a proposta e entraremos em contato.",
  },
  {
    q: "Quando acontecem os encontros?",
    a: "Os encontros acontecem semanalmente, toda segunda-feira, das 16h às 18h, com início em 14 de setembro de 2026.",
  },
  {
    q: "Como são realizados os encontros?",
    a: "Os encontros são realizados ao vivo, em formato online. O link de acesso é informado para os participantes do grupo.",
  },
  {
    q: "Qual é o investimento?",
    a: "O investimento é de R$ 490 por mês, pelo período de setembro a dezembro de 2026 (quatro meses). O processo começa pela aplicação, sem nenhum compromisso financeiro.",
  },
  {
    q: "Quantas vagas estão disponíveis?",
    a: "O grupo é fechado e conta com apenas 10 profissionais, para garantir profundidade nas discussões e espaço para apresentação e análise dos casos de cada participante.",
  },
  {
    q: "Posso apresentar meus casos nas sessões?",
    a: "Sim. A apresentação de casos é parte central da supervisão. Você poderá trazer situações reais da sua prática para serem analisadas e discutidas durante os encontros.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative w-full py-16 md:py-36 section-bg">
      <div className="container mx-auto px-6 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="font-heading font-medium text-[1.875rem] md:text-[2.5rem] lg:text-[3rem] text-white leading-[1.18] tracking-tight">
            Ficou com alguma{" "}
            <span className="text-[#008538]">dúvida?</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3 mb-10 md:mb-16">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 px-5 md:px-7 py-5 md:py-6 text-left group hover:bg-white/5 transition-colors duration-200"
              >
                <span className="font-heading font-medium text-lg md:text-xl text-white group-hover:text-[#008538] transition-colors duration-200 leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    open === i
                      ? "bg-[#008538] rotate-45"
                      : "bg-white/10 group-hover:bg-[#008538]/20"
                  }`}
                >
                  <svg
                    className={`w-3.5 h-3.5 transition-colors duration-300 ${
                      open === i ? "text-white" : "text-white/50"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-7 pb-5 md:pb-7">
                      <div className="w-full h-px bg-white/10 mb-4" />
                      <p className="text-white/60 leading-relaxed text-base md:text-lg">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <RegistrationModal label="Quero me aplicar" className="text-white" />
        </motion.div>

      </div>
    </section>
  );
}
