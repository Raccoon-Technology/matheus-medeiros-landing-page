"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ENDERECO,
  HORARIOS,
  HORARIO_FILTROS,
  WA_MESSAGES,
  waLink,
} from "@/lib/data";

export default function Horarios() {
  const [filtro, setFiltro] = useState<(typeof HORARIO_FILTROS)[number]>(
    "Todas"
  );

  return (
    <section id="horarios" className="bg-navy px-5 py-24">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <div data-reveal className="flex flex-col gap-4 max-w-[720px]">
          <div className="flex items-center gap-3 text-gold text-[13px] font-semibold tracking-[0.28em] uppercase">
            <span>03</span>
            <span className="w-8 h-px bg-gold" />
            <span>Aulas na academia</span>
          </div>
          <h2 className="m-0 font-display font-bold uppercase text-[clamp(40px,7vw,64px)] leading-[0.95] text-white">
            Horários das turmas
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {HORARIO_FILTROS.map((f) => {
            const activeF = f === filtro;
            return (
              <button
                key={f}
                onClick={() => setFiltro(f)}
                className={`min-h-11 px-[18px] cursor-pointer rounded-[2px] font-display font-semibold text-base tracking-[0.08em] uppercase border ${
                  activeF
                    ? "bg-gold text-navy border-gold"
                    : "bg-transparent text-white border-mist/35"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {filtro === "Boxe" ? (
          <div
            key="boxe-particular"
            data-reveal
            className="bg-blue border-t-[3px] border-gold p-8 flex flex-col items-center text-center gap-4"
          >
            <span className="font-display font-bold text-2xl uppercase tracking-[0.06em] text-white">
              Boxe só em aula particular
            </span>
            <p className="m-0 text-base leading-[1.6] text-mist max-w-[480px]">
              O Boxe não tem turma fixa na academia — as aulas são individuais
              ou em dupla, com dia e horário combinados direto com o
              instrutor.
            </p>
            <a
              href={waLink(WA_MESSAGES.particular)}
              target="_blank"
              rel="noopener"
              className="bg-gold text-navy min-h-[50px] px-6 flex items-center font-display font-bold text-base tracking-[0.1em] uppercase rounded-[2px] hover:bg-goldHover"
            >
              Falar sobre aula particular
            </a>
          </div>
        ) : (
          <div
            key="grade-semanal"
            className="grid grid-cols-2 desk:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3"
          >
            {HORARIOS.map((d) => {
              const aulas =
                filtro === "Todas" ? d.aulas : d.aulas.filter((a) => a.mod === filtro);
              const semAula = aulas.length === 0;
              return (
                <div
                  key={`${d.dia}-${filtro}`}
                  data-reveal
                  className={`bg-blue border-t-[3px] border-gold p-[18px] pb-2.5 flex-col ${
                    semAula ? "hidden desk:flex" : "flex"
                  }`}
                >
                  <span className="font-display font-bold text-[22px] tracking-[0.1em] uppercase text-white mb-2">
                    {d.dia}
                  </span>
                  {aulas.map((a, i) => (
                    <div
                      key={i}
                      className="flex items-baseline justify-between gap-2.5 py-2.5 border-t border-mist/15"
                    >
                      <span className="font-display font-semibold text-[22px] text-gold">
                        {a.h}
                      </span>
                      <span className="text-[15px] text-white text-right">
                        {a.mod}
                      </span>
                    </div>
                  ))}
                  {aulas.length === 0 && (
                    <span className="py-2.5 border-t border-mist/15 text-sm text-mist">
                      Sem turma
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="flex flex-col desk:flex-row gap-6 items-stretch">
          <div
            data-reveal
            className="basis-[300px] grow border border-gold/40 p-7 flex flex-col gap-3.5"
          >
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
              Onde treinar
            </span>
            <div className="flex items-center gap-4">
              <div className="relative w-[72px] h-[72px] shrink-0">
                <Image
                  src="/assets/logo-fgt.png"
                  alt="FGT - Fight Gear Team"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display font-bold text-[32px] uppercase leading-none text-white">
                {ENDERECO.nome}
              </span>
            </div>
            <span className="text-[17px] leading-[1.6] text-mist">
              {ENDERECO.logradouro}
              <br />
              {ENDERECO.cidade}
            </span>
            <div className="flex flex-wrap gap-2.5 mt-auto pt-2.5">
              <a
                href={ENDERECO.mapsUrl}
                target="_blank"
                rel="noopener"
                className="border border-gold text-gold min-h-[46px] px-[18px] flex items-center font-display font-semibold text-base tracking-[0.08em] uppercase rounded-[2px]"
              >
                Abrir no mapa
              </a>
              <a
                href={waLink(WA_MESSAGES.aula)}
                target="_blank"
                rel="noopener"
                className="bg-gold text-navy min-h-[46px] px-[18px] flex items-center font-display font-bold text-base tracking-[0.08em] uppercase rounded-[2px]"
              >
                Agendar experimental
              </a>
            </div>
          </div>
          <div
            data-reveal
            className="basis-[340px] grow-[2] min-h-[320px] relative bg-blue border border-gold/40"
          >
            <iframe
              src={ENDERECO.mapsEmbed}
              title="Mapa - FGT Fight Gear Team"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0 grayscale-[35%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
