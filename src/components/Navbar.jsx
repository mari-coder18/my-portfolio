import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navlinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  {name: "Certifications", path: "/certifications"}
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur border-b border-white/10 text-white py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold font-poppins">
          Portfolio<span className="text-yellow-400">.</span>
        </h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 font-inter">
          {navlinks.map((navlink, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-yellow-400 transition duration-300"
            >
              <a href={navlink.path}>{navlink.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 rounded-2xl  backdrop-blur-xl border-t border-white/10 px-6 pb-6 pt-4 hover:text-red-800"
          >
            <ul className="flex flex-col gap-5 font-inter hover:text-green-500">
              {navlinks.map((navlink, index) => (
                <li key={index}
                >
                  <a
                    href={navlink.path}
                    onClick={handleLinkClick}
                    className="block text-lg text-white hover:text-yellow-400 transition duration-300 border-b border-white/5 pb-3"
                  >
                    {navlink.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;