import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Made with <FaHeart className="heart-icon" /> in India</p>
        <div className="footer-social">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;