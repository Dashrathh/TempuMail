import React, { useEffect, useState, useRef } from "react";

import { API } from "../utils/api.js";

export default function EmailGenerator() {
  const [mail, setMail] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const customInputRef = useRef(null);
  const [customMail, setCustomMail] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const fetchMailDetails = async (regenerate = false) => {
    if (regenerate) {
      localStorage.removeItem("email");
    }

    const emailExists = localStorage.getItem("email");

    console.log("Found", emailExists);

    if (emailExists) {
      setMail(emailExists);
    } else {
      try {
        setLoading(true);
        const { data: response } = await API.get(`/generate`);
        setMail(response.data);

        console.log("response from data ", response.data);

        localStorage.setItem("email", response.data);
      } catch (error) {
        console.error("Error while fetching mail", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchMailDetails();
  }, []);

  const copyToClipboard = (text, ref) => {
    navigator.clipboard.writeText(text);
    if (ref.current) {
      ref.current.focus();
      ref.current.select();
    }
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  // Custom Mail
  const generateCustomMail = async () => {
    if (!customMail) {
      return;
    }

    try {
      setLoading(true);
      setLoading(true);
      const { data: response } = await API.post(`/custom`, {
        username: customMail,
      });

      localStorage.setItem("email", response.data);

      setMail(response.data);

      const result = await response.json();

      localStorage.setItem("email", result.data);

      setMail(result.data);
    } catch (error) {
      console.error("Error while fetching mail", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-16 flex justify-center items-center px-4">
      <div className="bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700 max-w-4xl w-full space-y-8 relative">
        {/* Notification */}
        {showNotification && (
          <div className="animate-fade-in-down absolute top-4 right-4 bg-emerald-600/90 text-white px-4 py-2 rounded-lg text-sm shadow-md">
            Copied to clipboard!
          </div>
        )}

        <h1 className="text-4xl font-bold text-center text-blue-400">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Secure Mail Generator
          </span>
          ``
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Random Email Section */}
          <div className="space-y-6 p-6 bg-gray-900/50 rounded-xl border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-300">
              Random Email
            </h2>
            <div className="flex flex-col gap-4">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="email"
                  // defaultValue={loading ? "Generating..." : mail}
                  value={loading ? "Generating..." : mail}
                  readOnly
                  className="w-full bg-gray-800 text-blue-100 font-mono text-lg p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-20"
                  onFocus={(e) => e.target.select()}
                />
                <button
                  onClick={() => copyToClipboard(mail, inputRef)}
                  className="absolute right-2 top-2 bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-md transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
              <button
                onClick={() => fetchMailDetails(true)}
                disabled={loading}
                className="bg-gradient-to-r from-blue-800 via-blue-500 to-indigo-500 bg-[length:300%_300%] animate-gradient-x text-white font-medium px-6 py-3 rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Generating...
                  </>
                ) : (
                  "Generate New Email"
                )}
              </button>
            </div>
          </div>

          {/* Custom Email Section */}
          <div className="space-y-6 p-6 bg-gray-900/50 rounded-xl border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-300">
              Custom Email
            </h2>
            <div className="flex flex-col gap-4">
              <div className="relative size-full flex items-center rounded-lg border border-gray-600 bg-gray-800 text-blue-100">
                <input
                  ref={customInputRef}
                  type="text"
                  value={loading ? "Generating..." : customMail}
                  onChange={(e) => setCustomMail(e.target.value)}
                  className="w-full font-mono bg-transparent text-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-20"
                  placeholder="your name"
                />
                <div className="span p-3 cursor-not-allowed">@tempmail.sbs</div>
              </div>
              <button
                onClick={generateCustomMail}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:300%_300%] animate-gradient-x text-white font-medium px-6 py-3 rounded-lg transition-all"
              >
                Create Custom Email
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-4 text-center mt-8">
          <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <h3 className="text-blue-400 font-medium">Secure</h3>
            <p className="text-sm text-gray-400 mt-1">End-to-end encryption</p>
          </div>
          <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <h3 className="text-blue-400 font-medium">Anonymous</h3>
            <p className="text-sm text-gray-400 mt-1">
              No personal data collected
            </p>
          </div>
          <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <h3 className="text-blue-400 font-medium">Temporary</h3>
            <p className="text-sm text-gray-400 mt-1">Auto-deletes in 24h</p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-400 mt-8 leading-relaxed">
          Protect your online privacy with temporary, secure email addresses.
          <br />
          No registration required • Completely anonymous • Free forever
        </p>
      </div>
    </div>
  );
}
