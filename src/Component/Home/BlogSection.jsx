import React from "react";
import Img1 from "../../assets/07.png"; 
import Img2 from "../../assets/08.png";
import Img3 from "../../assets/09.png";

const Blogsection = () => {
  const blogs = [
    {
      id: 1,
      image: Img1,
      date: "November 25, 2025",
      title: "Achieving Fashion Elegan Runway To Real Life",
      link: "/blog/1",
    },
    {
      id: 2,
      image: Img2,
      date: "November 25, 2025",
      title: "Remote Work Made Easy Way Better Tools.",
      link: "/blog/2",
    },
    {
      id: 3,
      image: Img3,
      date: "November 25, 2025",
      title: "Achieving Fashion Elegan Runway To Real Life",
      link: "/blog/3",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12" id="blog">
      <div className="text-center mb-8">
        <button className="bg-white py-2 px-4 text-[#6610f2] rounded-xl text-lg md:text-xl font-bold mb-4">
          News & Blog
        </button>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Explore Our Latest News & Blog
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
            to={blog.link}
            key={blog.id}
            className="group rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover rounded-t-lg"
            />
            <div className="bg-white p-4 rounded-b-lg">
              <p className="text-gray-500 mb-2">{blog.date}</p>
              <h3 className="text-xl font-semibold group-hover:text-indigo-600">
                {blog.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-gray-700 group-hover:text-indigo-600">
                Read More →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blogsection;
