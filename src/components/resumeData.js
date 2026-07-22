import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';

const ResumeDownload = () => {
  // Function to generate and download the resume as a text file dynamically
  const handleDownloadTxt = () => {
    const textContent = `
${resumeData.personalInfo.name}
${resumeData.personalInfo.title}
${resumeData.personalInfo.phone} | ${resumeData.personalInfo.email} | ${resumeData.personalInfo.location}

PROFESSIONAL SUMMARY:
${resumeData.summary}

TECHNICAL SKILLS:
- AI & ML: ${resumeData.skills.aiMl.join(', ')}
- Backend: ${resumeData.skills.backend.join(', ')}
- Frontend: ${resumeData.skills.frontend.join(', ')}
- Databases & Security: ${resumeData.skills.databasesSecurity.join(', ')}
- Cloud & DevOps: ${resumeData.skills.cloudDevOps.join(', ')}

EDUCATION:
- ${resumeData.education[0].degree}, ${resumeData.education[0].institution} (${resumeData.education[0].period})
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sachin_Sominath_Gaikwad_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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
          <div style={{ fontSize: '3rem', color: 'var(--accent-green)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
            <FaFileAlt />
          </div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '12px' }}>
            Full Stack & AI Engineer Resume
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1rem', lineHeight: '1.6' }}>
            Review my complete background encompassing Java Spring Boot architecture, React frontends, and production-grade Voice AI / LLM system implementations.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={handleDownloadTxt} className="btn-primary">
              Download Resume (TXT) <FaDownload />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;