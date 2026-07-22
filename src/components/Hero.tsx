"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Activity, Brain, FileText } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK } from "@/lib/constants";

const stats = [
  {
    icon: Activity,
    title: "Supervisão ao vivo",
    description: "Acompanhar supervisões reais e aprender com casos clínicos ao vivo.",
    rotate: "-rotate-3",
    top: "0px",
    left: "0px",
  },
  {
    icon: Brain,
    title: "Raciocínio clínico",
    description: "Desenvolver seu raciocínio clínico e fortalecer uma prática baseada em evidências.",
    rotate: "rotate-2",
    top: "160px",
    left: "460px",
  },
  {
    icon: FileText,
    title: "Materiais exclusivos",
    description: "Acessar materiais e documentos exclusivos compartilhados.",
    rotate: "-rotate-2",
    top: "340px",
    left: "0px",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden md:min-h-[90vh] md:flex md:items-center"
    >
      {/* ===== Desktop ===== */}

      {/* Foto — ocupa toda a hero */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src="/142.webp"
          alt="Dra. Katia Caetano"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(19,24,30,0.05) 0%, rgba(19,24,30,0.1) 40%, rgba(19,24,30,0.55) 62%, rgba(19,24,30,0.9) 100%)",
          }}
        />
      </div>

      {/* Stats — imagem secundária no lado esquerdo */}
      <div className="hidden lg:block absolute left-24 xl:left-32 bottom-4 xl:bottom-8 z-10 w-[660px] h-[520px]">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
            style={{ top: stat.top, left: stat.left }}
            className={`absolute ${stat.rotate} w-44 xl:w-48 bg-[#161C24]/95 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/40`}
          >
            <div className="w-9 h-9 rounded-lg bg-[#008538]/15 flex items-center justify-center mb-2.5">
              <stat.icon className="w-5 h-5 text-[#008538]" />
            </div>
            <p className="font-heading font-semibold text-white text-sm leading-snug">
              {stat.title}
            </p>
            <p className="text-white/50 text-xs leading-snug mt-1">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Conteúdo desktop */}
      <div className="hidden md:block relative z-10 w-full container mx-auto px-6">
        <div className="lg:ml-auto lg:w-[54%] xl:w-[48%] max-w-2xl">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#008538] font-heading font-semibold text-base md:text-lg uppercase tracking-widest mb-4 lg:mb-5"
          >
            Supervisão clínica gratuita.
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-heading font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-[1.12] tracking-tight max-w-lg"
          >
            Domine seu raciocínio clínico e atenda com a{" "}
            <span className="text-[#008538]">segurança de especialista.</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/70 text-base md:text-lg leading-relaxed mt-4 lg:mt-5 max-w-lg"
          >
            Receba o direcionamento prático de uma PhD com mais de 20 anos de
            experiência e concorra a ter o seu próprio atendimento supervisionado ao vivo.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 lg:mt-9"
          >
            <CTAButton
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              label="Quero participar"
              className="px-9 py-4 text-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* ===== Mobile ===== */}
      <div className="md:hidden">
        {/* Foto — proporção fixa; a altura desta caixa É a altura total da hero no mobile */}
        <div className="relative w-full aspect-[912/1850]">
          <Image
            src="/132.webp"
            alt="Dra. Katia Caetano"
            fill
            priority
            unoptimized
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #13181E 0%, rgba(19,24,30,0.7) 32%, rgba(19,24,30,0.2) 55%, rgba(19,24,30,0) 70%)",
            }}
          />

          {/* Conteúdo — posicionado de forma absoluta sobre a foto.
              Mover isso (via `bottom`) NÃO altera a altura da hero nem a posição da próxima seção. */}
          <div className="absolute inset-x-0 bottom-44 z-10 px-5 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#008538] font-heading font-semibold text-xs uppercase tracking-widest mb-2"
          >
            Supervisão clínica gratuita.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-heading font-bold text-white text-[26px] leading-[1.2] tracking-tight max-w-[300px] mx-auto"
          >
            Domine seu raciocínio clínico e atenda com a{" "}
            <span className="text-[#008538]">segurança de especialista.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/60 text-sm leading-relaxed mt-2.5 max-w-[300px] mx-auto"
          >
            Receba o direcionamento prático de uma PhD com mais de 20 anos de
            experiência e concorra a ter o seu próprio atendimento supervisionado ao vivo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 flex justify-center"
          >
            <CTAButton
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              label="Quero participar"
              className="px-6 py-3 text-base"
            />
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
