import "./css/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <title>Home | Raj Computers</title>
      <div className="hero-content">
        <h1>
          Powering Your <span>Digital World</span>
        </h1>

        <p>
          Raj Computers delivers high-performance computers, expert repairs, and
          trusted IT solutions for homes and businesses. Fast service. Genuine
          parts. Reliable support.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore Services</button>
          <button
            className="secondary-btn"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;