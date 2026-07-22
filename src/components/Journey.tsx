"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK } from "@/lib/constants";

export default function JourneySection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden section-bg">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center md:translate-x-8 lg:translate-x-14">

          {/* Colagem de imagens */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 md:gap-4"
          >
            <div className="relative w-[28%] h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/journey-1.webp"
                alt="Dra. Katia Caetano anotando em seu consultório"
                fill
                unoptimized
                className="object-cover scale-125 object-[center_25%]"
              />
            </div>
            <div className="relative w-[36%] h-72 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/journey-2.webp"
                alt="Dra. Katia Caetano observando a janela do consultório"
                fill
                unoptimized
                className="object-cover scale-125 object-[65%_30%]"
              />
            </div>
            <div className="relative w-[28%] h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/journey-3.webp"
                alt="Dra. Katia Caetano lendo em seu consultório"
                fill
                unoptimized
                className="object-cover scale-125 object-[center_20%]"
              />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-[#008538] italic font-heading font-medium text-base md:text-lg mb-4">
              &ldquo;A prática da vida real a serviço da sua formação&rdquo;
            </p>
            <h2 className="font-heading font-medium text-white text-2xl md:text-3xl lg:text-4xl leading-tight mb-8">
              Não dependa mais somente de manuais.
            </h2>
            <CTAButton
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              label="Quero participar"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
