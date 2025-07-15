import React from "react";
import PaymentIcon1 from "../assets/payicon1.svg";
import PaymentIcon2 from "../assets/payicon2.svg";
import PaymentIcon3 from "../assets/payicon3.svg";
import PaymentIcon4 from "../assets/payicon4.svg";
import PaymentIcon5 from "../assets/payicon5.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-10">
      {/* Top Section */}
      <div className="max-w-4xl mx-auto grid grid-cols-1  md:grid-cols-2 gap-8 py-6 space-y-5">
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Über Uns</h2>
          <p className="text-[16px] text-gray-300">
            LORA München kreiert zeitlose, minimalistische Mode, inspiriert von
            Londons dynamischem Geist. Unsere Designs kombinieren klassische
            Silhouetten mit modernen Details und legen großen Wert auf Qualität
            und Langlebigkeit.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-1">Kontakt</h2>
          <p className="text-[16px]">Email: info@loramuenchen.de</p>
          <p className="text-[16px]">
            <span className="font-bold">Öffnungszeiten:</span> Montag bis
            Freitag 9:00 - 18:00
          </p>
        </div>

        {/* Links */}
        <div className="md:pl-30">
          <h2 className="text-lg font-semibold mb-2 ">Info</h2>
          <ul className="space-y-4 text-[16px] ">
            <li>
              <a href="#">
                Kontakt
              </a>
            </li>
            <li>
              <a href="#">
                Impressum
              </a>
            </li>
            <li>
              <a href="#">
                Retouren
              </a>
            </li>
            <li>
              <a href="#" >
                Versand & Zahlung
              </a>
            </li>
            <li>
              <a href="#" >
                AGB
              </a>
            </li>
            <li>
              <a href="#" >
                Datenschutz
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between mt-10 items-center gap-4">
        <div className="flex gap-4">
          <img src={PaymentIcon1} alt="Payment" className="h-6" />
          <img src={PaymentIcon2} alt="Payment" className="h-6" />
          <img src={PaymentIcon3} alt="Payment" className="h-6" />
          <img src={PaymentIcon4} alt="Payment" className="h-6" />
          <img src={PaymentIcon5} alt="Payment" className="h-6" />
        </div>
        <p className="text-xs text-white">© 2025 Lora München</p>
      </div>
    </footer>
  );
};

export default Footer;
