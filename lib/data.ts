export const WHATSAPP_NUMBER = "5592985414866";
export const INSTAGRAM_HANDLE = "instrutormatheusmedeiros";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  aula:
    "Olá, Matheus! Vi seu site e gostaria de agendar uma aula experimental. Pode me passar os dias e horários disponíveis e o que preciso levar no primeiro treino?",
  particular:
    "Olá, Matheus! Vi seu site e tenho interesse em aulas particulares. Gostaria de saber como funcionam (individual ou em dupla), os locais e horários disponíveis e os valores.",
  modalidade: (nome: string) =>
    `Olá, Matheus! Vi seu site e quero treinar ${nome}. Pode me passar os horários das turmas e como faço para agendar uma aula experimental?`,
};

export const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#modalidades", label: "Modalidades" },
  { href: "#horarios", label: "Horários" },
  { href: "#particulares", label: "Particulares" },
  // Galeria fica oculta até termos as fotos reais do Matheus.
  // { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export const DESTAQUES = [
  { valor: "+10", label: "Anos de tatame" },
  { valor: "3", label: "Modalidades" },
  { valor: "+300", label: "Alunos treinados" },
  { valor: "+20", label: "Campeonatos disputados" },
];

export type Modalidade = {
  id: string;
  nome: string;
  img: string;
  imgLabel: string;
  origem: string;
  historia: string[];
  paraQuem: string;
  desenvolve: string[];
};

export const MODALIDADES: Modalidade[] = [
  {
    id: "kick",
    nome: "Kickboxing",
    img: "https://images.unsplash.com/photo-1773289336887-4d25b287f0fe?auto=format&fit=crop&w=1200&q=80",
    imgLabel: "Foto · Kickboxing",
    origem: "Japão e EUA, anos 1960–70",
    historia: [
      "O kickboxing nasceu no Japão nos anos 1960, quando o promotor Osamu Noguchi reuniu técnicas do caratê e do muay thai em um esporte de contato pleno, com socos e chutes.",
      "Na década seguinte, nos Estados Unidos, o caratê de contato total ganhou regras próprias e luvas, dando origem ao kickboxing americano. Federações internacionais organizaram categorias, rounds e graduações.",
      "Desde os anos 1990, eventos como o K-1 projetaram a modalidade no mundo todo. Hoje ela é praticada como esporte de competição, condicionamento físico e base de defesa pessoal.",
    ],
    paraQuem:
      "Iniciantes e praticantes que buscam condicionamento, técnica de golpes e uma rotina de treino intensa e organizada.",
    desenvolve: ["Condicionamento", "Coordenação", "Explosão", "Autoconfiança"],
  },
  {
    id: "boxe",
    nome: "Boxe",
    img: "https://images.unsplash.com/photo-1546711076-85a7923432ab?auto=format&fit=crop&w=1200&q=80",
    imgLabel: "Foto · Boxe",
    origem: "Antiguidade · Inglaterra, séc. XVIII",
    historia: [
      "Registros de lutas com os punhos aparecem em civilizações antigas da Mesopotâmia e do Egito. Na Grécia, o pugilato entrou nos Jogos Olímpicos em 688 a.C.",
      "O boxe moderno se formou na Inglaterra do século XVIII, com as primeiras regras escritas. Em 1867, as regras do Marquês de Queensberry tornaram obrigatórias as luvas, os rounds de três minutos e a contagem de dez.",
      "O boxe é olímpico desde 1904 e se tornou uma das artes de combate mais técnicas: trabalho de pernas, esquivas, guarda e precisão nos golpes.",
    ],
    paraQuem:
      "Quem quer técnica refinada de socos, agilidade e um treino que exige foco — do iniciante ao competidor.",
    desenvolve: ["Precisão", "Reflexo", "Resistência", "Controle emocional"],
  },
  {
    id: "krav",
    nome: "Krav Maga",
    img: "https://images.pexels.com/photos/7045584/pexels-photo-7045584.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imgLabel: "Foto · Krav Maga",
    origem: "Europa Central e Israel, anos 1930–40",
    historia: [
      "O Krav Maga (“combate de contato”, em hebraico) foi desenvolvido por Imi Lichtenfeld, lutador e ginasta que, nos anos 1930, adaptou sua experiência para defender a comunidade judaica de Bratislava de ataques nas ruas.",
      "Após emigrar para a então Palestina, Imi passou a treinar forças de defesa e, com a criação de Israel, tornou-se instrutor-chefe do exército. O sistema foi refinado para ser simples, rápido e eficaz sob estresse.",
      "Nos anos 1960 e 1970 o método foi adaptado para civis. Hoje é ensinado no mundo todo como sistema de defesa pessoal realista, focado em situações do dia a dia.",
    ],
    paraQuem:
      "Homens e mulheres de qualquer idade adulta que querem aprender a se defender de forma prática, sem precisar de experiência prévia.",
    desenvolve: ["Defesa pessoal", "Percepção de risco", "Reação sob pressão", "Segurança"],
  },
];

export type HorarioDia = {
  dia: string;
  aulas: { h: string; mod: string }[];
};

export const HORARIOS: HorarioDia[] = [
  { dia: "Segunda", aulas: [{ h: "15:30", mod: "Kickboxing" }, { h: "16:30", mod: "Kickboxing" }, { h: "20:00", mod: "Krav Maga" }] },
  { dia: "Terça", aulas: [] },
  { dia: "Quarta", aulas: [{ h: "15:30", mod: "Kickboxing" }, { h: "16:30", mod: "Kickboxing" }, { h: "20:00", mod: "Krav Maga" }] },
  { dia: "Quinta", aulas: [] },
  { dia: "Sexta", aulas: [{ h: "15:30", mod: "Kickboxing" }, { h: "16:30", mod: "Kickboxing" }, { h: "20:00", mod: "Krav Maga" }] },
  { dia: "Sábado", aulas: [] },
];

export const HORARIO_FILTROS = ["Todas", "Kickboxing", "Boxe", "Krav Maga"] as const;

export const PARTICULARES = [
  { t: "Individual ou em dupla", d: "Treine sozinho ou com um parceiro, com atenção dedicada." },
  { t: "Local combinado", d: "Em condomínios ou em domicílio. Dia e horário combinados direto com o instrutor." },
  { t: "Horário flexível", d: "Agenda montada de acordo com a sua rotina." },
  { t: "Treino personalizado", d: "Plano pensado para o seu objetivo, nível e condicionamento." },
];

export type GaleriaItem = {
  cat: "Graduações" | "Aulas" | "Campeonatos" | "Vídeos";
  titulo: string;
  src?: string;
  thumb?: string;
  embed?: string;
  video?: boolean;
  credit?: string;
};

// Galeria: seção ainda oculta no site (sem fotos reais do instrutor).
// Mantida aqui pronta para ativar — ver components/Gallery.tsx e app/page.tsx.
export const GALERIA: GaleriaItem[] = [
  { cat: "Aulas", titulo: "Manopla: precisão antes de força", src: "https://images.unsplash.com/photo-1606335543042-57c525922933?auto=format&fit=crop&w=1000&q=80", credit: "Foto via Unsplash" },
  { cat: "Campeonatos", titulo: "A caminho do ringue", src: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&w=1000&q=80", credit: "Foto via Unsplash" },
  { cat: "Graduações", titulo: "Exame de faixa", src: "https://images.unsplash.com/photo-1555597408-26bc8e548a46?auto=format&fit=crop&w=1000&q=80", credit: "Foto via Unsplash" },
  { cat: "Vídeos", titulo: "Boxe: combinação de jab, direto e cruzado", video: true, src: "https://assets.mixkit.co/videos/40948/40948-360.mp4", thumb: "https://assets.mixkit.co/videos/40948/40948-thumb-360-0.jpg", credit: "Vídeo via Mixkit" },
  { cat: "Aulas", titulo: "Turma de Boxe em dia de treino", src: "https://images.unsplash.com/photo-1611816153165-fed23698666d?auto=format&fit=crop&w=1000&q=80", credit: "Foto via Unsplash" },
  { cat: "Campeonatos", titulo: "Noite de luta", src: "https://images.unsplash.com/photo-1486215397028-cb4f31efea3e?auto=format&fit=crop&w=1000&q=80", credit: "Foto via Unsplash" },
  { cat: "Graduações", titulo: "Entrega de graduação", src: "https://images.unsplash.com/photo-1525198104776-f6e8a873f9b7?auto=format&fit=crop&w=1000&q=80", credit: "Foto via Unsplash" },
  { cat: "Aulas", titulo: "Trabalho de ringue: distância e deslocamento", src: "https://images.unsplash.com/photo-1726867825984-0582b27728b8?auto=format&fit=crop&w=1000&q=80", credit: "Foto via Unsplash" },
  { cat: "Vídeos", titulo: "Krav Maga: defesa contra agarramento", video: true, src: "https://assets.mixkit.co/videos/45881/45881-360.mp4", thumb: "https://assets.mixkit.co/videos/45881/45881-thumb-360-2.jpg", credit: "Vídeo via Mixkit" },
  { cat: "Campeonatos", titulo: "Segundo round", src: "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?auto=format&fit=crop&w=1000&q=80", credit: "Foto via Unsplash" },
  { cat: "Aulas", titulo: "Luvas prontas para mais uma aula", src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1000&q=80", credit: "Foto via Unsplash" },
  { cat: "Graduações", titulo: "Turma graduada", src: "https://images.unsplash.com/photo-1602827114685-efbb2717da9f?auto=format&fit=crop&w=1000&q=80", credit: "Foto via Unsplash" },
  { cat: "Vídeos", titulo: "Sparring leve entre alunos", video: true, src: "https://assets.mixkit.co/videos/40954/40954-360.mp4", thumb: "https://assets.mixkit.co/videos/40954/40954-thumb-360-0.jpg", credit: "Vídeo via Mixkit" },
];

export const GALERIA_FILTROS = ["Todas", "Graduações", "Aulas", "Campeonatos", "Vídeos"] as const;

export const ENDERECO = {
  nome: "Matheus Medeiros",
  logradouro: "Av. Pedro Teixeira, 789 — Dom Pedro",
  cidade: "Manaus / AM · 69050-001",
  mapsUrl:
    "https://www.google.com/maps/place/Krav+Maga+Manaus-Am/data=!4m2!3m1!1s0x926c0f8a293c085f:0x2932d1b8759fdfcf",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Pedro+Teixeira,+789+-+Dom+Pedro,+Manaus+-+AM,+69050-001&output=embed",
};
