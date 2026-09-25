import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // parallax sutil: os blobs de fundo se movem mais devagar/rápido que o scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  // luz sutil que segue o cursor (só desktop; ignorado com prefers-reduced-motion)
  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--mx", `${x}%`);
    event.currentTarget.style.setProperty("--my", `${y}%`);
  }

  return (
    <section
      ref={sectionRef}
      id="inicio"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          style={reduce ? undefined : { y: blobY1 }}
          className="absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[140px]"
        />
        <motion.div
          style={reduce ? undefined : { y: blobY2 }}
          className="absolute bottom-[-25%] left-[-15%] h-[460px] w-[460px] rounded-full bg-accent/10 blur-[160px]"
        />
        <motion.div
          style={reduce ? undefined : { opacity: gridOpacity }}
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
        />
        {!reduce && (
          <div
            className="absolute inset-0 hidden opacity-0 transition-opacity duration-500 md:block md:opacity-100"
            style={{
              background:
                "radial-gradient(560px circle at var(--mx, 50%) var(--my, 30%), rgba(139,92,246,0.14), transparent 45%)",
            }}
          />
        )}
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-wide text-cream/70"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          aceitando novos projetos
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 font-display text-[clamp(3.5rem,11vw,7.5rem)] font-bold leading-[0.95] tracking-tight text-cream"
        >
          zin<span className="text-accent">.</span>k
          <span className="mt-5 block max-w-3xl font-display text-xl font-medium leading-snug text-cream/75 sm:text-2xl">
            sites e soluções digitais sob medida para empresas que levam a
            sério presença digital.
          </span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-xl text-base/7 text-cream/55"
        >
          a zin.k desenha, constrói e mantém sites que carregam rápido,
          posicionam sua marca e viram negócio. sem template, sem enrolação —
          só resultado.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link to="/#contato" className="btn-primary">
            Fale com a gente
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/#portfolio" className="btn-secondary">
            Ver projetos
            <ArrowDown size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
