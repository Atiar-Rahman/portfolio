import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa6";
import Animation from "./Animation";

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-base-100 px-6 py-16 md:px-12 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,oklch(from_var(--color-primary)_l_c_h_/_0.16),transparent_45%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-5 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Available for opportunities</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-base-content sm:text-5xl lg:text-6xl">
            Building dependable web experiences from idea to launch.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-base-content/70">
            I’m <span className="font-semibold text-base-content">Md. Atiar Rahman</span>, a CSE student and full-stack developer focused on React interfaces, Django and Express APIs, and practical database-driven applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary rounded-xl px-6">View live projects <FaArrowRight /></a>
            <a href="mailto:atiar1709@gmail.com" className="btn btn-outline rounded-xl px-6">Let’s talk</a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-base-content/60">
            <div><strong className="block text-2xl text-base-content">React</strong>Front-end development</div>
            <div className="h-10 w-px bg-base-300" />
            <div><strong className="block text-2xl text-base-content">Django</strong>REST API development</div>
            <div className="h-10 w-px bg-base-300" />
            <div className="flex gap-3 text-xl">
              <a href="https://www.linkedin.com/in/md-atiar-rahman-a90109300/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="transition hover:text-primary"><FaLinkedin /></a>
              <a href="https://github.com/Atiar-Rahman" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="transition hover:text-primary"><FaGithub /></a>
            </div>
          </div>
        </motion.div>

        <motion.div className="relative mx-auto w-full max-w-md" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.12 }}>
          <div className="rounded-3xl border border-primary/15 bg-primary/5 p-4 shadow-2xl shadow-primary/10">
            <Animation />
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-xl border border-base-300 bg-base-100 px-4 py-3 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Core focus</p>
            <p className="mt-1 font-bold text-base-content">Full-stack web development</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
