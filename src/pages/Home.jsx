import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      <SEO 
        title="Root Care | Luxury Hair Styling & Treatments" 
        description="Transform your look with Root Care's expert stylists. Specializing in precision cuts, custom colors, and restorative treatments."
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="subtitle">Premium Salon Experience</span>
            <h1 className="hero-title">Discover Your Best Hair Yet</h1>
            <p className="hero-text">
              Expert stylists, luxurious treatments, and a relaxing atmosphere dedicated to your personal style and hair health.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Book Appointment</Link>
              <Link to="/services" className="btn btn-outline">Explore Services</Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-placeholder">
              {/* Aesthetic CSS Pattern / Gradient */}
              <div className="gradient-sphere"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <Star className="feature-icon" size={32} />
              <h3>Expert Stylists</h3>
              <p>Our team consists of award-winning professionals with years of high-end salon experience.</p>
            </div>
            <div className="feature-card">
              <CheckCircle className="feature-icon" size={32} />
              <h3>Premium Products</h3>
              <p>We exclusively use organic, high-performance hair care products that nourish from root to tip.</p>
            </div>
            <div className="feature-card">
              <Clock className="feature-icon" size={32} />
              <h3>Relaxing Ambiance</h3>
              <p>Enjoy a serene environment designed to give you a moment of peace during your busy day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="section highlight">
        <div className="container highlight-container">
          <div className="highlight-image">
            <div className="image-box"></div>
          </div>
          <div className="highlight-content">
            <h2>The Root Care Philosophy</h2>
            <p>
              We believe that great hair starts at the roots. Our approach combines state-of-the-art styling techniques with holistic hair care practices to ensure your hair not only looks stunning but remains perfectly healthy.
            </p>
            <ul className="highlight-list">
              <li><CheckCircle size={20} className="list-icon"/> Personalized consultations</li>
              <li><CheckCircle size={20} className="list-icon"/> Sustainable and cruelty-free products</li>
              <li><CheckCircle size={20} className="list-icon"/> Transparent pricing with no hidden fees</li>
            </ul>
            <Link to="/about" className="link-with-icon">
              Read Our Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container cta-container">
          <h2>Ready for a Transformation?</h2>
          <p>Book your appointment today and let our experts craft the perfect look for you.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Schedule Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
