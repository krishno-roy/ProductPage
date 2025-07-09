import React from 'react'
import BannerImage from "../../assets/digittal-about-img.png";
import { LuBellDot } from 'react-icons/lu';
import { FaArrowRight } from 'react-icons/fa';
import { IoArrowForwardCircle } from 'react-icons/io5';

const About = () => {
  return (
    <section className="bg-gray-100 py-12" id='about'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 gap-10">
        {/* left Side */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center">
          <img
            src={BannerImage}
            alt="Banner"
            className="relative pl-4 sm:pl-8 max-w-full"
          />
        </div>
        {/* Right Side */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="bg-white text-black font-bold py-2 px-4 rounded-full inline-flex items-center gap-2 mx-auto lg:mx-0">
            <LuBellDot className="text-xl text-yellow-500" />
            About Company
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We Have Experience Team to Lead your Business
          </h1>

          <p className="text-base sm:text-lg font-semibold max-w-lg mx-auto lg:mx-0">
            Sed ut perspiciatis unde omnis iste natus error sit volupta temes
            accusantium doloremque laudantium, totam rem
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-xl font-bold">
              {" "}
              <IoArrowForwardCircle className="text-[#8760FD]" />
              Marketing Strategy & SEO Camping
            </li>
            <li className="flex items-center gap-2 text-xl font-bold">
              <IoArrowForwardCircle className="text-[#8760FD]" /> Best Customers
              Experience
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
            <button className="px-4 py-4 rounded-xl bg-[#8760FD] text-white text-lg sm:text-xl inline-flex items-center gap-2 w-[250px] justify-center">
              Learn More Us
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About