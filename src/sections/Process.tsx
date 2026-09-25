import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { IconPop } from "../components/IconPop";

const STEPS = [
  {
    number: "01",
    title: "briefing",
    desc: "a gente mergulha no seu negócio: objetivos, público, referências e o que já não está funcionando. sem briefing, sem proposta.",
  },
  {
    number: "02",
    title: "design",
    desc: "layout no figma, iterado com você até a aprovação. você vê o site inteiro antes de qualquer linha de código existir.",
  },
  {
    number: "03",
    title: "desenvolvimento",
    desc: "código limpo, rápido e responsivo, testado nos dispositivos que seus clientes realmente usam.",
  },
  {
    number: "04",
    title: "entrega & suporte",
    desc: "publicação, acompanhamento pós-lançamento e suporte contínuo. a gente não some depois do deploy.",
  },
];

export function Process() {
  return (
    <div className="bg-surface">
      <Section
        id="processo"
        eyebrow="como trabalhamos"
        title="do briefing ao ar em quatro etapas."
        description="processo enxuto, comunização direta e zero surpresa no meio do caminho. você acompanha cada etapa."
      >
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ number, title, desc }, i) => (
            <li key={number}>
              <Reveal delay={i * 0.08} className="h-full">
                <article className="h-full rounded-2xl border border-white/10 bg-surface-2 p-6">
                  <IconPop
                    className="block font-display text-4xl font-bold text-accent"
                    delay={0.1}
                  >
                    {number}
                  </IconPop>
                  <h3 className="mt-4 font-display text-lg font-semibold text-cream">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm/6 text-cream/55">{desc}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
