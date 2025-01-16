import React from 'react';
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h5>Doctor appintenment</h5>
          <p>Your go-to platform for all things books! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi modi consequuntur quam, repellat iste optio reiciendis eligendi unde qui repellendus natus cumque quas architecto vero id. Nostrum neque harum aliquid!
          </p>
        </div>
        <div className="footer-section quick-links">
          <h5>Quick Links</h5>
          <div className="quick-links-columns">
            <div>
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/insert">Insert</a></li>
                <li><a href="/display">Display</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><a href="/search">Search</a></li>
                <li><a href="/update">Update</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

          </div>
        </div>
        <div className="footer-section">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 BOOK SELL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
