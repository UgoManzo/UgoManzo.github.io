'use client';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaProjectDiagram, FaTools, FaLightbulb, FaUsersCog, FaPuzzlePiece, FaChartLine, FaBrain } from 'react-icons/fa';

export default function SkillsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Titolo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Competenze</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Una panoramica delle mie capacità tecniche e del mio approccio alla risoluzione dei problemi.
        </p>
      </motion.div>

      {/* Competenze Tecniche */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <FaTools className="text-blue-600" />
          Competenze Tecniche
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <FaCode className="text-3xl text-blue-600" />,
              title: 'Linguaggi di Programmazione',
              desc: 'C e Java in particolare, ma conosco bene i concetti generali della programmazione imperativa e orientata agli oggetti.'
            },
            {
              icon: <FaDatabase className="text-3xl text-blue-600" />,
              title: 'Database',
              desc: 'Esperienza con MySQL, utilizzato in due progetti universitari.'
            },
            {
              icon: <FaProjectDiagram className="text-3xl text-blue-600" />,
              title: 'Progetti Web',
              desc: 'Ho realizzato un sito e-commerce per l’università. Conoscenza base di HTML, CSS e JavaScript.'
            },
            {
              icon: <FaTools className="text-3xl text-blue-600" />,
              title: 'Versionamento e Ambiente',
              desc: 'Esperienza con Git, GitHub e ambienti Unix/Linux.'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Competenze Trasversali */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <FaLightbulb className="text-blue-600" />
          Competenze Trasversali
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <FaPuzzlePiece className="text-3xl text-blue-600" />,
              title: 'Problem Solving',
              desc: 'Formalizzo soluzioni in modo logico, preciso e spiegabile. Affronto problemi in modo razionale ma anche creativo.'
            },
            {
              icon: <FaChartLine className="text-3xl text-blue-600" />,
              title: 'Visione Strutturata',
              desc: 'Analizzo sempre il contesto e l’obiettivo finale prima di mettermi al lavoro.'
            },
            {
              icon: <FaUsersCog className="text-3xl text-blue-600" />,
              title: 'Teamwork & Leadership',
              desc: 'Collaboro bene in gruppo ma sono anche in grado di coordinare il lavoro rispettando tempi e regole.'
            },
            {
              icon: <FaBrain className="text-3xl text-blue-600" />,
              title: 'Allenamento Logico',
              desc: 'Completo regolarmente problemi su LeetCode e mi piace mantenermi in forma con giochi logici.'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}