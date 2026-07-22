import React from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section style={{ padding: '100px 20px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '20px', background: 'linear-gradient(135deg, #64f4ab, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          What I build with.
        </h2>
        <p style={{ textAlign: 'center', color: '#a0aec0', marginBottom: '50px', fontSize: '1.1rem' }}>
          Technologies and tools I work with
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category} 
              style={{ 
                background: '#1a1a1a',
                padding: '25px', 
                borderRadius: '12px', 
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(100, 244, 171, 0.2)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3 style={{ 
                color: '#64f4ab', 
                marginBottom: '15px', 
                fontSize: '1.1rem', 
                fontWeight: '600',
                letterSpacing: '0.5px'
              }}>
                {category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {items.map((skill, index) => (
                  <span 
                    key={index} 
                    style={{ 
                      background: 'rgba(100, 244, 171, 0.07)',
                      color: '#64f4ab',
                      padding: '6px 16px', 
                      borderRadius: '20px', 
                      fontSize: '0.85rem',
                      border: '1px solid rgba(100, 244, 171, 0.08)',
                      transition: 'all 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(100, 244, 171, 0.15)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(100, 244, 171, 0.07)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {skill}
                  </span>
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
