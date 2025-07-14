import React from "react";
import { GrCloudComputer } from "react-icons/gr";
import { FaBullhorn, FaCube, FaPenNib } from "react-icons/fa6";

const courseCategories = [
  {
    id: 1,
    name: "IT & Software",
    icon: <GrCloudComputer size={32} />,
    bgColor: "bg-lime-100",
    iconBg: "bg-lime-200",
  },
  {
    id: 2,
    name: "Digital Marketing",
    icon: <FaBullhorn size={32} />,
    bgColor: "bg-yellow-100",
    iconBg: "bg-yellow-200",
  },
  {
    id: 3,
    name: "Product Design",
    icon: <FaCube size={32} />,
    bgColor: "bg-teal-100",
    iconBg: "bg-teal-200",
  },
  {
    id: 4,
    name: "Graphic Design",
    icon: <FaPenNib size={32} />,
    bgColor: "bg-red-100",
    iconBg: "bg-red-200",
  },
];

const Courch = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-left mb-12">
        <h2 className="text-4xl md:text-6xl font-bold leading-snug text-center">
          Explore Our <br className="hidden md:block" /> Courses Category
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {courseCategories.map((course) => (
          <div
            key={course.id}
            className={`${course.bgColor} rounded-xl shadow-md p-6 flex flex-col items-start transition-transform hover:scale-105 duration-300 border-r-4 border-b-4 border-gray-300 hover:border-r-black hover:border-b-black`}
          >
            <div
              className={`${course.iconBg} p-4 rounded-full mb-4`}
            >
              {course.icon}
            </div>
            <h3 className="text-xl font-semibold text-green-900">
              {course.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courch;
