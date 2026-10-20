import Image from "next/image";
import { WA_MESSAGES, waLink } from "@/lib/data";

export default function HeroEmblem() {
  return (
    <section
      id="inicio"
      className="relative min-h-svh flex items-end overflow-hidden bg-navy"
    >
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <pattern
            id="heroHex"
            width="56"
            height="97"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.1)"
          >
            <path
              d="M28 0 L56 16.2 L56 48.5 L28 64.7 L0 48.5 L0 16.2 Z M28 64.7 L28 97"
              fill="none"
              stroke="#C9A24B"
              strokeWidth="1"
            />
          </pattern>
        </defs>
      </svg>

      {/* Mobile */}
      <div className="absolute inset-0 desk:hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 60% at 50% 28%,#16306B 0%,#0F2147 50%,#0B1730 85%)",
          }}
        />
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.07 }}>
          <rect width="100%" height="100%" fill="url(#heroHex)" />
        </svg>
        <div
          className="absolute rounded-full"
          style={{
            left: "50%",
            top: "32%",
            width: "164.1vw",
            height: "164.1vw",
            transform: "translate(-50%,-50%)",
            border: "1px solid rgba(201,162,75,0.16)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            left: "50%",
            top: "32%",
            width: "128.2vw",
            height: "128.2vw",
            transform: "translate(-50%,-50%)",
            border: "1px solid rgba(201,162,75,0.24)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            left: "50%",
            top: "32%",
            width: "102.6vw",
            height: "102.6vw",
            transform: "translate(-50%,-50%)",
            border: "2px solid rgba(201,162,75,0.35)",
          }}
        />
        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            left: "50%",
            top: "32%",
            width: "91.28vw",
            height: "91.28vw",
            transform: "translate(-50%,-50%)",
            boxShadow:
              "0 0 90px rgba(201,162,75,0.18), 0 24px 60px rgba(0,0,0,0.5)",
          }}
        >
          <Image
            src="/assets/logo-matheus-medeiros.jpeg"
            alt=""
            fill
            className="object-cover scale-[1.012]"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(11,23,48,0.35) 0%,rgba(11,23,48,0) 18%,rgba(11,23,48,0) 40%,rgba(11,23,48,0.85) 58%,rgba(11,23,48,0.98) 75%)",
          }}
        />
      </div>

      {/* Desktop */}
      <div className="hidden desk:block absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 90% at 72% 50%,#16306B 0%,#0F2147 45%,#0B1730 80%)",
          }}
        />
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.07 }}>
          <rect width="100%" height="100%" fill="url(#heroHex)" />
        </svg>
        <div
          className="absolute rounded-full"
          style={{
            left: "72%",
            top: "50%",
            width: "78.13vw",
            height: "78.13vw",
            transform: "translate(-50%,-50%)",
            border: "1px solid rgba(201,162,75,0.14)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            left: "72%",
            top: "50%",
            width: "63.54vw",
            height: "63.54vw",
            transform: "translate(-50%,-50%)",
            border: "1px solid rgba(201,162,75,0.22)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            left: "72%",
            top: "50%",
            width: "51.04vw",
            height: "51.04vw",
            transform: "translate(-50%,-50%)",
            border: "2px solid rgba(201,162,75,0.35)",
          }}
        />
        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            left: "72%",
            top: "50%",
            width: "45.83vw",
            height: "45.83vw",
            transform: "translate(-50%,-50%)",
            boxShadow:
              "0 0 160px rgba(201,162,75,0.18), 0 40px 120px rgba(0,0,0,0.5)",
          }}
        >
          <Image
            src="/assets/logo-matheus-medeiros.jpeg"
            alt=""
            fill
            className="object-cover scale-[1.012]"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,rgba(11,23,48,0.96) 0%,rgba(11,23,48,0.8) 30%,rgba(11,23,48,0.15) 58%,rgba(11,23,48,0) 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(11,23,48,0) 70%,rgba(11,23,48,0.9) 100%)",
          }}
        />
      </div>

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
