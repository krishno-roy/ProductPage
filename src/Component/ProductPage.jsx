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
        <h2 className="text-center pb-5 -mt-6 bg-gray-50">Kaufe 2 Artikel, erhalte 10% Extra-Rabatt!</h2>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left - Images */}
        <div>
          <div className=" overflow-hidden flex justify-center">
            <img
              src={mainImage}
              alt="Main"
              className="w-[400px] h-[500px] object-cover"
            />
          </div>

          <div className="flex justify-center gap-3 mt-4">
            {selectedColorObj.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => setMainImageIndex(idx)}
                className={`w-20 h-20  cursor-pointer border-b-4 ${
                  idx === mainImageIndex ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right - Product Info */}
        <div>
          <div className="flex items-center  text-yellow-500 mb-2 space-x-1">
            {renderStars()}
            <p className="text-gray-600 text-sm font-semibold">
              4.7 / 5.0 basierend auf 9465+ Bewertungen
            </p>
          </div>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold text-black">
              €{product.discountedPrice.toFixed(2)}
            </span>
            <span className="line-through text-gray-500">
              €{product.originalPrice}
            </span>
            <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
              SPARE HEUTE{product.discountPercentage}%
            </span>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          {/* Colors */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">
              Farbe: {selectedColorObj.name}
            </h3>
            <div className="flex gap-4">
              {colors.map((color) => (
                <img
                  key={color.id}
                  src={color.swatch}
                  alt={color.name}
                  onClick={() => {
                    setSelectedColor(color.id);
                    setMainImageIndex(0);
                  }}
                  className={`w-16 h-16 rounded-lg border-2 cursor-pointer ${
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
            <div className="grid grid-cols-7 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 text-sm border rounded-lg ${
                    selectedSize === size
                      ? " text-black border-black"
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
            <div className="grid grid-cols-5 gap-4">
              <div className="border-2 border-black" />
              <div className="border-2 border-black" />
              <div className="border-2 border-black" />
              <div className="border-2 border-gray-300" />
              <div className="border-2 border-gray-300" />
            </div>
            <div className="grid grid-cols-3 py-2">
              <p>kleiner</p>
              <p>normal</p>
              <p>größer</p>
            </div>
            <div>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-[18px] text-amber-500">
                  <GoDotFill />
                  Fast ausverkauft
                </li>
                <li className="flex items-center gap-3 text-[18px]">
                  <TbArrowBackUp />
                  30 Tage Rückgaberecht
                </li>
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="flex-1 bg-[#3ea36a] text-white py-3 shadow-2xl">
              In den Warenkorb
            </button>
          </div>

          <div>
            <ul className="flex justify-between mt-3 bg-gray-100 py-2 px-2 rounded-sm">
              <li className="flex items-center gap-2 text-[18px]">
                <GoDotFill />
                Versendet am <span className="font-bold"> Do. 17.</span>
              </li>
              <li className="flex items-center gap-2 text-[18px]">
                <TbArrowBackUp />
                <span className="font-bold"> Gratis</span> Versand
              </li>
            </ul>
          </div>
          <div className="flex justify-center py-4">
            <img src={Payment} alt="" />
          </div>
          <div className="text-center p-6 border border-gray-300 space-y-6">
            <h2 className=" text-red-500 text-5xl font-bold">
              RÄUMUNGSVERKAUF ENDET HEUTE
            </h2>
            <h4 className="text-xl font-semibold">
              Spare heute bis zu 80% Rabatt!
            </h4>
            <p>Wir sind fast ausverkauft, kaufe mehr & spare mehr.</p>
          </div>

          <div className="mt-6 p-4   text-sm">
            <span className="font-bold">
              {" "}
              Lisa | Orthopädische Sandalen für tägliche Leichtigkeit
            </span>{" "}
            Erlebe echten Komfort ab dem ersten Schritt mit den Lisa-Sandalen –
            die perfekte Lösung für müde, schmerzende Füße. Ideal für Frauen,
            die viel unterwegs sind und stilvolle Unterstützung suchen, egal ob
            beim Spaziergang, im Urlaub oder im Alltag. Anatomisch geformte
            Sohle – Unterstützt dein Fußgewölbe{" "}
            <span className="font-bold"> optimal und lindert Druckstellen</span>
            bei Hallux Valgus, Plantarfasziitis & Co. Luftig & leicht zu tragen
            – Atmungsaktive Materialien und flexible Passform sorgen für
            ganztägige Frische, selbst an heißen Tagen. Modernes Design, kein
            Omi-Style – Stylisch wie deine{" "}
            <span className="font-bold">
              Lieblingssandalen, aber mit echter
            </span>
            orthopädischer Wirkung. Leidest du bei jedem Schritt? Das muss nicht
            sein! Hol dir Wunlisa heute mit 80% Rabatt & kostenlosem Versand –
            nur solange der Vorrat reicht!
            <div className=" flex justify-center mt-4">
              <img
                src={SizeImage}
                alt=""
                className="h-[400px] w-[400px] bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
