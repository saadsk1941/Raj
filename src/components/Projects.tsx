import "./css/projects.css";

function Projects() {
  return (
    <section className="projects">
      <title>Projects | Raj Computers</title>
      <div className="projects-wrapper">
        <h1 className="projects-title">Case Studies & Work</h1>

        <div className="projects-grid">
          <div className="project-card">
            <h2>SaaS Platform</h2>
            <p>Built a multi-tenant SaaS platform with role-based access, billing, and analytics.</p>
            <button onClick={() => window.open('#')}>View Case</button>
          </div>

          <div className="project-card">
            <h2>Mobile Marketplace</h2>
            <p>End-to-end mobile marketplace (iOS & Android) with real-time messaging and payments.</p>
            <button onClick={() => window.open('#')}>View Case</button>
          </div>

          <div className="project-card">
            <h2>API Integration</h2>
            <p>Integrated multiple third-party services and built a stable public API for partners.</p>
            <button onClick={() => window.open('#')}>View Case</button>
          </div>

          <div className="project-card">
            <h2>Data Pipeline</h2>
            <p>Implemented ETL pipelines and dashboards for business intelligence.</p>
            <button onClick={() => window.open('#')}>View Case</button>
          </div>

          <div className="project-card">
            <h2>Legacy Modernization</h2>
            <p>Rewrote legacy monolith into microservices with zero-downtime migration.</p>
            <button onClick={() => window.open('#')}>View Case</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;