"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK } from "@/lib/constants";

export default function PresentationSection() {
  return (
    <section id="dra-katia" className="relative w-full py-20 md:py-32 section-bg-light overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-14 md:gap-20 md:translate-x-16 lg:translate-x-24"
        >
          {/* Imagem */}
          <div className="relative w-full md:w-2/5 shrink-0">
            {/* Glow decorativo */}
            <div className="absolute -inset-6 bg-[#008538]/10 rounded-[2.5rem] blur-2xl -z-10" />

            <div className="relative h-[420px] md:h-[640px] rounded-[2rem] overflow-hidden border border-[#13181E]/10 shadow-[0_30px_60px_-20px_rgba(19,24,30,0.25)]">
              <Image
                src="/presentation-1.webp"
                alt="Dra. Katia Caetano"
                fill
                unoptimized
                className="object-cover object-[center_28%]"
              />
            </div>

            {/* Badge flutuante */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-[#13181E] rounded-2xl p-4 pr-6 shadow-2xl shadow-black/20 flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-[#008538]/15 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-[#008538]" />
              </div>
              <div>
                <p className="font-heading font-semibold text-white text-sm leading-tight">
                  21 anos
                </p>
                <p className="text-white/50 text-xs leading-tight">
                  de prática clínica
                </p>
              </div>
            </motion.div>
          </div>

          {/* Texto */}
          <div className="md:w-3/5">
            <span className="text-[#008538] font-heading font-medium text-xs uppercase tracking-widest mb-3 block">
              Sobre a mentora
            </span>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#13181E] leading-tight mb-6">
              Dra Katia Caetano
            </h2>
            <p className="text-[#13181E]/60 text-base md:text-lg leading-relaxed max-w-lg">
              Com 21 anos de prática clínica e trajetória acadêmica que inclui
              Doutorado pela USP e Pós-Doutorado no East Bay Behavior Therapy
              Center (EUA), a Dra. Kátia Caetano dedica-se à sistematização do
              raciocínio clínico na Terapia Cognitivo-Comportamental. Docente de
              cursos de graduação e pós-graduação desde 2017, ela estruturou um
              modelo de supervisão voltado à aplicação técnica imediata em casos
              reais, priorizando o desenvolvimento de estratégias de manejo
              sobre a teoria abstrata. O objetivo central de sua atuação é
              transformar a complexidade da TCC em passos simples, ajudando o
              profissional a desenvolver o raciocínio clínico para atender com
              a segurança de quem sabe exatamente o que está fazendo em cada
              sessão.
            </p>
            <div className="pt-8">
              <CTAButton
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                label="Quero participar"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
