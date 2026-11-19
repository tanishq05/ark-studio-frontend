import { useState } from "react";
import logoImage from "../assets/logo/logo.png";
import barStoolImage from "../assets/images/bar-stool.jpg";
import sofaSetImage from "../assets/images/sofa-set.jpg";
import diningSetImage from "../assets/images/dining-set.jpg";
import swingImage from "../assets/images/swing.png";
import gazeboImage from "../assets/images/gazebo.png";
import pergolaImage from "../assets/images/pergola.png";
import poolLoungerImage from "../assets/images/poolside.png";
import umbrellaImage from "../assets/images/umbrella.png";

const collections = [
  { name: "Bar Stool", slug: "bar-stool", image: barStoolImage },
  { name: "Sofa Set", slug: "sofa-set", image: sofaSetImage },
  { name: "Dining Set", slug: "dining-set", image: diningSetImage },
  { name: "Swing", slug: "swing", image: swingImage },
  { name: "Gazebo", slug: "gazebo", image: gazeboImage },
  { name: "Pergola", slug: "pergola", image: pergolaImage },
  { name: "Pool Lounger", slug: "poolside-furniture", image: poolLoungerImage },
  { name: "Umbrella", slug: "umbrella", image: umbrellaImage },
];

export default function Header() {
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  const closeCollections = () => setCollectionsOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="ARK STUDIO home">
        <img src={logoImage} alt="ARK STUDIO by Lohar Creations" />
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a className="active" href="#home">Home</a>

        <div className="collections-nav-item">
          <button
            type="button"
            className={`collections-trigger ${
              collectionsOpen ? "is-open" : ""
            }`}
            aria-expanded={collectionsOpen}
            aria-controls="collections-mega-menu"
            onClick={() => setCollectionsOpen((open) => !open)}
          >
            Collections
            <span className="dropdown-chevron">⌄</span>
          </button>

          {collectionsOpen && (
            <div
              className="collections-mega-menu"
              id="collections-mega-menu"
            >
              <div className="mega-menu-grid">
               {collections.map((item, index) => (
  <a
    href={`/collections/${item.slug}`}
    className="mega-menu-card"
    key={item.slug}
    onClick={closeCollections}
  >
    <div className="mega-menu-image">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
      />

      <span className="mega-menu-number">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>

    <div className="mega-menu-card-caption">
      <span>{item.name}</span>
      <span className="mega-menu-arrow">↗</span>
    </div>
  </a>
))}
              </div>
            </div>
          )}
        </div>

        {/* <a href="#customization">Customization</a> */}
        <a href="#projects">Projects</a>
        <a href="#aboutUs">About Us</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="header-cta" href="#contact">
        Enquire Now <span>↗</span>
      </a>
    </header>
  );
}