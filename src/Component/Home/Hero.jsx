import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HeroImage from "../../assets/krishno.png";
import { IoReorderThreeOutline, IoSettingsOutline } from "react-icons/io5";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "Ui/UX Designer",
      "Marketing Expert ",
      "Tracking Expert",
    ],
    loop: true,
  });

  return (
    <section className="bg-black min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 ">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute pt-10">
            <IoReorderThreeOutline className="bg-gray-400  text-white font-xl h-8 w-8 rounded-full" />
          </div>
          <img src={HeroImage} alt="Hero" className="h-screen mx-auto" />
        </div>
        <div className="w-full md:w-1/2 text-white text-center md:text-left mt-8 md:mt-0 space-y-6 relative">
        
          <h3 className="text-2xl mb-2">Hi there!</h3>
          <h1 className="text-3xl md:text-5xl font-bold">
            I'm a{" "}
            <span style={{ fontWeight: "bold", color: "yellow" }}>{text}</span>
            <Cursor />
          </h1>
          <p className="text-xl font-semibold">
            I'm a Freelance UI/UX Designer and Developer based in London,
            England. I strives to build immersive and beautiful web applications
            through carefully crafted code and user-centric design.
          </p>
          <div className="flex gap-5">
            <button className="border-yellow-600 px-6 py-4 border-4 p-2 rounded-full text-2xl hover:bg-yellow-600 font-semibold bg-gray-400/20 duration-200 uppercase">
              More About Me
            </button>
            <button className="border-yellow-600 px-6 py-4 border-4 p-2 rounded-full text-2xl font-semibold hover:bg-yellow-600  duration-200 uppercase">
              Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
