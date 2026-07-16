import React from 'react';
import { personalInfo } from '../data/portfolioData';
import useReveal from '../hooks/useReveal';
import './About.css';

const FACTS = [
  ['Email', personalInfo.email],
  ['Phone', personalInfo.phone],
  ['Location', personalInfo.location],
  ['Education', 'BBA — Vidhyadhan College'],
];

const About = () => {
  const ref = useReveal();
  return (
    <section className="about" ref={ref}>
      <div className="container">
        <div className="section-label">About</div>
        <h2 className="section-title reveal">Engineer with a business lens.</h2>

        <div className="about-grid">
          <div className="about-copy reveal">
            <p>{personalInfo.summary}</p>
            <p>
              I combine a strong foundation in software engineering principles —
              OOP, MVC, JWT-based security, RESTful design — with a business-aware
              mindset developed through a BBA degree. I care about clean,
              maintainable code that meets real production standards.
            </p>
          </div>

          <div className="about-facts glass-card reveal">
            {FACTS.map(([label, value]) => (
              <div className="fact-row" key={label}>
                <span className="fact-label">{label}</span>
                <span className="fact-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;