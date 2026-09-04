"use client";

import { motion } from "framer-motion";
import { RegistrationModal } from "@/components/ui/RegistrationModal";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.15 } as const;

const items = [
  {
    number: "01",
    title: "Supervisão clínica semanal ao vivo",
    description: "Encontros semanais para apresentação de casos, discussão técnica, orientação e desenvolvimento do raciocínio clínico.",
  },
  {
    number: "02",
    title: "Curso Formação e Tratamento da Ansiedade",
    description: "Acesso ao curso completo, composto por 10 aulas, para aprofundar sua compreensão sobre ansiedade e seu tratamento.",
  },
  {
    number: "03",
    title: "Fichas e materiais clínicos exclusivos",
    description: "Materiais desenvolvidos para apoiar sua prática e organização dos casos.",
  },
  {
    number: "04",
    title: "Pasta exclusiva no Drive",
    description: "Um espaço organizado com materiais complementares para consulta ao longo do programa.",
  },
  {
    number: "05",
    title: "Artigos científicos selecionados",
    description: "Conteúdos científicos selecionados para complementar e aprofundar as discussões clínicas.",
  },
];

export default function AboutSection() {
  return (
    <section id="o-que-voce-recebe" className="relative w-full py-20 md:py-32 section-bg">
      <div className="container mx-auto px-6 md:px-16">

        {/* Cabeçalho */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="max-w-2xl mx-auto text-center mb-14 md:mb-20"
        >
          <span className="text-[#008538] font-heading font-medium text-[0.7rem] tracking-[0.14em] uppercase mb-4 block">
            Incluído na supervisão
          </span>
          <h2 className="font-heading font-medium text-[1.875rem] md:text-[2.5rem] lg:text-[3rem] text-white leading-[1.18] tracking-tight">
            Tudo o que você{" "}
            <span className="text-[#008538]">recebe</span>
          </h2>
        </motion.div>

        {/* Grid de itens */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ duration: 0.6, ease, delay: i * 0.09 }}
              className={`group bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-all duration-300 hover:border-[#008538]/40 hover:bg-white/[0.07] ${i === 4 ? "md:col-span-2 lg:col-span-1 md:mx-auto md:w-1/2 lg:w-full" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-[#008538]/15 flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-[#008538] text-xs">{item.number}</span>
                </span>
                <h3 className="font-heading font-semibold text-white text-lg md:text-xl leading-snug group-hover:text-[#00e070] transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
              <p className="text-white/60 text-base md:text-lg leading-relaxed pl-12">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
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
  );
}
