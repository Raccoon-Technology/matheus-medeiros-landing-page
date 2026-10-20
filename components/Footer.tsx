import Image from "next/image";
import { INSTAGRAM_URL, NAV, WA_MESSAGES, waLink } from "@/lib/data";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-footer px-5 pt-14 pb-24 border-t border-gold/30">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row flex-wrap gap-10 justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/logo-matheus-medeiros.jpeg"
            alt="Logo Matheus Medeiros"
            width={72}
            height={72}
            className="rounded-full object-cover shrink-0"
          />
          <div className="flex flex-col gap-1">
            <span className="font-display font-bold text-2xl tracking-[0.06em] uppercase text-white">
              Matheus Medeiros
            </span>
            <span className="text-sm text-mist">
              Kickboxing · Boxe · Krav Maga
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-12">
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              Navegação
            </span>
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-mist text-[15px] hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              Redes
            </span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener"
              className="text-mist text-[15px] hover:text-white"
            >
              Instagram
            </a>
            <a
              href={waLink(WA_MESSAGES.aula)}
              target="_blank"
              rel="noopener"
              className="text-mist text-[15px] hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-10 pt-5 border-t border-mist/10 flex flex-col sm:flex-row gap-1.5 sm:gap-0 justify-between text-[13px] text-mist">
        <span>© {ano} Instrutor Matheus Medeiros</span>
        <a
          href="https://raccoontechnology.com.br"
          target="_blank"
          rel="noopener"
          className="text-mist/60 hover:text-mist"
        >
          Desenvolvido por Raccoon Technology
        </a>
      </div>
    </footer>
  );
}
