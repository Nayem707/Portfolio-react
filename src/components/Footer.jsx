import { footer } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="border-t border-gridStrong px-8 bg-black/50 backdrop-blur-xs py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 font-mono text-[11.5px] text-slate-dim">
        <span>{footer.left}</span>
        <span>{footer.right}</span>
      </div>
    </footer>
  );
}
