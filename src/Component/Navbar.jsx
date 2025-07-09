import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white ${
        isScrolled ? "shadow-md" : ""
      } transition-shadow duration-300 bg-gray-100`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 border-b-2 border-gray-300 px-4">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className="h-16 sm:h-20" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-bold items-center">
          <ul className="flex gap-6">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-purple-600"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-purple-600"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("service")}
                className="hover:text-purple-600"
              >
                Service
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("blog")}
                className="hover:text-purple-600"
              >
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-purple-600"
              >
                Contact
              </button>
            </li>
          </ul>
          <button className="py-2 px-5 bg-[#5C30FD] text-white rounded hover:bg-purple-700">
            Get a Quote
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-2xl text-black cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200 z-10">
          <ul className="flex flex-col items-center gap-4 py-6 font-bold">
            <li>
              <button onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("service")}>
                Service
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("blog")}>Blog</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </li>
            <button className="py-2 px-5 bg-[#5C30FD] text-white rounded hover:bg-purple-700 mt-4">
              Get a Quote
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
