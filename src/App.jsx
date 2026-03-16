import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, MeshDistortMaterial, PerspectiveCamera, Sparkles } from '@react-three/drei';
import Navbar from './Navbar';

// --- 3D Components ---
const DynamicGalaxy = () => {
  const orbs = useMemo(() => new Array(8).fill().map(() => ({
    pos: [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 8],
    color: Math.random() > 0.5 ? "#00d2ff" : "#ff007a",
    speed: Math.random() * 2 + 1,
    scale: Math.random() * 0.5 + 0.2
  })), []);

  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={2} />
      <Sparkles count={400} scale={12} size={2} speed={0.4} opacity={0.5} color="#00d2ff" />
      
      {orbs.map((orb, i) => (
        <Float key={i} speed={orb.speed} rotationIntensity={2} floatIntensity={3}>
          <mesh position={orb.pos} scale={orb.scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial color={orb.color} emissive={orb.color} emissiveIntensity={0.5} speed={3} distort={0.4} />
          </mesh>
        </Float>
      ))}
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh scale={1.5}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#0b0f19" wireframe wireframeLinewidth={2} />
        </mesh>
      </Float>
    </>
  );
};

const TechBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1, background: 'radial-gradient(circle at center, #111 0%, #000 100%)' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00d2ff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#ff007a" />
        <DynamicGalaxy />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

// --- UI Components ---
const Section = ({ title, children, id }) => (
  <section id={id} style={{ padding: '60px 5%', color: 'white', maxWidth: '1200px', margin: '0 auto' }}>
    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '40px', borderBottom: '2px solid #00d2ff', display: 'inline-block', paddingBottom: '10px' }}>
      {title}
    </h2>
    {children}
  </section>
);

function App() {
  return (
    <div style={{ scrollBehavior: 'smooth', fontFamily: "'Segoe UI', Roboto, sans-serif", color: '#e0e0e0', overflowX: 'hidden' }}>
      <Navbar />
      <TechBackground />

      {/* Hero Section */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', margin: 0, fontWeight: '900', color: '#fff', textShadow: '0 0 20px rgba(0,210,255,0.5)' }}>ATHARV P</h1>
        <p style={{ fontSize: '1.5rem', color: '#00d2ff', letterSpacing: '5px', fontWeight: 'bold', margin: '20px 0' }}>MERN STACK DEVELOPER</p>
        
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
          <a href="mailto:atharvpateri@gmail.com" style={contactLinkStyle}>📧 atharvpateri@gmail.com</a>
          <a href="tel:+919744918897" style={contactLinkStyle}>📞 +91 9744918897</a>
          <a href="https://www.linkedin.com/in/atharv-p-3463bb370/" target="_blank" rel="noopener noreferrer" style={contactLinkStyle}>🔗 LinkedIn: Atharv p</a>
          <a href="https://github.com/Atharv-git2004" target="_blank" rel="noopener noreferrer" style={contactLinkStyle}>🐙 GitHub: Atharv-git2004</a>
        </div>
      </section>

      <div style={{ background: 'rgba(5, 5, 10, 0.7)', backdropFilter: 'blur(12px)', paddingBottom: '50px' }}>
        
        {/* About Me Section */}
        <Section title="About Me" id="summary">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center' }}>
            <div style={aboutCardStyle}>
              <div style={blobStyle} />
              <p style={{ position: 'relative', zIndex: 1, margin: 0, fontSize: '1.2rem', lineHeight: '1.8' }}>
                Hi, I'm <span style={{ color: '#00d2ff', fontWeight: 'bold' }}>Atharv</span>, a passionate 
                <span style={{ color: '#ff007a', fontWeight: 'bold' }}> MERN Stack Developer </span> 
                dedicated to building digital experiences that blend clean code with intuitive design. 
                I specialize in turning complex problems into elegant, scalable web solutions.
              </p>
              
              <div style={{ marginTop: '30px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={statBoxStyle}>
                  <span style={{ color: '#00d2ff', display: 'block', fontSize: '1.5rem', fontWeight: 'bold' }}>3+</span>
                  <span style={{ fontSize: '0.8rem', color: '#aaa' }}>Projects Completed</span>
                </div>
                <div style={statBoxStyle}>
                  <span style={{ color: '#ff007a', display: 'block', fontSize: '1.5rem', fontWeight: 'bold' }}>MERN</span>
                  <span style={{ fontSize: '0.8rem', color: '#aaa' }}>Core Expertise</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {["Clean & Efficient Code", "Responsive UI/UX Design", "Scalable Backend Architecture", "Creative Problem Solving"].map((point, index) => (
                <div key={index} style={highlightPointStyle}>
                  <span style={{ color: '#00d2ff', marginRight: '15px' }}>✦</span>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Technical Skills */}
        <Section title="Technical Skills" id="skills">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            <div style={skillCardStyle("#00d2ff")}>
              <div style={iconWrapperStyle("#00d2ff")}>🎨</div>
              <h3 style={{ color: '#00d2ff', marginBottom: '15px', fontSize: '1.5rem' }}>Frontend</h3>
              <div style={skillTagContainer}>
                {["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap 5", "Tailwind"].map(skill => (
                  <span key={skill} style={skillTagStyle}>{skill}</span>
                ))}
              </div>
            </div>

            <div style={skillCardStyle("#ff007a")}>
              <div style={iconWrapperStyle("#ff007a")}>⚙️</div>
              <h3 style={{ color: '#ff007a', marginBottom: '15px', fontSize: '1.5rem' }}>Backend & DB</h3>
              <div style={skillTagContainer}>
                {["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"].map(skill => (
                  <span key={skill} style={skillTagStyle}>{skill}</span>
                ))}
              </div>
            </div>

            <div style={skillCardStyle("#ffd700")}>
              <div style={iconWrapperStyle("#ffd700")}>🛠️</div>
              <h3 style={{ color: '#ffd700', marginBottom: '15px', fontSize: '1.5rem' }}>Tools & Others</h3>
              <div style={skillTagContainer}>
                {["Git", "GitHub", "VS Code", "Postman"].map(skill => (
                  <span key={skill} style={skillTagStyle}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Projects" id="projects">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
            <div style={projectCardStyle}>
              <img src="https://tse2.mm.bing.net/th/id/OIP.gJ7ERqnlQ_kZk5dbFgiJvQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Eco Marketplace" style={imageStyle} />
              <div style={{ padding: '30px' }}>
                <h3 style={{ color: '#00d2ff', fontSize: '1.8rem', margin: '0 0 10px 0' }}>Eco-Marketplace</h3>
                <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>E-commerce platform dedicated to sustainable products.</p>
                <ul style={{ lineHeight: '1.7', paddingLeft: '20px' }}>
                  <li>Multi-Role Architecture: Admin, Seller, and Customer portals.</li>
                  <li>Secure authentication using JWT and RBAC.</li>
                </ul>
                <p style={{ marginTop: '15px', color: '#aaa' }}><strong>Tech:</strong> React.js, Redux, Node.js, MongoDB.</p>
              </div>
            </div>

            <div style={projectCardStyle}>
              <img src="https://static.vecteezy.com/system/resources/previews/049/140/173/non_2x/modern-movie-theater-interior-with-luxurious-red-seats-and-vibrant-lighting-design-perfect-for-movie-buffs-and-entertainment-venues-photo.jpg" alt="CineBook" style={imageStyle} />
              <div style={{ padding: '30px' }}>
                <h3 style={{ color: '#00d2ff', fontSize: '1.8rem', margin: '0 0 10px 0' }}>CineBook – Movie Booking</h3>
                <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>Full-featured movie ticket booking web application.</p>
                <ul style={{ lineHeight: '1.7', paddingLeft: '20px' }}>
                  <li>Interactive Seat Selection with real-time UI updates.</li>
                  <li>Theater Owner dashboard for show management.</li>
                </ul>
                <p style={{ marginTop: '15px', color: '#aaa' }}><strong>Tech:</strong> React.js, Vite, Bootstrap 5, Express.js.</p>
              </div>
            </div>

            <div style={projectCardStyle}>
              <img src="https://media.chirpn.com/How_AI_Is_Revolutionizing_the_Travel_and_Tourism_Industry_Hero_Image_d28d4bc6c7.jpg" alt="AI Travel" style={imageStyle} />
              <div style={{ padding: '30px' }}>
                <h3 style={{ color: '#00d2ff', fontSize: '1.8rem', margin: '0 0 10px 0' }}>AI Travel System</h3>
                <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>College Project - Smart package generation.</p>
                <ul style={{ lineHeight: '1.7', paddingLeft: '20px' }}>
                  <li>AI-powered budget-based travel suggestions.</li>
                  <li>Intelligent destination search with key attractions.</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Education */}
        <Section title="Education" id="education">
          <div style={{ ...cardStyle, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', margin: '0 0 5px 0' }}>Bachelor of Computer Applications</h3>
              <p style={{ margin: 0, color: '#aaa' }}>University of Calicut</p>
            </div>
            <div style={{ color: '#00d2ff', fontWeight: 'bold' }}>2022 - 2025</div>
          </div>
        </Section>
      </div>
    </div>
  );
}

// --- Styles ---
const contactLinkStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  padding: '10px 20px',
  borderRadius: '25px',
  color: 'white',
  textDecoration: 'none',
  fontSize: '0.95rem',
  border: '1px solid rgba(0, 210, 255, 0.3)',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
};

const cardStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '30px',
  borderRadius: '15px',
};

const aboutCardStyle = {
  background: 'rgba(255, 255, 255, 0.03)',
  padding: '40px',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
  position: 'relative',
  overflow: 'hidden'
};

const blobStyle = {
  position: 'absolute',
  top: '-10%',
  right: '-10%',
  width: '100px',
  height: '100px',
  background: 'radial-gradient(circle, rgba(0,210,255,0.2) 0%, transparent 70%)',
  zIndex: 0
};

const statBoxStyle = {
  background: 'rgba(255,255,255,0.05)',
  padding: '15px 25px',
  borderRadius: '15px',
  textAlign: 'center',
  border: '1px solid rgba(255,255,255,0.05)',
  flex: '1'
};

const highlightPointStyle = {
  background: 'rgba(255,255,255,0.02)',
  padding: '18px 25px',
  borderRadius: '12px',
  borderLeft: '4px solid #00d2ff',
  fontSize: '1rem',
  fontWeight: '500',
  transition: 'all 0.3s ease'
};

const skillCardStyle = (glowColor) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  border: `1px solid rgba(255, 255, 255, 0.1)`,
  padding: '30px',
  borderRadius: '20px',
  backdropFilter: 'blur(10px)',
  boxShadow: `0 10px 30px rgba(0,0,0,0.3)`,
});

const iconWrapperStyle = (color) => ({
  fontSize: '2.5rem',
  marginBottom: '20px',
  display: 'inline-block',
  padding: '10px',
  background: `rgba(${color === "#00d2ff" ? '0, 210, 255' : color === "#ff007a" ? '255, 0, 122' : '255, 215, 0'}, 0.1)`,
  borderRadius: '15px'
});

const skillTagContainer = { display: 'flex', flexWrap: 'wrap', gap: '10px' };
const skillTagStyle = {
  background: 'rgba(255, 255, 255, 0.08)',
  padding: '6px 14px',
  borderRadius: '8px',
  fontSize: '0.85rem',
  color: '#ddd',
  border: '1px solid rgba(255, 255, 255, 0.05)'
};

const projectCardStyle = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px',
  overflow: 'hidden',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  alignItems: 'center',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  minHeight: '280px',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)'
};

export default App;