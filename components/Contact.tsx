"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import * as FaIcons from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  message: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Contact({ data }: { data: any }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Configurar EmailJS (Replace with actual Keys via .env.local)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      // Para teste local, se as chaves não estiverem configuradas, simular envio
      if (serviceId === "YOUR_SERVICE_ID") {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Mock Email Sent:", formData);
        setSubmitStatus("success");
      } else {
        await emailjs.send(serviceId, templateId, formData as Record<string, unknown>, publicKey);
        setSubmitStatus("success");
      }
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
           className="text-center mb-16"
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white mb-4">
            Vamos Conversar
          </h2>
          <div className="w-24 h-1 bg-amber-600 dark:bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Tem um projeto em mente ou quer apenas dizer um olá? Preencha o formulário abaixo e entrarei em contato o mais rápido possível.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-sm border border-neutral-100 dark:border-neutral-700"
          >
            <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mb-6">Informações de Contato</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-100 dark:bg-neutral-700 text-amber-600 dark:text-amber-400">
                  <FaIcons.FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Email</p>
                  <p className="font-semibold">samueldourado.dev@proton.me</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-100 dark:bg-neutral-700 text-amber-600 dark:text-amber-400">
                  <FaIcons.FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Localização</p>
                  <p className="font-semibold">Brasília - DF, Brasil</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {data.socials.map((social: any, idx: number) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const Icon = (FaIcons as any)[social.icon];
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-500 transition-colors"
                  >
                    {Icon ? <Icon className="w-5 h-5" /> : null}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Nome</label>
                <input
                  type="text"
                  {...register("name", { required: "Nome é obrigatório" })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                <input
                  type="email"
                  {...register("email", { 
                    required: "Email é obrigatório",
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Email inválido" }
                  })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="Seu email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Mensagem</label>
                <textarea
                  {...register("message", { required: "Mensagem é obrigatória" })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/30 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : "Enviar Mensagem"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 dark:text-green-400 text-center font-medium mt-4">Mensagem enviada com sucesso!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 text-center font-medium mt-4">Ocorreu um erro ao enviar. Tente novamente.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
