import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0c1120] text-gray-400 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div className="md:pl-8">
          <h2 className="text-2xl font-bold text-blue-500">
            TempMail Generator
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Fast, secure & anonymous temporary email addresses to protect your
            privacy.
          </p>
        </div>{" "}
        <div className="hidden md:block"></div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/HowItsWork"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="/AboutUs"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/Privacy"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                PrivacyPolicy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500 select-none">
        &copy; {new Date().getFullYear()} TempMail. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
