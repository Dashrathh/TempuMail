import {
  FiShield,
  FiZap,
  FiEyeOff,
  FiCheckSquare,
  FiTrash2,
} from "react-icons/fi";

const WhyUseTempMail = () => {
  const reasons = [
    {
      title: "Privacy Protection",
      desc: "Shield your primary inbox from spam, tracking, and data leaks. Keep your digital identity secure.",
      icon: <FiShield className="w-6 h-6" />,
      color: "text-purple-600",
    },
    {
      title: "Instant Access",
      desc: "Zero registration required. Generate working email addresses in seconds with one click.",
      icon: <FiZap className="w-6 h-6" />,
      color: "text-blue-600",
    },
    {
      title: "Complete Anonymity",
      desc: "No personal data collected. We don't store IP addresses or usage logs.",
      icon: <FiEyeOff className="w-6 h-6" />,
      color: "text-green-600",
    },
    {
      title: "Universal Compatibility",
      desc: "Works with any website requiring email verification - social media, SaaS trials, downloads.",
      icon: <FiCheckSquare className="w-6 h-6" />,
      color: "text-orange-600",
    },
    {
      title: "Auto-Cleanup",
      desc: "Inboxes self-destruct after 24 hours. No manual cleanup required.",
      icon: <FiTrash2 className="w-6 h-6" />,
      color: "text-red-600",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Ad */}
        {/* <AdSlot slotName="leaderboard" className="mb-12 h-[90px]" /> */}

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Professionals Choose TempMail.sbs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure your digital footprint while maintaining productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`mb-5 ${reason.color} group-hover:text-blue-600 transition-colors`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-opacity-10 group-hover:bg-blue-50 transition-colors">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        {/* Middle Ad
        <div className="my-12 hidden lg:block">
          <AdSlot slotName="middle-banner" className="h-[250px] rounded-lg" />
        </div> */}

        {/* Comparison Section
        <div className="bg-gray-50 rounded-xl p-8 mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            TempMail.sbs vs Competitors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg">
              <h4 className="font-semibold mb-3">Inbox Duration</h4>
              <div className="text-3xl font-bold text-blue-600">24 Hours</div>
              <p className="text-sm text-gray-600 mt-2">
                Industry average: 1-2 hours
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg">
              <h4 className="font-semibold mb-3">Security Level</h4>
              <div className="text-3xl font-bold text-blue-600">AES-256</div>
              <p className="text-sm text-gray-600 mt-2">
                Military-grade encryption
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg">
              <h4 className="font-semibold mb-3">Ad-Free Experience</h4>
              <div className="text-3xl font-bold text-blue-600">100% Clean</div>
              <p className="text-sm text-gray-600 mt-2">
                Zero trackers or banners
              </p>
            </div>
          </div>
        </div> */}

        {/* Mobile Ad
        <div className="my-12 lg:hidden">
          <AdSlot slotName="mobile-banner" className="h-[100px] rounded-lg" />
        </div> */}

        {/* CTA */}
        {/* <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold flex items-center justify-center mx-auto gap-2">
            <FiZap className="w-5 h-5" />
            Get Started Now
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default WhyUseTempMail;
