import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../assets/logo/logo.png";
import barStoolImage from "../assets/images/bar-stool.jpg";
import sofaSetImage from "../assets/images/sofa-set.jpg";
import diningSetImage from "../assets/images/dining-set.jpg";
import swingImage from "../assets/images/swing.png";
import gazeboImage from "../assets/images/gazebo.png";
import pergolaImage from "../assets/images/pergola.png";
import poolLoungerImage from "../assets/images/poolside.png";
import umbrellaImage from "../assets/images/umbrella.png";
import outdoorChairImage from "../assets/images/outdoor-chairs/1.png";

const collections = [
  { name: "Bar Stool", slug: "bar-stool", image: barStoolImage },
  { name: "Sofa Set", slug: "sofa-set", image: sofaSetImage },
  { name: "Dining Set", slug: "dining-set", image: diningSetImage },
  { name: "Swing", slug: "swing", image: swingImage },
  { name: "Gazebo", slug: "gazebo", image: gazeboImage },
  { name: "Pergola", slug: "pergola", image: pergolaImage },
  { name: "Pool Lounger", slug: "poolside-furniture", image: poolLoungerImage },
  { name: "Umbrella", slug: "umbrella", image: umbrellaImage },
  { name: "Outdoor Chair", slug: "outdoor-chairs", image: outdoorChairImage },
];

export default function Header() {
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  const closeCollections = () => setCollectionsOpen(false);

  useEffect(() => {
    if (!collectionsOpen) return;

    const handleScroll = () => {
      setCollectionsOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [collectionsOpen]);

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="ARK STUDIO home" onClick={closeCollections}>
        <img src={logoImage} alt="ARK STUDIO by Lohar Creations" />
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        <NavLink
          className={({ isActive }) => isActive ? "active" : ""}
          to="/"
          onClick={closeCollections}
        >
          Home
        </NavLink>

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
  <Link
    to={`/collections/${item.slug}`}
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
  </Link>
))}
              </div>
            </div>
          )}
        </div>

        {/* <a href="#customization">Customization</a> */}
        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/projects" onClick={closeCollections}>Projects</NavLink>
        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/about" onClick={closeCollections}>About Us</NavLink>
        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/contact" onClick={closeCollections}>Contact</NavLink>
      </nav>

      <Link className="header-cta" to="/contact" onClick={closeCollections}>
  Enquire Now
</Link>
    </header>
  );
}