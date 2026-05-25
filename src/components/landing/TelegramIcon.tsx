import tgIcon from "@/assets/telegram-icon.png";

export function TelegramIcon({ className }: { className?: string }) {
  return <img src={tgIcon} alt="Telegram" className={className} />;
}
