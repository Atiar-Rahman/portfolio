import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import hospital from "../../public/hospital.jpeg";
import hotel from "../../public/hotel.jpeg";
import cancer from "../../public/cancer.png";
import events from "../../public/events.jpeg";

type Project = {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  img: string;
  live: string;
  githubfrontend: string;
  githubbackend:string;
};

const projects: Project[] = [
  {
    id: "staybangla",
    title: "StayBangla Hotel Management System",
    desc:
      "A full-stack hotel management platform featuring secure authentication and REST API backend.",
    tech: ["React", "Django REST API", "MySQL"],
    img: hotel,
    live: "https://stay-bangla-mk4p.vercel.app/",
    githubfrontend: "https://github.com/Atiar-Rahman/stay_bangla_client",
    githubbackend: 'https://github.com/Atiar-Rahman/stay_bangla'
  },
  {
    id: "cancer-detection",
    title: "Multi-Cancer Detection Tool",
    desc:
      "ML-powered web app predicting cancer risks based on patient symptoms.",
    tech: ["Django", "Machine Learning", "MySQL"],
    img: cancer,
    live: "https://symptombased-cancer-risk-detection.vercel.app/",
    githubfrontend: "https://github.com/Atiar-Rahman/Symtom_based_Cancer_detection",
    githubbackend: 'https://github.com/Atiar-Rahman/symptombased_backend'
  },
  {
    id: "events-management",
    title: "Events Management System",
    desc:
      "Event registration & management platform with admin dashboards.",
    tech: ["Django", "MySQL"],
    img: events,
    live: "https://events-management-system-uoyt.onrender.com/",
    githubfrontend: "https://github.com/Atiar-Rahman/events",
    githubbackend: ''
  },
  {
    id: "hospital-management",
    title: "Events Management System",
    desc:
      "Event registration & management platform with admin dashboards.",
    tech: ["Django", "MySQL"],
    img: hospital,
    live: "https://hotel-management-blue-seven.vercel.app/swagger/",
    githubfrontend: "",
    githubbackend: 'https://github.com/Atiar-Rahman/hotel_management'
  },
];

/* Animation Variants */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold mb-14 text-primary text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={card}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              {/* Image + Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="btn btn-primary btn-sm"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.githubfrontend}
                    target="_blank"
                    className="btn btn-outline btn-sm text-white border-white"
                  >
                    <FaGithub /> githubfrontend
                  </a>
                  <a
                    href={project.githubbackend}
                    target="_blank"
                    className="btn btn-outline btn-sm text-white border-white"
                  >
                    <FaGithub /> githubbackend
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Details Link */}
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block text-primary font-semibold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
