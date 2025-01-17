"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FiMenu, FiX } from "react-icons/fi"; // Importing menu and close icons

const Header = () => {
  const Links = [
    { name: "home", path: "home" },
    { name: "services", path: "services" },
    { name: "resume", path: "resume" },
    { name: "work", path: "work" },
    { name: "contact", path: "contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let currentSection = "home";

      Links.forEach(({ path }) => {
        const section = document.getElementById(path);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          currentSection = path;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md text-white py-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center gap-8">
        {/* Logo */}
        <h1 className="text-2xl xl:text-4xl font-semibold">
          &lt;
          <span className="text-[#00ff99]">zain</span>
          /&gt;
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {Links.map((link, index) => (
            <a
              key={index}
              href={`#${link.path}`}
              className={`capitalize font-medium transition-all duration-300 hover:text-[#00ff99] ${
                activeSection === link.path
                  ? "text-[#00ff99] border-b-2 border-[#00ff99]"
                  : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Hire Me Button */}
          <Button className="px-6 py-3 text-sm xl:text-base hidden lg:flex">
            Hire me
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-md bg-opacity-90 flex flex-col items-center justify-center space-y-2 lg:hidden z-40 pt-48">
          {Links.map((link, index) => (
            <a
              key={index}
              href={`#${link.path}`}
              className={`capitalize text-2xl font-medium transition-all duration-300 hover:text-[#00ff99] ${
                activeSection === link.path
                  ? "text-[#00ff99] border-b-2 border-[#00ff99]"
                  : "text-white"
              }`}
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {link.name}
            </a>
          ))}

          <Button className="px-6 py-3 text-lg">Hire me</Button>
        </div>
      )}
    </nav>
  );
};

export default Header;
