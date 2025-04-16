import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ugo Manzo – Portfolio",
  description: "Sito personale di Ugo Manzo, studente di Informatica.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" suppressHydrationWarning className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <header className="bg-gray-900 text-white text-center py-4 text-xl font-semibold shadow">
              Ugo Manzo
            </header>

            <nav className="bg-gray-800 text-white flex justify-center gap-6 py-3">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">Chi sono</Link>
              <Link href="/skills" className="hover:underline">Competenze</Link>
              <Link href="/projects" className="hover:underline">Progetti</Link>
              <Link href="/contact" className="hover:underline">Contatti</Link>
            </nav>

            {/* main senza sfondo (ereditato dal body) */}
            <main className="flex-grow">
              {children}
            </main>

            <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-4">
              © {new Date().getFullYear()} Ugo Manzo – Tutti i diritti riservati.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
