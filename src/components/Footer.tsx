import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-200 text-base-content my-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-center md:text-left">

        {/* Brand / About */}
        <div>
          <h3 className="text-xl font-bold mb-2 text-primary">
            Md. Atiar Rahman
          </h3>
          <p className="text-sm leading-relaxed">
            Passionate Web Developer specializing in React, TypeScript,
            and Django REST API. Building clean and scalable web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-primary transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-primary transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a
              href="https://github.com/Atiar-Rahman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/atiar-rahman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="mailto:atiarrahaman@example.com"
              className="hover:text-primary transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300 text-center py-4 text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Md. Atiar Rahman</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
