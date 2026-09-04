"use client";

import { motion } from "framer-motion";
import { RegistrationModal } from "@/components/ui/RegistrationModal";

const ease = [0.16, 1, 0.3, 1] as const;

const benefits = [
  "desenvolver mais clareza e segurança no raciocínio clínico",
  "organizar melhor as informações de cada caso",
  "compreender com maior precisão os processos envolvidos",
  "construir hipóteses clínicas mais consistentes",
  "relacionar a formulação do caso às estratégias terapêuticas",
  "conduzir intervenções com maior segurança",
  "discutir casos reais e receber orientação específica",
  "evoluir tecnicamente com acompanhamento contínuo",
];

export default function ForWhomSection() {
  return (
    <section
      id="para-quem"
      className="relative w-full py-20 md:py-32 section-bg overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-5xl">

        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="md:w-2/5 md:sticky md:top-32"
          >
            <span className="text-[#008538] font-heading font-medium text-xs uppercase tracking-widest mb-4 block">
              Para quem é
            </span>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight mb-6">
              Esta supervisão é para psicólogos que querem:
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8">
              Se você sente que muitas vezes <strong className="text-white/75">sabe a teoria, mas ainda tem dúvidas sobre como organizar o caso e decidir o próximo passo</strong>, a supervisão foi pensada para esse momento da sua prática.
            </p>
            <RegistrationModal label="Quero me aplicar" className="text-white" />
          </motion.div>

          {/* Right — list */}
          <div className="md:w-3/5 flex flex-col gap-4">
            {benefits.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: i * 0.07 }}
                className="flex items-start gap-4 bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 hover:border-[#008538]/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <span className="mt-0.5 w-6 h-6 rounded-full bg-[#008538]/15 flex items-center justify-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#008538]" />
                </span>
                <span className="text-white/80 text-base md:text-lg leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
