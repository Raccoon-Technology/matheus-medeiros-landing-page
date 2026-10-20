import { WA_MESSAGES, waLink } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink(WA_MESSAGES.aula)}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
      className="fixed right-4 bottom-4 z-[60] desk:hidden min-h-[54px] px-5 flex items-center gap-2.5 rounded-full bg-gold text-navy shadow-[0_8px_24px_rgba(0,0,0,0.4)] font-display font-bold text-lg tracking-[0.08em] uppercase"
    >
      <span className="w-2.5 h-2.5 rounded-full bg-navy" />
      WhatsApp
    </a>
  );
}
