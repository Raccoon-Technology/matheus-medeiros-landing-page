import Header from "@/components/Header";
import Hero from "@/components/Hero";
// Versão alternativa do Hero, com o emblema no lugar da foto.
// import HeroEmblem from "@/components/HeroEmblem";
import Sobre from "@/components/Sobre";
import Modalidades from "@/components/Modalidades";
import Horarios from "@/components/Horarios";
import Particulares from "@/components/Particulares";
// Galeria pronta em components/Gallery.tsx, mas oculta até termos fotos reais do instrutor.
// import Gallery from "@/components/Gallery";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <HeroEmblem /> */}
        <Sobre />
        <Modalidades />
        <Horarios />
        <Particulares />
        {/* <Gallery /> */}
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
