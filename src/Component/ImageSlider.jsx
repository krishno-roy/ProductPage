import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";

const images = [Img1, Img2, Img3, Img4, Img5];

const ImageSlider = () => {
  // Double the images for seamless loop
  const allImages = [...images, ...images];

  return (
    <section className="overflow-hidden bg-white py-10">
      <div className="w-full relative">
        <div className="flex gap-4 animate-slide">
          {allImages.map((img, index) => (
            <div key={index} className="w-[20%] flex-shrink-0">
              <img
                src={img}
                alt={`img-${index}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
