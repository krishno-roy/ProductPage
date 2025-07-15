import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { TbArrowBackUp } from "react-icons/tb";
import Payment from "../assets/payment.png";
import SizeImage from "../assets/sizetable.png";

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("38");
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const product = {
    name: "Lisa - Orthopädische Sandalen für tägliche Leichtigkeit",
    originalPrice: 300,
    discountedPrice: 59.95,
    discountPercentage: 80,
    rating: 4.7,
    reviews: 9465,
    description:
      "Die orthopädischen Sandalen Lisa bieten optimalen Komfort und Unterstützung für den täglichen Gebrauch. Mit ihrem atmungsaktiven Material und der ergonomischen Fußbettung sind sie perfekt für lange Tage.",
  };

  const colors = [
    {
      id: "blue",
      name: "Blau",
      swatch:
        "https://www.loramuenchen.de/cdn/shop/files/16_20250425_181421_0015-Photoroom.jpg?crop=center&height=100&v=1745939365&width=100",
      images: [
        "https://www.loramuenchen.de/cdn/shop/files/16_20250425_181421_0015-Photoroom_600x.jpg?v=1745939365",
        "https://www.loramuenchen.de/cdn/shop/files/17_20250425_181421_0016-Photoroom_600x.jpg?v=1745939365",
        "https://www.loramuenchen.de/cdn/shop/files/18_20250425_181421_0017-Photoroom_600x.jpg?v=1745939358",
      ],
    },
    {
      id: "black",
      name: "Schwarz",
      swatch:
        "https://www.loramuenchen.de/cdn/shop/files/17_20250425_181421_0016-Photoroom.jpg?crop=center&height=100&v=1745939365&width=100",
      images: [
        "https://www.loramuenchen.de/cdn/shop/files/17_20250425_181421_0016-Photoroom_600x.jpg?v=1745939365",
        "https://www.loramuenchen.de/cdn/shop/files/18_20250425_181421_0017-Photoroom_600x.jpg?v=1745939358",
        "https://www.loramuenchen.de/cdn/shop/files/18_20250425_181421_0017-Photoroom_600x.jpg?v=1745939358",
      ],
    },
    {
      id: "white",
      name: "Weiß",
      swatch:
        "https://www.loramuenchen.de/cdn/shop/files/18_20250425_181421_0017-Photoroom.jpg?crop=center&height=100&v=1745939358&width=100",
      images: [
        "https://www.loramuenchen.de/cdn/shop/files/18_20250425_181421_0017-Photoroom_600x.jpg?v=1745939358",
        "https://www.loramuenchen.de/cdn/shop/files/17_20250425_181421_0016-Photoroom_600x.jpg?v=1745939365",
        "https://www.loramuenchen.de/cdn/shop/files/18_20250425_181421_0017-Photoroom_600x.jpg?v=1745939358",
      ],
    },
  ];

  const sizes = ["34", "35", "36", "37", "38", "39", "40", "41", "42", "43"];

  const selectedColorObj = colors.find((c) => c.id === selectedColor);
  const mainImage = selectedColorObj.images[mainImageIndex];

  const renderStars = () => {
    const stars = [];
    const full = Math.floor(product.rating);
    const half = product.rating % 1 !== 0;

    for (let i = 0; i < full; i++)
      stars.push(<IoStar key={i} className="text-yellow-500" />);
    if (half) stars.push(<IoStarHalf key="half" className="text-yellow-500" />);
    return stars;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-12">
      <div>
        <h2 className="text-center pb-5 -mt-6 bg-gray-50 text-sm sm:text-base font-semibold">
          Kaufe 2 Artikel, erhalte 10% Extra-Rabatt!
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left - Images */}
        <div>
          <div className="overflow-hidden flex justify-center">
            <img
              src={mainImage}
              alt="Main"
              className="w-full max-w-[400px] h-auto object-contain"
            />
          </div>

          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            {selectedColorObj.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => setMainImageIndex(idx)}
                className={`w-16 h-16 md:w-20 md:h-20 cursor-pointer border-b-4 ${
                  idx === mainImageIndex ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right - Product Info */}
        <div>
          <div className="flex items-center text-yellow-500 mb-2 space-x-1 text-sm flex-wrap">
            {renderStars()}
            <p className="text-gray-600 font-semibold">
              4.7 / 5.0 basierend auf 9465+ Bewertungen
            </p>
          </div>

          <h1 className="text-xl md:text-3xl font-bold mb-3">{product.name}</h1>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xl md:text-2xl font-bold text-black">
              €{product.discountedPrice.toFixed(2)}
            </span>
            <span className="line-through text-gray-500 text-base">
              €{product.originalPrice}
            </span>
            <span className="bg-black text-white px-3 py-1 rounded-full text-xs sm:text-sm">
              SPARE HEUTE {product.discountPercentage}%
            </span>
          </div>

         

          {/* Colors */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">
              Farbe: {selectedColorObj.name}
            </h3>
            <div className="flex gap-4 flex-wrap">
              {colors.map((color) => (
                <img
                  key={color.id}
                  src={color.swatch}
                  alt={color.name}
                  onClick={() => {
                    setSelectedColor(color.id);
                    setMainImageIndex(0);
                  }}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg border-2 cursor-pointer ${
                    selectedColor === color.id
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Größe:</h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 text-sm border rounded-lg ${
                    selectedSize === size
                      ? "text-black border-black"
                      : "bg-white text-black border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Passform */}
          <div>
            <h3 className="font-semibold py-3">Passform</h3>
            <div className="grid grid-cols-5 gap-2 md:gap-4">
              <div className="border-2 border-black " />
              <div className="border-2 border-black " />
              <div className="border-2 border-black" />
              <div className="border-2 border-gray-300 " />
              <div className="border-2 border-gray-300" />
            </div>
            <div className="grid grid-cols-3 py-2 text-xs md:text-sm">
              <p>kleiner</p>
              <p>normal</p>
              <p>größer</p>
            </div>
            <div>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-[16px] text-amber-500">
                  <GoDotFill />
                  Fast ausverkauft
                </li>
                <li className="flex items-center gap-3 text-[16px]">
                  <TbArrowBackUp />
                  30 Tage Rückgaberecht
                </li>
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="flex-1 bg-[#3ea36a] text-white py-3 shadow-2xl text-sm sm:text-base">
              In den Warenkorb
            </button>
          </div>

          <div>
            <ul className="flex flex-col sm:flex-row justify-between mt-3 bg-gray-100 py-2 px-2 rounded-sm text-sm">
              <li className="flex items-center gap-2">
                <GoDotFill />
                Versendet am <span className="font-bold"> Do. 17.</span>
              </li>
              <li className="flex items-center gap-2">
                <TbArrowBackUp />
                <span className="font-bold"> Gratis</span> Versand
              </li>
            </ul>
          </div>

          <div className="flex justify-center py-4">
            <img
              src={Payment}
              alt="Payment Options"
              className="max-w-full h-auto"
            />
          </div>

          <div className="text-center p-6 border border-gray-300 space-y-6">
            <h2 className="text-red-500 text-3xl md:text-5xl font-bold">
              RÄUMUNGSVERKAUF ENDET HEUTE
            </h2>
            <h4 className="text-lg md:text-xl font-semibold">
              Spare heute bis zu 80% Rabatt!
            </h4>
            <p className="text-sm md:text-base">
              Wir sind fast ausverkauft, kaufe mehr & spare mehr.
            </p>
          </div>

          <div className="mt-6 p-4 text-sm leading-relaxed">
            <span className="font-bold block mb-2">
              Lisa | Orthopädische Sandalen für tägliche Leichtigkeit
            </span>
            Erlebe echten Komfort ab dem ersten Schritt mit den Lisa-Sandalen –
            die perfekte Lösung für müde, schmerzende Füße. Ideal für Frauen,
            die viel unterwegs sind und stilvolle Unterstützung suchen, egal ob
            beim Spaziergang, im Urlaub oder im Alltag.{" "}
            <strong>Anatomisch geformte Sohle</strong> – Unterstützt dein
            Fußgewölbe optimal und lindert Druckstellen bei Hallux Valgus,
            Plantarfasziitis & Co. Luftig & leicht zu tragen – Atmungsaktive
            Materialien und flexible Passform sorgen für ganztägige Frische,
            selbst an heißen Tagen.{" "}
            <strong>Modernes Design, kein Omi-Style</strong> – Stylisch wie
            deine Lieblingssandalen, aber mit echter orthopädischer Wirkung.
            Leidest du bei jedem Schritt? Das muss nicht sein! Hol dir Wunlisa
            heute mit 80% Rabatt & kostenlosem Versand – nur solange der Vorrat
            reicht!
            <div className="flex justify-center mt-4">
              <img
                src={SizeImage}
                alt="Size Chart"
                className="max-w-full w-[300px] md:w-[400px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
