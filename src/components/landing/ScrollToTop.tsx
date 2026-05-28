import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Наверх"
      className="fixed bottom-5 left-5 z-50 group animate-[wobble_2.2s_ease-in-out_infinite] origin-bottom"
    >
      <span className="absolute inset-0 rounded-full bg-[#8b5cf6] opacity-30 animate-ping" />
      <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#8b5cf6]/70 to-[#6d28d9]/70 opacity-70 blur-md group-hover:opacity-100 transition" />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full overflow-hidden border border-[#a78bfa]/50 shadow-[0_8px_32px_rgba(139,92,246,0.55)] bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] group-hover:scale-105 transition">
        <ChevronUp className="h-8 w-8 text-white" strokeWidth={2.25} />
      </span>
    </button>
  );
}

export default ScrollToTop;
