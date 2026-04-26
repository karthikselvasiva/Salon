import SEO from '../components/SEO';
import { Scissors, Palette, Sparkles, Droplet } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      category: "Styling & Cuts",
      icon: <Scissors size={32} />,
      items: [
        { name: "Signature Cut", price: "From ₹6,500", desc: "Consultation, shampoo, custom cut, and blowout." },
        { name: "Transformative Cut", price: "From ₹9,000", desc: "Major style change, deep conditioning, cut, and finish." },
        { name: "Blowout & Style", price: "From ₹4,500", desc: "Shampoo, scalp massage, and professional blowout." },
        { name: "Event Updo", price: "From ₹7,500", desc: "Custom styling for weddings, galas, and special occasions." }
      ]
    },
    {
      category: "Color & Highlights",
      icon: <Palette size={32} />,
      items: [
        { name: "Single Process Color", price: "From ₹9,500", desc: "All-over permanent or semi-permanent color." },
        { name: "Partial Balayage", price: "From ₹14,500", desc: "Hand-painted highlights for a natural, sun-kissed look." },
        { name: "Full Balayage", price: "From ₹20,000", desc: "Comprehensive dimension and brightness." },
        { name: "Color Correction", price: "Consultation Required", desc: "Expert fixing of unwanted tones and banding." }
      ]
    },
    {
      category: "Treatments",
      icon: <Sparkles size={32} />,
      items: [
        { name: "Keratin Smoothing", price: "From ₹20,000", desc: "Frizz reduction and shine enhancement lasting up to 3 months." },
        { name: "Root Care Detox", price: "From ₹5,000", desc: "Scalp exfoliation and deep purification." },
        { name: "Hydration Mask", price: "From ₹3,500", desc: "Intense moisture infusion for dry, brittle hair." }
      ]
    }
  ];

  return (
    <div className="services-page animate-fade-in">
      <SEO 
        title="Services & Pricing | Root Care Salon" 
        description="Explore our range of luxury hair services including precision cuts, expert color, balayage, and restorative scalp treatments."
      />

      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="services-hero-text">Tailored treatments and styling designed to bring out your best.</p>
        </div>
      </section>

      <section className="section services-list-section">
        <div className="container">
          <div className="services-grid">
            {services.map((serviceGroup, index) => (
              <div key={index} className="service-category">
                <div className="category-header">
                  <div className="category-icon">{serviceGroup.icon}</div>
                  <h2>{serviceGroup.category}</h2>
                </div>
                <div className="category-items">
                  {serviceGroup.items.map((item, idx) => (
                    <div key={idx} className="service-item">
                      <div className="service-item-header">
                        <h3 className="service-name">{item.name}</h3>
                        <span className="service-price">{item.price}</span>
                      </div>
                      <p className="service-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pricing-note">
            <Droplet size={24} className="note-icon" />
            <p>
              <em>* Prices vary based on hair length, density, and the stylist's experience level. A complimentary consultation is included with every service.</em>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
