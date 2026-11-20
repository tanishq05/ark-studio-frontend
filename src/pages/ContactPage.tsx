
import { useState, type FormEvent } from "react";
import "./ContactPage.css";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <span className="contact-eyebrow">
          LET'S CREATE SOMETHING BEAUTIFUL
        </span>

        <h1>
          Let's Start a <em>Conversation.</em>
        </h1>

        <p>
          Whether you're furnishing a space or exploring a custom design,
          we'd love to hear about your vision.
        </p>
      </section>

    {/* Location and Google Map */}
      <section className="contact-location">
        <div className="contact-location-heading">
          <span className="contact-eyebrow">FIND US</span>

          <h2>
            Visit Our <em>Studio.</em>
          </h2>

          <p>
            We'd love to welcome you. Visit us at our location in Chandigarh.
          </p>

          <p className="contact-address">
            Plot No. 162, Industrial Area Phase II,
            <br />
            Chandigarh, 160002, India
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Plot+No+162+Industrial+Area+Phase+II+Chandigarh+160002+India"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-map-link"
          >
            Get Directions ↗
          </a>
        </div>

        <div className="contact-map">
          <iframe
            title="ARK STUDIO location - Chandigarh"
            src="https://maps.google.com/maps?q=Plot%20No.%20162%2C%20Industrial%20Area%20Phase%20II%2C%20Chandigarh%20160002%2C%20India&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="contact-main">
        <div className="contact-intro">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Tell us about your <em>project.</em>
          </h2>

          <p>
            Share a few details with us. Our team will be able to understand
            your requirements and help you explore the possibilities.
          </p>

          <div className="contact-note">
            <span className="contact-note-number">01</span>
            <div>
              <h3>Made to your vision</h3>
              <p>
                Custom furniture concepts designed around your space and needs.
              </p>
            </div>
          </div>

          <div className="contact-note">
            <span className="contact-note-number">02</span>
            <div>
              <h3>For every kind of space</h3>
              <p>
                From private outdoor spaces to cafés, resorts and hospitality
                projects.
              </p>
            </div>
          </div>

          <div className="contact-note">
            <span className="contact-note-number">03</span>
            <div>
              <h3>Crafted with care</h3>
              <p>
                Thoughtful designs and handcrafted furniture made to last.
              </p>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="contact-form-wrap">
          <div className="contact-form-heading">
            <span className="contact-eyebrow">PROJECT ENQUIRY</span>
            <h2>How can we help?</h2>
            <p>Fill in the details below to get started.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">Phone Number *</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Email Address *</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-interest">
                What are you interested in?
              </label>

              <select
                id="contact-interest"
                name="interest"
                defaultValue=""
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="outdoor-furniture">Outdoor Furniture</option>
                <option value="dining-furniture">Dining Furniture</option>
                <option value="sofa-seating">Sofa & Seating</option>
                <option value="gazebos-pergolas">Gazebos & Pergolas</option>
                <option value="custom-furniture">Custom Furniture</option>
                <option value="commercial-project">Commercial Project</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">
                Tell us about your project *
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Share your requirements, space, preferred designs or any ideas you have..."
                required
              />
            </div>

            <button className="contact-submit" type="submit">
              Send Enquiry <span>↗</span>
            </button>

            {submitted && (
              <p className="contact-form-notice" role="status">
                Your details have been entered, but the form is not connected
                to an email or enquiry system yet.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Brand Message */}
      <section className="contact-bottom">
        <span className="contact-eyebrow">
          ARK STUDIO BY LOHAR CREATIONS
        </span>

        <h2>
          Crafted in Iron. <em>Designed for Living.</em>
        </h2>

        <p>Let's bring your ideas to life.</p>
      </section>

  
    </div>
  );
}
