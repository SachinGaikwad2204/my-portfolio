import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e9355b8b-6bed-4376-a307-42aee5562559',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section style={{ padding: '100px 0 80px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <span className="pulse-dot" /> Get In Touch
          </div>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '800' }}>
            Let's Build Something <span className="gradient-text">Intelligent</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a href={`mailto:${personalInfo.email}`} className="glass-card" style={{ padding: '24px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ background: 'rgba(16,185,129,0.15)', color: 'var(--accent-green)', padding: '16px', borderRadius: '14px', fontSize: '1.4rem' }}>
                <FaEnvelope />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Me</h4>
                <p style={{ color: '#fff', fontSize: '1rem', fontWeight: '600', marginTop: '4px' }}>{personalInfo.email}</p>
              </div>
            </a>

            <a href={`tel:${personalInfo.phone?.replace(/\s/g, '')}`} className="glass-card" style={{ padding: '24px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ background: 'rgba(6,182,212,0.15)', color: 'var(--accent-cyan)', padding: '16px', borderRadius: '14px', fontSize: '1.4rem' }}>
                <FaPhone />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone</h4>
                <p style={{ color: '#fff', fontSize: '1rem', fontWeight: '600', marginTop: '4px' }}>{personalInfo.phone}</p>
              </div>
            </a>

            <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ background: 'rgba(139,92,246,0.15)', color: 'var(--accent-purple)', padding: '16px', borderRadius: '14px', fontSize: '1.4rem' }}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</h4>
                <p style={{ color: '#fff', fontSize: '1rem', fontWeight: '600', marginTop: '4px' }}>{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid var(--accent-green)',
                  color: 'var(--accent-green)',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <FaCheckCircle style={{ fontSize: '1.2rem', flexShrink: 0 }} />
                <span>Message sent successfully! Check your email inbox.</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid #ef4444',
                  color: '#f87171',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  fontSize: '0.92rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <FaExclamationTriangle style={{ fontSize: '1.2rem', flexShrink: 0 }} />
                <span>Error sending message. Please try again.</span>
              </motion.div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
            </div>

            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            <textarea name="message" placeholder="Your message..." value={formData.message} onChange={handleChange} rows="5" required />

            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;