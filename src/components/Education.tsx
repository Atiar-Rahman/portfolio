import { FaGraduationCap } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
const Education = () => {
  return (
    <div className="my-5">
      <div className="w-1/2 mx-auto text-center">
        <h1 className="text-4xl">
          My <span className="text-blue-500">Education</span>
        </h1>
        <p className="text-gray-500">
          Academic background and continuous learning journey that built my
          foundation
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-3">
        <div className="border-1 p-4">
          <div className="flex mb-3">
            <div className="text-4xl bg-blue-600 p-4 rounded-2xl mr-2">
              <FaGraduationCap />
            </div>
            <div>
              <h1 className="text-xl font-bold">Bachelor of science</h1>
              <p className="text-base-400">Computer Science and Engineering</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl text-base-400">
              Green University of Bangladesh, Dhaka Bangladesh
            </h1>
            <div className="flex justify-between items-center">
              <p>2022 - 2026</p>
              <p className="bg-blue-400 text-white font-bold p-2 w-40 rounded-2xl">
                CGPA: 3.30/4.00
              </p>
            </div>
            <p className="text-base-content">
              Focused on software engineering, data structures, algorithms, and
              web development with hands-on projects.
            </p>
          </div>
        </div>
        <div className="border-1 p-4">
          <h1 className="text-xl font-bold mb-3">Key Coursework</h1>
          <ul>
            <li className="mb-2 flex items-center">
              <FaRegCheckCircle className="mr-3 bg-blue-400 rounded-full" />
              Data Structures & Algorithm
            </li>
            <li className="mb-2 flex items-center">
              <FaRegCheckCircle className="mr-3 bg-blue-400 rounded-full" />
              Software Engineering
            </li>
            <li className="mb-2 flex items-center">
              <FaRegCheckCircle className="mr-3 bg-blue-400 rounded-full" />
              Database Management System
            </li>
            <li className="mb-2 flex items-center">
              <FaRegCheckCircle className="mr-3 bg-blue-400 rounded-full" />
              Operating System
            </li>
            <li className="mb-2 flex items-center">
              <FaRegCheckCircle className="mr-3 bg-blue-400 rounded-full" />
              Computer Networks
            </li>
            <li className="mb-2 flex items-center">
              <FaRegCheckCircle className="mr-3 bg-blue-400 rounded-full" />
              Object Oriented Programming
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
