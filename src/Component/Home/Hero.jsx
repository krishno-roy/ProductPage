import React from 'react'
import Textimage from "../../assets/face-mans-2.png";
import Arrow from "../../assets/ic_twotone-double-arrow (1).png";
import { FaRegCirclePlay } from 'react-icons/fa6';
import Heroimage from "../../assets/image-5 (1).png";
import LogoImage from "../../assets/65f14adcb89cfcd9e5c863cd_Rectangle-40.png";
import Topimage from "../../assets/photo_54_2024-11-02_09-56-45-1 (1).png";
import Logo1 from "../../assets/Logo/logo-1.png"
import Logo2 from "../../assets/Logo/logo-2.png"
import Logo3 from "../../assets/Logo/logo-3.png"
import Logo4 from "../../assets/Logo/logo-4.png"
import Logo5 from "../../assets/Logo/logo-5.png";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto min-h-screen items-center md:flex">
        {/* text area */}
        <div className="md:w-1/2 px-6">
          <h4 className="bg-[#EAF6B9] inline-block mx-auto  md:inline-block px-4 py-2 text-xl capitalize rounded-full mt-2 mb-3">
            #1 Online Course 2025
          </h4>
          <h1 className="md:text-6xl text-5xl font-bold leading-20">
            Find suitable courses from the
          </h1>
          <h1 className="flex  items-center md:text-6xl text-5xl font-bold py-3">
            best{" "}
            <button className="flex border-2 border-black py-2 px- rounded-full">
              {" "}
              <img src={Textimage} alt="" /> <img src={Arrow} alt="" />
            </button>
            mentors
          </h1>
          <p className="text-xl font-semibold py-5">
            Discover the perfect courses tailored for you, taught by top
            mentors. Enhance your skills and knowledge in just a few clicks
            today!
          </p>
          <div className="space-x-5 flex gap-6 items-center">
            <button className="text-xl font-semibold bg-amber-500 hover:bg-[#063B29] text-white py-5 px-6 rounded-full">
              Srart Learning
            </button>
            <button className="text-xl font-semibold text-black  flex items-center gap-5 hover:text-red-500">
              Watch Video <FaRegCirclePlay className="font-4xl" />
            </button>
          </div>
        </div>
        {/* image area */}
        <div className="md:w-1/2 px-6">
          <img
            src={Topimage}
            alt=""
            className="absolute ring-10 ring-white rounded-full animate-pulse"
          />
          <img
            src={Heroimage}
            alt=""
            className=" relative text-right flex mt-30 pl-40 rounded z-0 "
          />
          <div className="bg-[#F1FFBB] inline-block text-center px-10 py-6 border-r-7 border-black border-b-7 -mt-27 z-50  relative rounded animate-bounce ">
            <h2 className="text-2xl text-black border-gray-200 border-b-2 pb-2">
              UI Design Pattern
            </h2>
            <div className="border-t-2 border-gray-200 flex gap-6 pt-4 items-center ">
              <img src={LogoImage} alt="" />
              <div>
                <h2>Saiful Kamrul</h2>
                <p>123 Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Client section */}
      <div className="flex flex-wrap justify-center md:justify-between gap-4 px-6 py-6">
        <img src={Logo1} alt="Logo 1" className="w-1/3 md:w-auto" />
        <img src={Logo2} alt="Logo 2" className="w-1/3 md:w-auto" />
        <img src={Logo3} alt="Logo 3" className="w-1/3 md:w-auto" />
        {/* These two logos will be hidden on small screens */}
        <img src={Logo4} alt="Logo 4" className="hidden md:block" />
        <img src={Logo5} alt="Logo 5" className="hidden md:block" />
      </div>
    </section>
  );
}

export default Hero