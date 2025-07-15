import React from "react";
import Icon1 from "../assets/icon1.jpg";
import Icon2 from "../assets/icon2.gif";
import Icon3 from "../assets/icon3.png";

const MesualStape = [
  {
    id: 1,
    title: "Deutschlandweit kostenloser Versand",
    dis: "Wir versenden in Deutschland mit DHL , für die schnellste und zuverlässigste Lieferung. Kostenloser Standardversand für alle Bestellungen.",
    icon: Icon1,
  },
  {
    id: 2,
    title: "Sichere Zahlung mit Paypal",
    dis: "Bei LORA können Sie mit Paypal zahlen und sind bei jedem Kauf geschützt.",
    icon: Icon3,
  },
  {
    id: 3,
    title: "100% Zufriedenheitsgarantie",
    dis: "Wir bieten eine risikofreie 30 tägige Geld-Zurück-Garantie auf alle Bestellungen an. Wenn du nicht zufrieden bist kannst du dein Produkt retournieren & wir erstatten den vollen Betrag zurück!",
    icon: Icon2,
  },
];

const MenualSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MesualStape.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-lg shadow-md  transition duration-300 bg-gray-50 text-center space-y-3"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 mx-auto object-contain"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.dis}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenualSection;
