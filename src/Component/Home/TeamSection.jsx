import React from "react";

const teamMembers = [
  {
    name: "Tim R. Moyer",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Asifur Rahman Alvi",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Mehrab Hossen Rakib",
    role: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Rakibujjaman Saiful",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-5xl font-bold text-green-900 mb-10">
        Discover Your <br />
        <span className="text-green-900">Learning Journey Guide.</span>
      </h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-xl w-full h-80 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
