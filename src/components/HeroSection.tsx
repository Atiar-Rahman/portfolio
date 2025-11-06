import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
// If your image is in /public, no need to import — just use src="/atiar.png"
// Otherwise, keep your import: import avatar from '../../public/atiar.png';

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 my-8 md:my-16 px-6 md:px-12 md:h-[90vh]">
      {/* Text Section */}
      <div className="text-center md:text-left space-y-5">
        <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Hi, I am <br /> <span className="text-primary">Md. Atiar Rahman</span>
        </h1>
        <p className="text-base md:text-xl text-base-600 max-w-lg mx-auto md:mx-0">
          A passionate Web Developer specializing in React, TypeScript, and
          Python REST API.
        </p>

        {/* Buttons and Icons */}
        <div className="flex justify-center md:justify-start items-center gap-4 pt-4">
          <Link to="/contact">
            <button className="uppercase rounded-lg btn btn-outline hover:bg-primary hover:text-white transition">
              Contact Me
            </button>
          </Link>
          <a
            href="https://www.linkedin.com/in/md-atiar-rahman-a90109300/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline rounded-full text-2xl hover:bg-blue-600 hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Atiar-Rahman"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline rounded-full text-2xl hover:bg-gray-800 hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src="/atiar.png"
          alt="Md. Atiar Rahman - Web Developer"
          className="w-full max-w-sm md:max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform"
        />
      </div>
    </section>
  );
};

export default HeroSection;
