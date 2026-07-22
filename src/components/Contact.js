import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Simulated email sending for demo / replace keys with your EmailJS variables
    setTimeout(() => {
      setStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
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
          {/* Contact Details Column */}
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

            <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="glass-card" style={{ padding: '24px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '20px' }}>
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

          {/* Form Column */}
          <form ref={formRef} onSubmit={handleSubmit} className="glass-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {status === 'success' && (
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', padding: '14px', borderRadius: '10px', fontSize: '0.9rem' }}>
                ✓ Message sent successfully! I'll get back to you shortly.
              </div>
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