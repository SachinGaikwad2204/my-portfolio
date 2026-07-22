import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import useReveal from '../hooks/useReveal';
import './Contact.css';

const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const ref = useReveal();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus(null), 6000);
      });
  };

  return (
    <section className="contact" ref={ref}>
      <div className="container">
        <div className="section-label">Contact</div>
        <h2 className="section-title reveal">Let's talk.</h2>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <a href={`mailto:${personalInfo.email}`} className="info-card glass-card">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>{personalInfo.email}</p>
              </div>
            </a>
            <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="info-card glass-card">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>{personalInfo.phone}</p>
              </div>
            </a>
            <div className="info-card glass-card">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form glass-card reveal" noValidate>
            {status === 'success' && (
              <div className="success-message">Message sent — I'll get back to you soon!</div>
            )}
            {status === 'error' && (
              <div className="error-message">
                Something went wrong sending your message. Please email me directly at{' '}
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
              </div>
            )}

            <div className="form-row">
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            />

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;