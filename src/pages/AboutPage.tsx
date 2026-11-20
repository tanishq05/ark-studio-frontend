
import "./AboutPage.css";
import { Link } from "react-router-dom";

import project1 from "../assets/images/our-projects/our-projects-1.png";
import project2 from "../assets/images/our-projects/our-projects-2.png";
import project3 from "../assets/images/our-projects/our-projects-3.png";
import project4 from "../assets/images/our-projects/our-projects-4.png";
import project6 from "../assets/images/our-projects/our-projects-6.png";
import project11 from "../assets/images/our-projects/our-projects-11.jpeg";
import project12 from "../assets/images/our-projects/our-projects-12.jpeg";
import project13 from "../assets/images/our-projects/our-projects-13.jpeg";
import project14 from "../assets/images/our-projects/our-projects-14.jpeg";

const highlights = [
  {
    number: "01",
    title: "Thoughtful Design",
    description:
      "We bring together practical functionality and considered aesthetics to create furniture that feels at home in its surroundings.",
  },
  {
    number: "02",
    title: "Made for Outdoor Living",
    description:
      "Our collections are designed for outdoor spaces, from private terraces and gardens to cafés and hospitality settings.",
  },
  {
    number: "03",
    title: "Customised Possibilities",
    description:
      "We work with different spaces and requirements, offering furniture solutions that can be tailored to individual projects.",
  },
];

const categories = [
  { name: "Outdoor Lounge Spaces", image: project3 },
  { name: "Pergolas & Seating", image: project4 },
  { name: "Swings & Relaxation", image: project6 },
  { name: "Café & Hospitality", image: project11 },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <img
          className="about-hero-image"
          src={project1}
          alt="Outdoor lounge furniture beneath a pergola"
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <span className="about-eyebrow">ARK STUDIO BY LOHAR CREATIONS</span>
          <h1>Spaces Designed to Bring People Together.</h1>
          <p>
            Thoughtfully designed outdoor furniture for living, relaxing and
            connecting.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="about-intro">
  <div className="about-intro-content">
    <span className="about-section-number">01 / WHO WE ARE</span>

    <div className="about-intro-row">
      <h2>More than furniture. A way of living.</h2>

      <p>
        ARK STUDIO by Lohar Creations is an outdoor furniture brand and
        manufacturer focused on creating considered furniture solutions
        for residential, hospitality and commercial spaces.
        From relaxed garden settings to thoughtfully planned café
        environments, we believe furniture should do more than fill a
        space. It should shape the way people experience it.
      </p>
    </div>
  </div>
</section>

      {/* Story image section */}
      <section className="about-story">
        <div className="about-story-image">
          <img src={project2} alt="Outdoor lounge furniture in a rooftop setting" />
        </div>
        <div className="about-story-content">
          <span className="about-section-number">02 / OUR APPROACH</span>
          <h2>Designed around the way you live.</h2>
          <p>
            Every outdoor space has its own character. Our approach is to
            create furniture that complements its setting while keeping
            comfort, usability and visual appeal in mind.
          </p>
          <p>
            We bring together distinctive designs and customisation to help
            shape spaces that feel welcoming, personal and complete.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="about-highlights">
        <div className="about-section-heading">
          <span className="about-section-number">03 / WHAT GUIDES US</span>
          <h2>Our way of creating.</h2>
        </div>

        <div className="about-highlights-grid">
          {highlights.map((item) => (
            <article className="about-highlight-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Product and project showcase */}
      <section className="about-showcase">
        <div className="about-section-heading">
          <span className="about-section-number">04 / OUR WORK</span>
          <h2>Furniture for every kind of outdoor space.</h2>
          <p>
            Explore a selection of the spaces and furniture settings that
            reflect our work.
          </p>
        </div>

        <div className="about-showcase-grid">
          {categories.map((category) => (
            <article className="about-showcase-card" key={category.name}>
              <div className="about-showcase-image">
                <img src={category.image} alt={category.name} loading="lazy" />
              </div>
              <h3>{category.name}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* Commercial projects */}
      <section className="about-commercial">
        <div className="about-commercial-content">
          <span className="about-section-number">05 / BEYOND THE HOME</span>
          <h2>Creating welcoming places for people to gather.</h2>
          <p>
            Our work extends to cafés, restaurants and hospitality spaces,
            where furniture plays an important role in creating memorable
            environments.
          </p>
          <Link to="/projects" className="about-text-link">
            Explore our projects <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="about-commercial-images">
          <img src={project12} alt="Outdoor hospitality furniture installation" loading="lazy" />
          <img src={project13} alt="Restaurant outdoor seating" loading="lazy" />
          <img src={project14} alt="Outdoor café furniture setting" loading="lazy" />
        </div>
      </section>

      {/* Closing statement */}
      <section className="about-closing">
        <span className="about-eyebrow">ARK STUDIO BY LOHAR CREATIONS</span>
        <h2>Crafted in Iron. Designed for Living.</h2>
        <p>
          Let's create an outdoor space that feels distinctly yours.
        </p>
        <a
          href="https://wa.me/919115555640?text=Hi%2C%20I%20would%20like%20to%20request%20the%20ARK%20STUDIO%20product%20catalog."
          target="_blank"
          rel="noopener noreferrer"
          className="about-cta"
        >
          Start a Conversation <span aria-hidden="true">↗</span>
        </a>
      </section>
    </div>
  );
}
