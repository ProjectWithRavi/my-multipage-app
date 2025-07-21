import '../styles/contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Get in touch with us!</p>
      <p>Email: {import.meta.env.VITE_CONTACT_EMAIL}</p>
    </div>
  );
}

export default Contact;