import { project } from "../data/content.js";
import CaseStudy from "./CaseStudy.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-28 px-8 pb-[100px]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading sectionNum={project.sectionNum} title={project.title} />

        <CaseStudy project={project} />

        <p className="mt-6 text-center font-mono text-xs md:text-base text-slate-dim">
          {project.moreNote}
        </p>
      </div>
    </section>
  );
}
