import "./css/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <title>Home | Raj Computers</title>
      <div className="hero-content">
        <h1>Raj Computers — <span>Building Reliable Products</span></h1>
        <p className="hero-sub">We build web & mobile applications, scalable cloud platforms, and integrations that grow with your customers.</p>
        <ul className="hero-features">
          <li>Product strategy & discovery</li>
          <li>Design-driven engineering</li>
          <li>Cloud-native deployments</li>
        </ul>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => (window.location.href = "#services")}>Our Services</button>
          <button className="secondary-btn" onClick={() => (window.location.href = "/contact")}>Request Proposal</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;