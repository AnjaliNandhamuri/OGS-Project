import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ContactPage.css';

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">🥬 Fresh Express</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/contact">Contact</Link></li>
               <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link> {/* Added About Us link */}
              </li>
            </ul>
            <form className="d-flex me-3">
              <input className="form-control me-2" type="search" placeholder="Search products" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <Link to="/cart" className="btn btn-outline-dark me-2">
              <i className="bi bi-cart-fill"></i> Cart
            </Link>
            <Link to="/signin" className="btn btn-dark">Sign In / Log In</Link>
          </div>
        </div>
      </nav>

      {/* Contact Header */}
      <div className="contact-header text-center py-5 bg-light">
        <h1 className="text-success fw-bold">📞 Get in Touch</h1>
        <p className="lead text-muted">We're here to help you with your grocery needs!</p>
      </div>

      {/* Contact Form */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {formSubmitted && (
              <div className="alert alert-success text-center" role="alert">
                Thank you for contacting us! We'll get back to you shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="shadow-sm p-4 bg-white rounded">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="nameInput" placeholder="Your Name" required />
                <label htmlFor="nameInput"><i className="bi bi-person-fill me-2"></i>Your Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" required />
                <label htmlFor="emailInput"><i className="bi bi-envelope-fill me-2"></i>Email Address</label>
              </div>
              <div className="form-floating mb-4">
                <textarea className="form-control" placeholder="Leave a message here" id="messageInput" style={{ height: '150px' }} required></textarea>
                <label htmlFor="messageInput"><i className="bi bi-chat-text-fill me-2"></i>Your Message</label>
              </div>
              <button className="btn btn-success w-100 rounded-pill">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center">Our Location</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.636509017595!2d-122.42301848468102!3d37.77492947975959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e1c9a31a1%3A0x1fa107245db41761!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1625298452514!5m2!1sen!2sus"
                width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Button */}
      <div onClick={toggleChat} className="live-chat-btn position-fixed bottom-4 end-4 p-3 bg-success rounded-circle text-white">
        <i className="bi bi-chat-fill"></i>
      </div>

      {/* Live Chat Window */}
      {showChat && (
        <div className="live-chat-window position-fixed bottom-0 end-0 w-100 h-50 bg-white shadow-sm p-4">
          <div className="text-center">
            <h5 className="text-success">Live Chat</h5>
            <p>Chat with our support team.</p>
            <textarea className="form-control" rows="4" placeholder="Type your message..."></textarea>
            <button className="btn btn-success w-100 mt-3">Send</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-success text-white text-center py-4 mt-auto">
        <p className="mb-1 fw-semibold">&copy; 2025 Fresh Express</p>
        <p className="mb-0">📞 Support: +1 800-123-4567 | ✉️ help@freshexpress.com</p>
        <div className="social-links mt-2">
          <Link to="#" className="text-white me-3"><i className="bi bi-facebook"></i></Link>
          <Link to="#" className="text-white me-3"><i className="bi bi-twitter"></i></Link>
          <Link to="#" className="text-white"><i className="bi bi-instagram"></i></Link>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
