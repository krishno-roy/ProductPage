import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer web design, development, digital marketing, and SEO services tailored to your business needs.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary based on complexity but typically range from 2 to 6 weeks.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we provide ongoing maintenance and support packages to keep your website running smoothly.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "Simply contact us through our website or email us with your project details to receive a custom quote.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <button className="bg-white py-2 px-4 text-[#6610f2] rounded-xl text-lg md:text-xl font-bold mb-4">
          Some Question
        </button>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Find answers to some of the most common questions below.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center bg-white p-4 text-left text-lg font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="bg-gray-50 p-4 text-gray-700 text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
