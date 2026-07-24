import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float, MeshDistortMaterial, PerspectiveCamera, Sparkles } from "@react-three/drei";
import Navbar from "./Navbar";

// --- 3D Components ---
const DynamicGalaxy = () => {
  const orbs = useMemo(
    () =>
      new Array(8).fill().map(() => ({
        pos: [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 8],
        color: Math.random() > 0.5 ? "#00d2ff" : "#ff007a",
        speed: Math.random() * 2 + 1,
        scale: Math.random() * 0.5 + 0.2,
      })),
    [],
  );

  return (
    <>
      {/* Fixed numeric values in props (removed quotes) */}
      <Stars count={5000} depth={50} factor={4} fade radius={100} saturation={1} speed={2} />
      <Sparkles color="#00d2ff" count={400} opacity={0.5} scale={12} size={2} speed={0.4} />

      {orbs.map((orb, i) => (
        <Float floatIntensity={3} key={i} rotationIntensity={2} speed={orb.speed}>
          <mesh position={orb.pos} scale={orb.scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial color={orb.color} distort={0.4} emissive={orb.color} emissiveIntensity={0.5} speed={3} />
          </mesh>
        </Float>
      ))}

      <Float floatIntensity={1} rotationIntensity={1} speed={2}>
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
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
        background: "radial-gradient(circle at center, #111 0%, #000 100%)",
      }}
    >
      <Canvas>
        {/* Fixed PerspectiveCamera tag */}
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00d2ff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#ff007a" />
        <DynamicGalaxy />
        <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
      </Canvas>
    </div>
  );
};

// --- UI Components ---
const Section = ({ title, children, id }) => (
  <section id={id} style={{ padding: "60px 5%", color: "white", maxWidth: "1200px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "2.5rem",
        fontWeight: "800",
        marginBottom: "40px",
        borderBottom: "2px solid #00d2ff",
        display: "inline-block",
        paddingBottom: "10px",
      }}
    >
      {title}
    </h2>
    {children}
  </section>
);

function App() {
  return (
    <div
      style={{
        scrollBehavior: "smooth",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        color: "#e0e0e0",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <TechBackground />

      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(3rem, 10vw, 6rem)",
            margin: 0,
            fontWeight: "900",
            color: "#fff",
            textShadow: "0 0 20px rgba(0,210,255,0.5)",
          }}
        >
          ATHARV P
        </h1>
        <p style={{ fontSize: "1.5rem", color: "#00d2ff", letterSpacing: "5px", fontWeight: "bold", margin: "20px 0" }}>
          MERN STACK DEVELOPER
        </p>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
          <a href="mailto:atharvpateri@gmail.com" style={contactLinkStyle}>
            📧 atharvpateri@gmail.com
          </a>
          <a href="tel:+919744918897" style={contactLinkStyle}>
            📞 +91 9744918897
          </a>
          <a
            href="https://www.linkedin.com/in/atharv-p-3463bb370/"
            target="_blank"
            rel="noopener noreferrer"
            style={contactLinkStyle}
          >
            🔗 LinkedIn
          </a>
          <a href="https://github.com/Atharv-git2004" target="_blank" rel="noopener noreferrer" style={contactLinkStyle}>
            🐙 GitHub
          </a>
        </div>
      </section>

      <div style={{ background: "rgba(5, 5, 10, 0.7)", backdropFilter: "blur(12px)", paddingBottom: "50px" }}>
        {/* About Me Section */}
        <Section id="summary" title="About Me">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              alignItems: "center",
            }}
          >
            <div style={aboutCardStyle}>
              <div style={blobStyle} />
              <p style={{ position: "relative", zIndex: 1, margin: 0, fontSize: "1.15rem", lineHeight: "1.8" }}>
                Highly motivated <span style={{ color: "#00d2ff", fontWeight: "bold" }}>MERN Stack Developer</span> with a
                strong foundation in building scalable end-to-end web applications. Experienced in crafting high-performance
                user interfaces with React.js and creating robust backends with Node.js. A dedicated problem-solver focused
                on writing clean code, implementing complex features like Role-Based Access Control (RBAC), and delivering
                user-centric solutions.
              </p>

              <div style={{ marginTop: "30px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <div style={statBoxStyle}>
                  <span style={{ color: "#00d2ff", display: "block", fontSize: "1.5rem", fontWeight: "bold" }}>4+</span>
                  <span style={{ fontSize: "0.8rem", color: "#aaa" }}>Projects Completed</span>
                </div>
                <div style={statBoxStyle}>
                  <span style={{ color: "#ff007a", display: "block", fontSize: "1.5rem", fontWeight: "bold" }}>MERN</span>
                  <span style={{ fontSize: "0.8rem", color: "#aaa" }}>Core Expertise</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {[
                "Clean & Maintainable Code",
                "Responsive UI/UX Design",
                "Scalable Backend Architecture",
                "Agile Methodologies & Workflow Optimization",
              ].map((point, index) => (
                <div key={index} style={highlightPointStyle}>
                  <span style={{ color: "#00d2ff", marginRight: "15px" }}>✦</span>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Technical Skills */}
        <Section id="skills" title="Technical Skills">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
            <div style={skillCardStyle("#00d2ff")}>
              <div style={iconWrapperStyle("#00d2ff")}>🎨</div>
              <h3 style={{ color: "#00d2ff", marginBottom: "15px", fontSize: "1.5rem" }}>Frontend & UI</h3>
              <div style={skillTagContainer}>
                {["React.js", "React Context API", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap 5", "HTML5", "CSS3"].map(
                  (skill) => (
                    <span key={skill} style={skillTagStyle}>
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div style={skillCardStyle("#ff007a")}>
              <div style={iconWrapperStyle("#ff007a")}>⚙️</div>
              <h3 style={{ color: "#ff007a", marginBottom: "15px", fontSize: "1.5rem" }}>Backend & Database</h3>
              <div style={skillTagContainer}>
                {["Node.js", "Express.js", "MongoDB (NoSQL)", "RESTful APIs", "JWT", "Google OAuth", "Axios"].map(
                  (skill) => (
                    <span key={skill} style={skillTagStyle}>
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div style={skillCardStyle("#ffd700")}>
              <div style={iconWrapperStyle("#ffd700")}>🛠️</div>
              <h3 style={{ color: "#ffd700", marginBottom: "15px", fontSize: "1.5rem" }}>Tools & Others</h3>
              <div style={skillTagContainer}>
                {["Git", "GitHub", "VS Code", "Postman", "Agile"].map((skill) => (
                  <span key={skill} style={skillTagStyle}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Work Experience */}
        <Section id="experience" title="Work Experience">
          <div style={{ ...cardStyle, borderLeft: "4px solid #00d2ff" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "15px",
              }}
            >
              <div>
                <h3 style={{ color: "#00d2ff", fontSize: "1.6rem", margin: "0 0 5px 0" }}>MERN Stack Intern</h3>
                <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: "bold" }}>Lumitar Technolab</p>
              </div>
              <div
                style={{
                  color: "#ff007a",
                  fontWeight: "bold",
                  background: "rgba(255,0,122,0.1)",
                  padding: "5px 15px",
                  borderRadius: "20px",
                }}
              >
                June 2025 - Jan 2026
              </div>
            </div>
            <ul style={{ lineHeight: "1.8", color: "#ccc", paddingLeft: "20px", marginTop: "20px" }}>
              <li style={{ marginBottom: "10px" }}>
                <strong>Scalable MERN Stack Development:</strong> Focused on building and maintaining full-stack
                applications using MongoDB, Express.js, React.js, and Node.js, prioritizing performance and scalability.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Responsive UI Design:</strong> Created clean, responsive, user-centric interfaces.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>API & Backend Engineering:</strong> Designed and implemented RESTful APIs with efficient CRUD
                operations for scalable data management and flow.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Auth Management:</strong> Managed global application state using Context API and implemented secure
                user authentication and Role-Based Access Control (RBAC).
              </li>
              <li>
                <strong>Tools & Optimization:</strong> Streamlined development pipelines using GitHub and Agile
                methodologies, enhancing application performance through rigorous debugging.
              </li>
            </ul>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
            {/* Project: Arctic Sip */}
            <div style={projectCardStyle}>
              <a
                href="https://cooldrinks-web-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", height: "100%", textDecoration: "none" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=800&auto=format&fit=crop"
                  alt="Arctic Sip"
                  style={imageStyle}
                />
              </a>
              <div style={{ padding: "30px" }}>
                <a
                  href="https://cooldrinks-web-frontend.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <h3 style={{ color: "#00d2ff", fontSize: "1.8rem", margin: "0 0 10px 0" }}>Arctic Sip 🔗</h3>
                </a>
                <p style={{ fontStyle: "italic", marginBottom: "15px" }}>Full-Stack Soft Drink E-commerce Platform.</p>
                <ul style={{ lineHeight: "1.7", paddingLeft: "20px", color: "#e0e0e0" }}>
                  <li>
                    Engineered a comprehensive web application with multi-role admin functionality for a niche beverage
                    market.
                  </li>
                  <li>Implemented robust user authentication via JWT and integrated Google OAuth 2.0.</li>
                  <li>Designed a product catalog, persistent user cart, and custom sales dashboard.</li>
                </ul>
                <p style={{ marginTop: "15px", color: "#aaa" }}>
                  <strong>Tech Stack:</strong> React, Context API, Tailwind CSS, Node.js, Express.js, MongoDB, JWT.
                </p>
              </div>
            </div>

            {/* Project: Eco Marketplace */}
            <div style={projectCardStyle}>
              <a
                href="https://my-eco-original.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", height: "100%", textDecoration: "none" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop"
                  alt="Eco Marketplace"
                  style={imageStyle}
                />
              </a>
              <div style={{ padding: "30px" }}>
                <a
                  href="https://my-eco-original.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <h3 style={{ color: "#00d2ff", fontSize: "1.8rem", margin: "0 0 10px 0" }}>Eco-Marketplace 🔗</h3>
                </a>
                <p style={{ fontStyle: "italic", marginBottom: "15px" }}>
                  Sustainable E-commerce Platform dedicated to eco-friendly products.
                </p>
                <ul style={{ lineHeight: "1.7", paddingLeft: "20px", color: "#e0e0e0" }}>
                  <li>Multi-Role Architecture: Distinct portals for Admin, Seller, and Customer.</li>
                  <li>Advanced Inventory System and streamlined order management.</li>
                  <li>Secure authentication using JWT and RBAC.</li>
                </ul>
                <p style={{ marginTop: "15px", color: "#aaa" }}>
                  <strong>Tech Stack:</strong> React.js, Redux, Node.js, Express.js, MongoDB, Bootstrap, Axios.
                </p>
              </div>
            </div>

            {/* Project: Real Estate */}
            <div style={projectCardStyle}>
              <a
                href="https://rentnest-xi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", height: "100%", textDecoration: "none" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
                  alt="Real Estate Platform"
                  style={imageStyle}
                />
              </a>
              <div style={{ padding: "30px" }}>
                <a
                  href="https://rentnest-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <h3 style={{ color: "#00d2ff", fontSize: "1.8rem", margin: "0 0 10px 0" }}>
                    Real Estate & Property Rental 🔗
                  </h3>
                </a>
                <p style={{ fontStyle: "italic", marginBottom: "15px" }}>
                  Comprehensive MERN stack application for property browsing and listing.
                </p>
                <ul style={{ lineHeight: "1.7", paddingLeft: "20px", color: "#e0e0e0" }}>
                  <li>Engineered a real-time communication hub using Socket.io for instant messaging.</li>
                  <li>Integrated secure WebRTC P2P signaling for video and audio calling.</li>
                  <li>Implemented secure file handling and image uploads for property listings.</li>
                </ul>
                <p style={{ marginTop: "15px", color: "#aaa" }}>
                  <strong>Tech Stack:</strong> MERN Stack, Socket.io, WebRTC, Tailwind CSS.
                </p>
              </div>
            </div>

            {/* Project: CineBook */}
            <div style={projectCardStyle}>
              <a
                href="https://cine-book-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", height: "100%", textDecoration: "none" }}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/049/140/173/non_2x/modern-movie-theater-interior-with-luxurious-red-seats-and-vibrant-lighting-design-perfect-for-movie-buffs-and-entertainment-venues-photo.jpg"
                  alt="CineBook"
                  style={imageStyle}
                />
              </a>
              <div style={{ padding: "30px" }}>
                <a
                  href="https://cine-book-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <h3 style={{ color: "#00d2ff", fontSize: "1.8rem", margin: "0 0 10px 0" }}>
                    CineBook – Movie Booking 🔗
                  </h3>
                </a>
                <p style={{ fontStyle: "italic", marginBottom: "15px" }}>
                  Full-featured movie ticket booking web application.
                </p>
                <ul style={{ lineHeight: "1.7", paddingLeft: "20px", color: "#e0e0e0" }}>
                  <li>Interactive Seat Selection with real-time UI updates.</li>
                  <li>Role-Based Access Control (RBAC) supporting Customers, Theater Managers, and Admins.</li>
                  <li>Management Dashboards for Theater Owners and comprehensive booking history.</li>
                </ul>
                <p style={{ marginTop: "15px", color: "#aaa" }}>
                  <strong>Tech Stack:</strong> React.js, Vite, Bootstrap 5, Node.js, Express.js, Context API.
                </p>
              </div>
            </div>

            {/* Project: AI Travel */}
            <div style={projectCardStyle}>
              <div style={{ display: "block", height: "100%", textDecoration: "none" }}>
                <img
                  src="https://media.chirpn.com/How_AI_Is_Revolutionizing_the_Travel_and_Tourism_Industry_Hero_Image_d28d4bc6c7.jpg"
                  alt="AI Travel"
                  style={imageStyle}
                />
              </div>
              <div style={{ padding: "30px" }}>
                <h3 style={{ color: "#00d2ff", fontSize: "1.8rem", margin: "0 0 10px 0" }}>AI Travel System</h3>
                <p style={{ fontStyle: "italic", marginBottom: "15px" }}>
                  College Project - Smart travel booking platform.
                </p>
                <ul style={{ lineHeight: "1.7", paddingLeft: "20px", color: "#e0e0e0" }}>
                  <li>AI-powered budget-based travel package generation.</li>
                  <li>Intelligent destination search with key attractions functionality.</li>
                  <li>Cost-Effective Planning features for fast and convenient trip management.</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          <div
            style={{
              ...cardStyle,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ color: "#fff", fontSize: "1.3rem", margin: "0 0 5px 0" }}>Bachelor of Computer Applications</h3>
              <p style={{ margin: 0, color: "#aaa" }}>University of Calicut</p>
            </div>
            <div style={{ color: "#00d2ff", fontWeight: "bold" }}>2022 - 2025</div>
          </div>
        </Section>
      </div>
    </div>
  );
}

// --- Styles ---
const contactLinkStyle = {
  background: "rgba(255, 255, 255, 0.1)",
  padding: "10px 20px",
  borderRadius: "25px",
  color: "white",
  textDecoration: "none",
  fontSize: "0.95rem",
  border: "1px solid rgba(0, 210, 255, 0.3)",
  transition: "all 0.3s ease",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const cardStyle = {
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  padding: "30px",
  borderRadius: "15px",
};

const aboutCardStyle = {
  background: "rgba(255, 255, 255, 0.03)",
  padding: "40px",
  borderRadius: "24px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  position: "relative",
  overflow: "hidden",
};

const blobStyle = {
  position: "absolute",
  top: "-10%",
  right: "-10%",
  width: "100px",
  height: "100px",
  background: "radial-gradient(circle, rgba(0,210,255,0.2) 0%, transparent 70%)",
  zIndex: 0,
};

const statBoxStyle = {
  background: "rgba(255,255,255,0.05)",
  padding: "15px 25px",
  borderRadius: "15px",
  textAlign: "center",
  border: "1px solid rgba(255,255,255,0.05)",
  flex: "1",
};

const highlightPointStyle = {
  background: "rgba(255,255,255,0.02)",
  padding: "18px 25px",
  borderRadius: "12px",
  borderLeft: "4px solid #00d2ff",
  fontSize: "1rem",
  fontWeight: "500",
  transition: "all 0.3s ease",
};

const skillCardStyle = (glowColor) => ({
  background: "rgba(255, 255, 255, 0.03)",
  border: `1px solid rgba(255, 255, 255, 0.1)`,
  padding: "30px",
  borderRadius: "20px",
  backdropFilter: "blur(10px)",
  boxShadow: `0 10px 30px rgba(0,0,0,0.3)`,
});

const iconWrapperStyle = (color) => ({
  fontSize: "2.5rem",
  marginBottom: "20px",
  display: "inline-block",
  padding: "10px",
  background: `rgba(${color === "#00d2ff" ? "0, 210, 255" : color === "#ff007a" ? "255, 0, 122" : "255, 215, 0"}, 0.1)`,
  borderRadius: "15px",
});

const skillTagContainer = { display: "flex", flexWrap: "wrap", gap: "10px" };
const skillTagStyle = {
  background: "rgba(255, 255, 255, 0.08)",
  padding: "6px 14px",
  borderRadius: "8px",
  fontSize: "0.85rem",
  color: "#ddd",
  border: "1px solid rgba(255, 255, 255, 0.05)",
};

const projectCardStyle = {
  background: "rgba(255, 255, 255, 0.03)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "20px",
  overflow: "hidden",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  alignItems: "stretch",
  transition: "transform 0.3s ease",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  minHeight: "280px",
  borderRight: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "opacity 0.3s ease",
};

export default App;
