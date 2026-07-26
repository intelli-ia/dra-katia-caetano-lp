"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative w-full py-20 md:py-36 section-bg-light overflow-hidden">

      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Image — left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/5 flex-shrink-0"
          >
            <Image
              src="/psikatiacaetano_DXy6ogYFkaA_5.jpg"
              alt="Dra. Kátia Caetano"
              width={560}
              height={700}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </motion.div>

          {/* Content — right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="font-heading font-semibold text-[#13181E] text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-5">
              Um ambiente para quem leva a{" "}
              <span className="text-[#008538]">psicologia a sério.</span>
            </h2>
            <p className="font-heading font-medium text-[#13181E]/70 text-lg md:text-2xl leading-snug mb-7">
              O suporte prático que irá melhorar a qualidade dos seus atendimentos.
            </p>
            <div className="w-12 h-0.5 bg-[#008538] mb-7" />
            <p className="text-[#13181E] text-lg md:text-xl leading-relaxed mb-10">
              A cada 15 dias, a Dra. Kátia Caetano (Doutora pela USP e Pós-Doc no
              East Bay Behavior Therapy Center - EUA) conduz sessões de supervisão
              ao vivo focadas em casos reais, para você aprender com quem é
              referência na prática clínica, e conduzir seus casos como um
              especialista.
            </p>
            <CTAButton
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              label="Quero participar"
              className="md:px-10 md:py-4 md:text-2xl"
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
}
