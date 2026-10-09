import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCode, FaRobot, FaServer } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const STATS = [
  { value: '14+', label: 'Voice AI Intents' },
  { value: '<100ms', label: 'AI Response Time' },
  { value: '99.9%', label: 'Uptime' },
];

const SERVICES = [
  {
    icon: <FaRobot />,
    title: 'AI Chatbots & Voice Assistants',
    text: 'Add an AI chat or voice assistant to your website or app, connected to the LLM of your choice.'
  },
  {
    icon: <FaCode />,
    title: 'React Front Ends',
    text: 'Landing pages and dashboards built in React.js and connected to your REST API.'
  },
  {
    icon: <FaServer />,
    title: 'Spring Boot APIs',
    text: 'REST API development, bug fixes and performance tuning for Java Spring Boot back ends.'
  },
];

const Hero = () => {
  return (
    <section className="hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', padding: '120px 20px 60px' }}>
      {/* Background Ambient Glow Blur */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(100,244,171,0.12) 0%, rgba(59,130,246,0.08) 50%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-pill" style={{ marginBottom: '24px' }}>
            <span className="pulse-dot" />
            Open for Engineering Roles & AI Projects
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: '800', lineHeight: 1.15, marginBottom: '24px' }}
        >
          Building intelligent apps with <br />
          <span className="gradient-text">{personalInfo.title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: '1.2rem', color: '#9ca3af', maxWidth: '720px', marginBottom: '40px' }}
        >
          {personalInfo.summary}
        </motion.p>

        {/* Dynamic Animated Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '40px' }}
        >
          {STATS.map((s, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
              <div className="gradient-text" style={{ fontSize: '2rem', fontWeight: '800' }}>{s.value}</div>
              <div style={{ color: '#9ca3af', fontSize: '0.9rem', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <Link to="/projects" className="btn-primary" style={{
            background: 'linear-gradient(135deg, #64f4ab, #3b82f6)',
            color: '#07090e',
            fontWeight: '700',
            padding: '14px 28px',
            borderRadius: '12px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 20px rgba(100,244,171,0.3)'
          }}>
            Explore Work <FaArrowRight />
          </Link>
          <a href="/resume.pdf" download style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff',
            fontWeight: '600',
            padding: '14px 28px',
            borderRadius: '12px',
            textDecoration: 'none'
          }}>
            Download CV
          </a>
        </motion.div>

        {/* Freelance Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ marginTop: '72px' }}
        >
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '8px' }}>
            Available for <span className="gradient-text">freelance projects</span>
          </h2>
          <p style={{ color: '#9ca3af', marginBottom: '24px' }}>
            Fixed scope, clear timeline, regular updates.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '28px' }}>
            {SERVICES.map((s, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                <div style={{ color: '#64f4ab', fontSize: '1.4rem', marginBottom: '12px' }}>{s.icon}</div>
                <div style={{ fontWeight: '700', marginBottom: '8px' }}>{s.title}</div>
                <div style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: 1.6 }}>{s.text}</div>
              </div>
            ))}
          </div>
          <a href={`mailto:${personalInfo.email}?subject=Project%20enquiry`} style={{
            background: 'linear-gradient(135deg, #64f4ab, #3b82f6)',
            color: '#07090e',
            fontWeight: '700',
            padding: '14px 28px',
            borderRadius: '12px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <FaEnvelope /> Hire me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;