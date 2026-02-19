import Hero from "../components/Hero";
import "../css/Home.css";

function Home() {
  return (
    <>
      <Hero />

      <section id="services" className="section">
        <h2>Featured Services</h2>
        <div className="features-grid stagger">
          <div className="card">
            <h3>Custom Software</h3>
            <p>End-to-end product development: UI/UX, frontend, backend, and QA.</p>
          </div>
          <div className="card">
            <h3>Cloud & DevOps</h3>
            <p>Cloud architecture, CI/CD, and monitoring for reliable delivery.</p>
          </div>
          <div className="card">
            <h3>API & Integrations</h3>
            <p>Design and implement secure APIs and integrate third-party services.</p>
          </div>
        </div>

        <br/>
        
        <h2>Meet The Team</h2>
        <div className="features-grid stagger">
          <div className="card">
            <h3>Raj</h3>
            <p>Founder & CTO — 12+ years shipping web and mobile products.</p>
          </div>
          <div className="card">
            <h3>Neha</h3>
            <p>Engineering Manager — leads backend and cloud architecture.</p>
          </div>
          <div className="card">
            <h3>Sameer</h3>
            <p>Product Designer — UX, prototyping, and user research.</p>
          </div>
        </div>
      </section>

      {/* <section className="section">
        <h2>How It Works</h2>
        <div className="features-grid stagger">
          <div className="card">
            <h3>1. Discovery</h3>
            <p>Product and requirements workshop to define scope and success metrics.</p>
          </div>
          <div className="card">
            <h3>2. Build</h3>
            <p>Agile development with iterative demos and QA.</p>
          </div>
          <div className="card">
            <h3>3. Launch & Iterate</h3>
            <p>Deploy to production, monitor, and continuously improve.
            </p>
          </div>
        </div>
      </section> */}

      {/* <section className="section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <blockquote className="testimonial">"Quick turnaround and my laptop runs like new." — Priya</blockquote>
          <blockquote className="testimonial">"Professional service and clear pricing." — Ahmed</blockquote>
        </div>
      </section> */}

      <section className="section cta-banner">
        <h2>Ready to get started?</h2>
        <p>Contact us for a free consultation and quote.</p>
        <div>
          <button className="primary-btn" onClick={() => (window.location.href = "/contact")}>Contact Us</button>
        </div>
      </section>
    </>
  );
}

export default Home;