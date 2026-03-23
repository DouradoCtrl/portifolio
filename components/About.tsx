"use client";

import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function About({ data }: { data: any }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white mb-4">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-amber-600 dark:bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Bio section */}
          <motion.div variants={itemVariants} className="prose prose-lg dark:prose-invert">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">Minha História</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {data.about.bio}
            </p>
          </motion.div>

          {/* Timeline section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">Experiência</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-tranneutral-x-px md:before:mx-auto md:before:tranneutral-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-300 dark:before:via-neutral-700 before:to-transparent">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {data.about.timeline.map((item: any, index: number) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-neutral-950 bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 group-[.is-active]:bg-amber-600 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-tranneutral-x-1/2 md:group-even:tranneutral-x-1/2">
                    <svg className="fill-current w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                    </svg>
                  </div>
                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm transition-all hover:shadow-md">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-1">
                      <div className="font-bold text-neutral-950 dark:text-neutral-100">{item.title}</div>
                      <time className="font-mono text-sm text-amber-600 dark:text-amber-400">{item.year}</time>
                    </div>
                    <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">{item.company}</div>
                    <div className="text-neutral-600 dark:text-neutral-300 text-sm">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
