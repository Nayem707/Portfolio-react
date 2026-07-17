import { contact } from "../data/content.js";
import BlueprintFrame from "./BlueprintFrame.jsx";

export default function Contact() {
  return (
    <section id="contact" className="mb-20">
      <div className="mx-auto max-w-7xl bg-black/20">
        <BlueprintFrame className="relative px-6 py-14 text-center sm:px-12">
          <span className="absolute right-7 top-6 hidden -rotate-12 border border-amber px-2.5 py-1 font-mono text-xs md:text-base tracking-widest text-amber opacity-85 sm:inline-block">
            {contact.stamp}
          </span>
          <span className="mb-4 inline-block border border-amber px-2.5 py-1 font-mono text-[10px] tracking-widest text-amber opacity-85 sm:hidden">
            {contact.stamp}
          </span>

          <h2 className="mb-5 font-mono text-[28px] text-paper sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-mono md:text-base text-sm text-slate">
            {contact.body}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener" : undefined}
                className="border border-gridStrong px-5 py-3 font-mono text-sm md:text-base text-paper transition-colors hover:border-cyanAccent hover:text-cyanAccent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </BlueprintFrame>
      </div>
    </section>
  );
}
