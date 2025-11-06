import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import hotel from '../../public/hotel.jpeg'
import api from "../../public/APIs.png";
import cancer from "../../public/cancer.png";
import events from "../../public/events.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "StayBangla Hotel Management System",
      desc: "A full-stack hotel management platform featuring secure user authentication, responsive UI, and an integrated REST API backend.",
      tech: ["React", "Django REST API", "MySQL"],
      img: hotel,
      link: "https://stay-bangla-mk4p.vercel.app/",
      link1: "https://github.com/Atiar-Rahman/stay_bangla_client",
    },
    {
      title: "StayBangla Backend API",
      desc: "Backend service for hotel management system with CRUD operations, authentication, and Swagger API documentation.",
      tech: ["Django REST Framework", "MySQL"],
      img: api,
      link: "https://hotel-management-blue-seven.vercel.app/swagger/",
      link1: "https://github.com/Atiar-Rahman/hotel_management",
    },
    {
      title: "Symptom-Based Multi-Cancer Detection Tool",
      desc: "A Django-based ML-powered web app that predicts the risk of three cancer types (Liver, Lung, Breast) based on patient symptoms.",
      tech: ["Django (MVT)", "Machine Learning", "MySQL"],
      img: cancer,
      link: "https://symtom-based-cancer-detection.onrender.com/",
      link1: "https://github.com/Atiar-Rahman/Symtom_based_Cancer_detection",
    },
    {
      title: "Events Management System",
      desc: "A Django application for event management, featuring role-based dashboards and participant registration for specific events.",
      tech: ["Django (MVT)", "MySQL"],
      img: events,
      link: "https://events-management-system-uoyt.onrender.com/",
      link1: "https://github.com/Atiar-Rahman/events",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-base-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary font-semibold hover:underline"
                  >
                    <FaExternalLinkAlt className="text-sm" /> Live Demo
                  </a>
                  <a
                    href={project.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 font-semibold hover:underline"
                  >
                    <FaGithub className="text-lg" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
