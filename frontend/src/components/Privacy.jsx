import React from "react";

function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy refers to TempMail free-to-use website, hereinafter
        “TempMail.sbs”, and TEMPMAIL PREMIUM WEB.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Our Commitment</h2>
      <p className="mb-4">
        TempMail.SBS is committed to protecting your privacy. We follow the
        General Data Protection Regulation (GDPR).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Data Collection</h2>
      <p className="mb-4">
        We do not collect personal data in the free version. For premium
        accounts, only your email is stored securely for login and billing.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h2>
      <p className="mb-4">
        We use cookies to enhance your experience and show relevant ads. You may
        opt out of personalized ads via your browser or visiting
        <a
          href="https://www.aboutads.info"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          www.aboutads.info
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Email Retention</h2>
      <p className="mb-4">
        All temporary emails are auto-deleted after 10min. You can delete your
        temporary email anytime using the "Delete" button.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Ads and SDKs</h2>
      <p className="mb-4">
        We work with ad partners like Google AdMob, Firebase Analytics,
        Appsflyer, and others. These may use cookies or beacons for
        non-personalized ad targeting.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Third Party Links</h2>
      <p className="mb-4">
        We may link to third-party sites. We are not responsible for their
        content or privacy practices.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. California Privacy Rights
      </h2>
      <p className="mb-4">
        California users may request info about third parties we’ve shared
        personal data with for marketing. TEMPMAIL.SBS does not share such data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        If you have questions or wish to unsubscribe, contact us at: <br />
        📧 Email:{" "}
        <a
          href="mailto:support@tempmail.sbs"
          className="text-blue-500 underline"
        >
          support@tempmail.sbs
        </a>
        <br />
        📍 Address: India gujarat Banakaskantha 385006
      </p>

      <p className="text-sm mt-10 text-gray-500">Effective Date: 1 June 2025</p>
    </div>
  );
}

export default Privacy;
