import { useState} from "react";
import { NavLink } from "react-router-dom"; // ✅ correct import

const Navbar = () => {
  type Theme = "light" | "dark"; // add more themes if you want

  const [theme, setTheme] = useState<Theme>("light");
  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left / Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-red-400 text-white rounded-md px-2" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "bg-red-400 text-white rounded-md px-2" : ""
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-me"
                className={({ isActive }) =>
                  isActive ? "bg-red-400 text-white rounded-md px-2" : ""
                }
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive ? "bg-red-400 text-white rounded-md px-2" : ""
                }
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skill"
                className={({ isActive }) =>
                  isActive ? "bg-red-400 text-white rounded-md px-2" : ""
                }
              >
                Skill
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "bg-red-400 text-white rounded-md px-2" : ""
                }
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
        <h1 className="text-2xl font-bold">Md. Atiar Rahman</h1>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-red-400 text-white rounded-md px-3" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "bg-red-400 text-white rounded-md px-3" : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-me"
              className={({ isActive }) =>
                isActive ? "bg-red-400 text-white rounded-md px-2" : ""
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                isActive ? "bg-red-400 text-white rounded-md px-2" : ""
              }
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skill"
              className={({ isActive }) =>
                isActive ? "bg-red-400 text-white rounded-md px-2" : ""
              }
            >
              Skill
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "bg-red-400 text-white rounded-md px-2" : ""
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right / End */}
      <div className="navbar-end">
        <button
          onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-2 rounded bg-gray-600 text-white cursor-pointer"
        >
          Toggle Theme (Current: {theme})
        </button>
      </div>
    </div>
  );
};

export default Navbar;
