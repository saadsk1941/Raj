import "./css/about.css";

function About() {
  return (
    <section className="about">
      <title>About | Raj Computers</title>
      <div className="about-wrapper">
        <div className="about-left">
          <h1 className="about-title">About Raj Computers</h1>
          <p>
            Raj Computers provides reliable computer sales, repairs, and IT
            support for homes and small businesses. We focus on clear
            communication, fast turnaround, and honest pricing.
          </p>

          <ul className="about-list">
            <li><strong>Founded:</strong> 2014</li>
            <li><strong>Expertise:</strong> Product design & engineering</li>
            <li><strong>Service:</strong> Consultancy, development, and support</li>
            <li><strong>Hours:</strong> Mon–Fri 9:00 — 18:00</li>
          </ul>
        </div>

        <div className="about-right">
          <div className="skills-box">
            <h2>Core Services</h2>

              <div className="skill-grid">
                <div className="skill-card">Custom Web Applications</div>
                <div className="skill-card">Mobile Apps (iOS & Android)</div>
                <div className="skill-card">Cloud Architecture</div>
                <div className="skill-card">Data Engineering</div>
                <div className="skill-card">DevOps & CI/CD</div>
              </div>
          </div>

          <div className="exp-box">
            <h2>Why Customers Trust Us</h2>

            <div className="exp-card">
              <h3>Transparent Pricing</h3>
              <p>Clear quotes before any repairs — no surprises.</p>
            </div>

            <div className="exp-card">
              <h3>Experienced Technicians</h3>
              <p>Certified staff with years of hands-on experience.</p>
            </div>
            <div className="exp-card">
              <h3>Community First</h3>
              <p>We support local schools and small businesses with discounted rates.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;