import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from "sonner";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PlatformPage from "./pages/PlatformPage";
import EcosystemPage from "./pages/EcosystemPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <LanguageProvider>
      <div className="App min-h-screen flex flex-col">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/platform" element={<PlatformPage />} />
              <Route path="/ecosystem" element={<EcosystemPage />} />
              <Route path="/partnerships" element={<PartnershipsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
        <Toaster position="top-right" richColors />
      </div>
    </LanguageProvider>
  );
}

export default App;
