import { PetFamily } from "@/components/pet-family";
import { Header } from "../components/header";
import { Service } from "@/components/services";
import { Prices } from "@/components/prices";
import { Interests } from "@/components/interests";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <section id="home" className="scroll">
        <Header />
      </section>

      <section>
        <PetFamily />
      </section>

      <section id="servicos" className="scroll ">
        <Service />
      </section>

      <section id="precos" className="scroll ">
        <Prices />
      </section>

      <section id="contato" className="scroll ">
        <Interests />
      </section>

      <Footer />
    </main>
  );
}
