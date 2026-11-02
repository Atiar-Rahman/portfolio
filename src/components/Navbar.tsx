import { useState } from "react";
import { FaBars, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import cv from "../../public/CV___for_atiar_rahman1.pdf";

type Theme = "light" | "dark";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  const changeTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const linkClass = "rounded-lg px-3 py-2 text-sm font-semibold text-base-content/70 transition hover:bg-primary/10 hover:text-primary";

  return (
    <header className="sticky top-0 z-50 border-b border-base-300/80 bg-base-100/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8" aria-label="Main navigation">
        <a href="/" className="text-lg font-extrabold tracking-tight text-base-content sm:text-xl">Md. Atiar Rahman<span className="text-primary">.</span></a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => <a key={item.href} href={item.href} className={linkClass}>{item.label}</a>)}
        </div>

        <div className="flex items-center gap-2">
          <a href={cv} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm hidden rounded-lg sm:inline-flex">Download CV</a>
          <button type="button" onClick={changeTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} className="btn btn-ghost btn-square btn-sm text-lg">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <button type="button" onClick={() => setIsOpen((open) => !open)} aria-label="Toggle navigation menu" aria-expanded={isOpen} className="btn btn-ghost btn-square btn-sm text-lg lg:hidden">
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>

      {isOpen && <div className="border-t border-base-300 bg-base-100 px-5 py-4 lg:hidden">
        <div className="mx-auto flex max-w-6xl flex-col gap-1">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className={linkClass}>{item.label}</a>)}
          <a href={cv} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm mt-3 rounded-lg">Download CV</a>
        </div>
      </div>}
    </header>
  );
};

export default Navbar;
