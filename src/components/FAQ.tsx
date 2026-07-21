"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK } from "@/lib/constants";

const faqs = [
  {
    q: "Como posso participar?",
    a: "Para participar, basta entrar no nosso grupo oficial. Clique em qualquer um dos botões espalhados ao longo desta página para ser direcionado automaticamente.",
  },
  {
    q: "Quando acontecem os encontros?",
    a: "Os encontros acontecem quinzenalmente, sempre às terças-feiras, no período da noite.",
  },
  {
    q: "Onde acontecem as reuniões?",
    a: "O link de acesso é informado diretamente dentro do grupo. Os encontros são online, realizados via Google Meet ou Zoom.",
  },
  {
    q: "Qual é o valor para participar?",
    a: "A participação é totalmente gratuita.",
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
          <h2 className="font-heading font-medium text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
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
                <span className="font-heading font-medium text-[15px] md:text-[17px] text-white group-hover:text-[#008538] transition-colors duration-200 leading-snug">
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
                      <p className="text-white/60 leading-relaxed text-[14px] md:text-[16px]">
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
          <CTAButton
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            label="Quero participar"
          />
        </motion.div>

      </div>
    </section>
  );
}
