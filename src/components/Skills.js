import React from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const categories = {
    'Languages': skills.languages,
    'Backend': skills.backend,
    'Frontend': skills.frontend,
    'Database': skills.database,
    'Tools & DevOps': skills.tools,
    'Security': skills.security
  };

  return (
    <section style={{ padding: '100px 20px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '50px', background: 'linear-gradient(135deg, #64f4ab, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Technical Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} style={{ background: '#1a1a1a', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease' }}>
              <h3 style={{ color: '#64f4ab', marginBottom: '20px', fontSize: '1.2rem', fontWeight: '600' }}>{category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {items.map((skill, index) => (
                  <span key={index} style={{ background: 'rgba(100, 244, 171, 0.08)', color: '#64f4ab', padding: '8px 18px', borderRadius: '25px', fontSize: '0.9rem', border: '1px solid rgba(100, 244, 171, 0.15)' }}>{skill}</span>
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
