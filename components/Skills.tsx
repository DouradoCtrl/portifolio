"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Skills({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState("Principais");
  const categories = ["Principais", "Todas", "Stacks", "Banco de Dados", "Servidores", "Linux"];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filteredSkills = data.skills.filter((skill: any) => {
    if (activeTab === "Todas") return true;
    if (activeTab === "Principais") return skill.isMain === true;
    return skill.category === activeTab;
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white mb-4">
            Habilidades Tecnológicas
          </h2>
          <div className="w-24 h-1 bg-amber-600 dark:bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === cat
                ? "bg-amber-500 text-neutral-900 shadow-md shadow-amber-500/30 font-semibold"
                : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 font-medium"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {filteredSkills.map((skill: any, index: number) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const Icon = (FaIcons as any)[skill.icon] || (SiIcons as any)[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-neutral-100 dark:border-neutral-700"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg flex items-center justify-center bg-neutral-100 dark:bg-neutral-700/50" style={{ color: skill.color }}>
                      {Icon ? <Icon className="w-8 h-8" /> : <div className="w-8 h-8" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 dark:text-white">{skill.name}</h3>
                      <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">{skill.category}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
