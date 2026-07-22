import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaServer, FaCode, FaDatabase, FaShieldAlt, FaTools, FaCheck } from 'react-icons/fa';
import { skills } from '../data/portfolioData';

const skillCategories = [
  { key: 'AI/ML & LLM', icon: <FaBrain />, featured: true },
  { key: 'Languages', icon: <FaCode /> },
  { key: 'Backend', icon: <FaServer /> },
  { key: 'Frontend', icon: <FaCode /> },
  { key: 'Database', icon: <FaDatabase /> },
  { key: 'Security', icon: <FaShieldAlt /> },
  { key: 'Tools & DevOps', icon: <FaTools /> },
];

const Skills = () => {
  return (
    <section style={{ padding: '100px 0 80px' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <span className="pulse-dot" /> Technical Stack
          </div>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '800' }}>
            Engineered for <span className="gradient-text">AI & Scale</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '12px' }}>
            Production-proven tools for building intelligent, scalable cloud applications.
          </p>
        </motion.div>

        {/* Featured AI/ML Focus Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{
            padding: '36px',
            marginBottom: '40px',
            background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(6,182,212,0.05) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <div style={{
              background: 'rgba(16,185,129,0.2)',
              color: 'var(--accent-green)',
              padding: '12px',
              borderRadius: '12px',
              fontSize: '1.5rem',
              display: 'flex'
            }}>
              <FaBrain />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff' }}>
                AI/ML & Generative AI Core
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Specialized in LLM integration, speech processing, and prompt engineering
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {skills['AI/ML & LLM'].map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(10, 15, 28, 0.6)',
                padding: '14px 18px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <FaCheck style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Other Skill Categories Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {skillCategories.filter(cat => cat.key !== 'AI/ML & LLM').map((cat, idx) => (
            <motion.div
              key={cat.key}
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ padding: '28px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', display: 'flex' }}>
                  {cat.icon}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>{cat.key}</h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {skills[cat.key]?.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: 'var(--text-main)',
                      padding: '8px 16px',
                      borderRadius: '10px',
                      fontSize: '0.88rem',
                      fontWeight: '500',
                      transition: 'all 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-green)';
                      e.currentTarget.style.color = 'var(--accent-green)';
                      e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = 'var(--text-main)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;