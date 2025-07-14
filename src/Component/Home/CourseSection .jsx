import React from "react";
import ServiceImage1 from "../../assets/image-6 (1).png";
import ServiceImage2 from "../../assets/image-13.png";
import ServiceImage3 from "../../assets/image-10.png";
import ServiceImage4 from "../../assets/image-8 (1).png";
import ServiceImage5 from "../../assets/image-12 (1).png";
import ServiceImage6 from "../../assets/image-13.png";

const courses = [
  {
    id: 1,
    title: "Graphic Design class",
    description:
      "I learned essential design skills and tools to create professional, eye-catching graphics.",
    instructor: "Dennis Barrett",
    avatar: "https://i.pravatar.cc/40?img=1",
    price: 450,
    originalPrice: 480,
    sections: 140,
    hours: 48,
    students: 40,
    image: ServiceImage1,
    bgColor: "bg-[#fdeee3]",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "This course enhanced my skills in creating user-friendly, visually appealing UI/UX designs.",
    instructor: "Billy Vasquez",
    avatar: "https://i.pravatar.cc/40?img=2",
    price: 750,
    originalPrice: 780,
    sections: 80,
    hours: 62,
    students: 100,
    image: ServiceImage2,
    bgColor: "bg-[#fde6d9]",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Crafting innovative, responsive websites for exceptional user experiences and functionality.",
    instructor: "Joan Wallace",
    avatar: "https://i.pravatar.cc/40?img=3",
    price: 350,
    originalPrice: 380,
    sections: 160,
    hours: 60,
    students: 30,
    image: ServiceImage3,
    bgColor: "bg-[#fee4df]",
  },
  {
    id: 4,
    title: "Data Science and AI",
    description:
      "Crafting innovative, responsive websites for exceptional user experiences and functionality.",
    instructor: "Joan Wallace",
    avatar: "https://i.pravatar.cc/40?img=3",
    price: 350,
    originalPrice: 380,
    sections: 160,
    hours: 60,
    students: 30,
    image: ServiceImage4,
    bgColor: "bg-[#fee4df]",
  },
  {
    id: 5,
    title: "Cloud Computing",
    description:
      "Crafting innovative, responsive websites for exceptional user experiences and functionality.",
    instructor: "Joan Wallace",
    avatar: "https://i.pravatar.cc/40?img=3",
    price: 350,
    originalPrice: 380,
    sections: 160,
    hours: 60,
    students: 30,
    image: ServiceImage5,
    bgColor: "bg-[#fee4df]",
  },
  {
    id: 6,
    title: "Mobile App Development",
    description:
      "Crafting innovative, responsive websites for exceptional user experiences and functionality.",
    instructor: "Joan Wallace",
    avatar: "https://i.pravatar.cc/40?img=3",
    price: 350,
    originalPrice: 380,
    sections: 160,
    hours: 60,
    students: 30,
    image: ServiceImage6,
    bgColor: "bg-[#fee4df]",
  },
];

const CourseSection = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-6xl md:text-6xl font-bold leading-snug">
            check out
            <br /> our cool courses!
          </h2>
          <button className="text-lg md:text-xl px-6 py-3 bg-amber-600 rounded-full text-white whitespace-nowrap hover:bg-green-800">
            View All Courses
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center p-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`w-100 rounded-xl shadow-md overflow-hidden ${course.bgColor}  border-b-6 border-r-6 border-gray-400 hover:border-r-red-600 hover:border-b-red-600`}
          >
            <div className="relative p-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-60 mb-4 rounded"
              />
              <div className="absolute top-6 right-7 flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow">
                <img
                  src={course.avatar}
                  alt={course.instructor}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm font-medium">{course.instructor}</span>
              </div>
              <h2 className="text-2xl font-bold text-green-900 mt-4">
                {course.title}
              </h2>
              <p className="text-gray-700 text-xl border-b-2 pb-3 border-gray-500 mt-2">
                {course.description}
              </p>
              <div className="flex justify-between text-sm text-gray-600 mt-4">
                <span>{course.sections} Sections</span>
                <span>{course.hours} Hours</span>
                <span>{course.students}+ Students</span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-2xl font-bold text-green-800">
                    ${course.price.toFixed(2)}
                  </span>
                  <span className="line-through text-gray-500 ml-2">
                    ${course.originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
              <button className="border-2 border-black text-black w-full mt-10 px-4 py-3 rounded-full hover:bg-orange-600 hover:text-white font-bold text-xl duration-150">
                Purchase Course
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center py-6">
        <button className="text-lg md:text-xl px-6 py-4 bg-amber-600 rounded-full text-white whitespace-nowrap hover:bg-green-800">
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default CourseSection;
