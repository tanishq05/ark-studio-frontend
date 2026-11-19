import { useRef } from "react";
import heroImage from "../assets/images/hero-section.png";
import barStoolImage from "../assets/images/bar-stool.jpg";
import sofaSetImage from "../assets/images/sofa-set.jpg";
import diningSetImage from "../assets/images/dining-set.jpg";
import swingImage from "../assets/images/swing.png";
import gazeboImage from "../assets/images/gazebo.png";
import pergolaImage from "../assets/images/pergola.png";
import poolLoungerImage from "../assets/images/poolside.png";
import umbrellaImage from "../assets/images/umbrella.png";
import msFrameImage from "../assets/images/ms-frame.png";
import aluminiumFrameImage from "../assets/images/aluminium-frame.png";
import wickerImage from "../assets/images/wicker-sample.png";
import braidImage from "../assets/images/braid-sample.png";
import customChairImage from "../assets/images/customised-material-chair.png";
import customSwatchesImage from "../assets/images/customised-material.png";
import projectImage1 from "../assets/images/our-projects/our-projects-1.png";
import projectImage2 from "../assets/images/our-projects/our-projects-2.png";
import projectImage3 from "../assets/images/our-projects/our-projects-3.png";
import projectImage4 from "../assets/images/our-projects/our-projects-4.png";
import projectImage5 from "../assets/images/our-projects/our-projects-5.png";
import projectImage6 from "../assets/images/our-projects/our-projects-6.png";
import projectImage7 from "../assets/images/our-projects/our-projects-7.png";
import projectImage8 from "../assets/images/our-projects/our-projects-8.png";
import projectImage9 from "../assets/images/our-projects/our-projects-9.png";
import projectImage10 from "../assets/images/our-projects/our-projects-10.jpeg";
import projectImage11 from "../assets/images/our-projects/our-projects-11.jpeg";
import projectImage12 from "../assets/images/our-projects/our-projects-12.jpeg";
import projectImage13 from "../assets/images/our-projects/our-projects-13.jpeg";
import projectImage14 from "../assets/images/our-projects/our-projects-14.jpeg";
import Header from "../components/Header";
import Footer from "../components/Footer";


const collections = [
  {
    name: "Bar Stool",
    image: barStoolImage,
  },
  {
    name: "Sofa Set",
    image: sofaSetImage,
  },
  {
    name: "Dining Set",
    image: diningSetImage,
  },
  {
    name: "Swing",
    image: swingImage,
  },
  {
    name: "Gazebo",
    image: gazeboImage,
  },
  {
    name: "Pergola",
    image: pergolaImage,
  },
  {
    name: "Pool Lounger",
    image: poolLoungerImage,
  },
  {
    name: "Umbrella",
    image: umbrellaImage,
  },
];


const materials = [
  { name: "MS Frame", detail: "Mild Steel", image: msFrameImage },
  { name: "Aluminium", detail: "Lightweight Frame", image: aluminiumFrameImage },
  { name: "Wicker", detail: "Woven Finish", image: wickerImage },
  { name: "Braid", detail: "Braided Finish", image: braidImage },
];

const projectImages = [
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
  projectImage5,
  projectImage6,
  projectImage7,
  projectImage8,
  projectImage9,
  projectImage10,
  projectImage11,
  projectImage12,
  projectImage13,
  projectImage14,
];

const projects = projectImages.map((image, index) => ({
  name: `Project ${String(index + 1).padStart(2, "0")}`,
  image,
}));





function HeroSection() {
  return (
    <section className="hero" id="home">
      <img
  className="hero-image"
  src={heroImage}
  alt="Luxury outdoor metal frame wicker sofa and armchairs"
  fetchPriority="high"
/>
      <div className="hero-shade" />

      <div className="hero-content">
        <p className="eyebrow light">Customized Outdoor Furniture</p>
        <h1>
          Outdoor Living,
          <br />
          <em>Crafted Your Way.</em>
        </h1>
        <p className="hero-description">
          Bespoke outdoor furniture in MS, aluminium, wicker and braid,
          designed for comfort, style and lasting performance.
        </p>

        <div className="hero-actions">
          <a className="button button-light" href="#collections">
            Explore Collections <span>→</span>
          </a>
          <a className="button button-outline" href="#contact">
            Get a Custom Quote
          </a>
        </div>

        <div className="hero-highlights">
          <div>
            <span className="highlight-icon">♧</span>
            <span>Custom Made</span>
          </div>
          <div>
            <span className="highlight-icon">▱</span>
            <span>Premium Materials</span>
          </div>
          <div>
            <span className="highlight-icon">◇</span>
            <span>Weather Durable</span>
          </div>
        </div>
      </div>

      {/* <div className="hero-controls" aria-label="Hero image position">
        <span>01 / 03</span>
        <button type="button" aria-label="Previous slide">←</button>
        <button type="button" aria-label="Next slide">→</button>
      </div> */}
    </section>
  );
}

function CollectionsSection() {
  return (
    <section className="collections section-pad" id="collections">
      <div className="section-heading centered">
        <p className="eyebrow">Our Collections</p>
        <h2>Explore Our Collections</h2>
        <p>
          A versatile range of outdoor furniture, crafted to elevate every space.
        </p>
      </div>

      <div className="collection-grid">
        {collections.map((item, index) => (
          <a className="collection-card" href="#contact" key={item.name}>
            <img src={item.image} alt={item.name} loading="lazy" />
            <div className="collection-overlay" />
            <span className="collection-number">0{index + 1}</span>
            <div className="collection-caption">
              <h3>{item.name}</h3>
              <span className="round-arrow">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function CraftsmanshipSection() {
  return (
    <section className="craftsmanship" id="craftsmanship">
      <div className="craft-inner">
        <div className="craft-copy">
          <p className="eyebrow light">Materials & Craftsmanship</p>
          <h2>
            Built in Metal.
            <br />
            Finished <em>with</em>
            <br />
            Wicker & Braid.
          </h2>
        </div>

        <div className="material-grid">
          {materials.map((item) => (
            <div className="material-card" key={item.name}>
              <img src={item.image} alt={`${item.name} ${item.detail}`} loading="lazy" />
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomizationSection() {
  return (
    <section className="customization" id="customization">
      <div className="custom-image custom-image-left">
        <picture>
          <source
            srcSet={customChairImage}
            media="(max-width: 700px)"
          />
          <img
            src={customChairImage}
            alt="Close-up of a custom outdoor chair with metal frame and woven seat"
            loading="lazy"
          />
        </picture>
      </div>

      <div className="custom-content">
        <p className="eyebrow">Made for Your Space</p>
        <h2>
          Customization
          <br />
          <em>Your Way</em>
        </h2>
        <p className="custom-description">
          Choose the materials, finishes and fabrics to create outdoor
          furniture that fits your space perfectly.
        </p>

        <div className="custom-options">
          <div>
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 4h14v14H5zM8 18v3m8-3v3M5 8h14" />
              </svg>
            </span>
            <p><strong>Frame Material</strong><small>MS / Aluminium</small></p>
          </div>
          <div>
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="m14 4 6 6-3 3-6-6m3-3 3-3 6 6-3 3M5 21l3-7 6-6m-8 9 3 3" />
              </svg>
            </span>
            <p><strong>Frame Finish</strong><small>Powder Coating</small></p>
          </div>
          <div>
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 4v16M10 4v16M16 4v16M22 4v16M2 7h20M2 12h20M2 17h20" />
              </svg>
            </span>
            <p><strong>Weaving</strong><small>Wicker / Braid</small></p>
          </div>
          <div>
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="m3 7 9-5 9 5-9 5-9-5Zm0 5 9 5 9-5M3 17l9 5 9-5" />
              </svg>
            </span>
            <p><strong>Fabric & Cushions</strong><small>Outdoor Fabrics</small></p>
          </div>
        </div>

        <a className="button button-dark" href="#contact">
          Start Customizing <span>→</span>
        </a>
      </div>

      <div className="custom-image custom-image-right">
        <img
          src={customSwatchesImage}
          alt="Outdoor upholstery and weaving colour samples"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projectTrackRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: -1 | 1) => {
    const track = projectTrackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(".project-card");
    track.scrollBy({
      left: direction * (card?.getBoundingClientRect().width ?? track.clientWidth),
      behavior: "smooth",
    });
  };

  return (
    <section className="projects section-pad" id="projects">
      <div className="projects-heading">
        <div>
          <p className="eyebrow">Our Projects</p>
          <h2>Spaces We Have Created</h2>
        </div>
        <div className="projects-actions">
          <a className="text-link" href="#contact">View All Projects <span>→</span></a>
          <div className="project-carousel-controls" aria-label="Project carousel controls">
            <button
              className="project-carousel-button"
              type="button"
              aria-label="Previous project"
              aria-controls="projects-carousel"
              onClick={() => scrollProjects(-1)}
            >
              ←
            </button>
            <button
              className="project-carousel-button"
              type="button"
              aria-label="Next project"
              aria-controls="projects-carousel"
              onClick={() => scrollProjects(1)}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        className="project-grid"
        id="projects-carousel"
        ref={projectTrackRef}
        aria-label="Project gallery"
        tabIndex={0}
      >
        {projects.map((project) => (
          <a className="project-card" href="#contact" key={project.name}>
            <img src={project.image} alt={project.name} loading="lazy" />
            <span>{project.name} ↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-banner" id="contact">
      <p className="eyebrow light">Let's Create Something Together</p>
      <h2>Have a Project in Mind?</h2>
      <p>
        Tell us about your space and furniture requirements.
        Our team will be happy to help.
      </p>
      <a className="button button-light" href="mailto:YOUR-EMAIL@example.com">
        Enquire Now <span>→</span>
      </a>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CollectionsSection />
        <CraftsmanshipSection />
        <CustomizationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
