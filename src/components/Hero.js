import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImage from '../asesst/profile.jpg';
import resumePDF from '../asesst/resume.pdf';

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'Frontend Specialist',
    'Backend Engineer',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-profile-section">
          <div className="profile-image-container">
            <img src={profileImage} alt="Atharva Prajapati" className="profile-image" />
            <div className="profile-ring"></div>
          </div>
        </div>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="btn red"></span>
              <span className="btn yellow"></span>
              <span className="btn green"></span>
            </div>
            <div className="terminal-title">portfolio.exe</div>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">whoami</span>
            </div>
            <div className="terminal-output">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Atharva Prajapati</span>
              </h1>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">cat role.txt</span>
            </div>
            <div className="terminal-output">
              <h2 className="hero-subtitle">
                Currently working as
              </h2>
              <div className="role-container">
                <span className="role-text">{roles[roleIndex]}</span>
              </div>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command typing">echo "Let's build something amazing"</span>
            </div>
            <div className="hero-description">
              <p>
                Passionate about building beautiful, functional and user-focused web applications. 
                Pursuing Computer Science Engineering with hands-on experience in frontend development, 
                real-world projects, and modern web technologies.
              </p>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">GitHub Stars</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Coffee Cups</div>
              </div>
            </div>
            <div className="hero-actions">
              <a href={resumePDF} download="Atharva_Prajapati_Resume.pdf" className="btn-primary">
                <span>Download Resume</span>
              </a>
              <a href="https://www.linkedin.com/in/atharva-prajapati-697342288/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <span>Connect with me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

