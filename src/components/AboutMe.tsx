import { motion } from "framer-motion";
import avatar from "../../public/atiar1.jpeg";
import certificate from "../../public/certificate.pdf";
import { FaCode, FaDatabase, FaExternalLinkAlt, FaGraduationCap } from "react-icons/fa";
import { SiDjango, SiReact } from "react-icons/si";

const strengths = [
  { icon: <SiReact />, title: "Modern front ends", description: "Responsive, accessible interfaces with React, TypeScript, Tailwind CSS, and DaisyUI." },
  { icon: <SiDjango />, title: "Reliable back ends", description: "REST APIs, authentication, and business logic with Django, Django REST Framework, and Express." },
  { icon: <FaDatabase />, title: "Data-driven products", description: "Thoughtful database design and practical MySQL integration for real-world applications." },
];

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="bg-base-100 px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-4xl bg-primary/10" />
            <div className="overflow-hidden rounded-[1.7rem] bg-base-200 shadow-2xl">
              <img src={avatar} alt="Md. Atiar Rahman" className="h-auto w-full object-contain object-center" />
            </div>
            <div className="absolute -bottom-5 -right-4 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-xl">
              <p className="flex items-center gap-2 text-sm font-bold text-primary"><FaCode /> Developer profile</p>
              <p className="mt-1 text-sm text-base-content/65">React · Django · REST APIs</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">About me</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-base-content">I turn ideas into useful web products.</h2>
          <p className="mt-6 text-lg leading-relaxed text-base-content/70">
            I’m Md. Atiar Rahman, a Computer Science and Engineering student at Green University of Bangladesh and an aspiring full-stack developer. I enjoy solving practical problems through clean interfaces, dependable APIs, and well-structured data.
          </p>
          <p className="mt-4 leading-relaxed text-base-content/70">
            My current focus is building production-minded applications with React and TypeScript on the front end, and Django REST Framework, Express, and MySQL on the back end. I’m always improving through hands-on projects and continuous learning.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {strengths.map((strength) => <div key={strength.title} className="rounded-2xl border border-base-300 bg-base-200 p-4">
              <div className="text-2xl text-primary">{strength.icon}</div>
              <h3 className="mt-3 font-bold text-base-content">{strength.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-base-content/65">{strength.description}</p>
            </div>)}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"><FaGraduationCap /> CSE · Green University of Bangladesh</span>
            <a href={certificate} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm rounded-full"><FaExternalLinkAlt /> View certificate</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
