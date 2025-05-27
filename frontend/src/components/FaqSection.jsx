import React, { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    question: "Do I need to sign up to use TempMail.sbs?",
    answer:
      "No registration required. Our service is completely anonymous - just visit the site and start using it immediately.",
  },
  {
    question: "How long does the temporary email last?",
    answer:
      "Emails remain active for 24 hours from creation. All messages are automatically deleted after this period.",
  },
  {
    question: "Can I create custom email addresses?",
    answer:
      "While we offer random generation by default, premium users can create custom aliases (e.g., yourname@tempmail.sbs).",
  },
  {
    question: "Is this service secure?",
    answer:
      "Yes. We use military-grade encryption and adhere to strict no-logs policy. All data is purged automatically.",
  },
  {
    question: "Can I reply to emails?",
    answer:
      "Our temporary emails are receive-only to protect your anonymity. Reply functionality is not available.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <FiHelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Quick answers to common questions about our service
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white hover:border-blue-100 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <FiChevronDown
                  className={`w-6 h-6 text-gray-500 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        {/* <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? Our support team is here to help
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Contact Support
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FaqSection;
