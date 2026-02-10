import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'React.js', level: 85 }
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'PHP', level: 75 },
      { name: 'MySQL', level: 78 },
      { name: 'Python', level: 70 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Web Performance', level: 82 },
      { name: 'Problem Solving', level: 88 }
    ]
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-tag">&lt;skills&gt;</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="skills-stats">
          <div className="skill-stat">
            <div className="skill-stat-number">15+</div>
            <div className="skill-stat-label">Projects Completed</div>
          </div>
          <div className="skill-stat">
            <div className="skill-stat-number">12+</div>
            <div className="skill-stat-label">Skills Mastered</div>
          </div>
          <div className="skill-stat">
            <div className="skill-stat-number">8+</div>
            <div className="skill-stat-label">Technologies</div>
          </div>
          <div className="skill-stat">
            <div className="skill-stat-number">15+</div>
            <div className="skill-stat-label">Web Apps Built</div>
          </div>
        </div>

        <div className="skills-content">
          <div className="skill-category">
            <h3 className="category-title">
              <span className="category-icon">🎨</span>
              Frontend Development
            </h3>
            <div className="skill-list">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="skill-description">
                    {skill.name === 'HTML' && 'Semantic markup and modern web standards'}
                    {skill.name === 'CSS' && 'Advanced styling, animations, and responsive design'}
                    {skill.name === 'JavaScript' && 'ES6+, DOM manipulation, and modern JS features'}
                    {skill.name === 'React.js' && 'Hooks, Context API, and component architecture'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <span className="category-icon">⚙️</span>
              Backend Development
            </h3>
            <div className="skill-list">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="skill-description">
                    {skill.name === 'Node.js' && 'Server-side JavaScript and API development'}
                    {skill.name === 'PHP' && 'Web development and server scripting'}
                    {skill.name === 'MySQL' && 'Database design and query optimization'}
                    {skill.name === 'Python' && 'Currently learning for AI and automation'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <span className="category-icon">🛠️</span>
              Tools & Technologies
            </h3>
            <div className="skill-list">
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="skill-description">
                    {skill.name === 'Git & GitHub' && 'Version control and collaborative development'}
                    {skill.name === 'Responsive Design' && 'Mobile-first and cross-device compatibility'}
                    {skill.name === 'Web Performance' && 'Optimization and speed enhancement'}
                    {skill.name === 'Problem Solving' && 'Analytical thinking and debugging'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-footer">
          <span className="section-tag">&lt;/skills&gt;</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;

