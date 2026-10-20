"use client";

import { useState } from "react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WA_MESSAGES, waLink } from "@/lib/data";

const TIPOS = ["Academia", "Particular"] as const;

export default function Contato() {
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [modInt, setModInt] = useState("Kickboxing");
  const [tipo, setTipo] = useState<(typeof TIPOS)[number]>("Academia");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Olá, Matheus! Vim pelo seu site e gostaria de mais informações.\n\nNome: ${nome}\nTelefone: ${tel}\nModalidade de interesse: ${modInt}\nTipo de aula: ${tipo}\n\nAguardo seu retorno. Obrigado!`;
    window.open(waLink(msg), "_blank");
    setEnviado(true);
  }

  return (
    <section id="contato" className="bg-blue px-5 py-24">
      <div className="max-w-[1200px] mx-auto flex flex-col desk:flex-row gap-12">
        <div data-reveal className="basis-[320px] grow flex flex-col gap-5.5">
          <div className="flex items-center gap-3 text-gold text-[13px] font-semibold tracking-[0.28em] uppercase">
            <span>06</span>
            <span className="w-8 h-px bg-gold" />
            <span>Contato</span>
          </div>
          <h2 className="m-0 font-display font-bold uppercase text-[clamp(40px,7vw,64px)] leading-[0.95] text-white">
            Comece pela aula experimental
          </h2>
          <p className="m-0 text-lg leading-[1.65] text-mist">
            Tire dúvidas, escolha a modalidade e marque seu primeiro treino.
          </p>
          <a
            href={waLink(WA_MESSAGES.aula)}
            target="_blank"
            rel="noopener"
            className="bg-gold text-navy px-6 py-5.5 flex flex-col gap-1 rounded-[2px] hover:bg-goldHover"
          >
            <span className="font-display font-bold text-[26px] tracking-[0.08em] uppercase">
              Chamar no WhatsApp
            </span>
            <span className="text-[15px] font-medium">(92) 98541-4866</span>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
            className="border border-white/40 text-white px-6 py-4.5 flex justify-between items-center gap-3 rounded-[2px] hover:border-gold hover:text-gold"
          >
            <span className="flex flex-col gap-0.5">
              <span className="text-xs tracking-[0.22em] uppercase text-mist">
                Instagram
              </span>
              <span className="text-lg font-semibold">@{INSTAGRAM_HANDLE}</span>
            </span>
            <span className="text-xl">→</span>
          </a>
        </div>

        <form
          data-reveal
          onSubmit={handleSubmit}
          className="basis-[340px] grow bg-navy px-7 py-8 flex flex-col gap-4.5 border-t-[3px] border-gold"
        >
          <span className="font-display font-bold text-[26px] uppercase tracking-[0.06em] text-white">
            Deixe seu contato
          </span>
          <label className="flex flex-col gap-2 text-[13px] tracking-[0.14em] uppercase text-mist">
            Nome
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              placeholder="Seu nome"
              className="h-[50px] px-3.5 text-[17px] bg-blue border border-mist/25 text-white rounded-[2px] outline-none focus:border-gold"
            />
          </label>
          <label className="flex flex-col gap-2 text-[13px] tracking-[0.14em] uppercase text-mist">
            Telefone / WhatsApp
            <input
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              required
              type="tel"
              placeholder="(00) 00000-0000"
              className="h-[50px] px-3.5 text-[17px] bg-blue border border-mist/25 text-white rounded-[2px] outline-none focus:border-gold"
            />
          </label>
          <label className="flex flex-col gap-2 text-[13px] tracking-[0.14em] uppercase text-mist">
            Modalidade de interesse
            <select
              value={modInt}
              onChange={(e) => setModInt(e.target.value)}
              className="h-[50px] px-3 text-[17px] bg-blue border border-mist/25 text-white rounded-[2px]"
            >
              <option value="Kickboxing">Kickboxing</option>
              <option value="Boxe">Boxe</option>
              <option value="Krav Maga">Krav Maga</option>
              <option value="Ainda não sei">Ainda não sei</option>
            </select>
          </label>
          <div className="flex flex-col gap-2 text-[13px] tracking-[0.14em] uppercase text-mist">
            Tipo de aula
            <div className="grid grid-cols-2 gap-2">
              {TIPOS.map((t) => {
                const activeT = t === tipo;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTipo(t)}
                    className={`min-h-[50px] cursor-pointer rounded-[2px] font-display font-semibold text-[17px] tracking-[0.06em] uppercase border ${
                      activeT
                        ? "bg-gold text-navy border-gold"
                        : "bg-transparent text-white border-mist/35"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            type="submit"
            className="mt-1.5 min-h-[54px] cursor-pointer bg-gold text-navy border-none rounded-[2px] font-display font-bold text-[19px] tracking-[0.1em] uppercase hover:bg-goldHover"
          >
            Enviar pelo WhatsApp
          </button>
          {enviado && (
            <span className="text-sm text-gold">
              Abrindo o WhatsApp com sua mensagem…
            </span>
          )}
        </form>
      </div>
    </section>
  );
}
