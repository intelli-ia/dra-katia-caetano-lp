"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { MovingBorderWrapper } from "@/components/ui/MovingBorderButton";
import { WA_LINK } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative w-full py-20 md:py-36 section-bg-light overflow-hidden">

      <div className="w-full px-4 md:px-8">
        <div className="bg-[#13181E] rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch gap-0">

            {/* Image — left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-2/5 flex-shrink-0 p-5 md:p-8"
            >
              <Image
                src="/psikatiacaetano_DXy6ogYFkaA_5.jpg"
                alt="Dra. Kátia Caetano"
                width={560}
                height={700}
                className="w-full h-full object-cover rounded-2xl"
                style={{ minHeight: "400px" }}
              />
            </motion.div>

            {/* Content — right */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 px-8 py-10 md:px-12 md:py-14 flex flex-col justify-center"
            >
              <h2 className="font-heading font-semibold text-white text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-5">
                Por que minhas supervisões reúnem{" "}
                mais de 100 psicólogas ao&nbsp;vivo?
              </h2>
              <p className="font-heading font-medium text-white/60 text-lg md:text-2xl leading-snug mb-7">
                Porque raciocínio clínico não se aprende lendo. Se aprende vendo casos reais sendo resolvidos.
              </p>
              <div className="w-12 h-0.5 bg-[#008538] mb-7" />
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
                A cada 15 dias, apresento e discuto ao vivo casos clínicos reais com mais de 100 psicólogas no Google Meet.
                Cada sessão é uma oportunidade de entender como estruturar hipóteses, tomar decisões e conduzir
                atendimentos com mais segurança — trocando experiência com colegas e aprendendo, na prática,
                o raciocínio que transforma um psicólogo em especialista.
              </p>
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
