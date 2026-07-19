import { hero, schema } from "../data/content.js";
import BlueprintFrame from "./BlueprintFrame.jsx";
import SchemaDiagram from "./SchemaDiagram.jsx";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[800px] items-center px-8 py-[88px]"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 flex items-center gap-2.5 font-mono text-sm uppercase tracking-widest text-yellow-200/50 md:text-base">
            <span className="text-slate-dim">//</span>
            {hero.eyebrow}
          </p>

          <h1 className="mb-6 max-w-4xl font-mono text-2xl font-bold uppercase md:text-3xl md:text-[40px]">
            {hero.headline.map((segment, i) => (
              <span key={i} className={segment.accent ? "text-green-400" : ""}>
                {segment.text}
              </span>
            ))}
          </h1>

          <p className="mb-8 max-w-4xl font-mono text-lg text-slate">
            {hero.sub}
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 bg-green-500/50 px-6 py-3.5 font-mono text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-cyanAccent/80 md:text-base"
            >
              {hero.primaryCta}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/NAYEM ISLAM RESUME.pdf"
              download
              className="border border-green-500 px-6 py-3.5 font-mono text-sm text-green-500 transition-colors hover:border-amber hover:text-amber md:text-base"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <BlueprintFrame className="min-h-[360px] bg-panel2 p-[26px]">
          <span className="absolute left-4 top-3.5 font-mono text-[11px] uppercase tracking-wider text-amber">
            {schema.tag}
          </span>
          <span className="absolute right-4 top-3.5 font-mono text-[11px] uppercase tracking-wider text-slate-dim">
            {schema.rev}
          </span>
          <SchemaDiagram />
        </BlueprintFrame>
      </div>
    </section>
  );
}
