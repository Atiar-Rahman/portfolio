import { motion } from "framer-motion";
import avatar from "../../public/atiar.jpg";

// Icons
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiPython, SiDjango, SiTailwindcss } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { MdOutlineDataObject } from "react-icons/md";
import type { JSX } from "react";
import pdf from '../../public/certificate.pdf'



type Skill = {
  name: string;
  icon: JSX.Element;
  color: string;
};

const skills: Skill[] = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "bg-orange-200 text-orange-900",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "bg-blue-200 text-blue-900",
  },
  {
    name: "JavaScript (ES6+)",
    icon: <SiJavascript />,
    color: "bg-yellow-200 text-yellow-900",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "bg-cyan-200 text-cyan-900",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "bg-sky-200 text-sky-900",
  },
  {
    name: "Python",
    icon: <SiPython />,
    color: "bg-green-200 text-green-900",
  },
  {
    name: "Django REST Framework",
    icon: <SiDjango />,
    color: "bg-emerald-200 text-emerald-900",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "bg-teal-200 text-teal-900",
  },
  {
    name: "Bootstrap / DaisyUI",
    icon: <BsBootstrap />,
    color: "bg-purple-200 text-purple-900",
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    color: "bg-gray-200 text-gray-900",
  },
  {
    name: "OOP",
    icon: <MdOutlineDataObject />,
    color: "bg-indigo-200 text-indigo-900",
  },
  {
    name: "Data Structure & Algorithm",
    icon: <MdOutlineDataObject />,
    color: "bg-indigo-200 text-indigo-900",
  },
];


const openPDF = () => {
  window.open(pdf, "_blank"); // public folder এর pdf
};
const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-base-100 text-base-content transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <motion.div
          className="md:w-1/3 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={avatar}
            alt="Md. Atiar Rahman"
            className="w-2/3 lg:w-full border-10 bg-green md:w-3/4 rounded-full shadow-2xl border-4 border-primary/10 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="md:w-2/3 space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-primary">About Me</h2>

          <p className="text-lg leading-relaxed">
            Hello! I'm <span className="font-semibold">Md. Atiar Rahman</span>, a
            passionate Web Developer who enjoys building modern, responsive, and
            scalable web applications. I specialize in{" "}
            <span className="text-primary font-semibold">
              React, and Python REST APIs
            </span>
            .
          </p>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Education</h3>
            <p>
              I am a student of{" "}
              <span className="font-semibold">
                Green University of Bangladesh
              </span>
              , Department of Computer Science and Engineering. I have also
              successfully completed the Programming Hero course.See my crediancial.
              <button className="btn btn-sm ml-3 bg-green-100 btn-outline" onClick={openPDF}>View Cirtificate</button>
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.15 }}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full font-medium shadow-sm cursor-default ${skill.color}`}
                >
                  {skill.icon}
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
