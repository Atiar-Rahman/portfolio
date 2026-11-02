import { motion } from "framer-motion";
import type { JSX } from "react";
import { FaCode, FaDatabase, FaGitAlt, FaServer } from "react-icons/fa";
import { SiDjango, SiExpress, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

type SkillGroup = { title: string; icon: JSX.Element; description: string; skills: { name: string; icon: JSX.Element }[] };

const skillGroups: SkillGroup[] = [
  {
    title: "Front-end development", icon: <FaCode />, description: "Responsive interfaces and thoughtful user experiences.",
    skills: [{ name: "React", icon: <SiReact /> }, { name: "Next.js", icon: <SiNextdotjs /> }, { name: "TypeScript", icon: <SiTypescript /> }, { name: "JavaScript", icon: <SiJavascript /> }, { name: "Tailwind CSS", icon: <SiTailwindcss /> }],
  },
  {
    title: "Back-end development", icon: <FaServer />, description: "RESTful services, business logic, and authentication.",
    skills: [{ name: "Python", icon: <SiPython /> }, { name: "Django", icon: <SiDjango /> }, { name: "Django REST Framework", icon: <SiDjango /> }, { name: "Express.js", icon: <SiExpress /> }],
  },
  {
    title: "Data & tools", icon: <FaDatabase />, description: "Structured data, collaboration, and reliable workflows.",
    skills: [{ name: "MySQL", icon: <SiMysql /> }, { name: "MongoDB", icon: <SiMongodb /> }, { name: "Git & GitHub", icon: <FaGitAlt /> }, { name: "REST APIs", icon: <FaServer /> }],
  },
];

const Skills: React.FC = () => (
  <section id="skills" className="bg-base-100 px-6 py-20 md:px-12">
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Technical toolkit</p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-base-content">Skills I use to build web products.</h2>
        <p className="mt-4 leading-relaxed text-base-content/70">A practical, project-driven toolkit for creating polished interfaces, dependable APIs, and data-backed applications.</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article key={group.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-3xl border border-base-300 bg-base-200 p-7 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center gap-4"><div className="rounded-2xl bg-primary/10 p-4 text-2xl text-primary">{group.icon}</div><div><h3 className="text-xl font-bold text-base-content">{group.title}</h3><p className="mt-1 text-sm text-base-content/65">{group.description}</p></div></div>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {group.skills.map((skill) => <div key={skill.name} className="flex min-h-16 items-center gap-3 rounded-2xl border border-base-300 bg-base-100 px-3 py-3 text-sm font-semibold text-base-content"><span className="text-xl text-primary">{skill.icon}</span>{skill.name}</div>)}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
