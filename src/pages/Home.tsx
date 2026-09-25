import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Services } from "../sections/Services";
import { Portfolio } from "../sections/Portfolio";
import { Process } from "../sections/Process";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
    </>
  );
}
