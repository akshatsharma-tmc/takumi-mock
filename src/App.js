import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from "sonner";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PlatformPage from "./pages/PlatformPage";
import ProductsPage from "./pages/ProductsPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import TeamPage from "./pages/TeamPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <LanguageProvider>
      <div className="App min-h-screen flex flex-col">
        <BrowserRouter>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/platform" element={<PlatformPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/partnerships" element={<PartnershipsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
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
