import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold text-success" to="/">
            Fresh Express
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
            </ul>
            <form className="d-flex me-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <Link to="/cart" className="btn btn-outline-dark me-2">
              🛒 Cart
            </Link>
            <Link to="/signin" className="btn btn-dark">Sign In / Log In</Link>
          </div>
        </div>
      </nav>

      {/* About Us Section */}
      <section className="about-us-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 text-success fw-bold">🌱 About Fresh Express</h2>
          <div className="row">
            <div className="col-lg-6">
              <img
                src="about-us.jpg" // Replace with your actual image
                alt="About Fresh Express"
                className="img-fluid rounded shadow-lg"
                onError={(e) => (e.target.src = 'placeholder.jpg')} // Fallback image
              />
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <p className="lead">
                Welcome to Fresh Express, your premier online destination for fresh, organic, and affordable groceries. We believe that everyone deserves access to high-quality food that nourishes both their bodies and the planet.
              </p>
              <p>
                Our journey began with a simple vision: to bridge the gap between local farmers and consumers, ensuring that the freshest produce reaches your doorstep with ease and convenience. We carefully select our suppliers, prioritizing those who practice sustainable farming methods and share our commitment to quality.
              </p>
              <p>
                At Fresh Express, we offer a wide range of products, from crisp fruits and vibrant vegetables to essential household items and delightful bakery treats. Our dedicated team works tirelessly to ensure that your orders are handled with care and delivered promptly, making your grocery shopping experience seamless and enjoyable.
              </p>
              <p>
                We are more than just a grocery store; we are a community that values health, sustainability, and customer satisfaction. Thank you for choosing Fresh Express and being a part of our journey towards a healthier and more sustainable future.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4 text-center">
              <h3 className="text-success fw-bold">Our Mission</h3>
              <p>To provide access to fresh, healthy, and affordable groceries while supporting sustainable practices and local communities.</p>
            </div>
            <div className="col-md-4 text-center">
              <h3 className="text-success fw-bold">Our Vision</h3>
              <p>To be the leading online grocery platform that empowers healthier lifestyles and fosters a sustainable food ecosystem.</p>
            </div>
            <div className="col-md-4 text-center">
              <h3 className="text-success fw-bold">Our Values</h3>
              <ul>
                <li>🌱 Quality and Freshness</li>
                <li>🌎 Sustainability</li>
                <li>🤝 Community Support</li>
                <li>😊 Customer Satisfaction</li>
                <li>💰 Affordability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        className="btn btn-secondary btn-sm position-fixed bottom-0 end-0 mb-4 me-4"
        style={{ zIndex: 10 }}
        onClick={scrollToTop}
      >
        Back to Top
      </button>

      {/* Footer */}
      <footer className="footer bg-success text-white text-center py-4">
        <p className="mb-1">&copy; 2025 Fresh Express. All rights reserved.</p>
        <p className="mb-0">📞 Contact Us: +1 800-123-4567</p>
      </footer>
    </>
  );
};

export default AboutPage;