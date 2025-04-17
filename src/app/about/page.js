'use client';
import { motion } from 'framer-motion';
import { FaChessKnight,
  FaBrain,
  FaCodeBranch,
  FaHeart,
  FaChild,
  FaSeedling,
  FaLaptopCode,
  FaFolderOpen,
  FaQuoteLeft,
  FaDumbbell,
  FaYoutube,
  FaQuoteRight,
  FaLightbulb,
  FaSearch } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Titolo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Chi sono</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Un percorso fatto di domande, intuizioni e ritorni.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="space-y-8 border-l border-gray-300 dark:border-gray-700 pl-6 relative">
        {[
          {
            year: 'Infanzia',
            icon: <FaChild className="text-blue-600 text-xl" />,
            text: 'Ho imparato a usare un computer prima ancora di saper scrivere. Passavo ore davanti allo schermo, tra giochi educativi e vecchie enciclopedie multimediali. Ricordo ancora quei momenti con le mie sorelle: si rideva, si esplorava, si imparava. Lì è nato il mio primo legame con la tecnologia.',
          },
          {
            year: 'Dopo il diploma',
            icon: <FaSeedling className="text-blue-600 text-xl" />,
            text: 'Dopo la scuola superiore mi sono fermato. Non sapevo davvero cosa volessi fare. Ho esplorato, fatto errori, cercato risposte. Sono stati due anni strani, ma necessari. Quei momenti, pur confusi, mi hanno dato qualcosa che oggi riconosco come fondamenta.',
          },
          {
            year: 'Ritorno all\'informatica',
            icon: <FaLaptopCode className="text-blue-600 text-xl" />,
            text: 'Un giorno ho deciso di riprovarci. Di tornare all\'informatica. E l\'ho fatto con occhi nuovi. È stato un colpo di fulmine: quello che prima mi faceva paura ora mi intrigava. Ho iniziato a studiare con passione vera, e per la prima volta ho sentito che stavo andando nella direzione giusta.',
          },
          {
            year: 'Il punto di svolta',
            icon: <FaFolderOpen className="text-blue-600 text-xl" />,
            text: 'C\'è una lezione in particolare che ha cambiato tutto: la prima di Sistemi Operativi in cui abbiamo iniziato a vedere come i file vengono realmente salvati nel sistema. Per la prima volta non era solo teoria, ma una finestra concreta sul funzionamento reale delle cose. È stato come aprire una porta e trovarci dietro un mondo. Lì ho capito: questa è la mia strada.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-5 top-1">{item.icon}</div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-blue-600">{item.year}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Riflessione */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-4">Il mio rapporto con l&apos;informatica</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Per me non è solo una materia: è un modo di pensare. Mi affascina la semplicità elegante, la precisione nella complessità.
          Amo risolvere problemi, ma ancora di più dimostrarli, spiegarli, renderli chiari e belli.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Sono razionale, ma non solo. L&apos;istinto mi ha portato a errori e intuizioni. È nel dialogo tra logica e intuizione che mi scopro, cresco e miglioro.
        </p>
      </div>

      {/* Valori */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Valori e Mentalità</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <FaBrain className="text-3xl text-blue-600" />,
              title: 'Curiosità',
              desc: 'È ciò che ha spinto l\'uomo oltre le caverne. La mia spinta primaria è capire.',
            },
            {
              icon: <FaCodeBranch className="text-3xl text-blue-600" />,
              title: 'Eleganza',
              desc: 'Credo nel codice pulito, nelle soluzioni essenziali, nella chiarezza mentale.',
            },
            {
              icon: <FaHeart className="text-3xl text-blue-600" />,
              title: 'Passione',
              desc: 'Dopo averla messa in dubbio, l\'ho riscoperta più viva che mai.',
            },
            {
              icon: <FaChessKnight className="text-3xl text-blue-600" />,
              title: 'Analisi',
              desc: 'Ragiono come una partita a scacchi: ogni mossa conta, ogni errore insegna.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Curiosità */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Curiosità su di me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <FaChessKnight className="text-blue-600 text-2xl mb-2" />,
              text: "Adoro scacchi, sudoku e giochi mentali: mi rilassano mentre mi mettono alla prova."
            },
            {
              icon: <FaYoutube className="text-blue-600 text-2xl mb-2" />,
              text: "Mi piace guardare video su YouTube, soprattutto canali divulgativi o film vecchi."
            },
            {
              icon: <FaDumbbell className="text-blue-600 text-2xl mb-2" />,
              text: "Vado in palestra regolarmente, non per diventare bodybuilder, ma per stare bene con me stesso."
            },
            {
              icon: <FaQuoteLeft className="text-blue-600 text-2xl mb-2" />,
              text: "Amo analizzare il perché delle cose. Non mi accontento della risposta, voglio capire cosa c\'è dietro."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow text-center"
            >
              <div>{item.icon}</div>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LinkedIn */}
      <div className="mt-16 text-center">
        <p className="text-gray-700 dark:text-gray-300 mb-2">Vuoi conoscermi meglio?</p>
        <a
          href="https://www.linkedin.com/in/ugo-manzo-43a19422b"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Visita il mio profilo LinkedIn
        </a>
      </div>
    </main>
  );
}