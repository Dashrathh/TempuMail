import React from "react";
import { FiMail, FiCheckCircle, FiInbox, FiClock } from "react-icons/fi";

const HowToUseSection = () => {
  const steps = [
    {
      title: "Generate Email",
      description: "Instant anonymous email generation",
      icon: <FiMail className="w-6 h-6" />,
    },
    {
      title: "Verification",
      description: "Use for signups and OTP verification",
      icon: <FiCheckCircle className="w-6 h-6" />,
    },
    {
      title: "Inbox Access",
      description: "Real-time email updates",
      icon: <FiInbox className="w-6 h-6" />,
    },
    {
      title: "Auto-Expire",
      description: "Self-destruct after 24 hours",
      icon: <FiClock className="w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Use TempMail.sbs
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Secure your privacy in 4 simple steps
          </p>
        </div>

        {/* Ad Slot - Top
        <div className="mb-12 h-[90px] bg-gray-100 flex items-center justify-center text-gray-500 rounded-lg">
          Advertisement (728x90)
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600 mr-4 group-hover:bg-blue-100 transition-colors">
                  {step.icon}
                </div>
                <span className="text-2xl font-bold text-gray-300 mt-1">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-md leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Middle Ad */}
        {/* <div className="my-12 h-[250px] bg-gray-100 flex items-center justify-center text-gray-500 rounded-lg hidden lg:block">
          Advertisement (300x250)
        </div> */}

        {/* Mobile Ad */}
        {/* <div className="my-8 h-[100px] bg-gray-100 flex items-center justify-center text-gray-500 rounded-lg lg:hidden">
          Advertisement (320x100)
        </div> */}

        {/* <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center mx-auto gap-2">
            <FiMail className="w-5 h-5" />
            Generate Free Email Now
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default HowToUseSection;
