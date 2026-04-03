import React from 'react';
import { BsArrowReturnRight } from "react-icons/bs";
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section-wrapper">
      <div className="contact-grid">
        
        {/* Left Card - 60% Width */}
        <div className="contact-card card-black">
          <div className="card-top">
            <h4 className="label-bold">You feel it too?</h4>
            <p className="description-serif">Let’s talk, no strings attached</p>
          </div>
          <div className="card-bottom">
            <div className="interactive-group">
              <BsArrowReturnRight className="hover-icon" />
              <h2 className="massive-text">Send Request</h2>
            </div>
          </div>
        </div>

        {/* Right Card - 40% Width */}
        <div className="contact-card card-pink">
          <div className="card-top">
            <h4 className="label-bold">Our free offer for B2B tech scaleups!</h4>
            <p className="description-serif">
              We identify high-impact messaging and brand fixes you can implement within 24 hours.
            </p>
          </div>
          <div className="card-bottom">
            <div className="interactive-group">
              <BsArrowReturnRight className="hover-icon" />
              <h2 className="massive-text">Brand<br />Masterplan</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;