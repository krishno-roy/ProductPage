import React from 'react'
import ContactImage from "../../assets/contact.png";
import { LuBellDot } from 'react-icons/lu';
import { FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12" id='contact'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 gap-10">
        {/* left Side */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center">
          <img
            src={ContactImage}
            alt="Banner"
            className="relative pl-4 sm:pl-8 max-w-full"
          />
        </div>
        {/* Right Side */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="bg-white text-black font-bold py-2 px-4 rounded-full inline-flex items-center gap-2 mx-auto lg:mx-0">
            <LuBellDot className="text-xl text-yellow-500" />
            img Contact Us
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ready to Boost your Digital product marketing ?
          </h1>

          <p className="text-base sm:text-lg font-semibold max-w-lg mx-auto lg:mx-0">
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae
          </p>
          

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

export default Contact