"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, AlertCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WA_GROUP = "https://chat.whatsapp.com/JYpj5Vs2CtYF8zCEoWA0w5";

export default function ObrigadoPage() {

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-5 py-16">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-10"
      >
        <div className="flex items-center justify-center mb-4">
          <CheckCircle2 className="w-12 h-12 text-[#008538]" />
        </div>
        <h1 className="font-heading font-semibold text-[#13181E] text-4xl md:text-5xl mb-2">
          Recebemos seus dados!
        </h1>
        <p className="text-[#13181E]/50 text-lg max-w-sm mx-auto leading-relaxed">
          Nossa equipe já registrou a sua inscrição. Confira os próximos passos abaixo.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="w-full max-w-lg flex flex-col gap-5">

        {/* Card WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-black/8 shadow-sm"
        >
          {/* Image area */}
          <div className="relative w-full h-52 bg-[#e8f5e9] flex items-center justify-center">
            <Image
              src="/card-whatsapp.png"
              alt="WhatsApp"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="p-6 bg-white">
            <h2 className="font-heading font-semibold text-[#13181E] text-3xl md:text-4xl mb-2">
              Acesse o grupo exclusivo
            </h2>
            <p className="text-[#13181E]/50 text-base md:text-lg leading-relaxed mb-5">
              Entre no grupo do WhatsApp para receber avisos sobre as próximas supervisões ao vivo e interagir com a comunidade.
            </p>
            <Link
              href={WA_GROUP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold rounded-xl py-3.5 px-6 transition-colors text-base md:text-lg"
            >
              Entrar no grupo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Card Caso Clínico */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl overflow-hidden border border-black/8 shadow-sm"
        >
          {/* Image area */}
          <div className="relative w-full h-52 bg-[#f0f4f8] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e8f0fe] via-[#f0f4f8] to-[#e8f5e9]" />
            <div className="relative flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center">
                <FileText className="w-10 h-10 text-[#008538]" />
              </div>
              <span className="text-[#13181E]/40 text-sm font-medium tracking-wide uppercase">Caso Clínico</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 bg-white">
            <h2 className="font-heading font-semibold text-[#13181E] text-3xl md:text-4xl mb-2">
              Cadastre seu caso clínico
            </h2>
            <p className="text-[#13181E]/50 text-base md:text-lg leading-relaxed mb-5">
              Submeta um caso clínico e concorra a ser sorteado pela Dra. Kátia para uma supervisão individual gratuita com ela.
            </p>
            <Link
              href="https://docs.google.com/forms/d/1RgkKzy8AqxuXLyUdlZe6qCntM2SHqOokQ9EEsL7CL_c/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#008538] hover:bg-[#007030] text-white font-semibold rounded-xl py-3.5 px-6 transition-colors text-base md:text-lg"
            >
              Cadastrar caso
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>

      {/* Notice estático */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="w-full max-w-lg mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 flex gap-4"
      >
        <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
          <AlertCircle className="w-5 h-5 text-amber-500" />
        </div>
        <div>
          <p className="font-heading font-semibold text-[#13181E] text-lg md:text-xl mb-1">Importante</p>
          <p className="text-[#13181E]/60 text-base md:text-lg leading-relaxed">
            Após o sorteio, a Dra. Kátia faz contato direto com o profissional para fornecer a ficha de descrição do caso. Garanta que seus números estão corretos para não perder a oportunidade!
          </p>
        </div>
      </motion.div>

    </div>
  );
}
