import { Link } from 'react-router-dom';
import { Scissors, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <Scissors size={24} />
            <span>Root Care</span>
          </div>
          <p className="footer-description">
            Elevating your style with premium hair care, cutting-edge techniques, and a relaxing salon experience tailored just for you.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/services">Services & Pricing</Link></li>
            <li><Link to="/contact">Book Appointment</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-list">
            <li><Link to="/services">Precision Cuts</Link></li>
            <li><Link to="/services">Color & Highlights</Link></li>
            <li><Link to="/services">Hair Treatments</Link></li>
            <li><Link to="/services">Bridal Styling</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="contact-list">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>123 Style Avenue, NY 10012</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>hello@rootcare.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Root Care Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
