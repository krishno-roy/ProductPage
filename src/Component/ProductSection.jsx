import React from "react";

// import front images
import ProductImg1 from "../assets/product1.jpg";
import ProductImg2 from "../assets/product2.jpg";
import ProductImg3 from "../assets/product3.jpg";
import ProductImg4 from "../assets/product4.jpg";

// import back images
import ProductImg5 from "../assets/product5.jpg";
import ProductImg6 from "../assets/product6.jpg";
import ProductImg7 from "../assets/product7.jpg";
import ProductImg8 from "../assets/product8.jpg";

const products = [
  {
    id: 1,
    name: "Luisa – Mokassins",
    discount: 70,
    price: "59,95 EUR",
    oldPrice: "200,00 EUR",
    image: ProductImg7,
    backImage: ProductImg8,
  },
  {
    id: 2,
    name: "Sandra – Orthopädische Sandalen",
    discount: 76,
    price: "39,95 EUR",
    oldPrice: "165,00 EUR",
    image: ProductImg5,
    backImage: ProductImg6,
  },
  {
    id: 3,
    name: "Sandra - Orthopädische Sandalen aus hochwertigem Material",
    discount: 75,
    price: "39,95 EUR",
    oldPrice: "160,00 EUR",
    image: ProductImg3,
    backImage: ProductImg4,
  },
  {
    id: 4,
    name: "Solea - Orthopädische Sandalen",
    discount: 70,
    price: "49,95 EUR",
    oldPrice: "165,00 EUR",
    image: ProductImg2,
    backImage: ProductImg1,
  },
];

export default function ProductSection() {
  return (
    <div className="px-4 py-8 container mx-auto">
      <h2 className="text-xl font-semibold mb-6">Kunden kauften auch</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="relative overflow-hidden group">
            {/* Discount badge */}
            <span className="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1 rounded z-10">
              -{product.discount}%
            </span>

            {/* Image container */}
            <div className="relative w-full h-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src={product.backImage}
                alt={product.name}
                className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>

            {/* Product details */}
            <div className="mt-2 py-3">
              <h3 className="text-xm font-semibold text-center">
                {product.name}
              </h3>
              <div className="text-sm text-red-600 font-bold text-center py-3">
                {product.price}
                <span className=" text-black px-2 line-through font-normal">
                  {product.oldPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
