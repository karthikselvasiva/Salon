import SEO from '../components/SEO';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in">
      <SEO 
        title="Contact Us | Book Appointment | Root Care" 
        description="Get in touch with Root Care salon to book your next appointment. Find our location, hours, and contact details."
      />

      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="contact-hero-text">We'd love to hear from you. Book an appointment or ask us any questions.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-container">
          <div className="contact-info-wrapper">
            <h2>Salon Information</h2>
            <p className="contact-intro">
              Visit our premium salon in the heart of the city for an unforgettable hair care experience.
            </p>
            
            <div className="info-grid">
              <div className="info-item">
                <MapPin className="info-icon" size={28} />
                <div>
                  <h3>Location</h3>
                  <p>123 Style Avenue<br />New York, NY 10012</p>
                </div>
              </div>
              
              <div className="info-item">
                <Phone className="info-icon" size={28} />
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567<br />Mon - Sat</p>
                </div>
              </div>
              
              <div className="info-item">
                <Mail className="info-icon" size={28} />
                <div>
                  <h3>Email</h3>
                  <p>hello@rootcare.com<br />Appointments & Inquiries</p>
                </div>
              </div>
              
              <div className="info-item">
                <Clock className="info-icon" size={28} />
                <div>
                  <h3>Hours</h3>
                  <p>Mon - Fri: 9am - 8pm<br />Sat: 9am - 6pm<br />Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <h2>Send a Message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Jane Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="jane@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Interested Service</label>
                <select id="service">
                  <option value="">Select a service...</option>
                  <option value="cut">Haircut & Styling</option>
                  <option value="color">Color & Highlights</option>
                  <option value="treatment">Hair Treatment</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
