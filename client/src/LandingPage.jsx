import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">Conosco</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Connect with Alumni and Students Across India</h1>
        <p>Your gateway to a powerful network of professionals and peers.</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="features">
        <div className="feature-item">
          <h3>Mentorship</h3>
          <p>Get guidance from experienced alumni.</p>
        </div>
        <div className="feature-item">
          <h3>Job Opportunities</h3>
          <p>Access exclusive job and internship listings.</p>
        </div>
        <div className="feature-item">
          <h3>Community</h3>
          <p>Join groups and participate in discussions.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Conosco. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
