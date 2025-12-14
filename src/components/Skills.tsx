import { motion } from "framer-motion";
import type { JSX } from "react";
import {
  FaReact,
  FaDatabase,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import { SiDjango } from "react-icons/si";

type Skill = {
  name: string;
  icon: JSX.Element;
  color: string;
  percentage: number;
};

const skills: Skill[] = [
  {
    name: "React",
    icon: <FaReact />,
    color: "bg-blue-500",
    percentage: 75,
  },
  {
    name: "Database",
    icon: <FaDatabase />,
    color: "bg-purple-500",
    percentage: 50,
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "bg-yellow-500",
    percentage: 60,
  },
  {
    name: "Django",
    icon: <SiDjango />,
    color: "bg-green-700",
    percentage: 55,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "bg-gray-800",
    percentage: 60,
  },
];

const badges = [
  "HTML",
  "CSS",
  "JavaScript",
  "MongoDB",
  "Python",
  "Django",
  "MySQL",
  "JWT Authentication",
  "Django REST Framework",
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-12"
        >
          My Skills
        </motion.h2>

        {/* Skill Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="p-6 bg-white dark:bg-base-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="text-5xl mx-auto mb-4 text-center text-primary">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1 }}
                  className={`h-3 ${skill.color}`}
                />
              </div>

              <p className="mt-2 text-sm font-medium">
                {skill.percentage}%
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.15 }}
              className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium shadow-sm cursor-default"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
