import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const STATS = [
  { value: '2+', label: 'Projects shipped' },
  { value: '99.9%', label: 'Uptime' },
  { value: '30%', label: 'Faster APIs' },
];

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Open to work
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
          <br />
          {personalInfo.title}
        </h1>

        <p className="hero-summary">{personalInfo.summary}</p>

        <div className="hero-stats">
          {STATS.map((s) => (
            <div className="hero-stat" key={s.label}>
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary">
            View my work <FaArrowRight />
          </Link>
          <a href="/resume.pdf" className="btn btn-outline" download>
            Download CV
          </a>
        </div>

        <div className="hero-social">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;