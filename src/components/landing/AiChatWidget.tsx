import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import evaAvatar from "@/assets/eva-avatar.png";

type Sender = "ai" | "user";
interface Message {
  id: string;
  sender: Sender;
  text: string;
  timestamp: number;
}

const QUICK_REPLIES = [
  { emoji: "💼", text: "Узнать про продукты и услуги VibePulse" },
  { emoji: "⏱", text: "Каковы условия и сроки разработки?" },
  { emoji: "🚀", text: "Обсудить свой проект с Евгенией" },
];

const WELCOME: Message = {
  id: "welcome",
  sender: "ai",
  text:
    "Привет! Я Ева — цифровой двойник Евгении и её правая рука в студии VibePulse. ✨ Я знаю всё о наших продуктах, условиях работы и о том, как AI может усилить твой бизнес. Расскажи, какая задача перед тобой стоит, или выбери один из вариантов ниже — и я все расскажу!",
  timestamp: Date.now(),
};

function mockAiReply(userText: string): string {
  const t = userText.toLowerCase();
  if (t.includes("продукт") || t.includes("услуг"))
    return "В VibePulse мы делаем: премиум-лендинги, автоворонки с AI, чат-ботов и системы автоматизации. Под какую задачу подбираем решение?";
  if (t.includes("срок") || t.includes("услови") || t.includes("цена") || t.includes("стоим"))
    return "Стартуем от 5 дней на лендинг, 2–3 недели на автоворонку с AI. Предоплата 50%, остаток — после запуска. Расскажи подробнее — пришлю смету.";
  if (t.includes("евген") || t.includes("проект") || t.includes("обсуд") || t.includes("свой"))
    return "Отлично! Опиши задачу в двух словах — я передам Евгении, и она свяжется с тобой лично в Telegram в течение дня.";
  if (t.includes("ai") || t.includes("автоматиз"))
    return "AI закрывает рутину: квалификация лидов, ответы 24/7, генерация контента. В среднем экономит 30–60% операционного бюджета.";
  return "Поняла. Опиши задачу чуть подробнее — предложу решение и сориентирую по срокам.";
}

export function AiChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, thinking, open]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || thinking) return;
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: trimmed,
      timestamp: Date.now(),
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      const aiMsg: Message = {
        id: `a-${Date.now()}`,
        sender: "ai",
        text: mockAiReply(trimmed),
        timestamp: Date.now(),
      };
      setMessages((m) => [...m, aiMsg]);
      setThinking(false);
    }, 1000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const showQuickReplies = messages.length === 1 && messages[0].id === "welcome" && !thinking;

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Открыть чат с Евой"
          className="fixed bottom-5 right-5 z-50 group"
        >
          <span className="absolute inset-0 rounded-full bg-[#3b82f6] opacity-40 animate-ping" />
          <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#d4af37] opacity-60 blur-md group-hover:opacity-90 transition" />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0a0a0f] to-[#1a1a24] border border-[#d4af37]/40 shadow-[0_8px_32px_rgba(0,0,0,0.6)] group-hover:scale-105 transition">
            <MessageCircle className="h-6 w-6 text-[#d4af37]" />
          </span>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="fixed z-50 bottom-0 right-0 sm:bottom-5 sm:right-5 w-full sm:w-[380px] h-[100dvh] sm:h-[600px] sm:max-h-[85vh] origin-bottom-right animate-in fade-in zoom-in-95 duration-200"
        >
          <div className="flex flex-col h-full sm:rounded-2xl overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#13131c] border border-[#d4af37]/20 shadow-[0_24px_80px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/5 bg-black/40">
              <div className="relative shrink-0">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#6d28d9] to-[#d4af37] opacity-70 blur-[2px]" />
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-[#d4af37]/40 bg-[#0a0a0f]">
                  <img src={evaAvatar} alt="Ева" className="h-full w-full object-cover" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 border-2 border-[#0a0a0f] shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-lg leading-tight tracking-tight">Ева</div>
                <div className="text-[12px] text-white/60 leading-tight">Цифровой двойник Евгении</div>
                <div className="flex items-center gap-1.5 text-[11px] text-green-400/90 mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  В сети
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Закрыть чат"
                className="h-8 w-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start gap-2"}`}
                >
                  {m.sender === "ai" && (
                    <div className="h-7 w-7 rounded-full overflow-hidden border border-[#d4af37]/30 shrink-0 mt-auto">
                      <img src={evaAvatar} alt="" className="h-full w-full object-cover" />
                    </div>
                  )}
                  <div
                    className={
                      m.sender === "user"
                        ? "max-w-[78%] rounded-2xl rounded-br-sm px-3.5 py-2.5 text-[14px] leading-relaxed bg-white/10 text-white border border-white/10"
                        : "max-w-[82%] rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-[14px] leading-relaxed bg-gradient-to-br from-[#0f1424]/90 to-[#161028]/90 text-white/90 border border-[#3b82f6]/30 shadow-[0_0_18px_rgba(59,130,246,0.12)]"
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {showQuickReplies && (
                <div className="flex flex-col gap-2 pt-1 pl-9">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q.text}
                      onClick={() => sendMessage(q.text)}
                      className="text-left text-[13px] px-3 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-[#d4af37]/30 hover:border-[#d4af37]/60 text-white/90 transition"
                    >
                      <span className="mr-1.5">{q.emoji}</span>
                      {q.text}
                    </button>
                  ))}
                </div>
              )}

              {thinking && (
                <div className="flex justify-start gap-2">
                  <div className="h-7 w-7 rounded-full overflow-hidden border border-[#d4af37]/30 shrink-0 mt-auto">
                    <img src={evaAvatar} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="rounded-2xl rounded-bl-sm px-4 py-3 bg-[#0f1424]/80 border border-[#3b82f6]/40">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-[#3b82f6] animate-bounce [animation-delay:-0.3s]" />
                      <span className="h-2 w-2 rounded-full bg-[#6d28d9] animate-bounce [animation-delay:-0.15s]" />
                      <span className="h-2 w-2 rounded-full bg-[#d4af37] animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 border-t border-white/5 bg-black/40 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Напишите Еве..."
                className="flex-1 bg-white/5 border border-white/10 focus:border-[#3b82f6]/60 focus:bg-white/[0.07] outline-none rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 transition"
              />
              <button
                type="submit"
                disabled={!input.trim() || thinking}
                aria-label="Отправить"
                className="h-10 w-10 shrink-0 rounded-full flex items-center justify-center bg-gradient-to-br from-[#3b82f6] to-[#d4af37] text-black shadow-[0_4px_20px_rgba(59,130,246,0.5)] hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 transition"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AiChatWidget;
