import React from 'react';
import { skills } from '../data/portfolioData';
import useReveal from '../hooks/useReveal';
import './Skills.css';

const CATEGORIES = {
  'Languages': skills.languages,
  'Backend': skills.backend,
  'Frontend': skills.frontend,
  'Database': skills.database,
  'Security': skills.security,
  'Tools & DevOps': skills.tools,
};

const Skills = () => {
  const ref = useReveal();
  return (
    <section className="skills" ref={ref}>
      <div className="container">
        <div className="section-label">Skills</div>
        <h2 className="section-title reveal">What I build with.</h2>

        <div className="skills-grid">
          {Object.entries(CATEGORIES).map(([category, items], i) => (
            <div
              className="skill-card glass-card reveal"
              key={category}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <h3 className="skill-card-title">{category}</h3>
              <div className="skill-tags">
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;