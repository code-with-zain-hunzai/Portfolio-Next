"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FiMenu, FiX } from "react-icons/fi";

const Links = [
  { name: "home", path: "home" },
  { name: "services", path: "services" },
  { name: "resume", path: "resume" },
  { name: "work", path: "work" },
  { name: "contact", path: "contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleSmoothScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md text-white py-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center gap-8">
        <h1 className="text-2xl xl:text-4xl font-semibold">
          &lt;
          <span className="text-[#00ff99]">zain</span>
          /&gt;
        </h1>
        <div className="hidden lg:flex items-center space-x-10">
          {Links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleSmoothScroll(link.path)}
              className={`capitalize font-medium transition-all duration-300 hover:text-[#00ff99] ${
                activeSection === link.path
                  ? "text-[#00ff99] border-b-2 border-[#00ff99]"
                  : "text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
          <Button
            className="px-6 py-3 text-sm xl:text-base hidden lg:flex"
            onClick={() => handleSmoothScroll("contact")}
          >
            Hire me
          </Button>
        </div>
        <div className="lg:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed bg-[#1c1c22] w-full backdrop-blur-md bg-opacity-80 flex flex-col items-center justify-center space-y-2 lg:hidden z-40 mt-4 py-4">
          {Links.map((link, index) => (
            <button
              key={index}
              onClick={() => {
                handleSmoothScroll(link.path);
                setMenuOpen(false);
              }}
              className={`capitalize text-xl font-medium transition-all duration-300 hover:text-[#00ff99] ${
                activeSection === link.path
                  ? "text-[#00ff99] border-b-2 border-[#00ff99]"
                  : "text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
          <Button
            className="px-6 py-3 text-lg hidden lg:flex"
            onClick={() => {
              handleSmoothScroll("contact");
              setMenuOpen(false);
            }}
          >
            Hire me
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Header;
