"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
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
            <div className="w-[28%] h-64 md:h-80">
              <ImagePlaceholder className="w-full h-full rounded-2xl" label="Imagem" />
            </div>
            <div className="w-[36%] h-72 md:h-96">
              <ImagePlaceholder className="w-full h-full rounded-2xl" label="Imagem" />
            </div>
            <div className="w-[28%] h-64 md:h-80">
              <ImagePlaceholder className="w-full h-full rounded-2xl" label="Imagem" />
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
