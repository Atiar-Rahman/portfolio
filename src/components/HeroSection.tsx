import { Link } from "react-router";
import avator from '../../public/fotor-3d-avatar.webp'
import { FaGithub, FaLinkedin } from "react-icons/fa6";
const HeroSection = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 my-2 md:my-10">
        <div className="w-3/4 mx-auto">
          <h1 className="uppercase text-6xl mb-4">
            hi, i am <br /> Md. Atiar Rahman
          </h1>
          <p className="text-lg md:text-xl">
            A passionate Web Developer specializing in React and TypeScript and
            Python Rest-Api.
          </p>
          <div className="mt-5 flex items-center gap-5">
            <Link to="contact">
              <button className="uppercase rounded-lg btn btn-outline">
                Contact Me
              </button>
            </Link>
            <a
              href="https://www.linkedin.com/in/md-atiar-rahman-a90109300/"
              className="btn btn-outline rounded-full text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Atiar-Rahman"
              className="btn btn-outline rounded-full text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div>
          <img src={avator} className="w-1/2 mx-auto" alt="" />
        </div>
      </div>
    );
};

export default HeroSection;