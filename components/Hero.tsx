import Image from "next/image";
import { WA_MESSAGES, waLink } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-svh flex items-end overflow-hidden bg-navy"
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-turma.jpg"
          alt="Turma de alunos do Matheus Medeiros"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg,rgba(11,23,48,0.55) 0%,rgba(11,23,48,0.72) 45%,rgba(11,23,48,0.94) calc(100% - 48px),rgba(11,23,48,0.4) 100%)",
        }}
      />
      <div className="relative w-full max-w-[1200px] mx-auto px-5 pt-[140px] pb-[72px] flex flex-col gap-5 items-start text-left">
        <div
          data-reveal
          className="flex items-center gap-3 text-gold text-[13px] font-semibold tracking-[0.28em] uppercase"
        >
          <span className="w-8 h-px bg-gold" />
          <span>Instrutor de artes marciais</span>
        </div>
        <h1
          data-reveal
          className="m-0 font-display font-bold uppercase text-[clamp(56px,13vw,132px)] leading-[0.88] tracking-[0.01em] text-white"
        >
          Matheus
          <br />
          Medeiros
        </h1>
        <p
          data-reveal
          className="m-0 font-display font-medium text-[clamp(20px,4.4vw,28px)] tracking-[0.14em] uppercase text-mist"
        >
          Kickboxing · Boxe · Krav Maga
        </p>
        <div data-reveal className="flex flex-wrap gap-3 mt-2.5 pointer-events-auto">
          <a
            href={waLink(WA_MESSAGES.aula)}
            target="_blank"
            rel="noopener"
            className="bg-gold text-navy min-h-[52px] px-6 flex items-center font-display font-bold text-lg tracking-[0.1em] uppercase rounded-[2px] hover:bg-goldHover"
          >
            Agendar aula experimental
          </a>
          <a
            href="#horarios"
            className="border border-white/60 text-white min-h-[52px] px-6 flex items-center font-display font-semibold text-lg tracking-[0.1em] uppercase rounded-[2px] hover:border-gold hover:text-gold"
          >
            Ver horários
          </a>
        </div>
      </div>
    </section>
  );
}
