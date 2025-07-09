import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LuBellDot } from "react-icons/lu";
import ClientImage from "../../assets/face-mans-2.png";
import BannerImage from "../../assets/digital-marketing-hero-img-min.png";
import Circle from "../../assets/circle-musk.png";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-12" id="home">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="bg-white text-black font-bold py-2 px-4 rounded-full inline-flex items-center gap-2 mx-auto lg:mx-0">
            <LuBellDot className="text-xl text-yellow-500" />
            25+ Years of Experience
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            The Perfect Digital Marketing <br /> To Grow Your Business
          </h1>

          <p className="text-base sm:text-lg font-semibold max-w-lg mx-auto lg:mx-0">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
            <button className="px-4 py-4 rounded-xl bg-[#8760FD] text-white text-lg sm:text-xl inline-flex items-center gap-2 w-[250px] justify-center">
              Learn More <FaArrowRight />
            </button>
            <div className="flex items-center gap-2">
              <img src={ClientImage} alt="Client" className=" rounded-full" />
              <p className="text-base sm:text-xl font-bold ">
                Trusted by 1M+ people worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center">
          <img
            src={BannerImage}
            alt="Banner"
            className="relative pl-4 sm:pl-8 max-w-full"
          />
          <img
            src={Circle}
            alt="Circle"
            className="absolute top-0 left-0 w-40 sm:w-52 animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
