import { useState } from "react";
import { NavLink } from "react-router-dom";

// Icons
import { FaHome, FaUser, FaGraduationCap, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

type Theme = "light" | "dark";

const menuItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About Me", path: "/about-me", icon: <FaUser /> },
  { name: "Education", path: "/education", icon: <FaGraduationCap /> },
  { name: "Skill", path: "/skill", icon: <FaTools /> },
  { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
];

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const activeClass =
    "flex items-center gap-2 bg-red-400 text-white rounded-md px-3 py-1";

  const normalClass =
    "flex items-center gap-2 px-3 py-1 hover:text-primary";

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <h1 className="text-xl md:text-2xl font-bold ml-2">
          Md. Atiar Rahman
        </h1>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        <button
          onClick={changeTheme}
          className="flex items-center gap-2 px-4 py-2 rounded bg-gray-600 text-white"
        >
          <MdDarkMode />
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
