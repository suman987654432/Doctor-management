import React from 'react';
import '../css/contact.css';
import image from "../assets/book4.jpg"
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact us</h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <textarea placeholder="Message" rows="4" required></textarea>
          </div>
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>
      <div className="contact-image">
        <img src={image} alt="Contact Illustration" />
      </div>
    </div>
  );
};

export default Contact;
