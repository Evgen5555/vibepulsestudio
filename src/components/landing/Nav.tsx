import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M21.944 3.244a1.2 1.2 0 0 0-1.262-.2L2.92 10.51c-.86.34-.85 1.56.014 1.887l4.36 1.65 1.69 5.27a1.2 1.2 0 0 0 1.97.49l2.43-2.27 4.45 3.27c.68.5 1.65.13 1.83-.7l3.05-14.6a1.2 1.2 0 0 0-.77-1.263Zm-4.32 4.05-7.86 6.95a.6.6 0 0 0-.19.34l-.46 2.62-1.31-4.09 9.45-5.74c.36-.22.71.24.37.54Z"/>
    </svg>
  );
}
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#process", label: "Процесс" },
  { href: "#faq", label: "FAQ" },
];

const TELEGRAM_URL = "https://t.me/evgeniya5_5";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("services");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="glass border-b border-border/60">
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight text-lg">
            <img src={logo} alt="VibePulse studio" className="h-10 w-10 rounded-full drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
            <span className="hidden sm:inline"><span className="text-gradient-cv">Vibe</span>Pulse<span className="text-foreground/60"> studio</span></span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => {
              const id = l.href.slice(1);
              const isActive = activeSection === id;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`relative pb-2 font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground/90"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-400 via-primary to-fuchsia-500 opacity-100 scale-x-100"
                          : "bg-transparent opacity-0 scale-x-75"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute inset-0 bg-primary blur-[4px] opacity-80 rounded-full" />
                      )}
                    </span>
                  </a>
                </li>
              );
            })}
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
