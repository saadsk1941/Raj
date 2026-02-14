import "./css/contact.css";

function Contact() {
  return (
    <section className="contact">
      <title>Contact | Raj Computers</title>
      <div className="contact-wrapper">
        {/* LEFT */}
        <div className="contact-left">
          <h1>Let's Work Together</h1>
          <p>
            Have a project in mind? Want to build something amazing? Feel free
            to reach out.
          </p>
        </div>

        {/* RIGHT */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows={5} placeholder="Your Message"></textarea>

          <button>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;