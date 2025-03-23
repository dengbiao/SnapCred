import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "@app/pages/HomePage";
import AboutPage from "@app/pages/AboutPage";
import GuidePage from "@app/pages/GuidePage";
import ContactPage from "@app/pages/ContactPage";
import UploadPage from "@app/pages/UploadPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/guide" element={<GuidePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
  );
};

export default AppRoutes;
