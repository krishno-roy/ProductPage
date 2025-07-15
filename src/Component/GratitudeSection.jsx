import React from "react";
import Img from "../assets/imge.png";

const GratitudeSection = () => {
  return (
    <section className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-8">
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h3 className="text-2xl font-semibold">
          A farewell full of gratitude!
        </h3>
        <p>
          It is with a heavy heart that we announce the closure of our boutique
          💔
        </p>
        <p>
          Over the years, we have put our passion into creating clothing and
          accessories – from coats and jackets to shoes and bags.
        </p>
        <p>
          We are now almost sold out and are offering discounts of up to 80% –
          automatically deducted.
        </p>
        <h3 className="text-2xl font-semibold">
          Thank you for being part of our journey!
        </h3>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2">
        <img src={Img} alt="Farewell" className="w-full h-auto rounded-lg" />
      </div>
    </section>
  );
};

export default GratitudeSection;
