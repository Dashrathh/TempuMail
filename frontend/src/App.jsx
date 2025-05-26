import Header from "./components/Header";
import Inbox from "./components/Inbox";
import EmailGenerator from "./components/MailGenerator.jsx";
import HowItWorks from "./components/HowItsWork";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer.jsx";

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
            </>
          }
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/howitswork" element={<HowItWorks />} />
      </Routes>

      <Footer />

      <></>
    </>
  );
}
