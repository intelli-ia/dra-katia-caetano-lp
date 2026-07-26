"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "Supervisões Clínicas ao\u00a0Vivo",
    image: "/card-supervisao.jpg",
    description: "Encontros quinzenais ao vivo com análise e discussão de casos clínicos reais.",
  },
  {
    title: "Acervo de Curadoria\u00a0Científica",
    image: "/card-curadoria.jpg",
    description: "Artigos, protocolos e materiais selecionados para aprofundar sua prática clínica.",
  },
  {
    title: "Direcionamento Estratégico",
    image: "/card-direcionamento.jpg",
    description: "Orientações práticas de manejo clínico para os desafios do seu consultório.",
  },
  {
    title: "Comunidade de\u00a0Intervisão",
    image: "/card-whatsapp.png",
    imageBg: "bg-[#25D366]",
    imageContain: true,
    description: "Grupo exclusivo no WhatsApp para trocar experiências entre as supervisões.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative w-full py-20 md:py-32 section-bg">
      <div className="w-full px-4 md:px-8">

        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-14 md:mb-20"
        >
          <h2 className="font-heading font-semibold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
            O que você acessa junto do seu{" "}
            <span className="text-[#008538]">acompanhamento:</span>
          </h2>
        </motion.div>

        {/* Grade de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white/[0.03] border border-white/10 rounded-2xl p-5 min-h-[380px] flex flex-col transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-white/[0.05] hover:border-[#008538]/50 hover:shadow-[0_24px_48px_-16px_rgba(0,133,56,0.4)]"
            >
              <h3 className="font-heading font-semibold text-white text-2xl md:text-3xl leading-snug mb-4 transition-colors duration-300 group-hover:text-[#00e070]">
                {item.title}
              </h3>
              <div className={`relative w-full aspect-[4/3] mb-4 rounded-xl overflow-hidden ${"imageBg" in item ? item.imageBg : ""}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={"imageContain" in item ? "object-contain p-10" : "object-cover"}
                />
              </div>
              <p className="text-white text-lg md:text-xl leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
