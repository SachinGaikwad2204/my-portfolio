import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo">SG</Link>

        <nav className="nav-desktop">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${location.pathname === l.to ? 'nav-link-active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="header-cta">Let's talk</Link>

        <button className="nav-burger" onClick={() => setIsOpen((v) => !v)} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`nav-mobile ${isOpen ? 'nav-mobile-open' : ''}`}>
        {LINKS.map((l) => (
          <Link key={l.to} to={l.to} className="nav-mobile-link">{l.label}</Link>
        ))}
      </div>
    </header>
  );
};

export default Header;