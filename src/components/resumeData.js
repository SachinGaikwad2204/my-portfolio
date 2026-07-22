import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';

const ResumeDownload = () => {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <span className="pulse-dot" /> Career Documents
          </div>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '800' }}>
            Download & <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        <div className="glass-card" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', color: '#ef4444', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
            <FaFilePdf />
          </div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '12px' }}>
            Sachin Sominath Gaikwad - Resume
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1rem', lineHeight: '1.6' }}>
            Full Stack & AI Software Engineer specializing in Java Spring Boot, React.js, Voice AI systems, and secure REST microservices.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a 
              href="/Sachin_Gaikwad_Resume.pdf" 
              download="Sachin_Sominath_Gaikwad_Resume.pdf"
              className="btn-primary"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              Download Resume (PDF) <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;