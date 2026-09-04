"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { RegistrationModal } from "@/components/ui/RegistrationModal";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.2 } as const;

const beforeItems = [
  {
    title: "Inseguro diante de alguns casos",
    description: "Dificuldade para saber exatamente como organizar as informações e definir os próximos passos.",
  },
  {
    title: "Com dificuldade para estruturar o raciocínio terapêutico",
    description: "Muitas informações sobre o paciente, mas pouca clareza sobre como relacioná-las.",
  },
  {
    title: "Sentindo que falta algo nas intervenções",
    description: "Você conhece diferentes técnicas, mas nem sempre tem certeza de qual intervenção faz mais sentido para aquele caso.",
  },
  {
    title: "Com pouca clareza sobre o processo clínico",
    description: "Dificuldade para compreender como os diferentes elementos do caso se conectam.",
  },
  {
    title: "Sem espaço para discutir casos com profundidade",
    description: "Dúvidas que permanecem mesmo depois de estudar ou buscar respostas individualmente.",
  },
];

const afterItems = [
  {
    title: "Mais clareza e precisão clínica",
    description: "Uma visão mais organizada dos elementos relevantes de cada caso.",
  },
  {
    title: "Melhor organização dos casos",
    description: "Maior capacidade de estruturar informações e compreender suas relações.",
  },
  {
    title: "Intervenções mais coerentes com a formulação",
    description: "Decisões terapêuticas mais alinhadas à compreensão específica de cada caso.",
  },
  {
    title: "Uma visão clínica mais estruturada",
    description: "Mais clareza para compreender processos, formular hipóteses e conduzir o tratamento.",
  },
  {
    title: "Evolução técnica contínua",
    description: "Um processo de desenvolvimento acompanhado ao longo de todo o semestre.",
  },
];

export default function PresentationSection() {
  return (
    <>
      {/* O que pode mudar */}
      <section id="o-que-muda" className="relative w-full py-20 md:py-32 section-bg overflow-hidden">
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
              Transformação
            </span>
            <h2 className="font-heading font-medium text-[1.875rem] md:text-[2.5rem] lg:text-[3rem] text-white leading-[1.18] tracking-tight">
              O que pode mudar na{" "}
              <span className="text-[#008538]">sua prática?</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {/* Antes */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ duration: 0.7, ease }}
              className="bg-red-950/40 border border-red-700/40 rounded-3xl p-7 md:p-10"
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-8 rounded-full bg-red-700/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                </div>
                <h3 className="font-heading font-semibold text-red-400 text-base uppercase tracking-wide">Antes</h3>
              </div>
              <p className="text-red-300/70 text-base mb-5">Você pode se perceber:</p>
              <div className="space-y-5">
                {beforeItems.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1">
                    <p className="font-heading font-medium text-red-200 text-lg leading-snug">{item.title}</p>
                    <p className="text-red-300/60 text-base leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Depois */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="bg-[#008538]/20 border border-[#008538]/50 rounded-3xl p-7 md:p-10"
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-8 rounded-full bg-[#008538]/35 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#00c050]" />
                </div>
                <h3 className="font-heading font-semibold text-[#00e070] text-base uppercase tracking-wide">Depois</h3>
              </div>
              <p className="text-white/60 text-base mb-5">A proposta é desenvolver:</p>
              <div className="space-y-5">
                {afterItems.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1">
                    <p className="font-heading font-medium text-white text-lg leading-snug">{item.title}</p>
                    <p className="text-white/70 text-base leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Sobre a supervisora */}
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
              <div className="absolute -inset-6 bg-[#008538]/10 rounded-[2.5rem] blur-2xl -z-10" />
              <div className="relative h-[420px] md:h-[640px] rounded-[2rem] overflow-hidden border border-[#13181E]/10 shadow-[0_30px_60px_-20px_rgba(19,24,30,0.25)]">
                <Image
                  src="/about.webp"
                  alt="Dra. Katia Caetano"
                  fill
                  unoptimized
                  className="object-cover object-[center_28%]"
                />
              </div>
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
                    Pós-doutorado (EUA)
                  </p>
                  <p className="text-white/50 text-xs leading-tight">
                    Doutorado USP · Mestrado USP
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Texto */}
            <div className="md:w-3/5">
              <span className="text-[#008538] font-heading font-medium text-[0.7rem] tracking-[0.14em] uppercase mb-3 block">
                Sobre a supervisora
              </span>
              <h2 className="font-heading font-medium text-[1.875rem] md:text-[2.5rem] lg:text-[3rem] text-[#13181E] leading-[1.18] tracking-tight mb-6">
                Dra. Kátia Caetano
              </h2>
              <p className="text-[#13181E]/60 text-base md:text-lg leading-relaxed max-w-lg mb-5">
                A Dra. Kátia Caetano é psicóloga e atua na formação e supervisão de profissionais da área clínica, com experiência em processos terapêuticos, análise clínica, conceitualização de casos e desenvolvimento de psicólogos.
              </p>
              <p className="text-[#13181E]/50 text-base md:text-lg leading-relaxed max-w-lg mb-5">
                Sua formação acadêmica inclui <strong className="text-[#13181E]/70">Pós-doutorado em Terapia Cognitivo-Comportamental nos Estados Unidos</strong>, <strong className="text-[#13181E]/70">Doutorado pela Universidade de São Paulo (USP)</strong> e <strong className="text-[#13181E]/70">Mestrado pela Universidade de São Paulo (USP)</strong>.
              </p>
              <p className="text-[#13181E]/50 text-base md:text-lg leading-relaxed max-w-lg mb-7">
                Ao longo de sua trajetória, desenvolveu experiência na análise e condução de processos terapêuticos, conceitualização de casos, supervisão clínica e formação de psicólogos.
              </p>
              <p className="text-[#13181E]/50 text-base leading-relaxed max-w-lg mb-8 italic">
                A supervisão reúne essa experiência em um formato de acompanhamento próximo, estruturado e contínuo.
              </p>
              <RegistrationModal label="Quero me aplicar" className="text-white" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
