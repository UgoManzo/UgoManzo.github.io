'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center px-6 py-20 gap-10 sm:gap-16">
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="rounded-full overflow-hidden border-4 border-blue-600 w-32 h-32 sm:w-40 sm:h-40"
      >
        <Image
          src="/me.jpg"
          alt="Ugo Manzo"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Titolo e descrizione */}
      <div className="flex flex-col gap-4 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold"
        >
          Ciao, sono Ugo Manzo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-600"
        >
          Studente di Informatica con passione per la programmazione, l’intelligenza artificiale e i sistemi complessi.
        </motion.p>
      </div>

      {/* Pulsanti */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 mt-4"
      >
        <a
          href="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
        >
          Guarda i miei progetti
        </a>
        <a
          href="/about"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition"
        >
          Scopri chi sono
        </a>
      </motion.div>
      <section className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            Cosa faccio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "🧑‍💻",
                title: "Sviluppo software",
                desc: "Creo progetti concreti usando tecnologie moderne come React, Next.js, C e Java.",
              },
              {
                emoji: "🎓",
                title: "Formazione tecnica",
                desc: "Studio Informatica all’Università di Salerno con l’obiettivo di diventare un professionista.",
              },
              {
                emoji: "🤖",
                title: "Intelligenza Artificiale",
                desc: "Mi appassionano le reti neurali, l'ottimizzazione e l’apprendimento automatico.",
              },
              {
                emoji: "🛠️",
                title: "Problem solving",
                desc: "Mi alleno a risolvere problemi logici e tecnici con approccio razionale e creativo.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}