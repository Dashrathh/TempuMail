import React, { useEffect, useState } from "react";
import { API } from "../utils/api";

// import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
export default function Inbox() {
  const [inbox, setInbox] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);

  //  formate email

  const formatEmailBody = (text) => {
    return DOMPurify.sanitize(text);
  };

  const fetchInbox = async () => {
    const email = localStorage.getItem("email");

    if (!email) {
      console.error("No email found in localStorage.");
      return;
    }

    try {
      setLoading(true);

      const { data: response } = await API.get(`/inbox/${email}`);
      if (response) {
        setInbox(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error while fetching inbox mail", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInbox();
    const interval = setInterval(fetchInbox, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-start w-full min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white rounded-md shadow-md h-[500px] overflow-y-auto">
        {selectedEmail ? (
          <div className="p-6">
            <button
              onClick={() => setSelectedEmail(null)}
              className="mb-4 text-blue-600 hover:underline font-medium"
            >
              ← Back to Inbox
            </button>

            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <div className="relative size-12 sm:size-14 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-sm flex items-center justify-center">
                  {selectedEmail.from ? (
                    <span className="text-xl font-medium text-gray-700 uppercase">
                      {selectedEmail.from
                        .split("<")[0]
                        .trim()
                        .split(/\s+/)
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  ) : (
                    <svg className="w-6 h-6 text-gray-400" />
                  )}
                  <div className="absolute inset-0 rounded-full shadow-inner" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-semibold">
                    {selectedEmail.from.split("<")[0]}
                  </div>
                  <div className="text-sm">
                    {selectedEmail.from
                      .split("<")[1]
                      ?.replace("<", "")
                      ?.replace(">", "")}
                  </div>
                </div>
              </div>

              <div className="block">
                <div className="text-lg">Date</div>

                <div className="text-sm">
                  {selectedEmail.date?.split("+")[0]}
                </div>
              </div>
            </div>
            {selectedEmail.subject && (
              <div className="block text-sm my-2 border p-2">
                Subject: {selectedEmail.subject}
              </div>
            )}

            <div
              className="max-w-none block size-full relative overflow-hidden overflow-y-auto"
              dangerouslySetInnerHTML={{
                __html: formatEmailBody(selectedEmail.html),
              }}
            />
          </div>
        ) : (
          <>
            <div className="bg-[#111827] text-white px-4 py-3 font-semibold text-lg">
              Inbox ({inbox.length})
            </div>

            <div className="bg-gray-200 px-4 py-2 font-semibold grid grid-cols-3 text-sm border-b border-gray-300">
              <span>SENDER</span>
              <span>SUBJECT</span>
              <span className="text-center">VIEW</span>
            </div>
            {loading ? (
              <div className="p-4 space-y-4 animate-pulse duration-700">
                {" "}
                {/* Skeleton Start */}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 items-center px-4 py-3"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                    <div className="h-6 bg-gray-200 rounded w-12 mx-auto"></div>
                  </div>
                ))}
              </div>
            ) : inbox.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                Waiting for incoming emails...
              </div>
            ) : (
              <>
                <div className="divide-y">
                  {inbox.map((email, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 items-center px-4 py-3 cursor-pointer hover:bg-gray-50 transition"
                      onClick={() => setSelectedEmail(email)}
                    >
                      <div className="font-medium truncate">
                        {email.from
                          ? email.from.split("<")[0]
                          : "Unknown Sender"}
                      </div>
                      <div className="text-sm text-gray-600 truncate">
                        {email.subject}
                      </div>
                      <div className="text-center text-blue-600 hover:underline text-sm">
                        View
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
