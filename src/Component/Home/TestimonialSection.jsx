import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Saiful Kamrul",
    title: "Junior UI designer",
    image: "https://i.pravatar.cc/40?img=1",
    rating: 5,
    text: "Taking the online Graphic Design course was a game-changer for me. The instructors were incredibly knowledgeable, and the hands-on projects helped me apply what I learned. I now feel confident in my design skills and can’t wait to create my own projects!",
  },
  {
    id: 2,
    name: "Saiful Kamrul",
    title: "Junior UI designer",
    image: "https://i.pravatar.cc/40?img=1",
    rating: 5,
    text: "Taking the online Graphic Design course was a game-changer for me. The instructors were incredibly knowledgeable, and the hands-on projects helped me apply what I learned. I now feel confident in my design skills and can’t wait to create my own projects!",
  },
  {
    id: 3,
    name: "Julia Rahman",
    title: "Graphic Designer",
    image: "https://i.pravatar.cc/40?img=5",
    rating: 5,
    text: `"This course was very practical, allowing me to study at my own pace and schedule. I’ve already received a promotion thanks to the skills I gained and feel prepared to grow professionally!"`,
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-[#fdf4eb] py-16 px-4">
      <h2 className="text-4xl md:text-6xl font-bold text-center text-green-900 mb-12">
        Trusted By Our <br /> Successful Students
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white max-w-sm w-full rounded-xl p-6 shadow-md border border-gray-200"
          >
            <div className="flex gap-1 mb-4">
              {Array(t.rating)
                .fill()
                .map((_, i) => (
                  <span key={i} className="text-orange-500 text-xl">
                    ★
                  </span>
                ))}
            </div>
            <p className="text-gray-700 text-sm mb-6">{t.text}</p>
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-green-900 font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
