"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, Users } from "lucide-react";
import { RegistrationModal } from "@/components/ui/RegistrationModal";

const badges = [
  { icon: Calendar, label: "De setembro a dezembro de 2026" },
  { icon: Clock, label: "Segundas-feiras, das 16h às 18h" },
  { icon: Calendar, label: "Início: 14 de setembro" },
  { icon: Users, label: "Apenas 10 vagas por grupo" },
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
          src="/katia.webp"
          alt="Dra. Katia Caetano"
          fill
          priority
          unoptimized
          className="object-cover"
          style={{ objectPosition: "50% -15%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(19,24,30,0.05) 0%, rgba(19,24,30,0.1) 40%, rgba(19,24,30,0.55) 62%, rgba(19,24,30,0.9) 100%)",
          }}
        />
      </div>

      {/* Conteúdo desktop */}
      <div className="hidden md:block relative z-10 w-full container mx-auto px-6 pt-24 pb-16">
        <div className="lg:ml-auto lg:w-[44%] xl:w-[40%] max-w-2xl">

          {/* Tag */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[#008538] font-heading font-medium text-[0.7rem] tracking-[0.14em] uppercase mb-4"
          >
            Setembro a Dezembro de 2026
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-heading font-medium text-white text-[1.75rem] md:text-[2rem] lg:text-[2.75rem] leading-[1.2] tracking-tight max-w-lg"
          >
            Supervisão Clínica{" "}
            <span className="text-[#008538]">Semestral</span>{" "}
            em TCC
          </motion.h1>

          {/* Subtítulo */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/85 text-lg md:text-xl leading-relaxed mt-4 lg:mt-5 max-w-lg font-medium"
          >
            Desenvolva mais segurança, clareza e precisão para conduzir seus casos clínicos.
          </motion.h2>

          {/* Descrição */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-white/55 text-base md:text-lg leading-relaxed mt-4 max-w-lg"
          >
            Uma supervisão clínica contínua para psicólogos que querem aprimorar o raciocínio clínico, organizar melhor seus casos e tomar decisões terapêuticas com mais segurança.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white/55 text-base md:text-lg leading-relaxed mt-3 max-w-lg"
          >
            Durante um semestre, você terá{" "}
            <strong className="text-white/75">encontros semanais ao vivo, análise de casos, discussões técnicas, feedback e orientação direta</strong>, em um grupo fechado de apenas 10 profissionais.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-3.5 py-2"
              >
                <b.icon className="w-4 h-4 text-[#008538] shrink-0" />
                <span className="text-white/90 text-sm font-medium">{b.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 lg:mt-9"
          >
            <RegistrationModal label="Quero me aplicar para a supervisão" className="text-white" />
          </motion.div>
        </div>
      </div>

      {/* ===== Mobile ===== */}
      <div className="md:hidden">
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

          <div className="absolute inset-x-0 bottom-16 z-10 px-5 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#008538] font-heading font-medium text-[0.7rem] tracking-[0.14em] uppercase mb-3"
            >
              Setembro a Dezembro de 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-heading font-medium text-white text-[1.75rem] leading-[1.2] tracking-tight max-w-[300px] mx-auto"
            >
              Supervisão Clínica <span className="text-[#008538]">Semestral</span> em TCC
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/80 text-base leading-relaxed mt-3 max-w-[310px] mx-auto"
            >
              Desenvolva mais segurança, clareza e precisão para conduzir seus casos clínicos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="mt-4 flex flex-wrap justify-center gap-2"
            >
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-lg px-2.5 py-1.5"
                >
                  <b.icon className="w-3.5 h-3.5 text-[#008538] shrink-0" />
                  <span className="text-white/90 text-xs font-medium">{b.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-5 flex justify-center"
            >
              <RegistrationModal label="Quero me aplicar para a supervisão" className="text-white" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
