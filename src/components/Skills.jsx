import { skills } from "../data/content.js";
import BlueprintFrame from "./BlueprintFrame.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  return (
    <section id="stack" className="scroll-mt-28 px-8 pb-[100px]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading sectionNum={skills.sectionNum} title={skills.title} />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.categories.map((category) => (
            <BlueprintFrame
              key={category.label}
              className="p-6 bg-slate-950/40 backdrop-blur-xs"
            >
              <span className="mb-4 block font-mono text-xs md:text-base uppercase tracking-wider text-green-400">
                {category.label}
              </span>
              <ul>
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 border-b border-white/5 py-2.5 font-mono text-xs md:text-base text-[#D6E1EC] last:border-none"
                  >
                    <span className="text-xs md:text-base lg:text-lg text-cyanAccent">
                      ▹
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </BlueprintFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
