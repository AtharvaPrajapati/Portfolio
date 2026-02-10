import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-tag">&lt;about&gt;</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate developer crafting digital experiences with code and creativity</p>
        </div>

        <div className="about-content">
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">📁</div>
              <div className="stat-value">15+</div>
              <div className="stat-name">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-value">1+</div>
              <div className="stat-name">Years Exp</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-value">10+</div>
              <div className="stat-name">Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💻</div>
              <div className="stat-value">500+</div>
              <div className="stat-name">Commits</div>
            </div>
          </div>

          <div className="about-info">
            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">Location</div>
                <div className="info-value">India</div>
              </div>
              <div className="info-item">
                <div className="info-label">Experience</div>
                <div className="info-value">1+ Years</div>
              </div>
              <div className="info-item">
                <div className="info-label">Coffee Consumed</div>
                <div className="info-value">∞ Cups</div>
              </div>
              <div className="info-item">
                <div className="info-label">Currently Learning</div>
                <div className="info-value">AI & Cloud</div>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-number">500+</div>
                <div className="feature-badge">+15%</div>
              </div>
              <div className="feature-title">Functions</div>
              <div className="feature-subtitle">Clean Code</div>
              <div className="feature-description">
                Writing maintainable, efficient code that scales with modern best practices
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-number">12+</div>
                <div className="feature-badge">+8%</div>
              </div>
              <div className="feature-title">Teams</div>
              <div className="feature-subtitle">Team Player</div>
              <div className="feature-description">
                Collaborating effectively in agile environments with cross-functional teams
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-number">15+</div>
                <div className="feature-badge">+22%</div>
              </div>
              <div className="feature-title">Ideas</div>
              <div className="feature-subtitle">Innovation</div>
              <div className="feature-description">
                Always exploring cutting-edge technologies and creative problem-solving
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-number">98%</div>
                <div className="feature-badge">+12%</div>
              </div>
              <div className="feature-title">Speed</div>
              <div className="feature-subtitle">Performance</div>
              <div className="feature-description">
                Optimizing applications for lightning-fast speed and exceptional UX
              </div>
            </div>
          </div>

          <div className="about-description">
            <p>
              I'm currently pursuing a diploma in Computer Science Engineering with a passion for creating 
              innovative digital solutions. My journey in tech has been driven by curiosity and a desire to 
              solve real-world problems through code.
            </p>
            <p>
              Skilled in modern web technologies including React.js, JavaScript, HTML5, CSS3, and backend 
              development. Currently expanding my expertise in Python for AI and automation, always staying 
              ahead of the technology curve.
            </p>
            <p>
              I am fueled by the satisfaction of turning complex problems into elegant solutions. My goal is 
              not just to write code, but to create meaningful digital experiences that make a difference.
            </p>
          </div>
        </div>

        <div className="section-footer">
          <span className="section-tag">&lt;/about&gt;</span>
        </div>
      </div>
    </section>
  );
};

export default About;

