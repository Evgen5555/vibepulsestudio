import { useState } from "react";
import { Menu, X, MessageCircleQuestion } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#about", label: "Обо мне" },
  { href: "#process", label: "Процесс" },
];

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
              href="#cta"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/20 shadow-neon-violet transition-colors"
            >
              <MessageCircleQuestion className="size-4" />
              Задать вопрос
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
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-4 py-2 text-sm font-medium shadow-neon-violet"
                >
                  <MessageCircleQuestion className="size-4" />
                  Задать вопрос
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
