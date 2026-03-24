"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Hero({ data }: { data: any }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-screen" />

      <motion.div
        className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-semibold tracking-wide">
            Olá, eu sou Samuel
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block text-neutral-950 dark:text-white mb-2">Construindo experiências</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-purple-600 dark:from-amber-400 dark:to-purple-400">
              Eloquent's
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto lg:mx-0 mb-8">
            {data.hero.pitch}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <a
              href="#projetos"
              className="px-8 py-4 rounded-xl font-bold text-neutral-200 bg-amber-500 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/30 w-full sm:w-auto text-center"
            >
              {data.hero.cta}
            </a>
            <a
              href="#contato"
              className="px-8 py-4 rounded-xl font-bold text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors w-full sm:w-auto text-center"
            >
              Fale Comigo
            </a>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-6">
            <a href={data.hero.githubUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <FaGithub className="w-8 h-8" />
            </a>
            <a href={data.hero.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-amber-600 dark:text-neutral-400 dark:hover:text-amber-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-amber-400 dark:text-neutral-400 dark:hover:text-amber-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="w-8 h-8" />
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div variants={itemVariants} className="flex-1 w-full max-w-md lg:max-w-xl flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 to-purple-600 rounded-[2rem] rotate-6 opacity-20 dark:opacity-40 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-amber-600 to-purple-600 rounded-[2rem] -rotate-6 opacity-20 dark:opacity-40"></div>
            <div className="relative w-full h-full bg-neutral-200 dark:bg-neutral-800 rounded-[2rem] overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                {/* Fallback pattern/placeholder */}
                {/* <svg className="w-24 h-24 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg> */}
              </div>
              {/* Optional: Actual image component */}
              <Image src="/profile/image.png" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
