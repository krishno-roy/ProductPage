import React from "react";
import { FaEnvelopeOpenText, FaNewspaper } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
import { LuBellDot } from "react-icons/lu";
import { SlSocialBehance } from "react-icons/sl";
import { TbSettingsSearch, TbWorldWww } from "react-icons/tb";

const ServiceList = [
  {
    id: 1,
    title: "Keyword Research",
    description: "We create modern, responsive, and user-friendly websites.",
    icon: <TbSettingsSearch />,
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description: "We help you grow your social media presence effectively.",
    icon: <SlSocialBehance />,
  },
  {
    id: 3,
    title: "Email Marketing",
    description: "We create engaging email campaigns to boost conversions.",
    icon: <FaEnvelopeOpenText />,
  },
  {
    id: 4,
    title: "Content Writing",
    description: "We create engaging email campaigns to boost conversions.",
    icon: <FaNewspaper />,
  },
  {
    id: 5,
    title: "Website Development",
    description: "We create engaging email campaigns to boost conversions.",
    icon: <IoCodeSlashSharp />,
  },
  {
    id: 6,
    title: "SEO Optimizations",
    description: "We create engaging email campaigns to boost conversions.",
    icon: <TbWorldWww />,
  },
];

const Service = () => {
  return (
    <section className="bg-gradient-to-r from-[#2B2B6B] via-[#5C30FD] to-[#2B2B6B] py-12" id="service">
      <div className="flex justify-center container mx-auto mb-10 px-4">
        <h2 className="bg-black/35 text-[#8760FD] font-bold py-2 px-4 rounded-full inline-flex items-center gap-2">
          <LuBellDot className="text-xl text-yellow-500" />
          About Company
        </h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {ServiceList.map((service) => (
          <div
            key={service.id}
            className="bg-[#2B2B6B] text-white p-8 rounded-xl shadow-md hover:bg-[#5C30FD] transition duration-300 group text-center mx-auto"
          >
            <div className="text-5xl justify-center flex  mb-4 text-[#5C30FD] group-hover:text-white transition duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
