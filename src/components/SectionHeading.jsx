/**
 * SectionHeading
 * Renders the "01 / About" style eyebrow + title pattern shared by every
 * section. `title` accepts an array of { text, accent } segments so the
 * cyan-highlighted word can be data-driven instead of hardcoded per section.
 */
export default function SectionHeading({ sectionNum, title }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs md:text-xl tracking-wider text-slate-dim">
        {sectionNum}
      </p>
      <h2 className="mt-2 font-mono text-3xl font-semibold text-paper">
        {title.map((segment, i) => (
          <span key={i} className={segment.accent ? "text-green-400" : ""}>
            {segment.text}
          </span>
        ))}
      </h2>
    </div>
  );
}
