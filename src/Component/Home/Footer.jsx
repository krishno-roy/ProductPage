import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 px-4 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-sm">
        {/* Logo & Social */}
        <div>
          <h1 className="text-2xl font-bold mb-6">KRISHNO</h1>
          <div className="flex gap-4">
            <a href="#" className="bg-white text-green-900 p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white text-green-900 p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="bg-white text-green-900 p-2 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white text-green-900 p-2 rounded-full">
              <FaYoutube />
            </a>
            <a href="#" className="bg-white text-green-900 p-2 rounded-full">
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h2 className="font-bold text-lg mb-4">Pages</h2>
          <ul className="space-y-2 text-white/80">
            <li>Home Page</li>
            <li>About Us</li>
            <li>Our Courses</li>
            <li>Bootcamp</li>
            <li>Instructors</li>
            <li>News & Blog</li>
            <li>Pricing</li>
            <li>FAQ’s</li>
            <li>Testimonial</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="font-bold text-lg mb-4">Categories</h2>
          <ul className="space-y-2 text-white/80">
            <li>IT & Software</li>
            <li>Digital Marketing</li>
            <li>Product Design</li>
            <li>Graphic Design</li>
            <li>Illustration Design</li>
          </ul>
        </div>

        {/* CMS Pages */}
        <div>
          <h2 className="font-bold text-lg mb-4">CMS Page</h2>
          <ul className="space-y-2 text-white/80">
            <li>Courses Details</li>
            <li>Bootcamp Details</li>
            <li>Instructors Details</li>
            <li>News & Blog Details</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-white/30" />
      <div className="text-center text-sm text-white/70">
        © Copyright 2025 Krishno – All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
