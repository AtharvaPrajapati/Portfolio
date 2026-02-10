import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'A complete e-commerce solution with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      github: 'https://github.com/AtharvaPrajapati',
      demo: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'Frontend',
      description: 'Modern portfolio website with terminal aesthetic and smooth animations.',
      technologies: ['React', 'CSS3', 'JavaScript'],
      image: '💼',
      github: 'https://github.com/AtharvaPrajapati',
      demo: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      category: 'Full Stack',
      description: 'Collaborative task management tool with real-time updates and team features.',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      image: '✅',
      github: 'https://github.com/AtharvaPrajapati',
      demo: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'Frontend',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      technologies: ['React', 'API Integration', 'Chart.js'],
      image: '🌤️',
      github: 'https://github.com/AtharvaPrajapati',
      demo: '#'
    }
  ];

  const categories = ['All', 'Frontend', 'Full Stack', 'Mobile'];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-tag">&lt;projects&gt;</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my latest work and creative solutions</p>
        </div>

        <div className="projects-stats">
          <div className="project-stat">
            <div className="project-stat-number">15+</div>
            <div className="project-stat-label">Total Projects</div>
          </div>
          <div className="project-stat">
            <div className="project-stat-number">100+</div>
            <div className="project-stat-label">GitHub Stars</div>
          </div>
          <div className="project-stat">
            <div className="project-stat-number">1.5K+</div>
            <div className="project-stat-label">Project Views</div>
          </div>
        </div>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category} Projects
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.image}</div>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <span>GitHub</span>
                    <span className="link-arrow">→</span>
                  </a>
                  <a href={project.demo} className="project-link">
                    <span>Live Demo</span>
                    <span className="link-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <span className="section-tag">&lt;/projects&gt;</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;

