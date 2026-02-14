import "./css/projects.css";

function Projects() {
  return (
    <section className="projects">
      <title>Projects | Raj Computers</title>
      <div className="projects-wrapper">
        <h1 className="projects-title">My Projects</h1>

        <div className="projects-grid">
          <div className="project-card">
            <h2>Payroll System</h2>
            <p>
              Full-stack payroll software with automated salary generation and
              employee management.
            </p>
            <button>View Project</button>
          </div>

          <div className="project-card">
            <h2>CRUD Application</h2>
            <p>React + PHP app with authentication and filtering.</p>
            <button>View Project</button>
          </div>

          <div className="project-card">
            <h2>Excel Report Tool</h2>
            <p>Dynamic Excel reports using PhpSpreadsheet.</p>
            <button>View Project</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;