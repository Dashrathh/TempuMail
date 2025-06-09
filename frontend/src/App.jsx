import { lazy } from "react";
import Header from "./components/Header";

const Inbox = lazy(() => import("./components/Inbox"));
// import Inbox from "./components/Inbox";
const EmailGenerator = lazy(() => import("./components/MailGenerator.jsx"));
// import EmailGenerator from "./components/MailGenerator.jsx";

import HowItWorks from "./components/HowItsWork";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Privacy from "./components/Privacy.jsx";
import Footer from "./components/Footer.jsx";
const FeaturesSection = lazy(() => import("./components/FeaturesSection.jsx"));
// import FeaturesSection from "./components/FeaturesSection.jsx";
const HowToUseSection = lazy(() => import("./components/HowToUseSection.jsx"));
// import HowToUseSection from "./components/HowToUseSection.jsx";
const FaqSection = lazy(() => import("./components/FaqSection.jsx"));
// import FaqSection from "./components/FaqSection.jsx";
const WhyUseTempMail = lazy(() => import("./components/WhyUseTempMail .jsx"));
// import WhyUseTempMail from "./components/WhyUseTempMail .jsx";
export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <EmailGenerator />
              <Inbox />
              <FeaturesSection />
              <HowToUseSection />
              <WhyUseTempMail />
              <FaqSection />
            </>
          }
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/howitswork" element={<HowItWorks />} />
        <Route path="/Privacy" element={<Privacy />} />
      </Routes>

      <Footer />

      <></>
    </>
  );
}
