"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK, PROFESSIONAL_NAME } from "@/lib/constants";

export function FinalCTASection() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32 section-bg-light">

      {/* Detalhe decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[#008538]/40 z-10" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#008538]/60 z-10" />

      <div className="relative z-10 container mx-auto px-6 md:px-16">
        <div className="relative max-w-2xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 mb-8 mt-8 md:mt-0"
          >
            <span className="text-[#008538]/80 font-heading font-medium text-sm uppercase tracking-widest mb-2 md:mb-6 block">
              {PROFESSIONAL_NAME}
            </span>
            <h2 className="font-heading font-medium text-2xl md:text-3xl lg:text-4xl text-[#13181E] leading-tight mb-3 md:mb-6">
              Sua vaga na próxima supervisão
              <br />
              <span className="text-[#008538]">está a um clique de distância.</span>
            </h2>
            <p className="text-[#13181E]/55 text-base md:text-lg leading-relaxed max-w-md mx-auto">
              A cada 15 dias, você acompanha casos reais e sai com mais clareza
              pra atender com a segurança de quem sabe exatamente o que está
              fazendo. É gratuito, é ao vivo, e começa agora dentro do nosso
              grupo exclusivo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative z-10 flex justify-center mb-6"
          >
            <CTAButton
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              label="Quero participar"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
