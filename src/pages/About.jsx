import SEO from '../components/SEO';
import { Award, Heart, Users } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      <SEO 
        title="About Us | Root Care Salon" 
        description="Learn about the history, values, and expert team behind Root Care, your premier destination for luxury hair styling."
      />

      <section className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p className="about-hero-text">Redefining hair care through passion, precision, and a commitment to healthy roots.</p>
        </div>
      </section>

      <section className="section story-section">
        <div className="container story-container">
          <div className="story-content">
            <h2>The Root Care Philosophy</h2>
            <p>
              Founded in 2018, Root Care began with a simple mission: to provide high-end salon services that don't compromise on hair health. We realized that true beauty starts from the foundation, the roots.
            </p>
            <p>
              Our salon is a sanctuary designed for relaxation and transformation. Every stylist at Root Care is trained in the latest techniques and understands the unique biology of hair. We listen, we consult, and we create looks that enhance your natural beauty while maintaining structural integrity.
            </p>
          </div>
          <div className="story-image">
            <div className="image-box-about"></div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="text-center mb-5">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <Award className="value-icon" size={40} />
              <h3>Excellence</h3>
              <p>We strive for perfection in every cut, color, and treatment, pushing the boundaries of modern styling.</p>
            </div>
            <div className="value-card">
              <Heart className="value-icon" size={40} />
              <h3>Holistic Health</h3>
              <p>We prioritize the long-term health of your hair by using sustainable, organic, and restorative products.</p>
            </div>
            <div className="value-card">
              <Users className="value-icon" size={40} />
              <h3>Inclusivity</h3>
              <p>We celebrate diversity. Our stylists are experts in handling all hair types, textures, and histories.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
