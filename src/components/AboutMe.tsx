
import avator  from '../../public/atiar.jpg'
import {motion} from 'motion/react'
const AboutMe = () => {
  return (
    <section id="about" className="py-16 mx-5 bg-base-100">
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Profile Photo */}
        <div className="md:w-1/3 flex-1 ">
          <img
            src={avator}
            alt="Atiar"
            className="w-2/3 rounded-full shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-2/3 flex-1 space-y-6">
          {/* Bio */}
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg text-gray-700">
            Hi, I'm Atiar, a passionate Web Developer specializing in React and
            TypeScript. I love building interactive, responsive, and modern web
            apps.
          </p>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <motion.span whileHover={{scale:1.4}} className="px-3 py-1 bg-blue-200 rounded-full text-blue-800">
                React
              </motion.span>
              <motion.span whileHover={{scale:1.4}} className="px-3 py-1 bg-blue-200 rounded-full text-blue-800">
                TypeScript
              </motion.span>
              <motion.span whileHover={{scale:1.4}} className="px-3 py-1 bg-green-200 rounded-full text-green-800">
                Python
              </motion.span>
              <motion.span whileHover={{scale:1.4}} className="px-3 py-1 bg-gray-200 rounded-full text-yellow-800">
                Django-Rest Framework
              </motion.span>
              <motion.span whileHover={{scale:1.4}} className="px-3 py-1 bg-blue-200 rounded-full text-blue-800">
                Tailwind CSS
              </motion.span>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Timeline</h3>
            <ul className="space-y-2">
              <li>
                <strong>2022:</strong> Started learning js
              </li>
              <li>
                <strong>2023:</strong> Started learning React & TypeScript
              </li>
              <li>
                <strong>2024:</strong> Built personal portfolio website
              </li>
              <li>
                <strong>2025:</strong> Python and Django-Rest-Framework
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
