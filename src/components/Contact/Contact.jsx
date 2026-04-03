// Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

const Contact = ({ SCRIPT_URL, API_KEY }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isFormValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    message.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || loading) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("key", API_KEY);
      formData.append("name", name.trim());
      formData.append("email", email.trim());
      formData.append("message", message.trim());
      formData.append("website", "");

      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Form submission error:", err);
      alert("❌ Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-form-zone">
      <p className="contact-instruction">
        TYPE YOUR NAME, EMAIL AND MESSAGE BELOW TO <br />
        PRE-REGISTER FOR EARLY ACCESS...
      </p>

      {submitted ? (
        <div className="success-box">
          <h3>SUCCESS!</h3>
          <p>Thank you for joining MITA early access.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              placeholder="YOUR NAME..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span className="star">*</span>
          </div>

          <div className="input-row">
            <input
              type="email"
              placeholder="YOUR EMAIL..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="star">*</span>
          </div>

          <div className="input-row">
            <input
              type="text"
              placeholder="YOUR MESSAGE..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <span className="star">*</span>
          </div>

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className="submit-btn"
          >
            {loading ? "SENDING..." : "PRE-REGISTER ↗"}
          </button>
        </form>
      )}

      {!submitted && <p className="spam-text">DON'T WORRY, WE WON'T SPAM YOU</p>}
    </section>
  );
};

export default Contact;