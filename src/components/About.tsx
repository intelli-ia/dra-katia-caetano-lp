"use client";

import { motion } from "framer-motion";
import { Video, BookOpen, Compass, MessageCircle } from "lucide-react";

const items = [
  {
    icon: Video,
    title: "Supervisões Clínicas ao Vivo",
    description: "Encontros quinzenais que funcionam como um laboratório prático.",
  },
  {
    icon: BookOpen,
    title: "Acervo de Curadoria Científica",
    description: "Materiais complementares de leitura.",
  },
  {
    icon: Compass,
    title: "Direcionamento Estratégico",
    description:
      "Recomendações práticas e orientações de manejo para os desafios que você encontra no consultório, garantindo que você nunca se sinta desamparado na condução dos seus casos.",
  },
  {
    icon: MessageCircle,
    title: "Comunidade de Intervisão",
    description: "Acesso ao nosso grupo exclusivo no WhatsApp.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative w-full py-20 md:py-32 section-bg">
      <div className="container mx-auto px-6 md:px-16">

        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-14 md:mb-20"
        >
          <h2 className="font-heading font-medium text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
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
              className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-white/[0.05] hover:border-[#008538]/50 hover:shadow-[0_24px_48px_-16px_rgba(0,133,56,0.4)]"
            >
              <div className="w-12 h-12 rounded-xl border border-[#008538]/40 flex items-center justify-center mb-5 transition-all duration-300 ease-out group-hover:bg-[#008538] group-hover:border-[#008538] group-hover:shadow-[0_0_24px_rgba(0,133,56,0.55)] group-hover:scale-110">
                <item.icon className="w-5 h-5 text-[#008538] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="font-heading font-semibold text-white text-base md:text-lg leading-snug mb-2 transition-colors duration-300 group-hover:text-[#00e070]">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
