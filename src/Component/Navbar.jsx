import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        {/* logo */}
        <div>
          <h2 className="text-3xl font-bold uppercase">Krishno Roy</h2>
        </div>

        {/* desktop menu */}
        <div className="hidden md:block">
          <ul className="flex gap-6 font-semibold text-xl">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Courses</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        {/* login buttons + hamburger */}
        <div className="hidden md:flex gap-4 items-center">
          <button className="text-xl font-semibold text-[#063B29]">
            Log in
          </button>
          <button className="bg-[#063B29] text-white font-semibold text-2xl py-3 px-6 rounded-full">
            Join Now
          </button>
        </div>

        {/* hamburger icon on mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <VscThreeBars className="text-3xl text-[#063B29]" />
          </button>
        </div>
      </div>

      {/* mobile menu drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold uppercase">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <IoMdClose className="text-2xl" />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-6 text-lg font-medium">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Courses</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li className="pt-4 border-t">
            <button className="w-full text-left text-[#063B29]">Log in</button>
          </li>
          <li>
            <button className="w-full bg-[#063B29] text-white py-3 rounded-full">
              Join Now
            </button>
          </li>
        </ul>
      </div>

      {/* background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
