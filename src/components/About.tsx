import "./css/about.css"; function About() { return (
<section className="about">
  <title>About | Raj Computers</title>
  <div className="about-wrapper">
    {/* LEFT SIDE */}
    <div className="about-left">
      <h1>About Me</h1>
      <p>
        I'm a passionate developer who loves building modern web applications
        with beautiful user experiences.
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="about-right">
      <div className="skills-box">
        <h2>My Skills</h2>

        <div className="skill-grid">
          <div className="skill-card">React</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">PHP</div>
          <div className="skill-card">MySQL</div>
          <div className="skill-card">Python</div>
        </div>
      </div>

      <div className="exp-box">
        <h2>Experience</h2>

        <div className="exp-card">
          <h3>Frontend Developer</h3>
          <p>Built responsive dashboards and enterprise apps.</p>
        </div>

        <div className="exp-card">
          <h3>Backend Developer</h3>
          <p>Designed APIs and handled large scale databases.</p>
        </div>
      </div>
    </div>
  </div>
</section>
); } export default About;