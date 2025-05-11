import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";

const featuredProducts = [
  {
    id: '1',
    name: 'Apples',
    image: 'apple.jpg',
    description: 'Fresh and juicy apples direct from farm.'
  },
  {
    id: '2',
    name: 'Dairy Milk',
    image: 'dairymilk.jpeg',
    description: 'Smooth chocolate bar for your sweet cravings.'
  },
  {
    id: '3',
    name: 'Spinach',
    image: 'spinach.jpg',
    description: 'Organic green spinach rich in iron.'
  }
];

const recommendedProducts = [
  {
    id: '4',
    name: 'Bananas',
    image: 'bananas.jpg',
    description: 'Ripe, sweet bananas full of potassium.'
  },
  {
    id: '5',
    name: 'Tomatoes',
    image: 'tomatoes.jpg',
    description: 'Fresh organic tomatoes for your dishes.'
  },
  {
    id: '6',
    name: 'Cucumber',
    image: 'cucumber.jpg',
    description: 'Crisp and refreshing cucumbers.'
  }
];

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchTerm)}`);
    }
  };

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
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>

            <form className="d-flex me-3" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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

      {/* Hero Section */}
      <section className="hero-section text-center text-white d-flex align-items-center justify-content-center">
        <div className="hero-overlay p-5">
          <h1 className="display-5 fw-bold">Get Fresh Groceries Delivered to Your Door</h1>
          <p className="lead mt-3 mb-4">Healthy, Organic & Affordable — with love from Fresh Express</p>
          <Link to="/products" className="btn btn-lg btn-success fw-bold">🛒 Shop Now</Link>
        </div>
      </section>

      {/* Featured Products */}
      <div className="container py-5" id="products">
        <h2 className="text-center mb-5 text-success fw-bold">🌟 Featured Products</h2>
        <div className="row">
          {featuredProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card shadow-lg border-0 h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  onError={(e) => (e.target.style.display = "none")}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-success">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Products */}
      <div className="container py-5">
        <h2 className="text-center mb-5 text-success fw-bold">💡 Recommended Products</h2>
        <div className="row">
          {recommendedProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card shadow-lg border-0 h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  onError={(e) => (e.target.style.display = "none")}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-success">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="btn btn-secondary btn-sm position-fixed bottom-0 end-0 mb-4 me-4"
        style={{ zIndex: 10 }}
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

export default HomePage;
