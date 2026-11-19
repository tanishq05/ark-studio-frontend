
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";

function App() {
  const currentPath = window.location.pathname;

  const isProductPage = currentPath.startsWith("/collections/");

  return (
    <>
      <Header />

      <main>
        {isProductPage ? (
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
