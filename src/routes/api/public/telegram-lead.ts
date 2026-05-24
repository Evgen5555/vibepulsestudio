import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const LeadSchema = z.object({
  type: z.enum(["apply", "discuss", "ask"]),
  name: z.string().min(1).max(200),
  messenger: z.string().min(1).max(50),
  username: z.string().min(1).max(200),
  message: z.string().min(1).max(4000),
});

const titleMap: Record<z.infer<typeof LeadSchema>["type"], string> = {
  apply: "🔥 ЗАЯВКА",
  discuss: "✨ ОБСУЖДЕНИЕ ПРОЕКТА",
  ask: "❓ ВОПРОС",
};

export const Route = createFileRoute("/api/public/telegram-lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;
        if (!token || !chatId) {
          return Response.json({ error: "Server not configured" }, { status: 500 });
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = LeadSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ error: "Invalid input" }, { status: 400 });
        }

        const d = parsed.data;
        const text = [
          titleMap[d.type],
          `👤 Имя: ${d.name}`,
          `📱 Мессенджер: ${d.messenger}`,
          `🔗 Контакт: ${d.username}`,
          `📋 Задача: ${d.message}`,
        ].join("\n");

        const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text }),
        });

        if (!tgRes.ok) {
          const errText = await tgRes.text();
          console.error("Telegram API error:", tgRes.status, errText);
          return Response.json({ error: "Failed to send" }, { status: 502 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});
