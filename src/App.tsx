
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function ScrollAndRouteHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, hash]);

  return null;
}

function ProductListingRoute() {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  return <ProductListingPage key={categorySlug ?? "all"} />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollAndRouteHandler />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<ProductListingRoute />} />
        <Route path="/collections/:categorySlug" element={<ProductListingRoute />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
