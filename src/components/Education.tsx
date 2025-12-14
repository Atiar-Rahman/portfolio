import { FaGraduationCap, FaRegCheckCircle } from "react-icons/fa";
import DownloadButton from "./DownloadButton";
import pdf from "../../public/certificate.pdf";

const Education = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-3">
            My <span className="text-blue-500">Education</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Academic background and continuous learning journey that built my foundation
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Bachelor Degree */}
          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="text-4xl bg-blue-600 text-white p-4 rounded-2xl mr-4">
                <FaGraduationCap />
              </div>
              <div>
                <h2 className="text-xl font-bold">Bachelor of Science</h2>
                <p className="text-gray-500">Computer Science and Engineering</p>
              </div>
            </div>
            <p className="text-gray-600 mb-2">
              Green University of Bangladesh, Dhaka, Bangladesh
            </p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500">2022 - 2026</span>
              <span className="bg-blue-400 text-white font-semibold px-3 py-1 rounded-full">
                CGPA: 3.30/4.00
              </span>
            </div>
            <p className="text-gray-700">
              Focused on software engineering, data structures, algorithms, and web development with hands-on projects.
            </p>
          </div>

          {/* Certification */}
          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="text-4xl bg-blue-600 text-white p-4 rounded-2xl mr-4">
                <FaGraduationCap />
              </div>
              <div>
                <h2 className="text-xl font-bold">Fundamentals of Programming</h2>
                <p className="text-gray-500 flex items-center gap-2">
                  Phitron (Programming Hero)
                  <a
                    href="https://phitron.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    See Details
                  </a>
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500">2024 - 2025</span>
              <DownloadButton pdf={pdf} />
            </div>
            <p className="text-gray-700">
              Focused on Data Structures & Algorithms, Python, MySQL, Django, and Django REST Framework.
            </p>
          </div>
        </div>

        {/* Key Coursework */}
        <div className="mt-12 border rounded-xl p-6 shadow hover:shadow-lg transition-all">
          <h2 className="text-2xl font-bold mb-6">Key Coursework</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {[
              "Structured Programming",
              "Data Structures & Algorithms",
              "Software Engineering",
              "Database Management System",
              "Operating System",
              "Computer Networks",
              "Object Oriented Programming",
              "Machine Learning and Data Mining (Running)",
            ].map((course, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-700">
                <FaRegCheckCircle className="text-blue-500 flex-shrink-0" />
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
