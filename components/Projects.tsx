"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Projects({ data }: { data: any }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
           className="text-center mb-16"
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white mb-4">
            Meus Projetos
          </h2>
          <div className="w-24 h-1 bg-amber-600 dark:bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {data.projects.map((project: any) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-700 shadow-sm hover:shadow-xl transition-all flex flex-col h-full group"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-neutral-200 dark:bg-neutral-700">
                <div className="absolute inset-0 bg-amber-600/20 group-hover:bg-transparent transition-colors z-10 duration-300" />
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                  <svg className="w-12 h-12 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* 
                 For real images, you would use:
                 <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" preload={true} />
                */}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors">
                    <FaGithub /> Código
                  </a>
                  <a href={project.demoUrl} className="flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
