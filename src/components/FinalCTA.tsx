"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Users } from "lucide-react";
import { RegistrationModal } from "@/components/ui/RegistrationModal";

const details = [
  { icon: Calendar, label: "Período", value: "Setembro a dezembro de 2026" },
  { icon: Clock, label: "Encontros", value: "Semanais, às segundas, 16h–18h" },
  { icon: Users, label: "Grupo", value: "Fechado, apenas 10 profissionais" },
];

export function FinalCTASection() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32 section-bg-light">

      {/* Detalhe decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[#008538]/40 z-10" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#008538]/60 z-10" />

      <div className="relative z-10 container mx-auto px-6 md:px-16">
        <div className="relative max-w-3xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 text-center mb-10 mt-8 md:mt-0"
          >
            <span className="text-[#008538]/80 font-heading font-medium text-xs uppercase tracking-widest mb-4 block">
              Supervisão Clínica Semestral em TCC
            </span>
            <h2 className="font-heading font-semibold text-3xl md:text-5xl lg:text-[3.25rem] text-[#13181E] leading-[1.1] tracking-tight mb-5">
              Um semestre para aprofundar{" "}
              <span className="text-[#008538]">sua prática clínica.</span>
            </h2>
            <p className="text-[#13181E]/55 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Você não precisa enfrentar sozinho as dúvidas que surgem na condução dos seus casos. Ter um espaço para apresentar o que está acontecendo, organizar o raciocínio, discutir hipóteses e receber orientação pode transformar a maneira como você compreende e conduz seus atendimentos.
            </p>
          </motion.div>

          {/* Card de preço */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-[#13181E] rounded-3xl p-8 md:p-12 mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

              {/* Detalhes */}
              <div className="space-y-4">
                {details.map((d) => (
                  <div key={d.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#008538]/15 flex items-center justify-center shrink-0">
                      <d.icon className="w-4 h-4 text-[#008538]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">{d.label}</p>
                      <p className="text-white font-medium text-sm">{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Preço + CTA */}
              <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
                <div>
                  <p className="text-white/40 text-xs mb-1">Investimento atual</p>
                  <p className="font-heading font-bold text-white text-4xl md:text-5xl leading-none">
                    R$&nbsp;490
                    <span className="text-white/50 text-xl font-medium">/mês</span>
                  </p>
                </div>
                <RegistrationModal label="Quero me aplicar" className="text-white" />
              </div>

            </div>

            <div className="mt-8 pt-7 border-t border-white/10">
              <p className="text-white/40 text-sm leading-relaxed">
                As vagas são limitadas para preservar a proposta de um grupo pequeno e possibilitar espaço para apresentação e discussão dos casos. <strong className="text-white/60">A aplicação não gera nenhum compromisso financeiro.</strong>
              </p>
            </div>
          </motion.div>

          {/* Frase final */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-[#13181E]/45 text-sm md:text-base leading-relaxed max-w-xl mx-auto"
          >
            O objetivo não é apenas responder à dúvida de hoje. É ajudar você a{" "}
            <strong className="text-[#13181E]/65">desenvolver um raciocínio clínico mais sólido para os casos de amanhã.</strong>
          </motion.p>

        </div>
      </div>
    </section>
  );
}
