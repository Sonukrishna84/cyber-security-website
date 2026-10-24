import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DPDPPage from './pages/DPDPPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="site-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/dpdp-compliance" element={<DPDPPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Legacy & .html Redirects */}
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/about-us.html" element={<Navigate to="/about" replace />} />
          <Route path="/services.html" element={<Navigate to="/services" replace />} />
          <Route path="/cyber-security-services" element={<Navigate to="/services" replace />} />
          <Route path="/cyber-security-services.html" element={<Navigate to="/services" replace />} />
          <Route path="/dpdp-compliance.html" element={<Navigate to="/dpdp-compliance" replace />} />
          <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="/contact-us.html" element={<Navigate to="/contact" replace />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

