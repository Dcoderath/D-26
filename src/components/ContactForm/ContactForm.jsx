import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
// import './ContactForm.css'; // Optional if you have a CSS file

function ContactForm() {
  const [state, handleSubmit] = useForm("mnnvrajw");

  if (state.succeeded) {
    return <p>✅ Thanks for your message!</p>;
  }

  return (
    <div className="contact-form-container" style={{ padding: "2rem" }}>
      <h2>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        method="POST"
        action="https://formspree.io/f/mnnvrajw"
      >
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
