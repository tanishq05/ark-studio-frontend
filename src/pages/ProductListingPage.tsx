
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Phone } from "lucide-react";
import "./ProductListingPage.css";

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
};

type CategoryAssets = {
  category: string;
  label: string;
  images: Record<string, unknown>;
};

const categoryAssets: CategoryAssets[] = [
  { category: "Bar Furniture", label: "Bar Stool", images: import.meta.glob("../assets/images/bar-stool/*.{png,jpg,jpeg}", { eager: true, query: "?url", import: "default" }) },
  { category: "Sofa Sets", label: "Sofa Set", images: import.meta.glob("../assets/images/sofa-set/*.{png,jpg,jpeg}", { eager: true, query: "?url", import: "default" }) },
  { category: "Dining Sets", label: "Dining Set", images: import.meta.glob("../assets/images/dining-set/*.{png,jpg,jpeg}", { eager: true, query: "?url", import: "default" }) },
  { category: "Swings", label: "Garden Swing", images: import.meta.glob("../assets/images/swings/*.{png,jpg,jpeg}", { eager: true, query: "?url", import: "default" }) },
  { category: "Gazebos", label: "Garden Gazebo", images: import.meta.glob("../assets/images/gazebos/*.{png,jpg,jpeg}", { eager: true, query: "?url", import: "default" }) },
  { category: "Pergolas", label: "Pergola", images: import.meta.glob("../assets/images/pergola/*.{png,jpg,jpeg}", { eager: true, query: "?url", import: "default" }) },
  { category: "Poolside Furniture", label: "Poolside Lounger", images: import.meta.glob("../assets/images/poolside/*.{png,jpg,jpeg}", { eager: true, query: "?url", import: "default" }) },
  { category: "Umbrellas", label: "Outdoor Umbrella", images: import.meta.glob("../assets/images/umbrella/*.{png,jpg,jpeg}", { eager: true, query: "?url", import: "default" }) },
  { category: "Outdoor Chairs", label: "Outdoor Chair", images: import.meta.glob("../assets/images/outdoor-chairs/*.{png,jpg,jpeg}", { eager: true, query: "?url", import: "default" }) },
];

function sortAssetPaths([pathA]: [string, unknown], [pathB]: [string, unknown]) {
  const numberA = Number(pathA.match(/(\d+)(?=\.[^.]+$)/)?.[1] ?? 0);
  const numberB = Number(pathB.match(/(\d+)(?=\.[^.]+$)/)?.[1] ?? 0);
  return numberA - numberB;
}

const products: Product[] = categoryAssets.flatMap((group, groupIndex) =>
  Object.entries(group.images)
    .sort(sortAssetPaths)
    .map(([, image], imageIndex) => ({
      id: groupIndex * 100 + imageIndex + 1,
      name: `${group.label} ${String(imageIndex + 1).padStart(2, "0")}`,
      category: group.category,
      image: image as string,
    })),
);

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
  "Outdoor Chairs",
];

function ProductListingPage() {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const categorySlugMap: Record<string, string> = {
  "bar-stool": "Bar Furniture",
  "sofa-set": "Sofa Sets",
  "dining-set": "Dining Sets",
  swing: "Swings",
  gazebo: "Gazebos",
  pergola: "Pergolas",
  "poolside-furniture": "Poolside Furniture",
  umbrella: "Umbrellas",
  "outdoor-chairs": "Outdoor Chairs",
};

const initialCategory = categorySlugMap[categorySlug ?? ""] ?? "All Furniture";

const [activeCategory, setActiveCategory] = useState(initialCategory);
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
          <h1>
  {activeCategory === "All Furniture"
    ? "Outdoor Furniture"
    : activeCategory}
</h1>
          <p>
            Thoughtfully crafted furniture that brings comfort, character,
            and timeless design to your outdoor spaces.
          </p>
        </div>
      </section>

      <div className="product-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/collections">Collections</Link>
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
              <a href="tel:+9115555640" className="sidebar-call-link">
                <Phone aria-hidden="true" />
                <span>Call Us</span>
              </a>
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
                    <Link to="/contact" aria-label={`Enquire about ${product.name}`}>
                      ↗
                    </Link>
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
        <Link to="/contact" className="product-enquiry-button">
          Discuss Your Requirement <span>↗</span>
        </Link>
      </section>
    </div>
  );
}

export default ProductListingPage;
