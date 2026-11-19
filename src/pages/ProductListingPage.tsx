
import { useState } from "react";
import "./ProductListingPage.css";

import barStoolImage from "../assets/images/bar-stool.jpg";
import sofaSetImage from "../assets/images/sofa-set.jpg";
import diningSetImage from "../assets/images/dining-set.jpg";
import swingImage from "../assets/images/swing.png";
import gazeboImage from "../assets/images/gazebo.png";
import pergolaImage from "../assets/images/pergola.png";
import poolLoungerImage from "../assets/images/poolside.png";
import umbrellaImage from "../assets/images/umbrella.png";

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Signature Bar Stool", category: "Bar Furniture", image: barStoolImage },
  { id: 2, name: "Outdoor Sofa Collection", category: "Sofa Sets", image: sofaSetImage },
  { id: 3, name: "Classic Dining Set", category: "Dining Sets", image: diningSetImage },
  { id: 4, name: "Garden Swing", category: "Swings", image: swingImage },
  { id: 5, name: "Garden Gazebo", category: "Gazebos", image: gazeboImage },
  { id: 6, name: "Modern Pergola", category: "Pergolas", image: pergolaImage },
  { id: 7, name: "Poolside Lounger", category: "Poolside Furniture", image: poolLoungerImage },
  { id: 8, name: "Outdoor Umbrella", category: "Umbrellas", image: umbrellaImage },
];

const categories = [
  "All Furniture",
  "Bar Furniture",
  "Sofa Sets",
  "Dining Sets",
  "Swings",
  "Gazebos",
  "Pergolas",
  "Poolside Furniture",
  "Umbrellas",
];

function ProductListingPage() {
  const [activeCategory, setActiveCategory] = useState("All Furniture");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts =
    activeCategory === "All Furniture"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const displayedProducts = [...filteredProducts];

  if (sortBy === "name") {
    displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="product-page">
      <section className="product-page-hero">
        <div className="product-page-hero-content">
          <p className="product-eyebrow">ARK STUDIO BY LOHAR CREATIONS</p>
          <h1>Outdoor Furniture</h1>
          <p>
            Thoughtfully crafted furniture that brings comfort, character,
            and timeless design to your outdoor spaces.
          </p>
        </div>
      </section>

      <div className="product-breadcrumb">
        <a href="/">Home</a>
        <span>/</span>
        <span>Collections</span>
        <span>/</span>
        <strong>Outdoor Furniture</strong>
      </div>

      <section className="product-listing">
        <div className="product-listing-heading">
          <div>
            <p className="product-eyebrow">EXPLORE OUR COLLECTION</p>
            <h2>Designed for Outdoor Living</h2>
            <p className="product-intro">
              Discover handcrafted pieces made to complement your space and
              your way of living.
            </p>
          </div>

          <div className="product-sort">
            <label htmlFor="product-sort">Sort by</label>
            <select
              id="product-sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div className="product-layout">
          <aside className="product-sidebar">
            <h3>Categories</h3>
            <div className="category-filter-list">
              {categories.map((category) => (
                <button
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                  type="button"
                >
                  <span>{category}</span>
                  <span className="category-arrow">→</span>
                </button>
              ))}
            </div>

            <div className="sidebar-note">
              <span>MADE TO ORDER</span>
              <p>
                Looking for a particular size, finish, or design? Talk to us
                about a custom piece.
              </p>
              <a href="#product-enquiry">Enquire now ↗</a>
            </div>
          </aside>

          <div className="product-results">
            <div className="product-results-top">
              <p>
                Showing <strong>{displayedProducts.length}</strong> pieces
              </p>
              <span>Crafted for your spaces</span>
            </div>

            <div className="product-grid">
              {displayedProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-card-image">
                    <img src={product.image} alt={product.name} />
                    <span className="product-card-number">
                      {String(product.id).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="product-card-info">
                    <div>
                      <p>{product.category}</p>
                      <h3>{product.name}</h3>
                    </div>
                    <a href="#product-enquiry" aria-label={`Enquire about ${product.name}`}>
                      ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {displayedProducts.length === 0 && (
              <p className="no-products">No products found in this category.</p>
            )}
          </div>
        </div>
      </section>

      <section className="product-enquiry" id="product-enquiry">
        <div>
          <p className="product-eyebrow">YOUR SPACE, YOUR WAY</p>
          <h2>Have something specific in mind?</h2>
          <p>
            Share your requirements with us. We create furniture tailored to
            your space, style, and needs.
          </p>
        </div>
        <a href="/#contact" className="product-enquiry-button">
          Discuss Your Requirement <span>↗</span>
        </a>
      </section>
    </div>
  );
}

export default ProductListingPage;
