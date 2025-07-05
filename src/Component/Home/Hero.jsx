import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HeroImage from "../../assets/krishno.png";
import { IoReorderThreeOutline } from "react-icons/io5";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "UI/UX Designer",
      "Marketing Expert",
      "Tracking Expert",
    ],
    loop: true,
  });

  return (
    <section className="bg-black min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-start">
          <div className="absolute top-5 left-5 md:top-10 md:left-10">
            <IoReorderThreeOutline className="bg-gray-400 text-white h-8 w-8 rounded-full shadow-lg cursor-pointer" />
          </div>
          <img
            src={HeroImage}
            alt="Hero"
            className="w-72 h-72 md:w-full md:h-screen object-contain mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left mt-10 md:mt-0 space-y-6 px-2 md:px-8">
          <h3 className="text-2xl mb-2">Hi there!</h3>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            I'm a <span className="font-bold text-yellow-400">{text}</span>
            <Cursor />
          </h1>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            I'm a Freelance UI/UX Designer and Developer based in London,
            England. I strive to build immersive and beautiful web applications
            through carefully crafted code and user-centric design.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
            <button className="border-yellow-600 px-6 py-2 border-4 rounded-full text-lg md:text-xl hover:bg-yellow-600 font-semibold bg-gray-400/20 duration-200 uppercase">
              More About Me
            </button>
            <button className="border-yellow-600 px-6 py-2 border-4 rounded-full text-lg md:text-xl font-semibold hover:bg-yellow-600 duration-200 uppercase">
              Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
