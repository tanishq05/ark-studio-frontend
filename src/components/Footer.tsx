import logoFooterImage from "../assets/logo/logo-footer.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link to="/" className="footer-brand">
          <img src={logoFooterImage} alt="ARK STUDIO by Lohar Creations" />
        </Link>

        <div className="footer-description">
          <strong>Customized Outdoor Furniture</strong>
          <span>MS | Aluminium | Wicker | Braid</span>
          <a href="tel:+9115555640">9115555640</a>
          <a href="mailto:arkstudios.india@gmail.com">arkstudios.india@gmail.com</a>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/collections">Collections</Link>
          {/* <Link to="/#customization">Customization</Link> */}
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ARK STUDIO by Lohar Creations. All rights reserved.</p>
        <p>Crafted in Iron. Designed for Living.</p>
      </div>
    </footer>
  );
}