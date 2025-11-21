import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content-wrapper">
        <Link to="/" className="header-logo">
          <div className="logo-wrapper">
            <span className="logo-icon">⚕️</span>
            MedCare+
          </div>
        </Link>

        <nav className="header-nav">
          <div className="nav-group">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <div className="nav-dropdown">
              <a href="/#services" className="nav-link">
                Services ▾
              </a>
              <div className="dropdown-menu">
                <Link to="/primary-care" className="dropdown-item">
                  Primary Care
                </Link>
                <Link to="/cardiology" className="dropdown-item">
                  Cardiology
                </Link>
                <Link to="/pediatrics" className="dropdown-item">
                  Pediatrics
                </Link>
              </div>
            </div>
            <Link to="/doctors" className="nav-link">
              Our Doctors
            </Link>
            <a href="/#contact" className="nav-link">
              Contact
            </a>
          </div>
          <div className="nav-actions">
            <button className="btn btn-secondary-header">
              <span className="btn-icon">📅</span>
              Book Appointment
            </button>
          </div>
        </nav>

        <button
          className={`mobile-menu-button ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-list">
          <Link
            to="/"
            className="mobile-menu-item"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <a
            href="/#services"
            className="mobile-menu-item"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <Link
            to="/doctors"
            className="mobile-menu-item"
            onClick={() => setIsOpen(false)}
          >
            Our Doctors
          </Link>
          <a
            href="/#contact"
            className="mobile-menu-item"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <div className="mobile-menu-actions">
            <button className="btn btn-full-width-mobile">
              <span className="btn-icon">📅</span>
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
