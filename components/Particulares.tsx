import Image from "next/image";
import { PARTICULARES, WA_MESSAGES, waLink } from "@/lib/data";

export default function Particulares() {
  return (
    <section id="particulares" className="bg-cream text-navy px-5 py-24">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse desk:flex-row gap-14 items-center">
        <div data-reveal className="w-full basis-[360px] grow-[1.1] flex flex-col gap-5.5">
          <div className="flex items-center gap-3 text-goldDark text-[13px] font-semibold tracking-[0.28em] uppercase">
            <span>04</span>
            <span className="w-8 h-px bg-goldDark" />
            <span>Aulas particulares</span>
          </div>
          <h2 className="m-0 font-display font-bold uppercase text-[clamp(40px,7vw,64px)] leading-[0.95] text-navy">
            Treino sob medida, no seu ritmo
          </h2>
          <p className="m-0 text-lg leading-[1.65] text-ink2 text-pretty">
            Atenção total do instrutor para acelerar a técnica, trabalhar um
            objetivo específico ou começar do zero com segurança.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-navy">
            {PARTICULARES.map((p) => (
              <div
                key={p.t}
                className="py-5 pr-4.5 border-b border-navy/18 flex flex-col gap-1.5"
              >
                <span className="font-display font-bold text-[22px] uppercase tracking-[0.04em] text-navy">
                  {p.t}
                </span>
                <span className="text-[15px] leading-[1.55] text-ink2">
                  {p.d}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3.5 items-center mt-1.5">
            <a
              href={waLink(WA_MESSAGES.particular)}
              target="_blank"
              rel="noopener"
              className="bg-navy text-white min-h-[54px] px-7 flex items-center gap-3 font-display font-bold text-lg tracking-[0.1em] uppercase rounded-[2px] border-b-[3px] border-gold hover:bg-blue"
            >
              Falar sobre aula particular
            </a>
            <span className="text-sm text-ink2">
              Valores e disponibilidade direto no WhatsApp.
            </span>
          </div>
        </div>
        <div data-reveal className="w-full basis-[300px] grow relative">
          <div className="absolute inset-[-14px_14px_14px_-14px] bg-navy" />
          <div className="relative aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1636581563884-39569e81cbad?auto=format&fit=crop&w=1200&q=80"
              alt="Foto de aula particular"
              fill
              className="object-cover"
              sizes="(min-width: 1080px) 300px, 100vw"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(0deg,rgba(11,23,48,0.12) 0px,rgba(11,23,48,0.42) 44px,rgba(11,23,48,0.42) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
