import { useState } from "react";
import "./css/contact.css";

function Contact() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section className="contact">
      <title>Contact | Raj Computers</title>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1>Let's Work Together</h1>
          <p>
            Tell us about your issue or project. We offer free consultations
            and transparent quotes.
          </p>

          <div className="contact-info">
            <div><strong>Phone:</strong> (555) 123-4567</div>
            <div><strong>Email:</strong> hello@rajsoftware.local</div>
            <div><strong>Address:</strong> 123 Main St, YourCity</div>
            <div><strong>Hours:</strong> Mon–Fri 9:00 — 18:00</div>
            <div className="socials">Follow: <a href="#">Twitter</a> • <a href="#">LinkedIn</a></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea name="message" rows={5} placeholder="Your Message" required></textarea>

          <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Message"}</button>

          {status === "sent" && <div className="form-success">Thanks — we'll reply shortly.</div>}
        </form>
      </div>
    </section>
  );
}

export default Contact;