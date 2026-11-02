import { FaArrowUpRightFromSquare, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Live projects", href: "#projects" },
];

const Footer: React.FC = () => (
  <footer className="bg-neutral px-6 pt-16 text-neutral-content md:px-12">
    <div className="mx-auto grid max-w-6xl gap-12 pb-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
      <div>
        <p className="text-xl font-extrabold tracking-tight">Md. Atiar Rahman<span className="text-primary">.</span></p>
        <p className="mt-4 max-w-sm leading-relaxed text-neutral-content/70">Full-stack developer focused on creating thoughtful web experiences with React, Next.js, Django, and REST APIs.</p>
        <a href="mailto:atiar1709@gmail.com" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition hover:text-primary-content"><FaEnvelope /> atiar1709@gmail.com</a>
      </div>

      <div>
        <h2 className="font-bold text-neutral-content">Explore</h2>
        <ul className="mt-4 space-y-3 text-sm text-neutral-content/70">
          {navigation.map((link) => <li key={link.href}><a href={link.href} className="transition hover:text-primary">{link.label}</a></li>)}
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-neutral-content">Let’s connect</h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-content/70">Interested in working together or discussing a project? I’d be happy to hear from you.</p>
        <div className="mt-6 flex gap-3">
          <a href="https://github.com/Atiar-Rahman" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="btn btn-square btn-sm border-neutral-content/20 bg-transparent text-neutral-content hover:border-primary hover:bg-primary hover:text-primary-content"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/md-atiar-rahman-a90109300/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="btn btn-square btn-sm border-neutral-content/20 bg-transparent text-neutral-content hover:border-primary hover:bg-primary hover:text-primary-content"><FaLinkedin /></a>
          <a href="mailto:atiar1709@gmail.com" aria-label="Send email" className="btn btn-square btn-sm border-neutral-content/20 bg-transparent text-neutral-content hover:border-primary hover:bg-primary hover:text-primary-content"><FaArrowUpRightFromSquare /></a>
        </div>
      </div>
    </div>
    <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-neutral-content/15 py-5 text-sm text-neutral-content/55 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Md. Atiar Rahman. All rights reserved.</p>
      <p>Designed and built with React.</p>
    </div>
  </footer>
);

export default Footer;
