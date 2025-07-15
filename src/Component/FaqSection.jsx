import React from "react";

const faqs = [
  {
    question: "Ist der Versand kostenlos?",
    answer:
      "Wir versenden in Deutschland mit DHL , für die schnellste und zuverlässigste Lieferung. Kostenloser Standardversand für alle Bestellungen.",
  },
  {
    question: "Wie lange dauert der Versand?",
    answer:
      "Die Lieferzeit besteht aus zwei Teilen <br/>Bearbeitungszeit: 1-3 Werktage <br/>Lieferzeit: 7-18 Werktage Sobald Ihre Bestellung versandt wurde, erhalten Sie eine E-Mail mit einem Link zur Sendungsverfolgung, damit Sie Ihr Paket verfolgen können. Wenn Sie Fragen zu Ihrer Sendung haben, wenden Sie sich bitte an unser Team.",
  },
  {
    question: "Nicht zufrieden mit Ihrer Bestellung?",
    answer:
      "Wir machen Versprechungen, aber das kann man erst wirklich wissen, wenn man es selbst ausprobiert. Deshalb bieten wir eine 30-tägige Geld-zurück-Garantie auf alle Bestellungen. Wenn Sie nicht vollständig zufrieden sind, können Sie Ihren Artikel jederzeit zurückgeben und erhalten eine vollständige Rückerstattung!",
  },
  {
    question: "Muss ich Zollgebühren zahlen?",
    answer:
      "Nein, es fallen keine Zollgebühren für Bestellungen an, die innerhalb der Schweiz versandt werden. Bei Lieferungen nach Europa fallen in der Regel keine Zollgebühren an.",
  },
];

export default function FaqSection() {
  return (
    <section className="px-4 py-12 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-8">FAQ</h2>

      <div className="space-y-4 bg-gray-100">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border-b border-gray-200  rounded-lg p-4"
          >
            <summary className="text-xl font-semibold cursor-pointer flex justify-between items-center">
              <span>{faq.question}</span>
              <svg
                className="w-4 h-4 transform group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-2 text-xl font-semibold text-black">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
