import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaCheckCircle } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section style={{ padding: '100px 20px', background: '#0d0d0d' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '50px', background: 'linear-gradient(135deg, #64f4ab, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {projects.map(project => (
            <div key={project.id} style={{ background: '#1a1a1a', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '15px' }}>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '10px' }}>{project.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tech.map(tech => (
                    <span key={tech} style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '4px 14px', borderRadius: '15px', fontSize: '0.8rem', border: '1px solid rgba(59, 130, 246, 0.2)' }}>{tech}</span>
                  ))}
                </div>
              </div>
              <p style={{ color: '#a0aec0', lineHeight: '1.6', marginBottom: '20px' }}>{project.description}</p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', flex: 1 }}>
                {project.achievements.map((achievement, index) => (
                  <li key={index} style={{ color: '#a0aec0', fontSize: '0.95rem', padding: '5px 0', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <FaCheckCircle style={{ color: '#64f4ab', marginTop: '4px', flexShrink: 0 }} />
                    {achievement}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '15px', marginTop: 'auto' }}>
                <a href={project.link} target="_blank" rel="noreferrer" style={{ color: '#64f4ab', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" style={{ color: '#64f4ab', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                  <FaGithub /> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
