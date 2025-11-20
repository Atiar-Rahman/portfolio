import { motion } from "framer-motion";
import avatar from "../../public/atiar.jpg";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-base-100 text-base-900 dark:text-black transition-colors duration-300"
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
            className="w-2/3 md:w-3/4 rounded-full shadow-2xl border-4 border-primary/10 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="md:w-2/3 space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h2 className="text-4xl font-extrabold mb-2 text-primary">
            About Me
          </h2>

          {/* Intro Paragraph */}
          <p className="text-lg leading-relaxed text-base-400">
            Hello! I'm <span className="font-semibold">Md. Atiar Rahman</span>,
            a passionate Web Developer who loves crafting dynamic, responsive,
            and modern web applications. I specialize in{" "}
            <span className="text-primary font-semibold">
              React, TypeScript, and Python REST API
            </span>
            . My focus is on writing clean, efficient code and building
            user-friendly digital experiences.
          </p>
          <h1 className="text-2xl font-semibold mb-3 text-white">
            Education:{" "}
          </h1>
          <p>
            I am a student of Green University of bangladesh. Departments of
            Computer science and Engineering. I am also successfully complete
            Porgramming hero course.
          </p>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-base-400">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  name: "HTML5",
                  color:
                    "bg-cyan-200 text-cyan-900 dark:bg-cyan-800 dark:text-cyan-100",
                },
                {
                  name: "React",
                  color:
                    "bg-blue-200 text-blue-900 dark:bg-blue-800 dark:text-blue-100",
                },
                {
                  name: "JavaScripts(ES-6)",
                  color:
                    "bg-blue-200 text-blue-900 dark:bg-blue-800 dark:text-blue-100",
                },
                {
                  name: "TypeScript",
                  color:
                    "bg-sky-200 text-sky-900 dark:bg-sky-800 dark:text-sky-100",
                },
                {
                  name: "Python",
                  color:
                    "bg-green-200 text-green-900 dark:bg-green-800 dark:text-green-100",
                },
                {
                  name: "Django REST Framework",
                  color:
                    "bg-emerald-200 text-emerald-900 dark:bg-emerald-800 dark:text-emerald-100",
                },
                {
                  name: "CSS3",
                  color:
                    "bg-cyan-200 text-cyan-900 dark:bg-cyan-800 dark:text-cyan-100",
                },
                {
                  name: "Tailwind CSS",
                  color:
                    "bg-cyan-200 text-cyan-900 dark:bg-cyan-800 dark:text-cyan-100",
                },
                {
                  name: "Git & GitHub",
                  color:
                    "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-200",
                },
                {
                  name: "Daysui and Bootstrap",
                  color:
                    "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-200",
                },
                {
                  name: "OOP",
                  color:
                    "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-200",
                },
                {
                  name: "DataStructure and Algorithm",
                  color:
                    "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-200",
                },
              ].map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  className={`px-3 py-1 rounded-full font-medium ${skill.color} shadow-sm cursor-default transition-transform duration-300`}
                >
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
