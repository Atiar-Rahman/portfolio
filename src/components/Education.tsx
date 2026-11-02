import { motion } from "framer-motion";
import { FaArrowRight, FaBookOpen, FaCertificate, FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import certificate from "../../public/certificate.pdf";

const coursework = [
  "Structured Programming", "Object-Oriented Programming", "Data Structures & Algorithms", "Software Engineering",
  "Database Management Systems", "Operating Systems", "Computer Networks", "Machine Learning & Data Mining",
];

const Education = () => {
  return (
    <section id="education" className="bg-base-200 px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Education & learning</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-base-content">A strong technical foundation, built through practice.</h2>
          <p className="mt-4 leading-relaxed text-base-content/70">My academic work and focused training support the way I design, build, and improve real-world web applications.</p>
        </div>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-2">
          <div className="absolute left-7 top-12 hidden h-[calc(100%-6rem)] w-px bg-primary/20 lg:block" />
          <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl border border-base-300 bg-base-100 p-7 shadow-sm">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex items-center gap-4"><div className="rounded-2xl bg-primary p-4 text-2xl text-primary-content"><FaGraduationCap /></div><div><p className="font-bold text-base-content">Bachelor of Science</p><p className="text-sm text-base-content/65">Computer Science & Engineering</p></div></div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">2022 — 2026</span>
            </div>
            <p className="font-semibold text-base-content">Green University of Bangladesh</p>
            <p className="mt-1 text-sm text-base-content/65">Dhaka, Bangladesh</p>
            <p className="mt-5 leading-relaxed text-base-content/70">Focused on software engineering, algorithms, databases, and web development, applying concepts through hands-on projects.</p>
            <div className="mt-6 inline-flex rounded-xl bg-base-200 px-4 py-3 text-sm"><span className="text-base-content/65">Current CGPA</span><strong className="ml-3 text-primary">3.32 / 4.00</strong></div>
          </motion.article>

          <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative rounded-3xl border border-base-300 bg-base-100 p-7 shadow-sm">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex items-center gap-4"><div className="rounded-2xl bg-primary/10 p-4 text-2xl text-primary"><FaCertificate /></div><div><p className="font-bold text-base-content">Fundamentals of Programming</p><p className="text-sm text-base-content/65">Phitron · Programming Hero</p></div></div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">2024 — 2025</span>
            </div>
            <p className="leading-relaxed text-base-content/70">Completed focused training in Python, MySQL, Django, Django REST Framework, and data structures and algorithms.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={certificate} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm"><FaCertificate /> View certificate</a>
              <a href="https://phitron.io/" target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">Training provider <FaArrowRight /></a>
            </div>
          </motion.article>
        </div>

        <div className="mt-8 rounded-3xl border border-base-300 bg-base-100 p-7 shadow-sm">
          <div className="flex items-center gap-3"><FaBookOpen className="text-xl text-primary" /><h3 className="text-2xl font-bold text-base-content">Key coursework</h3></div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {coursework.map((course) => <div key={course} className="flex items-center gap-2 rounded-xl bg-base-200 px-3 py-3 text-sm font-medium text-base-content/80"><FaCheckCircle className="shrink-0 text-primary" />{course}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
