import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CATEGORY_LABELS, getProject } from "../data/projects";
import { Reveal } from "../components/Reveal";
import { NotFound } from "./NotFound";

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} — projeto zin.k`;
    return () => {
      document.title = "zin.k — sites e soluções digitais sob medida";
    };
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  return (
    <article className="pb-24">
      <div className="mx-auto w-full max-w-6xl px-5 pt-28 sm:px-8">
        <Reveal>
          <Link
            to="/#portfolio"
            className="group inline-flex items-center gap-2 text-sm font-medium text-cream/50 transition-colors hover:text-cream"
          >
            <ArrowLeft
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            todos os projetos
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-cream/50">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-medium text-accent-text">
                {CATEGORY_LABELS[project.category]}
              </span>
              <span>{project.client}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold text-cream sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg/8 text-cream/60">
              {project.tagline}
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <img
              src={project.cover}
              alt={project.coverAlt}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <Reveal>
              <section aria-labelledby="problema-titulo">
                <h2
                  id="problema-titulo"
                  className="font-display text-xl font-semibold text-cream"
                >
                  o problema
                </h2>
                <p className="mt-3 text-base/8 text-cream/60">
                  {project.problem}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="solucao-titulo">
                <h2
                  id="solucao-titulo"
                  className="font-display text-xl font-semibold text-cream"
                >
                  a solução
                </h2>
                <p className="mt-3 text-base/8 text-cream/60">
                  {project.solution}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="resultados-titulo">
                <h2
                  id="resultados-titulo"
                  className="font-display text-xl font-semibold text-cream"
                >
                  resultados
                </h2>
                <ul className="mt-3 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-base/8 text-cream/60"
                    >
                      <CheckCircle2
                        size={18}
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-accent-text"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          <aside className="space-y-6">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-white/10 bg-surface p-6">
                <h2 className="font-display text-sm font-semibold text-cream/80">
                  stack
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-cream/70"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <dl className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-cream/45">cliente</dt>
                    <dd className="text-right text-cream/80">
                      {project.client}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-cream/45">ano</dt>
                    <dd className="text-cream/80">{project.year}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-cream/45">categoria</dt>
                    <dd className="text-cream/80">
                      {CATEGORY_LABELS[project.category]}
                    </dd>
                  </div>
                </dl>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary mt-6 w-full"
                  >
                    ver projeto online
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6">
                <h2 className="font-display text-lg font-semibold text-cream">
                  quer um assim?
                </h2>
                <p className="mt-2 text-sm/6 text-cream/60">
                  a gente cria uma solução sob medida pro seu negócio — do
                  briefing ao ar.
                </p>
                <Link to="/#contato" className="btn-primary mt-4 w-full">
                  Fale com a gente
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </article>
  );
}
