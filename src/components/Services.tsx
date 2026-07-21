"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK } from "@/lib/constants";

const steps = [
  {
    number: "01",
    title: "Clique no link de inscrição",
    description: "Toque no botão abaixo para acessar a página de cadastro.",
  },
  {
    number: "02",
    title: "Preencha seus dados",
    description: "Informe seu nome e e-mail oficial para confirmar seu registro.",
  },
  {
    number: "03",
    title: "Entre no grupo exclusivo",
    description:
      "Após o cadastro, você será redirecionado para o nosso grupo de avisos (é por lá que enviaremos o link de acesso exclusivo da aula).",
  },
  {
    number: "04",
    title: "Acompanhe as instruções",
    description:
      "Fique atento às mensagens no grupo para receber o material de apoio e o link do encontro ao vivo.",
  },
  {
    number: "05",
    title: "Esteja presente",
    description:
      "Conecte-se no dia e horário marcados e venha preparado para colocar a sua prática clínica em um novo patamar.",
  },
];

export default function ForWhomSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="para-quem"
      ref={sectionRef}
      className="relative w-full py-20 md:py-36 section-bg-light overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-6 md:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-heading font-medium text-2xl md:text-3xl lg:text-4xl text-[#13181E] leading-tight max-w-2xl mx-auto">
            Como garantir o seu acesso ao{" "}
            <span className="text-[#008538]">próximo encontro</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">

          {/* Linha de fundo (estática) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#13181E]/15 -translate-x-1/2 hidden md:block" />

          {/* Linha de progresso (animada) */}
          <motion.div
            className="absolute left-1/2 top-0 w-px bg-[#008538] -translate-x-1/2 hidden md:block origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16 md:gap-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`relative flex items-center md:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Conteúdo */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
                    className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}
                  >
                    <p className="text-[#008538] font-heading font-medium text-xs uppercase tracking-widest mb-2">
                      Passo {step.number}
                    </p>
                    <h3 className="font-heading font-medium text-lg md:text-xl text-[#13181E] leading-snug mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#13181E]/55 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Círculo fixo na linha central */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#008538] items-center justify-center shrink-0 z-10 shadow-[0_0_20px_rgba(0,133,56,0.4)]">
                    <span className="font-heading font-medium text-white text-xs">
                      {step.number}
                    </span>
                  </div>

                  {/* Espaço oposto */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <CTAButton
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            label="Quero participar"
          />
        </motion.div>

      </div>
    </section>
  );
}
