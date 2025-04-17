import { useState } from "react";
import DarkToggle from "./DarkToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-teal-600">Maximilian</a>
        <div className="hidden md:block">
          <DarkToggle />
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-2xl">☰</span>
        </button>
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-100 font-medium">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-teal-600">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-white dark:bg-gray-900">
          <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-100 font-medium">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
