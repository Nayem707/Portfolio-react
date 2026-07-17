import { about } from "../data/content.js";
import BlueprintFrame from "./BlueprintFrame.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 px-8 pb-[100px]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading sectionNum={about.sectionNum} title={about.title} />

        <BlueprintFrame className="p-10 bg-slate-950/40 backdrop-blur-xs">
          <div className="mb-8 flex flex-wrap lg:gap-20 md:gap-10 gap-8 border-b border-dashed border-gridStrong pb-5">
            {about.meta.map((item) => (
              <div key={item.label} className=" text-slate-dim">
                <strong className="mb-1 block text-xs md:text-sm uppercase tracking-wider text-green-400">
                  {item.label}
                </strong>
                {item.value}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <img
              src="GG-nayem.png"
              alt="Nayem Islam"
              className="h-80 w-64 rounded-lg object-cover"
            />

            <div className="space-y-5">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-sm text-slate-dim md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </BlueprintFrame>
      </div>
    </section>
  );
}
