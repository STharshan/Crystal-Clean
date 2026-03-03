import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react"; // 1. Import useEffect
import AOS from "aos"; // 2. Import AOS
import "aos/dist/aos.css"; // 3. Import AOS CSS

import Navbar from "./components/Navbar";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./page/Home";
import Footer from "./components/FooterSection";
import Gallery from "./page/Gallery";
import PaintProtection from "./page/Services/PaintProtection";
import Polishing from "./page/Services/Polishing";
import CeramicCoating from "./page/Services/CeramicCoating";
import DeepClean from "./page/Services/DeepClean";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  // 4. Initialize AOS globally
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Whether animation should happen only once - while scrolling down
      easing: 'ease-in-out',
      offset: 100,    // Offset (in px) from the original trigger point
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/paintprotection" element={<PaintProtection /> }/>
        <Route path="/ceramiccoating" element={<CeramicCoating /> } />
        <Route path="/polishing" element={<Polishing /> } />
        <Route path="/deepclean" element={<DeepClean />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;