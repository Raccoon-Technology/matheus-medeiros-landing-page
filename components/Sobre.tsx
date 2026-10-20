import Image from "next/image";
import { DESTAQUES } from "@/lib/data";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-navy px-5 py-24">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14">
        <div className="flex flex-wrap gap-12 items-center">
          <div data-reveal className="basis-[300px] grow max-w-[460px] relative">
            <div className="absolute inset-[14px_-14px_-14px_14px] border border-gold" />
            <div className="relative aspect-[4/5]">
              <Image
                src="/assets/matheus-perfil.jpg"
                alt="Foto de perfil de Matheus Medeiros"
                fill
                className="object-cover"
                sizes="(min-width: 1080px) 460px, 100vw"
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
          <div data-reveal className="basis-[340px] grow flex flex-col gap-5">
            <div className="flex items-center gap-3 text-gold text-[13px] font-semibold tracking-[0.28em] uppercase">
              <span>01</span>
              <span className="w-8 h-px bg-gold" />
              <span>Sobre o instrutor</span>
            </div>
            <h2 className="m-0 font-display font-bold uppercase text-[clamp(40px,7vw,64px)] leading-[0.95] text-white">
              Disciplina dentro e fora do tatame
            </h2>
            <p className="m-0 text-lg leading-[1.65] text-mist text-pretty">
              Matheus Medeiros é instrutor de Kickboxing, Boxe e Krav Maga. Há
              mais de dez anos no tatame, divide o tempo entre as turmas da
              academia e as aulas particulares, acompanhando de perto desde
              quem nunca calçou uma luva até atletas que se preparam para
              competir.
            </p>
            <p className="m-0 text-lg leading-[1.65] text-mist text-pretty">
              Nas aulas, a técnica vem antes da força. Cada aluno evolui no
              próprio ritmo, com treino planejado, correção individual e
              respeito pelo parceiro. O objetivo vai além de lutar bem: é sair
              de cada aula com mais condicionamento, confiança e disciplina do
              que entrou.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 desk:grid-cols-4 border-t border-b border-gold/35">
          {DESTAQUES.map((d) => (
            <div
              key={d.label}
              data-reveal
              className="py-7 px-4 flex flex-col gap-2 border-r border-mist/10"
            >
              <span className="font-display font-bold text-[40px] leading-none text-gold">
                {d.valor}
              </span>
              <span className="text-sm tracking-[0.06em] uppercase text-mist leading-snug">
                {d.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
