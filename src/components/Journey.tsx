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

        {/* Título + Texto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20 max-w-3xl mx-auto"
        >
          <h2 className="font-heading font-semibold text-3xl md:text-5xl lg:text-6xl text-[#13181E] leading-[1.1] tracking-tight mb-6 md:mb-8">
            Não dependa mais somente de manuais.
          </h2>
          <p className="text-[#13181E]/70 text-xl md:text-2xl leading-relaxed">
            Entenda o raciocínio clínico por trás de cada caso real e saiba exatamente como agir no próximo atendimento, mesmo quando o paciente traz algo que você nunca viu na teoria.
          </p>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden mb-10 md:mb-14"
        >
          <Image
            src="/journey-2.webp"
            alt="Dra. Katia Caetano em seu consultório"
            fill
            unoptimized
            className="object-cover"
          />
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
