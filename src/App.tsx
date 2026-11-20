
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const currentPath = window.location.pathname;

  const isProductPage = currentPath.startsWith("/collections/");
  const isProjectsPage = currentPath === "/projects";
  const isAboutPage = currentPath === "/about";
  const isContactPage = currentPath === "/contact";

  return (
    <>
      <Header />

    <main>
  {isContactPage ? (
    <ContactPage />
  ) : isAboutPage ? (
    <AboutPage />
  ) : isProjectsPage ? (
    <ProjectsPage />
  ) : isProductPage ? (
    <ProductListingPage />
  ) : (
    <HomePage />
  )}
</main>
      <Footer />
    </>
  );
}

export default App;
