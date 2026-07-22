import React from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  // Define icons for each category
  const categoryIcons = {
    'Languages': '??',
    'Backend': '??',
    'Frontend': '??',
    'Database': '???',
    'AI/ML & LLM': '??',
    'Security': '??',
    'Tools & DevOps': '???'
  };

  // Define special styling for AI/ML category
  const getCategoryStyle = (category) => {
    if (category === 'AI/ML & LLM') {
      return {
        background: 'rgba(100, 244, 171, 0.08)',
        border: '2px solid rgba(100, 244, 171, 0.3)',
        boxShadow: '0 0 30px rgba(100, 244, 171, 0.05)'
      };
    }
    return {
      background: '#1a1a1a',
      border: '1px solid rgba(255,255,255,0.05)'
    };
  };

  const getSkillStyle = (category) => {
    if (category === 'AI/ML & LLM') {
      return {
        background: 'rgba(100, 244, 171, 0.15)',
        color: '#64f4ab',
        border: '1px solid rgba(100, 244, 171, 0.3)',
        fontWeight: '500'
      };
    }
    return {
      background: 'rgba(100, 244, 171, 0.08)',
      color: '#64f4ab',
      border: '1px solid rgba(100, 244, 171, 0.15)'
    };
  };

  return (
    <section style={{ padding: '100px 20px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '20px', background: 'linear-gradient(135deg, #64f4ab, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          What I build with.
        </h2>
        <p style={{ textAlign: 'center', color: '#a0aec0', marginBottom: '50px', fontSize: '1.1rem' }}>
          Technologies and tools I work with
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category} 
              style={{ 
                padding: '30px', 
                borderRadius: '15px', 
                transition: 'all 0.3s ease',
                ...getCategoryStyle(category)
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3 style={{ 
                color: category === 'AI/ML & LLM' ? '#64f4ab' : '#64f4ab', 
                marginBottom: '20px', 
                fontSize: '1.3rem', 
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>{categoryIcons[category] || '??'}</span>
                {category}
                {category === 'AI/ML & LLM' && (
                  <span style={{ 
                    fontSize: '0.7rem', 
                    background: 'rgba(100, 244, 171, 0.2)', 
                    padding: '2px 10px', 
                    borderRadius: '20px',
                    color: '#64f4ab',
                    marginLeft: 'auto'
                  }}>
                    Featured
                  </span>
                )}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {items.map((skill, index) => (
                  <span 
                    key={index} 
                    style={{ 
                      padding: '8px 18px', 
                      borderRadius: '25px', 
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                      ...getSkillStyle(category)
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(100, 244, 171, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
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
