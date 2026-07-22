import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '30px 0', background: 'rgba(7,9,14,0.9)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React & AI Focus
        </p>

        <div style={{ display: 'flex', gap: '16px' }}>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
            <FaGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#0077b5'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
            <FaLinkedin />
          </a>
          <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-muted)', fontSize: '1.2rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-green)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;