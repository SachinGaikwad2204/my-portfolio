import React from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section style={{ padding: '100px 20px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '50px', background: 'linear-gradient(135deg, #64f4ab, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>What I build with.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} style={{ background: category === 'AI/ML & LLM' ? 'rgba(100, 244, 171, 0.05)' : '#1a1a1a', padding: '30px', borderRadius: '15px', border: category === 'AI/ML & LLM' ? '2px solid rgba(100, 244, 171, 0.2)' : '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease' }}>
              <h3 style={{ color: category === 'AI/ML & LLM' ? '#64f4ab' : '#64f4ab', marginBottom: '20px', fontSize: '1.2rem', fontWeight: '600' }}>
                {category === 'AI/ML & LLM' ? '?? ' : ''}{category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {items.map((skill, index) => (
                  <span key={index} style={{ background: category === 'AI/ML & LLM' ? 'rgba(100, 244, 171, 0.1)' : 'rgba(100, 244, 171, 0.08)', color: category === 'AI/ML & LLM' ? '#64f4ab' : '#64f4ab', padding: '8px 18px', borderRadius: '25px', fontSize: '0.9rem', border: category === 'AI/ML & LLM' ? '1px solid rgba(100, 244, 171, 0.3)' : '1px solid rgba(100, 244, 171, 0.15)' }}>
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
