import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCheckCircle } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section style={{ padding: '100px 20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div className="badge-pill" style={{ marginBottom: '12px' }}>Portfolio Highlights</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Featured Engineering Work</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>
                  {project.title}
                </h3>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{
                      background: 'rgba(59, 130, 246, 0.12)',
                      color: '#60a5fa',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                <p style={{ color: '#9ca3af', fontSize: '0.95rem', marginBottom: '20px' }}>
                  {project.description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                  {project.achievements.map((a, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#d1d5db', fontSize: '0.88rem', marginBottom: '8px' }}>
                      <FaCheckCircle style={{ color: '#64f4ab', marginTop: '3px', flexShrink: 0 }} />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <a href={project.link} target="_blank" rel="noreferrer" style={{
                  flex: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: 'rgba(100, 244, 171, 0.15)',
                  color: '#64f4ab',
                  padding: '10px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px 16px',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  borderRadius: '10px',
                  textDecoration: 'none'
                }}>
                  <FaGithub />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;