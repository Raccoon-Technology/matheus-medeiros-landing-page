"use client";

import { useState } from "react";
import Image from "next/image";
import { NAV, WA_MESSAGES, waLink } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navy/95 backdrop-blur border-b border-gold/30">
      <div className="max-w-[1200px] mx-auto px-5 h-[68px] flex items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3 text-white">
          <Image
            src="/assets/logo-matheus-medeiros.jpeg"
            alt="Matheus Medeiros"
            width={44}
            height={44}
            className="rounded-full object-cover shrink-0"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display font-bold text-[19px] tracking-[0.06em] uppercase">
              Matheus Medeiros
            </span>
            <span className="text-[11px] tracking-[0.18em] uppercase text-gold mt-1">
              Instrutor
            </span>
          </span>
        </a>

        <nav className="hidden desk:flex items-center gap-6">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-mist text-sm font-medium tracking-[0.08em] uppercase hover:text-white"
            >
              {n.label}
            </a>
          ))}
          <a
            href={waLink(WA_MESSAGES.aula)}
            target="_blank"
            rel="noopener"
            className="whitespace-nowrap bg-gold text-navy px-[18px] py-[11px] font-display font-bold text-[15px] tracking-[0.1em] uppercase rounded-[2px] hover:bg-goldHover"
          >
            Agendar aula
          </a>
        </nav>

        <div className="flex desk:hidden items-center gap-2.5">
          <a
            href={waLink(WA_MESSAGES.aula)}
            target="_blank"
            rel="noopener"
            className="bg-gold text-navy px-3 py-2.5 font-display font-bold text-sm tracking-[0.08em] uppercase rounded-[2px]"
          >
            Agendar
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="w-11 h-11 bg-transparent border border-gold/50 rounded-[2px] flex flex-col items-center justify-center gap-[5px] cursor-pointer"
          >
            <span
              className={`w-[18px] h-0.5 bg-white transition-transform duration-300 ease-out ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`w-[18px] h-0.5 bg-white transition-opacity duration-200 ease-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-[18px] h-0.5 bg-white transition-transform duration-300 ease-out ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`desk:hidden grid transition-[grid-template-rows] duration-300 ease-out border-gold/20 ${
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <nav className="flex flex-col px-5 pt-2 pb-5 overflow-hidden bg-navy">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="text-white py-3.5 border-b border-mist/10 font-display font-semibold text-[22px] tracking-[0.06em] uppercase"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
