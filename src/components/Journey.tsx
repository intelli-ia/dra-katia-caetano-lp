"use client";

import { motion } from "framer-motion";
import { RegistrationModal } from "@/components/ui/RegistrationModal";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.2 } as const;

const features = [
  {
    title: "Encontros Semanais ao Vivo",
    description: "Toda segunda-feira, das 16h às 18h, a partir de 14 de setembro de 2026.",
  },
  {
    title: "Grupo Reduzido",
    description: "A supervisão acontece em um grupo fechado de apenas 10 profissionais, permitindo maior profundidade nas discussões e espaço para apresentação dos casos.",
  },
  {
    title: "Apresentação de Casos",
    description: "Você poderá trazer situações reais da sua prática para serem analisadas e discutidas durante os encontros.",
  },
  {
    title: "Discussões Estruturadas",
    description: "As discussões são conduzidas de forma organizada, considerando os diferentes elementos envolvidos em cada caso.",
  },
  {
    title: "Orientação Específica",
    description: "Você recebe direcionamentos relacionados às suas dificuldades e aos desafios apresentados nos casos.",
  },
  {
    title: "Desenvolvimento do Raciocínio Terapêutico",
    description: "Mais do que encontrar respostas para um caso específico, o objetivo é desenvolver sua capacidade de analisar, formular e tomar decisões clínicas com maior precisão.",
  },
];

const structureItems = [
  { label: "Período", value: "Setembro a dezembro de 2026" },
  { label: "Início", value: "14 de setembro de 2026" },
  { label: "Frequência", value: "Encontros semanais" },
  { label: "Dia", value: "Segunda-feira" },
  { label: "Horário", value: "16h às 18h" },
  { label: "Formato", value: "Encontros ao vivo" },
  { label: "Grupo", value: "Fechado, com 10 profissionais" },
];

const activities = [
  "Apresentação e Análise de Casos",
  "Discussão Técnica",
  "Construção e Revisão de Hipóteses Clínicas",
  "Análise dos Processos Envolvidos",
  "Discussão de Estratégias e Intervenções",
  "Dúvidas Relacionadas à Prática Clínica",
  "Orientação sobre a Condução dos Casos",
  "Desenvolvimento do Raciocínio Terapêutico",
];

export default function JourneySection() {
  return (
    <>
      {/* Como funciona */}
      <section id="como-funciona" className="relative w-full py-20 md:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-6 md:px-16">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ duration: 0.8, ease }}
            className="text-center mb-14 md:mb-20 max-w-3xl mx-auto"
          >
            <span className="text-[#008538] font-heading font-medium text-[0.7rem] tracking-[0.14em] uppercase mb-4 block">
              Metodologia
            </span>
            <h2 className="font-heading font-medium text-[1.875rem] md:text-[2.5rem] lg:text-[3rem] text-[#13181E] leading-[1.18] tracking-tight mb-5">
              Como funciona a supervisão?
            </h2>
            <p className="text-[#13181E]/55 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Durante quatro meses, você estará inserido em um processo contínuo de acompanhamento clínico.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto mb-14 md:mb-20">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                className="bg-[#F7F6F3] border border-[#13181E]/8 rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#008538]/12 flex items-center justify-center shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#008538]" />
                </div>
                <h3 className="font-heading font-semibold text-[#13181E] text-lg leading-snug">
                  {f.title}
                </h3>
                <p className="text-[#13181E]/60 text-base md:text-lg leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Estrutura do programa */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ duration: 0.8, ease }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row gap-8">

              {/* Info da estrutura */}
              <div className="lg:w-2/5 bg-[#13181E] rounded-3xl p-8">
                <p className="text-[#008538] font-heading font-medium text-[0.7rem] tracking-[0.14em] uppercase mb-5">
                  Estrutura do programa
                </p>
                <div className="space-y-4">
                  {structureItems.map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-4 border-b border-white/8 pb-4 last:border-0 last:pb-0">
                      <span className="text-white/45 text-sm">{item.label}</span>
                      <span className="text-white font-medium text-sm text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Atividades */}
              <div className="lg:w-3/5 bg-[#F7F6F3] border border-[#13181E]/8 rounded-3xl p-8">
                <p className="text-[#008538] font-heading font-medium text-[0.7rem] tracking-[0.14em] uppercase mb-5">
                  Ao longo do semestre, os encontros poderão envolver:
                </p>
                <ul className="space-y-3 mb-8">
                  {activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-[#008538]/12 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#008538]" />
                      </span>
                      <span className="text-[#13181E]/70 text-base md:text-lg leading-relaxed">{activity}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#13181E]/50 text-base leading-relaxed italic">
                  A proposta é que você não tenha apenas uma supervisão pontual, mas um espaço contínuo para desenvolver sua prática clínica ao longo de todo o semestre.
                </p>
              </div>

            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="flex justify-center mt-14 md:mt-20"
          >
            <RegistrationModal label="Quero me aplicar" className="text-white" />
          </motion.div>

        </div>
      </section>
    </>
  );
}
