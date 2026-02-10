import React from 'react';
import './Footer.css';
import resumePDF from '../asesst/resume.pdf';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">Atharva</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <p className="footer-description">
              Full-stack developer passionate about creating innovative solutions
              and exceptional user experiences.
            </p>
            <div className="footer-location">
              <span className="location-icon">📍</span>
              <span>India</span>
            </div>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:Prajapatiatharva230@gmail.com">Prajapatiatharva230@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <a href="https://www.linkedin.com/in/atharva-prajapati-697342288/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile Apps</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Consulting</a></li>
              <li><a href="#services">Code Review</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Stay Connected</h3>
            <div className="social-links">
              <a href="https://github.com/AtharvaPrajapati" className="social-link" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">💻</span>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/atharva-prajapati-697342288/" className="social-link" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:Prajapatiatharva230@gmail.com" className="social-link">
                <span className="social-icon">📧</span>
                <span>Email</span>
              </a>
            </div>
            <div className="footer-actions">
              <a href={resumePDF} download="Atharva_Prajapati_Resume.pdf" className="footer-btn">Download Resume</a>
              <a href="https://www.linkedin.com/in/atharva-prajapati-697342288/" target="_blank" rel="noopener noreferrer" className="footer-btn secondary">Connect on LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Atharva Prajapati. Crafted with ❤️ in India
            </p>
            <div className="footer-meta">
              <span>Built with React & TypeScript</span>
              <span className="status-dot"></span>
              <span className="online-status">Online</span>
            </div>
          </div>
          <div className="footer-links-bottom">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#terms">Terms of Service</a>
            <span className="separator">•</span>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

