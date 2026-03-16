import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Responsive Styles
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: isScrolled ? '12px 5%' : '25px 5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: isScrolled || isOpen ? 'rgba(10, 10, 15, 0.95)' : 'transparent',
    backdropFilter: isScrolled || isOpen ? 'blur(15px)' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(0, 210, 255, 0.1)' : 'none',
    transition: 'all 0.4s ease',
    zIndex: 1000,
    boxSizing: 'border-box'
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '30px',
    // Mobile logic
    '@media (max-width: 768px)': {
      display: isOpen ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '100%',
      background: 'rgba(10, 10, 15, 0.95)',
      padding: '20px',
      gap: '20px',
      textAlign: 'center',
      borderBottom: '1px solid rgba(0, 210, 255, 0.1)'
    }
  };

  const menuButtonStyle = {
    display: 'none',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.8rem',
    cursor: 'pointer',
    // Show only on mobile
  };

  const linkItemStyle = {
    color: '#e0e0e0',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const navItems = [
    { name: 'Summary', href: '#summary' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' }
  ];

  return (
    <nav style={navStyle}>
      <style>
        {`
          @media (max-width: 768px) {
            .nav-links {
              display: ${isOpen ? 'flex' : 'none'} !important;
              flex-direction: column;
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              background: rgba(10, 10, 15, 0.98);
              padding: 30px 0;
              gap: 25px;
              border-bottom: 1px solid rgba(0, 210, 255, 0.1);
            }
            .menu-btn { display: block !important; }
          }
        `}
      </style>
      
      <a href="#" style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', textDecoration: 'none' }}>
        ATHARV<span style={{ color: '#00d2ff' }}>.P</span>
      </a>

      {/* Hamburger Button */}
      <button 
        className="menu-btn" 
        style={{ ...menuButtonStyle, display: 'none' }} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div className="nav-links" style={navLinksStyle}>
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            style={linkItemStyle}
            onClick={() => setIsOpen(false)} // Close menu on click
            onMouseEnter={(e) => e.target.style.color = '#00d2ff'}
            onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;