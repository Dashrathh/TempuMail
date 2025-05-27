import Header from "./components/Header";
import Inbox from "./components/Inbox";
import EmailGenerator from "./components/MailGenerator.jsx";
import HowItWorks from "./components/HowItsWork";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Privacy from "./components/Privacy.jsx";
import Footer from "./components/Footer.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import HowToUseSection from "./components/HowToUseSection.jsx";
import FaqSection from "./components/FaqSection.jsx";
import WhyUseTempMail from "./components/WhyUseTempMail .jsx";
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
