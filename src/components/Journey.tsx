"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { MovingBorderWrapper } from "@/components/ui/MovingBorderButton";
import { WA_LINK } from "@/lib/constants";

export default function JourneySection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-16">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-6 max-w-3xl mx-auto"
        >
          <h2 className="font-heading font-semibold text-3xl md:text-5xl lg:text-6xl text-[#13181E] leading-[1.1] tracking-tight">
            Não dependa mais somente de manuais.
          </h2>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-full md:w-3/5 mx-auto aspect-[16/7] rounded-3xl overflow-hidden mb-10 md:mb-6"
        >
          <Image
            src="/psikatiacaetano_DXAK-x5lkop_2 2.webp"
            alt="Dra. Katia Caetano em palestra"
            fill
            unoptimized
            className="object-cover"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-center mb-10 md:mb-6 max-w-3xl mx-auto"
        >
          <p className="text-[#13181E]/70 text-xl md:text-2xl leading-relaxed">
            Entenda o raciocínio clínico por trás de cada caso real e saiba exatamente como agir no próximo atendimento, mesmo quando o paciente traz algo que você nunca viu na teoria.
          </p>
        </motion.div>

        {/* Botão */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <MovingBorderWrapper>
            <CTAButton
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              label="Quero participar"
              className="text-white"
            />
          </MovingBorderWrapper>
        </motion.div>

      </div>
    </section>
  );
}
