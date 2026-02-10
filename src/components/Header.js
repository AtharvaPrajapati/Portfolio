import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Atharva</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="header-status">
          <span className="status-indicator"></span>
          <span className="status-text">Available for opportunities</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

