import React, { useState } from "react";
import LogoIcon from "../assets/logo.png";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white">
      {/* Sale Banner */}
      <div className="bg-[#d32f2f] text-center text-xs md:text-sm font-bold py-2">
        RÄUMUNGSVERKAUF ENDET HEUTE - BIS ZU 80% RABATT
      </div>

      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex justify-between items-center py-3 md:hidden">
          {/* Hamburger */}
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Logo */}
          <div>
            <img src={LogoIcon} alt="Logo" className="h-8 mx-auto" />
          </div>

          {/* Icons */}
          <div className="flex gap-3">
            <button>
              <FiSearch size={20} />
            </button>
            <button>
              <FiShoppingBag size={20} />
            </button>
          </div>
        </div>

        {/* Desktop Row */}
        <div className="hidden md:flex justify-center items-center py-4">
          <img src={LogoIcon} alt="Logo" className="h-20" />
        </div>
        <div className="hidden md:block py-2">
          <ul className="flex justify-between text-[18px] font-semibold py-5">
            <li>
              <a href="#" className="hover:text-gray-300">
                Startseite
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Unsere Bestseller
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Oberteile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Schuhe
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Taschen
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Bademode
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Hosen
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Schmuck
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Verfolgen Sie Ihre Bestellung
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-2">
            <ul className="flex flex-col gap-2 font-medium text-sm">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Startseite
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Unsere Bestseller
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Oberteile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Schuhe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Taschen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Bademode
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Hosen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Schmuck
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Verfolgen Sie Ihre Bestellung
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
