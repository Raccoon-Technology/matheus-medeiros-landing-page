"use client";

import { useState } from "react";
import Image from "next/image";
import { MODALIDADES, WA_MESSAGES, waLink } from "@/lib/data";

export default function Modalidades() {
  const [active, setActive] = useState(MODALIDADES[0].id);
  const [histOpen, setHistOpen] = useState<Record<string, boolean>>({});

  return (
    <section id="modalidades" className="bg-blue px-5 py-24">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <div data-reveal className="flex flex-col gap-4 max-w-[720px]">
          <div className="flex items-center gap-3 text-gold text-[13px] font-semibold tracking-[0.28em] uppercase">
            <span>02</span>
            <span className="w-8 h-px bg-gold" />
            <span>Modalidades</span>
          </div>
          <h2 className="m-0 font-display font-bold uppercase text-[clamp(40px,7vw,64px)] leading-[0.95] text-white">
            Três artes, um mesmo método
          </h2>
        </div>

        <div className="flex overflow-x-auto overflow-y-hidden border-b border-mist/20">
          {MODALIDADES.map((m) => (
            <button
              key={m.id}
              onClick={() => setActive(m.id)}
              className={`flex-1 desk:flex-none py-3.5 px-1 desk:px-7 desk:py-4 -mb-px whitespace-nowrap cursor-pointer font-display font-bold text-lg desk:text-[22px] tracking-[0.1em] uppercase border-b-[3px] ${
                active === m.id
                  ? "text-white border-gold"
                  : "text-mist border-transparent"
              }`}
            >
              {m.nome}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-18">
          {MODALIDADES.filter((m) => m.id === active).map((m) => {
            const aberto = !!histOpen[m.id];
            return (
              <article
                key={m.id}
                data-reveal
                className="flex flex-col desk:flex-row flex-wrap gap-12 items-start"
              >
                <div className="flex flex-col gap-3.5 desk:basis-[320px] desk:grow">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={m.img}
                      alt={m.imgLabel}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1080px) 320px, 100vw"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(0deg,rgba(11,23,48,0.12) 0px,rgba(11,23,48,0.42) 44px,rgba(11,23,48,0.42) 100%)",
                      }}
                    />
                  </div>
                  <div className="font-mono text-xs tracking-[0.08em] uppercase text-mist">
                    Origem · {m.origem}
                  </div>
                </div>

                <div className="flex flex-col gap-4.5 desk:basis-[360px] desk:grow-[1.2]">
                  <h3 className="m-0 font-display font-bold uppercase text-[clamp(36px,6vw,52px)] leading-none text-white">
                    {m.nome}
                  </h3>
                  {m.historia.map((p, i) => (
                    <p
                      key={i}
                      className={`m-0 text-[17px] leading-[1.65] text-mist text-pretty ${
                        i === 0 ? "" : aberto ? "block" : "hidden desk:block"
                      }`}
                    >
                      {p}
                    </p>
                  ))}
                  <button
                    onClick={() =>
                      setHistOpen((s) => ({ ...s, [m.id]: !s[m.id] }))
                    }
                    className="desk:hidden self-start min-h-11 p-0 bg-transparent border-none border-b border-gold text-gold cursor-pointer font-display font-semibold text-[17px] tracking-[0.08em] uppercase"
                  >
                    {aberto ? "Mostrar menos" : "Ler história completa"}
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2 pt-5.5 border-t border-gold/35">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
                        Para quem é
                      </span>
                      <span className="text-base leading-[1.55] text-white">
                        {m.paraQuem}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
                        O que você desenvolve
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {m.desenvolve.map((x) => (
                          <span
                            key={x}
                            className="border border-mist/35 px-2.5 py-1.5 text-sm text-white rounded-[2px]"
                          >
                            {x}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-1.5">
                    <a
                      href={waLink(WA_MESSAGES.modalidade(m.nome))}
                      target="_blank"
                      rel="noopener"
                      className="bg-gold text-navy min-h-[50px] px-6 flex items-center font-display font-bold text-[17px] tracking-[0.1em] uppercase rounded-[2px] hover:bg-goldHover"
                    >
                      Quero treinar {m.nome}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
