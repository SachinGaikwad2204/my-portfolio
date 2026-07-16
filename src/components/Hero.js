import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaAward, FaProjectDiagram } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 20px', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 30px 80px' }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(100, 244, 171, 0.1)', color: '#64f4ab', padding: '8px 20px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '500', border: '1px solid rgba(100, 244, 171, 0.2)', marginBottom: '25px' }}>
            Open to Work
          </div>
          <h1 style={{ fontSize: '4rem', marginBottom: '10px', color: '#fff' }}>
            Hi, I'm <span style={{ background: 'linear-gradient(135deg, #64f4ab, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{personalInfo.name.split(' ')[0]}</span>
          </h1>
          <h2 style={{ fontSize: '2rem', color: '#64f4ab', marginBottom: '20px' }}>{personalInfo.title}</h2>
          <p style={{ fontSize: '1.2rem', color: '#a0aec0', lineHeight: '1.8', marginBottom: '30px' }}>{personalInfo.summary}</p>
          
          <div style={{ display: 'flex', gap: '40px', marginBottom: '35px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FaProjectDiagram style={{ fontSize: '1.8rem', color: '#64f4ab', marginBottom: '5px' }} />
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff' }}>2+</span>
              <label style={{ fontSize: '0.9rem', color: '#a0aec0' }}>Projects</label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FaCode style={{ fontSize: '1.8rem', color: '#64f4ab', marginBottom: '5px' }} />
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff' }}>99.9%</span>
              <label style={{ fontSize: '0.9rem', color: '#a0aec0' }}>Uptime</label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FaAward style={{ fontSize: '1.8rem', color: '#64f4ab', marginBottom: '5px' }} />
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff' }}>30%</span>
              <label style={{ fontSize: '0.9rem', color: '#a0aec0' }}>Performance</label>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '35px', flexWrap: 'wrap' }}>
            <Link to="/projects" style={{ display: 'inline-block', padding: '15px 40px', background: 'linear-gradient(135deg, #64f4ab, #3b82f6)', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontWeight: '600', transition: 'all 0.3s ease', border: 'none', cursor: 'pointer' }}>
              View My Work
            </Link>
            <a href="/resume.pdf" style={{ display: 'inline-block', padding: '15px 40px', background: 'transparent', color: '#64f4ab', textDecoration: 'none', borderRadius: '50px', fontWeight: '600', border: '2px solid #64f4ab', transition: 'all 0.3s ease', cursor: 'pointer' }} download>
              Download CV
            </a>
          </div>
          
          <div style={{ display: 'flex', gap: '25px' }}>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: '#fff', fontSize: '1.8rem', transition: 'all 0.3s ease' }}>
              <FaGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: '#fff', fontSize: '1.8rem', transition: 'all 0.3s ease' }}>
              <FaLinkedin />
            </a>
            <a href={"mailto:" + personalInfo.email} style={{ color: '#fff', fontSize: '1.8rem', transition: 'all 0.3s ease' }}>
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
