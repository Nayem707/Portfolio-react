import { useState } from "react";
import { nav } from "../data/content.js";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-gridStrong bg-ink/85 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-[18px] md:px-0">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-base font-semibold text-paper"
        >
          <span className="text-green-400">[</span>
          {nav.logo}
          <span className="text-green-400">]</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="nav-links"
          className="border border-gridStrong px-3 py-2 font-mono text-xs text-paper sm:hidden"
        >
          MENU
        </button>

        <ul
          id="nav-links"
          className={`${
            open ? "max-h-80 py-2" : "max-h-0"
          } fixed left-0 right-0 top-[60px] flex flex-col items-start gap-0 overflow-hidden border-b border-gridStrong bg-panel2 transition-[max-height] duration-300 ease-in-out sm:static sm:max-h-none sm:flex-row sm:items-center sm:gap-8 sm:overflow-visible sm:border-none sm:bg-transparent sm:py-0`}
        >
          {nav.links.map((link) => (
            <li key={link.href} className="w-full sm:w-auto">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="group relative block w-full px-6 py-3.5 font-mono text-sm tracking-wide text-slate transition-colors hover:text-cyanAccent sm:w-auto sm:px-0 sm:py-0"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 hidden h-px w-0 bg-cyanAccent transition-all duration-200 group-hover:w-full sm:block" />
              </a>
            </li>
          ))}
          <li className="w-full px-6 py-2.5 sm:w-auto sm:px-0 sm:py-0">
            <a
              href={nav.resumeHref}
              download
              className="block border border-green-400 px-4 py-2.5 text-center font-mono text-sm text-green-400 transition-colors hover:bg-green-400 hover:text-ink"
            >
              Get Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
