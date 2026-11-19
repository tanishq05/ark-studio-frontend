import logoFooterImage from "../assets/logo/logo-footer.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a href="#home" className="footer-brand">
          <img src={logoFooterImage} alt="ARK STUDIO by Lohar Creations" />
        </a>

        <div className="footer-description">
          <strong>Customized Outdoor Furniture</strong>
          <span>MS | Aluminium | Wicker | Braid</span>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#customization">Customization</a>
          <a href="#projects">Projects</a>
          <a href="#craftsmanship">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ARK STUDIO by Lohar Creations. All rights reserved.</p>
        <p>Crafted in Iron. Designed for Living.</p>
      </div>
    </footer>
  );
}