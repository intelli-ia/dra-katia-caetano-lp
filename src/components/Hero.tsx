"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, FileText } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { MovingBorderWrapper } from "@/components/ui/MovingBorderButton";
import { WA_LINK } from "@/lib/constants";

const stats = [
  {
    imageSrc: "/meet-logo.png",
    title: "Ao Vivo no Google Meet",
    rotate: "-rotate-3",
    top: "180px",
    left: "0px",
  },
  {
    icon: Users,
    title: "+100 alunos online",
    rotate: "rotate-2",
    top: "180px",
    left: "210px",
  },
  {
    icon: FileText,
    title: "Materiais exclusivos",
    rotate: "-rotate-2",
    top: "180px",
    left: "420px",
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

      {/* Stats — imagem secundária no lado esquerdo */}
      <div className="hidden lg:block absolute left-8 xl:left-12 bottom-0 z-10 w-[660px] h-[320px]">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
            style={{ top: stat.top, left: stat.left }}
            className={`absolute w-44 xl:w-48 bg-[#161C24]/95 backdrop-blur-sm border border-white/10 rounded-2xl p-3.5 shadow-2xl shadow-black/40`}
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-[#008538]/15 flex items-center justify-center">
                {"imageSrc" in stat ? (
                  <Image src={stat.imageSrc} alt={stat.title} width={28} height={28} />
                ) : (
                  <stat.icon className="w-6 h-6 text-[#008538]" />
                )}
              </div>
              <p className="font-heading font-semibold text-white text-base leading-snug">
                {stat.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Conteúdo desktop */}
      <div className="hidden md:block relative z-10 w-full container mx-auto px-6">
        <div className="lg:ml-auto lg:w-[54%] xl:w-[48%] max-w-2xl">

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-heading font-medium text-white text-4xl md:text-5xl lg:text-6xl leading-[1.12] tracking-tight max-w-lg"
          >
            Supervisão clínica ao vivo e gratuita para{" "}
            <span className="text-[#008538]">psicólogos.</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/70 text-lg md:text-2xl leading-relaxed mt-4 lg:mt-5 max-w-lg"
          >
            Receba o direcionamento de uma PhD em psicologia com <strong>mais de 20 anos de
            experiência de consultório.</strong> No Google Meet, ao vivo e 100% gratuito.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 lg:mt-9"
          >
            <MovingBorderWrapper>
              <CTAButton
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                label="Quero participar"
                className="text-white"
              />
            </MovingBorderWrapper>
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
          <div className="absolute inset-x-0 bottom-24 z-10 px-5 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-heading font-bold text-white text-[36px] leading-[1.2] tracking-tight max-w-[300px] mx-auto"
          >
            Supervisão clínica ao vivo e gratuita para{" "}
            <span className="text-white">psicólogos.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white text-base leading-relaxed mt-2.5 max-w-[300px] mx-auto"
          >
            Receba o direcionamento de uma PhD em psicologia com <strong>mais de 20 anos de
            experiência de consultório.</strong> No Google Meet, ao vivo e 100% gratuito.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 flex justify-center"
          >
            <MovingBorderWrapper>
              <CTAButton
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                label="Quero participar"
                className="text-white"
              />
            </MovingBorderWrapper>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
