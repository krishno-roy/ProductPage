import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    text: `Fashion on Point! Die Kollektionen sind so stilvoll und immer up to date. Besonders gut gefallen mir die detaillierten Produktbeschreibungen und die Größentabellen – das macht den Einkauf so viel einfacher. Lieferung war schnell und die Qualität ist wirklich erstklassig.`,
    name: "Julia W.",
    city: "München",
  },
  {
    id: 2,
    text: `Toller Onlineshop mit wirklich stilvollen und hochwertigen Stücken. Die Qualität der Stoffe und die Verarbeitung sind hervorragend. Besonders die Detailtreue bei den Produktbildern und Beschreibungen hat mich überzeugt. Werde hier auf jeden Fall wieder einkaufen.`,
    name: "Maria T.",
    city: "Freiburg",
  },
  {
    id: 3,
    text: `Ich bin wirklich beeindruckt von der Qualität und dem Stil der Kleidung in diesem Shop. Jedes Teil, das ich bestellt habe, sieht genauso aus wie auf den Bildern und fühlt sich einfach nur gut an. Die Mode hier ist definitiv etwas Besonderes!`,
    name: "Tanja K.",
    city: "Wolfsburg",
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="px-4 py-12 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Kundenbewertungen
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded shadow p-6 text-center h-full flex flex-col justify-between">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-sm text-gray-700 mb-6">"{item.text}"</p>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-gray-500">{item.city}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
