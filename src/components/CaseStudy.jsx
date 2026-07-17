import BlueprintFrame from "./BlueprintFrame.jsx";
import RichText from "./RichText.jsx";

export default function CaseStudy({ project }) {
  return (
    <BlueprintFrame>
      <div className="flex flex-wrap items-start justify-between gap-6 border-b border-gridStrong p-7">
        <div>
          <h3 className="mb-2 font-mono text-lg md:text-2xl font-semibold text-paper">
            {project.name}
          </h3>
          <p className="max-w-xl font-mono text-sm md:text-base text-slate-dim">
            {project.description}
          </p>
        </div>
        <div className="flex flex-shrink-0 gap-2.5">
          <a
            href={project.liveHref}
            className="border border-gridStrong px-3.5 py-2 font-mono text-xs md:text-base bg-gray-100/5 text-cyanAccent transition-colors hover:border-cyanAccent"
          >
            Live Demo ↗
          </a>
          <a
            href={project.repoHref}
            className="border border-gridStrong px-3.5 py-2 font-mono text-xs md:text-base bg-gray-100/5 text-cyanAccent transition-colors hover:border-cyanAccent"
          >
            GitHub Repo ↗
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 px-7 py-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="border border-green-400/40 bg-black/30 px-2.5 py-1 font-mono text-xs tracking-wide text-green-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-t border-gridStrong p-7 bg-black/5 backdrop-blur-sm md:border-r">
          <h4 className="mb-3 font-mono text-xs md:text-base uppercase tracking-wider text-green-400">
            Overview
          </h4>
          <p className="text-xs md:text-base font-mono text-slate-dim">
            {project.overview}
          </p>
        </div>
        <div className="border-t border-gridStrong p-7 bg-black/5 backdrop-blur-sm">
          <h4 className="mb-3 font-mono text-xs md:text-base uppercase tracking-wider text-green-400">
            The Problem
          </h4>
          <p className="text-xs md:text-base font-mono text-slate-dim">
            {project.problem}
          </p>
        </div>
        <div className="border-t border-gridStrong p-7 bg-black/5 backdrop-blur-sm md:border-r">
          <h4 className="mb-3 font-mono text-xs md:text-base uppercase tracking-wider text-green-400">
            Solution &amp; Architecture
          </h4>
          <p className="text-xs md:text-base font-mono text-slate-dim">
            <RichText segments={project.solution} />
          </p>
        </div>
        <div className="border-t border-gridStrong p-7 bg-black/5 backdrop-blur-sm">
          <h4 className="mb-3 font-mono text-xs md:text-base uppercase tracking-wider text-green-400">
            Key Features
          </h4>
          <ul>
            {project.features.map((feature) => (
              <li
                key={feature}
                className="relative py-1.5 pl-[18px] text-xs md:text-base font-mono text-slate-dim"
              >
                <span className="absolute left-0 text-slate-dim">—</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gridStrong px-7 py-[18px] font-mono text-xs md:text-base text-slate bg-black/50 backdrop-blur-sm">
        <strong className="text-amber">Outcome — </strong>
        {project.outcome}
      </div>
    </BlueprintFrame>
  );
}
