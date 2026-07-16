import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    ).then(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      form.current.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }).catch((error) => {
      console.error('EmailJS error:', error);
      setIsSubmitting(false);
    });
  };

  return (
    <section style={{ padding: '100px 20px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '50px', background: 'linear-gradient(135deg, #64f4ab, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Get In Touch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '50px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: '#1a1a1a', padding: '25px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
              <FaEnvelope style={{ fontSize: '2rem', color: '#64f4ab', marginBottom: '10px' }} />
              <h4 style={{ color: '#fff' }}>Email</h4>
              <p style={{ color: '#a0aec0' }}>{personalInfo.email}</p>
            </div>
            <div style={{ background: '#1a1a1a', padding: '25px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
              <FaPhone style={{ fontSize: '2rem', color: '#64f4ab', marginBottom: '10px' }} />
              <h4 style={{ color: '#fff' }}>Phone</h4>
              <p style={{ color: '#a0aec0' }}>{personalInfo.phone}</p>
            </div>
            <div style={{ background: '#1a1a1a', padding: '25px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
              <FaMapMarkerAlt style={{ fontSize: '2rem', color: '#64f4ab', marginBottom: '10px' }} />
              <h4 style={{ color: '#fff' }}>Location</h4>
              <p style={{ color: '#a0aec0' }}>{personalInfo.location}</p>
            </div>
          </div>
          
          <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {submitted && (
              <div style={{ background: 'rgba(100, 244, 171, 0.1)', color: '#64f4ab', padding: '15px', borderRadius: '10px', border: '1px solid rgba(100, 244, 171, 0.2)', textAlign: 'center' }}>
                Message sent successfully!
              </div>
            )}
            <input type="text" name="user_name" placeholder="Your Name" required style={{ width: '100%', padding: '15px', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', fontSize: '1rem' }} />
            <input type="email" name="user_email" placeholder="Your Email" required style={{ width: '100%', padding: '15px', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', fontSize: '1rem' }} />
            <input type="text" name="subject" placeholder="Subject" required style={{ width: '100%', padding: '15px', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', fontSize: '1rem' }} />
            <textarea name="message" placeholder="Your Message" required rows="5" style={{ width: '100%', padding: '15px', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', fontSize: '1rem', resize: 'vertical' }} />
            <button type="submit" style={{ padding: '15px 40px', background: 'linear-gradient(135deg, #64f4ab, #3b82f6)', color: '#fff', border: 'none', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer' }} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
