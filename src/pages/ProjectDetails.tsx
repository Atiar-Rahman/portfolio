import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import {
    FaExternalLinkAlt,
    FaGithub,
    FaArrowLeft,
    FaTools,
    FaUserTie,
    FaClock,
    FaFolderOpen,
} from "react-icons/fa";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const ProjectDetails: React.FC = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project)
        return <p className="text-center mt-20 text-xl">Project not found ❌</p>;

    return (
        <section className="py-20 px-6 max-w-5xl mx-auto">
            {/* Back */}
            <Link
                to="/projects"
                className="flex items-center gap-2 text-primary mb-8 hover:underline"
            >
                <FaArrowLeft /> Back to Projects
            </Link>

            {/* Image */}
            <motion.img
                src={project.img}
                alt={project.title}
                className="rounded-2xl shadow-xl mb-10 w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            />

            {/* Title */}
            <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
                className="text-4xl font-bold mb-3"
            >
                {project.title}
            </motion.h1>

            <p className="text-gray-600 mb-8">{project.longDesc}</p>

            {/* Meta Info */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="grid sm:grid-cols-2 gap-4 mb-10"
            >
                <div className="flex items-center gap-3">
                    <FaUserTie className="text-primary" />
                    <span>
                        <strong>Role:</strong> {project.role}
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <FaClock className="text-primary" />
                    <span>
                        <strong>Duration:</strong> {project.duration}
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <FaFolderOpen className="text-primary" />
                    <span>
                        <strong>Category:</strong> {project.category}
                    </span>
                </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="mb-10"
            >
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                    <FaTools /> Tech Stack
                </h3>

                <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, i) => (
                        <span
                            key={i}
                            className="px-4 py-1 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-white transition"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Features */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="mb-10"
            >
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>
            </motion.div>

            {/* Challenges */}
            {project.challenges && (
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                    className="mb-10"
                >
                    <h3 className="text-xl font-semibold mb-3">Challenges Faced</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {project.challenges.map((c, i) => (
                            <li key={i}>{c}</li>
                        ))}
                    </ul>
                </motion.div>
            )}

            {/* Future Plans */}
            {project.futurePlans && (
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                    className="mb-12"
                >
                    <h3 className="text-xl font-semibold mb-3">Future Improvements</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {project.futurePlans.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </motion.div>
            )}

            {/* Links */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex gap-6"
            >
                <a
                    href={project.live}
                    target="_blank"
                    className="btn btn-primary flex items-center gap-2"
                >
                    <FaExternalLinkAlt /> Live Demo
                </a>

                <a
                    href={project.github}
                    target="_blank"
                    className="btn btn-outline flex items-center gap-2"
                >
                    <FaGithub /> GitHub
                </a>
            </motion.div>
        </section>
    );
};

export default ProjectDetails;
