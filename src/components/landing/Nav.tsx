import { useState } from "react";
import { Menu, X } from "lucide-react";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M21.944 3.244a1.2 1.2 0 0 0-1.262-.2L2.92 10.51c-.86.34-.85 1.56.014 1.887l4.36 1.65 1.69 5.27a1.2 1.2 0 0 0 1.97.49l2.43-2.27 4.45 3.27c.68.5 1.65.13 1.83-.7l3.05-14.6a1.2 1.2 0 0 0-.77-1.263Zm-4.32 4.05-7.86 6.95a.6.6 0 0 0-.19.34l-.46 2.62-1.31-4.09 9.45-5.74c.36-.22.71.24.37.54Z"/>
    </svg>
  );
}
import { motion } from "framer-motion";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#about", label: "Обо мне" },
  { href: "#process", label: "Процесс" },
];

const TELEGRAM_URL = "https://t.me/evgeniya5_5";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="glass border-b border-border/60">
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-lg">
            <span className="text-gradient-cv">Vibe</span>Pulse<span className="text-foreground/60"> studio</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm text-foreground/75">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/20 shadow-neon-violet transition-colors"
            >
              <TelegramIcon className="size-4" />
              Написать в Telegram
            </motion.a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center size-10 rounded-full border border-border"
              aria-label="Меню"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden border-t border-border/60 px-5 pb-5 pt-2">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-foreground/80"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-4 py-2 text-sm font-medium shadow-neon-violet"
                >
                  <TelegramIcon className="size-4" />
                  Написать в Telegram
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
