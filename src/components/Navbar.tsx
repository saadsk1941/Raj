import "./css/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo"><img src="public/LGRJ.png" width="25%" /></h2>

      <button
        className={`nav-toggle ${open ? "open" : ""}`}
        aria-label="Toggle navigation"
        onClick={() => setOpen((s) => !s)}
      >
        <span className="hamburger" />
      </button>

      <div className={`navLinks ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;