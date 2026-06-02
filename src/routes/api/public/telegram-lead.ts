import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const LeadSchema = z.object({
  type: z.string().min(1).max(64),
  name: z.string().min(1).max(255),
  messenger: z.string().max(64).optional().default(""),
  username: z.string().max(255).optional().default(""),
  message: z.string().max(8000).optional().default(""),
});

export const Route = createFileRoute("/api/public/telegram-lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;
        if (!token || !chatId) {
          return new Response(
            JSON.stringify({ error: "telegram_not_configured" }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "invalid_json" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const parsed = LeadSchema.safeParse(body);
        if (!parsed.success) {
          return new Response(
            JSON.stringify({ error: "invalid_input", details: parsed.error.flatten() }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }
        const { type, name, messenger, username, message } = parsed.data;

        const text =
          `🔔 Новая заявка: ${type}\n` +
          `👤 Имя: ${name}\n` +
          (messenger ? `💬 Мессенджер: ${messenger}\n` : "") +
          (username ? `🔗 Контакт: ${username}\n` : "") +
          (message ? `\n${message}` : "");

        const tgRes = await fetch(
          `https://api.telegram.org/bot${token}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text,
              parse_mode: "HTML",
              disable_web_page_preview: true,
            }),
          },
        );

        if (!tgRes.ok) {
          const errText = await tgRes.text();
          return new Response(
            JSON.stringify({ error: "telegram_failed", details: errText }),
            { status: 502, headers: { "Content-Type": "application/json" } },
          );
        }

        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
