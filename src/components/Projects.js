import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaCheckCircle } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import useReveal from '../hooks/useReveal';
import './Projects.css';

const Projects = () => {
  const ref = useReveal();
  return (
    <section className="projects" ref={ref}>
      <div className="container">
        <div className="section-label">Work</div>
        <h2 className="section-title reveal">Featured projects.</h2>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              className="project-card glass-card reveal"
              key={project.id}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="project-top">
                <h3>{project.title}</h3>
                <div className="project-tech">
                  {project.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              <ul className="project-achievements">
                {project.achievements.map((a, idx) => (
                  <li key={idx}><FaCheckCircle className="achievement-icon" />{a}</li>
                ))}
              </ul>

              <div className="project-links">
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link project-link-primary">
                  <FaExternalLinkAlt /> Live demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                  <FaGithub /> Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;