import React from 'react'
import Logo1 from "../../assets/outbrain.png";
import Logo2 from "../../assets/linkedIn.png";
import Logo3 from "../../assets/shopify.png";
import Logo4 from "../../assets/grammarly.png";
import Logo5 from "../../assets/framer.png";
import Logo6 from "../../assets/trello.png";
import Logo7 from "../../assets/dropbox.png";
import Logo8 from "../../assets/amazon.png";

const Partner = () => {
  return (
    <section className="bg-gray-200">
      <div className="container mx-auto py-8 px-3">
        <h3 className="text-center text-base sm:text-lg md:text-xl font-semibold py-5 px-4 leading-relaxed">
          We Have <span className="text-[#8760FD] px-1 sm:px-2">1563+</span>{" "}
          Global Partners. <br className="block sm:hidden" />
          Explore Our Global Clients
        </h3>
        <div className="flex justify-between py-7">
          <img src={Logo1} alt="" />
          <img src={Logo2} alt="" />
          <img src={Logo3} alt="" />
          <img src={Logo4} alt="" />
        </div>
        <div className="flex justify-between py-7">
          <img src={Logo5} alt="" />
          <img src={Logo6} alt="" />
          <img src={Logo7} alt="" />
          <img src={Logo8} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Partner