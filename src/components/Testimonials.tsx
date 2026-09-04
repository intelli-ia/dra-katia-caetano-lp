"use client";

import { motion } from "framer-motion";
import { RegistrationModal } from "@/components/ui/RegistrationModal";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.2 } as const;

const selectionCriteria = [
  "nível de experiência e momento profissional",
  "demandas clínicas atuais",
  "interesse em desenvolver raciocínio clínico",
  "alinhamento com a proposta da supervisão",
  "possibilidade de participação e apresentação de casos",
];

export default function TestimonialsSection() {
  return (
    <section id="sobre-a-supervisao" className="relative w-full py-20 md:py-32 section-bg-light overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 max-w-4xl">

        {/* Intro */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="font-heading font-semibold text-3xl md:text-5xl lg:text-[3.25rem] text-[#13181E] leading-[1.1] tracking-tight mb-6">
            Uma supervisão para quem quer{" "}
            <span className="text-[#008538]">ir além da teoria.</span>
          </h2>
          <p className="text-[#13181E]/65 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Esta não é uma formação convencional. A proposta é criar um espaço contínuo de desenvolvimento clínico — no qual você possa apresentar seus casos, discutir suas decisões terapêuticas e receber orientação específica para aquilo que está acontecendo na sua prática.
          </p>
        </motion.div>

        {/* Por que existe uma aplicação */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="bg-[#13181E] rounded-3xl p-8 md:p-12"
        >
          <p className="text-[#008538] font-heading font-medium text-xs uppercase tracking-widest mb-4">
            Por que existe uma aplicação?
          </p>
          <h3 className="font-heading font-semibold text-white text-2xl md:text-3xl leading-snug tracking-tight mb-5">
            A aplicação não é uma prova e não exige nenhum compromisso financeiro.
          </h3>
          <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8">
            Ela existe para garantir que o grupo seja formado por profissionais alinhados à proposta da supervisão e para preservar a qualidade das discussões. O objetivo é formar um grupo pequeno, tecnicamente comprometido e que permita discussões realmente aprofundadas.
          </p>

          <p className="text-white/80 font-medium text-sm mb-4">A seleção considera aspectos como:</p>
          <ul className="space-y-3 mb-10">
            {selectionCriteria.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-[#008538]/20 flex items-center justify-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#008538]" />
                </span>
                <span className="text-white/70 text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-white/50 text-sm mb-6 italic">
            Preencha a aplicação sem compromisso financeiro.
          </p>

          <RegistrationModal label="Quero preencher a aplicação" className="text-white" />
        </motion.div>

      </div>
    </section>
  );
}
