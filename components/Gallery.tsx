"use client";

import { useState } from "react";
import { GALERIA, GALERIA_FILTROS, type GaleriaItem } from "@/lib/data";

export default function Gallery() {
  const [filtro, setFiltro] = useState<(typeof GALERIA_FILTROS)[number]>(
    "Todas"
  );
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items =
    filtro === "Todas" ? GALERIA : GALERIA.filter((g) => g.cat === filtro);
  const current = lightboxIndex !== null ? items[lightboxIndex] : null;

  function step(delta: number) {
    if (lightboxIndex === null) return;
    const n = items.length;
    setLightboxIndex((lightboxIndex + delta + n) % n);
  }

  return (
    <section id="galeria" className="bg-navy px-5 py-24">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        <div data-reveal className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-gold text-[13px] font-semibold tracking-[0.28em] uppercase">
            <span>05</span>
            <span className="w-8 h-px bg-gold" />
            <span>Galeria</span>
          </div>
          <h2 className="m-0 font-display font-bold uppercase text-[clamp(40px,7vw,64px)] leading-[0.95] text-white">
            Fotos e vídeos
          </h2>
        </div>

        <div className="flex gap-2 overflow-x-auto overflow-y-hidden pb-1">
          {GALERIA_FILTROS.map((f) => {
            const activeF = f === filtro;
            return (
              <button
                key={f}
                onClick={() => {
                  setFiltro(f);
                  setShowAll(false);
                }}
                className={`shrink-0 min-h-11 px-[18px] cursor-pointer rounded-[2px] font-display font-semibold text-base tracking-[0.08em] uppercase border ${
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

        <div className="grid grid-cols-2 sm:grid-cols-3 desk:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2">
          {items.map((g, i) => {
            const isVideo = !!(g.video || g.cat === "Vídeos");
            const thumb = g.thumb || (!isVideo ? g.src : "");
            const overflowItem = i >= 6;
            return (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`relative aspect-square overflow-hidden p-0 border-none cursor-pointer hover:outline hover:outline-2 hover:outline-gold hover:-outline-offset-2 ${
                  overflowItem ? (showAll ? "block" : "hidden desk:block") : ""
                }`}
                style={{
                  background:
                    "repeating-linear-gradient(135deg,#16306B 0 10px,#132a5e 10px 20px)",
                }}
              >
                {thumb && (
                  <>
                    <span
                      role="img"
                      aria-label={g.titulo}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url("${thumb}")` }}
                    />
                    <span className="absolute inset-0 bg-navy/38" />
                  </>
                )}
                {isVideo && (
                  <span className="absolute top-1/2 left-1/2 w-[52px] h-[52px] -mt-[26px] -ml-[26px] rounded-full bg-navy/85 border border-gold flex items-center justify-center">
                    <span className="w-0 h-0 border-l-[14px] border-l-gold border-y-[9px] border-y-transparent ml-1" />
                  </span>
                )}
                <span className="absolute left-2 bottom-2 right-2 text-left font-mono text-[11px] tracking-[0.04em] text-mist bg-navy/85 px-1.5 py-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  {g.cat} · {g.titulo}
                </span>
              </button>
            );
          })}
        </div>

        {items.length > 6 && (
          <button
            onClick={() => setShowAll((v) => !v)}
            className="desk:hidden self-center min-h-[50px] px-6 cursor-pointer bg-transparent border border-gold text-gold rounded-[2px] font-display font-bold text-[17px] tracking-[0.1em] uppercase"
          >
            {showAll ? "Mostrar menos" : `Ver mais (${items.length - 6})`}
          </button>
        )}
      </div>

      {current && (
        <Lightbox
          item={current}
          pos={`${(lightboxIndex ?? 0) + 1}/${items.length}`}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      )}
    </section>
  );
}

function Lightbox({
  item,
  pos,
  onClose,
  onPrev,
  onNext,
}: {
  item: GaleriaItem;
  pos: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const isVideo = !!(item.video || item.cat === "Vídeos");
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-[#050A16]/95 flex flex-col items-center justify-center px-4 pt-16 pb-6 gap-4"
    >
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-3 right-3 w-12 h-12 bg-transparent border border-white/40 text-white text-2xl cursor-pointer rounded-[2px]"
      >
        ×
      </button>
      <div
        onClick={stop}
        className="relative w-full max-w-[1000px] aspect-[16/10] max-h-[72vh] flex items-center justify-center"
        style={{
          background:
            "repeating-linear-gradient(135deg,#16306B 0 14px,#132a5e 14px 28px)",
        }}
      >
        {item.embed ? (
          <iframe
            src={item.embed}
            title={item.titulo}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            className="w-full h-full border-0"
          />
        ) : isVideo && item.src ? (
          <video
            controls
            autoPlay
            muted
            playsInline
            poster={item.thumb}
            src={item.src}
            className="w-full h-full bg-black"
          />
        ) : item.src || item.thumb ? (
          <span
            role="img"
            aria-label={item.titulo}
            className="absolute inset-0 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url("${item.src || item.thumb}")` }}
          />
        ) : (
          <span className="font-mono text-[13px] text-mist bg-navy px-3 py-2">
            {isVideo ? "Vídeo do instrutor · em breve" : "Foto do instrutor · em breve"}
          </span>
        )}
      </div>
      <div
        onClick={stop}
        className="w-full max-w-[1000px] flex items-center justify-between gap-3"
      >
        <button
          onClick={onPrev}
          className="min-w-12 h-12 bg-transparent border border-gold/60 text-gold text-xl cursor-pointer rounded-[2px]"
        >
          ←
        </button>
        <span className="text-[15px] text-mist text-center">
          {item.cat} · {item.titulo} <span className="text-gold">{pos}</span>
          <span className="block text-xs mt-1">{item.credit}</span>
        </span>
        <button
          onClick={onNext}
          className="min-w-12 h-12 bg-transparent border border-gold/60 text-gold text-xl cursor-pointer rounded-[2px]"
        >
          →
        </button>
      </div>
    </div>
  );
}
