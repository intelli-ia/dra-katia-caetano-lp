"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ChevronDown, Check } from "lucide-react";
import { MovingBorderWrapper } from "@/components/ui/MovingBorderButton";
import { Button } from "@/components/ui/button";

const WEBHOOK_URL =
  "https://webhooks.intelliai.com.br/webhook/katiacaetano/supervisao-gratuita/form/7002abe2-3ddf-4434-a7ad-b73c23ae2891";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function RegistrationModal({
  label = "Quero participar",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", profile: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Nome é obrigatório.";
    if (!form.email.includes("@")) errs.email = "Insira um email válido.";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) errs.phone = "Insira um WhatsApp válido. Ex: (71) 99321-1234";
    if (!form.profile) errs.profile = "Selecione uma opção.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("submitting");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone.replace(/\D/g, ""),
          profile: form.profile,
        }),
      });
      router.push("/obrigado");
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    setOpen(false);
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", profile: "" });
      setErrors({});
      setStatus("idle");
    }, 300);
  }

  return (
    <>
      <MovingBorderWrapper>
        <Button
          variant="gold"
          className={className}
          onClick={() => setOpen(true)}
        >
          {label}
          <ArrowRight className="h-5 w-5" />
        </Button>
      </MovingBorderWrapper>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Modal */}
            <motion.div
              className="relative w-full max-w-md bg-[#161C24] border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/60"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <>
                  <h3 className="font-heading font-semibold text-white text-2xl mb-1">
                    Garanta sua vaga
                  </h3>
                  <p className="text-white/45 text-sm mb-6">
                    Supervisão clínica ao vivo e gratuita no Google Meet.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div>
                      <label className="block text-white/65 text-sm mb-1.5">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => {
                          setForm((f) => ({ ...f, name: e.target.value }));
                          setErrors((er) => ({ ...er, name: "" }));
                        }}
                        placeholder="Maria da Silva"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#008538]/60 transition-colors"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white/65 text-sm mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm((f) => ({ ...f, email: e.target.value }));
                          setErrors((er) => ({ ...er, email: "" }));
                        }}
                        placeholder="maria@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#008538]/60 transition-colors"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white/65 text-sm mb-1.5">
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => {
                          setForm((f) => ({
                            ...f,
                            phone: formatPhone(e.target.value),
                          }));
                          setErrors((er) => ({ ...er, phone: "" }));
                        }}
                        placeholder="(11) 99999-9999"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#008538]/60 transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div className="relative">
                      <label className="block text-white/65 text-sm mb-1.5">
                        Qual dessas opções representa melhor seu momento atual?
                      </label>
                      <button
                        type="button"
                        onClick={() => setProfileOpen((v) => !v)}
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-left flex items-center justify-between transition-colors cursor-pointer ${profileOpen ? "border-[#008538]/60" : "border-white/10"}`}
                      >
                        <span className={form.profile ? "text-white" : "text-white/25"}>
                          {form.profile || "Selecione uma das opções"}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-white/40 shrink-0 transition-transform ${profileOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {profileOpen && (
                          <motion.ul
                            initial={{ opacity: 0, y: 6, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="absolute z-10 bottom-full mb-1 w-full bg-[#1E2630] border border-white/10 rounded-xl overflow-hidden shadow-xl shadow-black/40"
                          >
                            {[
                              "Estudante de Psicologia",
                              "Graduação Concluída em Psicologia",
                              "Cursando Pós-graduação em Psicologia",
                              "Pós-graduação Concluída em Psicologia",
                              "Mestrado ou Doutorado em Psicologia",
                            ].map((option) => (
                              <li key={option}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setForm((f) => ({ ...f, profile: option }));
                                    setErrors((er) => ({ ...er, profile: "" }));
                                    setProfileOpen(false);
                                  }}
                                  className="w-full text-left px-4 py-3 text-sm flex items-center justify-between gap-3 hover:bg-white/5 transition-colors cursor-pointer"
                                >
                                  <span className={form.profile === option ? "text-white font-medium" : "text-white/70"}>
                                    {option}
                                  </span>
                                  {form.profile === option && (
                                    <Check className="w-4 h-4 text-[#008538] shrink-0" />
                                  )}
                                </button>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>

                      {errors.profile && (
                        <p className="text-red-400 text-xs mt-1">{errors.profile}</p>
                      )}
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-sm">
                        Ocorreu um erro ao enviar. Tente novamente.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-[#008538] hover:bg-[#007030] disabled:opacity-60 text-white font-semibold rounded-xl py-3.5 transition-colors flex items-center justify-center gap-2 mt-2 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        "Enviando..."
                      ) : (
                        <>
                          Confirmar inscrição
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
