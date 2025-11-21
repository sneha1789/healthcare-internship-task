import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="contact" className="main-footer">
      <div className="container footer-grid-wrapper">
        <div className="footer-col branding-col">
          <h4 className="footer-title footer-logo-text">MedCare+</h4>
          <p className="footer-text">
            Your partner in health and wellness. We provide compassionate,
            expert care.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-list">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <a href="/#services" className="footer-link">
                Services
              </a>
            </li>
            <li>
              <Link to="/doctors" className="footer-link">
                Our Specialists
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col contact-info-col">
          <h4 className="footer-title">Get In Touch</h4>
          <p className="footer-text">
            📍 123 Health Blvd, Wellness City, CA 90210
          </p>
          <p className="footer-text">📞 (555) 123-4567</p>
          <p className="footer-text">📧 contact@medcareplus.com</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Working Hours</h4>
          <p className="footer-text">Mon - Fri: 8:00 AM - 7:00 PM</p>
          <p className="footer-text">Sat: 9:00 AM - 1:00 PM</p>
          <p className="footer-text footer-emergency">Emergency 24/7</p>
        </div>
      </div>
      <div className="footer-bottom-bar">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} MedCare+. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
