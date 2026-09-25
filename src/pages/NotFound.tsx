import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  useEffect(() => {
    document.title = "página não encontrada — zin.k";
    return () => {
      document.title = "zin.k — sites e soluções digitais sob medida";
    };
  }, []);

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-5 py-32 text-center">
      <p className="font-display text-sm font-medium text-accent-text">
        erro 404
      </p>
      <h1 className="mt-3 font-display text-5xl font-bold text-cream sm:text-6xl">
        essa página não existe<span className="text-accent">.</span>
      </h1>
      <p className="mt-4 max-w-md text-base/7 text-cream/55">
        o link pode estar quebrado ou a página saiu do ar. mas a home tá a um
        clique daqui.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <ArrowLeft size={16} aria-hidden="true" />
        voltar pra home
      </Link>
    </section>
  );
}
