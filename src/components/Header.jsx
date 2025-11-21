import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="container header-content-wrapper">
        <Link to="/" className="header-logo">
          MedCare+
        </Link>

        <nav className="header-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <a href="/#services" className="nav-link">
            Services
          </a>
          <Link to="/doctors" className="nav-link">
            Doctors
          </Link>
          <a href="/#contact" className="nav-link">
            Contact
          </a>
          <button className="btn btn-secondary-header">Book Now</button>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu-dropdown">
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
              Doctors
            </Link>
            <a
              href="/#contact"
              className="mobile-menu-item"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button className="btn btn-full-width-mobile">Book Now</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
