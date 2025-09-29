import { FaReact, FaDatabase, FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import {motion} from 'motion/react'
import { FaGithub } from "react-icons/fa6";
const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-base-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Skills</h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* React */}
          <motion.div whileHover={{scale:1.5}} className="p-6 bg-base-100 shadow-lg rounded-xl">
            <FaReact className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">React</h3>
            <div className="w-full bg-gray-200 h-3 rounded-full mt-4">
              <div className="bg-blue-500 h-3 rounded-full w-[75%]"></div>
            </div>
            {/* <p className="mt-2 text-sm">75%</p> */}
          </motion.div>

          {/* Database */}
          <motion.div whileHover={{scale:1.5}} className="p-6 bg-base-100 shadow-lg rounded-xl">
            <FaDatabase className="text-purple-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Database</h3>
            <div className="w-full bg-gray-200 h-3 rounded-full mt-4">
              <div className="bg-purple-500 h-3 rounded-full w-[50%]"></div>
            </div>
            {/* <p className="mt-2 text-sm">50%</p> */}
          </motion.div>

          {/* Python */}
          <motion.div whileHover={{scale:1.5}} className="p-6 bg-base-100 shadow-lg rounded-xl">
            <FaPython className="text-yellow-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Python</h3>
            <div className="w-full bg-gray-200 h-3 rounded-full mt-4">
              <div className="bg-yellow-500 h-3 rounded-full w-[60%]"></div>
            </div>
            {/* <p className="mt-2 text-sm">60%</p> */}
          </motion.div>

          {/* Django */}
          <motion.div whileHover={{scale:1.5}} className="p-6 bg-base-100 shadow-lg rounded-xl">
            <SiDjango className="text-green-700 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Django</h3>
            <div className="w-full bg-gray-200 h-3 rounded-full mt-4">
              <div className="bg-green-700 h-3 rounded-full w-[55%]"></div>
            </div>
            {/* <p className="mt-2 text-sm">55%</p> */}
          </motion.div>
        
        {/* Github */}
          <motion.div whileHover={{scale:1.5}} className="p-6 bg-base-100 shadow-lg rounded-xl">
            <FaGithub className="text-green-700 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Github</h3>
            <div className="w-full bg-gray-200 h-3 rounded-full mt-4">
              <div className="bg-green-700 h-3 rounded-full w-[60%]"></div>
            </div>
            {/* <p className="mt-2 text-sm">60%</p> */}
          </motion.div>
        </div>

        {/* Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <motion.span whileHover={{scale:1.5}} className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">
            HTML
          </motion.span>
          <motion.span whileHover={{scale:1.5}} className="px-4 py-2 bg-green-100 text-green-600 rounded-full">
            CSS
          </motion.span>
          <motion.span whileHover={{scale:1.5}} className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full">
            JavaScript
          </motion.span>
          <motion.span whileHover={{scale:1.5}} className="px-4 py-2 bg-red-100 text-red-600 rounded-full">
            MongoDB
          </motion.span>
          <motion.span whileHover={{scale:1.5}} className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full">
            Python
          </motion.span>
          <motion.span whileHover={{scale:1.5}} className="px-4 py-2 bg-green-100 text-green-700 rounded-full">
            Django
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
