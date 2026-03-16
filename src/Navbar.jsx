import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle the scroll event for the glassmorphism navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inline styles for the navigation bar
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: isScrolled ? '15px 5%' : '30px 5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: isScrolled ? 'rgba(10, 10, 15, 0.8)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(15px)' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(0, 210, 255, 0.1)' : 'none',
    transition: 'all 0.4s ease',
    zIndex: 1000,
    boxSizing: 'border-box'
  };

  const logoStyle = {
    fontSize: '2rem',
    fontWeight: '900',
    color: '#ffffff',
    textDecoration: 'none',
    letterSpacing: '2px'
  };

  const spanStyle = {
    color: '#00d2ff',
    textShadow: '0 0 10px rgba(0,210,255,0.5)'
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '30px',
  };

  const linkItemStyle = {
    color: '#e0e0e0',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  // Hover effects for the links
  const handleMouseEnter = (e) => {
    e.target.style.color = '#00d2ff';
    e.target.style.textShadow = '0 0 10px rgba(0,210,255,0.4)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = '#e0e0e0';
    e.target.style.textShadow = 'none';
  };

  // Navigation menu items matching the App.jsx sections
  const navItems = [
    { name: 'Summary', href: '#summary' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' }
  ];

  return (
    <nav style={navStyle}>
      <a href="#" style={logoStyle}>ATHARV<span style={spanStyle}>.P</span></a>
      
      <div style={navLinksStyle}>
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            style={linkItemStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;