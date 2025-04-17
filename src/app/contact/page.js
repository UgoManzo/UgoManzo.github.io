export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Contatti</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Puoi contattarmi direttamente via email o trovarmi sui miei profili social.
      </p>
      <ul className="space-y-2 text-blue-600 dark:text-blue-400 underline">
        <li>Email: <a href="mailto:ugomanzo45@gmail.com">ugomanzo45@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/UgoManzo" target="_blank">github.com/UgoManzo</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/ugo-manzo-43a19422b" target="_blank">linkedin.com/in/ugo-manzo</a></li>
      </ul>
    </main>
  );
}
