import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

const SKILLS = {
  "Programming & Web": ["HTML", "PHP", "Python", "Java", "SQL", "JavaScript", "React.js", "Node.js"],
  "Embedded & IoT": ["Arduino", "Raspberry Pi", "ESP32"],
  "UI/UX Design": ["Figma", "Canva", "Wireframing", "Prototyping", "Visual Design"],
  "Cloud & Tools": ["Firebase", "Microsoft Azure", "Google Maps API", "Flask"],
};

const PROJECTS = [
  {
    title: "PEAS App",
    subtitle: "Personal Emergency Alert System",
    description:
      "Mobile app for emergency alerts and real-time GPS tracking. Integrated IoT hardware for live GPS data transmission using Firebase Realtime Database and Google Maps API.",
    tags: ["Android Studio", "Firebase", "Google Maps API", "IoT", "Figma"],
    icon: "🚨",
  },
  {
    title: "PoliSync AI",
    subtitle: "Automated Policy Diff & Querying System",
    description:
      "AI-powered tool that compares policy documents using text extraction and semantic embeddings. Features PDF upload, chat interaction, and similarity scoring.",
    tags: ["Flask", "PyMuPDF", "NLTK", "SentenceTransformer", "Figma"],
    icon: "🤖",
  },
  {
    title: "PARK BOT",
    subtitle: "Automated Parking System",
    description:
      "Automated parking-slot system with remote reservation and lock/unlock features. Built real-time control interface with cloud storage via Microsoft Azure.",
    tags: ["React", "Microsoft Azure", "Figma", "IoT"],
    icon: "🅿️",
  },
  {
    title: "Library Thesis Access System",
    subtitle: "Web-Based Thesis Management",
    description:
      "Web-based system for accessing and managing thesis records with user authentication and searchable archives.",
    tags: ["HTML", "PHP", "SQL"],
    icon: "📚",
  },
  {
    title: "Automated Self-Sustaining Plant System",
    subtitle: "IoT Prototype",
    description:
      "IoT prototype for automated plant watering and monitoring using Arduino and Raspberry Pi for hardware and sensor control.",
    tags: ["Arduino", "Raspberry Pi", "IoT"],
    icon: "🌱",
  },
  {
    title: "Automated Trash Sorter",
    subtitle: "Embedded Systems Project",
    description:
      "Sensor-based prototype that classifies waste in real-time using embedded systems programming for automated sorting.",
    tags: ["Embedded Systems", "Sensors", "Arduino"],
    icon: "♻️",
  },
];

const EXPERIENCE = [
  {
    role: "Publicity Head",
    org: "SPARK League (Student Pioneers for Advancement, Revolution, and Knowledge)",
    year: "2025 – 2026",
    bullets: [
      "Directed multimedia content creation for campaigns and events.",
      "Designed visual materials and managed promotional outputs.",
      "Coordinated with internal departments for cohesive branding.",
    ],
  },
  {
    role: "Creatives Officer",
    org: "AWS Learning Club – JRU Chapter",
    year: "2025 – 2026",
    bullets: [
      "Produced digital designs for AWS learning sessions and workshops.",
      "Collaborated with tech and creative teams to strengthen event branding.",
      "Promoted cloud-learning materials through visually engaging campaigns.",
    ],
  },
  {
    role: "Assistant Secretary / Technology Committee Member",
    org: "Institute of Computer Engineers of the Philippines (Student Edition)",
    year: "2024 – 2026",
    bullets: [
      "Assisted in documentation, coordination, and meeting logistics.",
      "Supported design and execution of technological events.",
      "Contributed to innovation-driven projects and technical support.",
    ],
  },
];

const CERTS = [
  { label: "AWS Academy Graduate", sub: "Cloud Foundation Training Badge" },
  { label: "CompTIA IT Fundamentals (ITF+)", sub: "Exam Passer, 2024" },
];

export default function App() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div style={styles.root}>
      {/* Background grid */}
      <div style={styles.grid} />

      {/* NAV */}
      <nav style={styles.nav}>
        <span style={styles.logo}>
          FY<span style={{ color: "#FF6B1A" }}>.</span>
        </span>
        <div style={styles.navLinks}>
          {NAV_LINKS.map((n) => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              style={{
                ...styles.navBtn,
                ...(active === n ? styles.navBtnActive : {}),
              }}
            >
              {n}
            </button>
          ))}
        </div>
        <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div style={styles.mobileMenu}>
          {NAV_LINKS.map((n) => (
            <button key={n} onClick={() => scrollTo(n)} style={styles.mobileMenuItem}>
              {n}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="about" style={{ ...styles.hero, opacity: visible ? 1 : 0, transition: "opacity 0.8s ease" }}>
        <div style={styles.heroLeft}>
          <p style={styles.heroTag}>Computer Engineering Student</p>
          <h1 style={styles.heroName}>
            Fiona Yvonne<br />
            <span style={styles.heroNameOrange}>D. Cañas</span>
          </h1>
          <p style={styles.heroBio}>
            A tech-driven creative based in Taguig City, Philippines. Building real-world solutions
            through code, design, and embedded systems — from AI-powered tools to IoT prototypes.
          </p>
          <div style={styles.heroBadges}>
            <span style={styles.badge}>José Rizal University</span>
            <span style={styles.badge}>BS Computer Engineering '26</span>
          </div>
          <div style={styles.heroActions}>
            <a href="mailto:fionayvonne.canas@gmail.com" style={styles.btnPrimary}>
              Get In Touch
            </a>
            <a
              href="https://linkedin.com/in/fiona-cañas"
              target="_blank"
              rel="noreferrer"
              style={styles.btnSecondary}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
        <div style={styles.heroRight}>
          <div style={styles.avatarRing}>
            <img
              src="/profile.png"
              alt="Fiona Yvonne Cañas"
              style={styles.avatar}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div style={styles.avatarFallback}>FY</div>
          </div>
          <div style={styles.floatCard1}>
            <span style={{ fontSize: 18 }}>🏆</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 12, color: "#FF6B1A" }}>AWS Certified</div>
              <div style={{ fontSize: 11, color: "#888" }}>Cloud Foundation</div>
            </div>
          </div>
          <div style={styles.floatCard2}>
            <span style={{ fontSize: 18 }}>⚡</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 12, color: "#FF6B1A" }}>CompTIA ITF+</div>
              <div style={{ fontSize: 11, color: "#888" }}>Exam Passer</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={styles.section}>
        <SectionLabel>Skills</SectionLabel>
        <h2 style={styles.sectionTitle}>Technical Expertise</h2>
        <div style={styles.skillsGrid}>
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat} style={styles.skillCard}>
              <h3 style={styles.skillCat}>{cat}</h3>
              <div style={styles.skillTags}>
                {items.map((s) => (
                  <span key={s} style={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={styles.section}>
        <SectionLabel>Projects</SectionLabel>
        <h2 style={styles.sectionTitle}>What I've Built</h2>
        <div style={styles.projectsGrid}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={styles.section}>
        <SectionLabel>Experience</SectionLabel>
        <h2 style={styles.sectionTitle}>Leadership & Organizations</h2>
        <div style={styles.timeline}>
          {EXPERIENCE.map((e, i) => (
            <div key={i} style={styles.timelineItem}>
              <div style={styles.timelineDot} />
              <div style={styles.timelineContent}>
                <div style={styles.timelineYear}>{e.year}</div>
                <div style={styles.timelineRole}>{e.role}</div>
                <div style={styles.timelineOrg}>{e.org}</div>
                <ul style={styles.timelineBullets}>
                  {e.bullets.map((b, j) => (
                    <li key={j} style={styles.timelineBullet}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certs */}
        <div style={{ marginTop: 48 }}>
          <h3 style={{ ...styles.skillCat, marginBottom: 20 }}>Certifications</h3>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {CERTS.map((c, i) => (
              <div key={i} style={styles.certCard}>
                <div style={{ color: "#FF6B1A", fontSize: 22, marginBottom: 8 }}>🎖️</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: 12, color: "#888" }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ ...styles.section, ...styles.contactSection }}>
        <SectionLabel>Contact</SectionLabel>
        <h2 style={styles.sectionTitle}>Let's Connect</h2>
        <p style={{ color: "#888", maxWidth: 500, margin: "0 auto 40px", textAlign: "center", fontSize: 16 }}>
          Open to internships, collaborations, and opportunities in tech. Feel free to reach out!
        </p>
        <div style={styles.contactCards}>
          <a href="mailto:fionayvonne.canas@gmail.com" style={styles.contactCard}>
            <span style={{ fontSize: 28, marginBottom: 8 }}>✉️</span>
            <span style={{ fontWeight: 700, color: "#FF6B1A", fontSize: 13 }}>Email</span>
            <span style={{ color: "#ccc", fontSize: 12 }}>fionayvonne.canas@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/fiona-cañas" target="_blank" rel="noreferrer" style={styles.contactCard}>
            <span style={{ fontSize: 28, marginBottom: 8 }}>💼</span>
            <span style={{ fontWeight: 700, color: "#FF6B1A", fontSize: 13 }}>LinkedIn</span>
            <span style={{ color: "#ccc", fontSize: 12 }}>linkedin.com/in/fiona-cañas</span>
          </a>
          <a href="https://github.com/its-yve" target="_blank" rel="noreferrer" style={styles.contactCard}>
            <span style={{ fontSize: 28, marginBottom: 8 }}>🐙</span>
            <span style={{ fontWeight: 700, color: "#FF6B1A", fontSize: 13 }}>GitHub</span>
            <span style={{ color: "#ccc", fontSize: 12 }}>github.com/its-yve</span>
          </a>
          <div style={{ ...styles.contactCard, cursor: "default" }}>
            <span style={{ fontSize: 28, marginBottom: 8 }}>📍</span>
            <span style={{ fontWeight: 700, color: "#FF6B1A", fontSize: 13 }}>Location</span>
            <span style={{ color: "#ccc", fontSize: 12 }}>Taguig City, Philippines</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span style={styles.logo}>FY<span style={{ color: "#FF6B1A" }}>.</span></span>
        <p style={{ color: "#555", fontSize: 13, marginTop: 8 }}>
          © 2025 Fiona Yvonne D. Cañas — Built with React & Vite
        </p>
      </footer>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
      <div style={{ width: 32, height: 2, background: "#FF6B1A" }} />
      <span style={{ color: "#FF6B1A", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
        {children}
      </span>
    </div>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...styles.projectCard,
        ...(hovered ? styles.projectCardHover : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.projectIcon}>{project.icon}</div>
      <h3 style={styles.projectTitle}>{project.title}</h3>
      <p style={styles.projectSub}>{project.subtitle}</p>
      <p style={styles.projectDesc}>{project.description}</p>
      <div style={styles.projectTags}>
        {project.tags.map((t) => (
          <span key={t} style={styles.projectTag}>{t}</span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  root: {
    background: "#0A0A0A",
    color: "#fff",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  grid: {
    position: "fixed",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,107,26,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,26,0.03) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
    pointerEvents: "none",
    zIndex: 0,
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    height: 64,
    background: "rgba(10,10,10,0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,107,26,0.1)",
  },
  logo: {
    fontSize: 24,
    fontWeight: 900,
    letterSpacing: "-0.02em",
    color: "#fff",
  },
  navLinks: {
    display: "flex",
    gap: 4,
  },
  navBtn: {
    background: "none",
    border: "none",
    color: "#888",
    cursor: "pointer",
    padding: "8px 16px",
    borderRadius: 6,
    fontSize: 14,
    fontWeight: 500,
    transition: "all 0.2s",
  },
  navBtnActive: {
    color: "#FF6B1A",
    background: "rgba(255,107,26,0.08)",
  },
  hamburger: {
    display: "none",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: 20,
    cursor: "pointer",
  },
  mobileMenu: {
    position: "fixed",
    top: 64,
    left: 0,
    right: 0,
    background: "#111",
    zIndex: 99,
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid rgba(255,107,26,0.15)",
  },
  mobileMenuItem: {
    background: "none",
    border: "none",
    color: "#ccc",
    padding: "16px 40px",
    textAlign: "left",
    fontSize: 15,
    cursor: "pointer",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
  },
  hero: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 40,
    padding: "130px 80px 80px",
    minHeight: "100vh",
    flexWrap: "wrap",
  },
  heroLeft: {
    flex: "1 1 400px",
    maxWidth: 560,
  },
  heroTag: {
    color: "#FF6B1A",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    marginBottom: 16,
  },
  heroName: {
    fontSize: "clamp(40px, 6vw, 72px)",
    fontWeight: 900,
    lineHeight: 1.05,
    letterSpacing: "-0.03em",
    marginBottom: 24,
  },
  heroNameOrange: {
    color: "#FF6B1A",
  },
  heroBio: {
    color: "#999",
    fontSize: 17,
    lineHeight: 1.7,
    marginBottom: 28,
  },
  heroBadges: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 36,
  },
  badge: {
    background: "rgba(255,107,26,0.1)",
    color: "#FF6B1A",
    border: "1px solid rgba(255,107,26,0.2)",
    padding: "6px 14px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 600,
  },
  heroActions: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: "#FF6B1A",
    color: "#fff",
    padding: "14px 32px",
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 15,
    textDecoration: "none",
    transition: "all 0.2s",
    display: "inline-block",
  },
  btnSecondary: {
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "14px 32px",
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 15,
    textDecoration: "none",
    transition: "all 0.2s",
    display: "inline-block",
  },
  heroRight: {
    flex: "1 1 300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    minHeight: 320,
  },
  avatarRing: {
    width: 240,
    height: 240,
    borderRadius: "50%",
    border: "3px solid rgba(255,107,26,0.4)",
    background: "rgba(255,107,26,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 0 60px rgba(255,107,26,0.15)",
  },
  avatar: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  avatarFallback: {
    display: "none",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 64,
    fontWeight: 900,
    color: "#FF6B1A",
    background: "rgba(255,107,26,0.08)",
  },
  floatCard1: {
    position: "absolute",
    top: 20,
    right: 0,
    background: "#161616",
    border: "1px solid rgba(255,107,26,0.2)",
    borderRadius: 12,
    padding: "10px 14px",
    display: "flex",
    alignItems: "center",
    gap: 10,
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
  },
  floatCard2: {
    position: "absolute",
    bottom: 20,
    left: 0,
    background: "#161616",
    border: "1px solid rgba(255,107,26,0.2)",
    borderRadius: 12,
    padding: "10px 14px",
    display: "flex",
    alignItems: "center",
    gap: 10,
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
  },
  section: {
    position: "relative",
    zIndex: 1,
    padding: "100px 80px",
    maxWidth: 1200,
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: 900,
    letterSpacing: "-0.02em",
    marginBottom: 48,
    color: "#fff",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 20,
  },
  skillCard: {
    background: "#111",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 16,
    padding: "28px 24px",
    transition: "border-color 0.2s",
  },
  skillCat: {
    color: "#FF6B1A",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: 16,
  },
  skillTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  skillTag: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#ccc",
    padding: "5px 12px",
    borderRadius: 20,
    fontSize: 13,
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 20,
  },
  projectCard: {
    background: "#111",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 16,
    padding: 28,
    transition: "all 0.25s",
    cursor: "default",
  },
  projectCardHover: {
    borderColor: "rgba(255,107,26,0.35)",
    transform: "translateY(-4px)",
    boxShadow: "0 20px 60px rgba(255,107,26,0.08)",
  },
  projectIcon: {
    fontSize: 32,
    marginBottom: 16,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 800,
    color: "#fff",
    marginBottom: 4,
  },
  projectSub: {
    fontSize: 13,
    color: "#FF6B1A",
    fontWeight: 600,
    marginBottom: 12,
  },
  projectDesc: {
    color: "#888",
    fontSize: 14,
    lineHeight: 1.65,
    marginBottom: 20,
  },
  projectTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
  },
  projectTag: {
    background: "rgba(255,107,26,0.08)",
    color: "#FF6B1A",
    border: "1px solid rgba(255,107,26,0.15)",
    padding: "4px 10px",
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 600,
  },
  timeline: {
    borderLeft: "2px solid rgba(255,107,26,0.2)",
    paddingLeft: 32,
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  timelineItem: {
    position: "relative",
  },
  timelineDot: {
    position: "absolute",
    left: -41,
    top: 4,
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "#FF6B1A",
    border: "2px solid #0A0A0A",
    boxShadow: "0 0 12px rgba(255,107,26,0.5)",
  },
  timelineContent: {},
  timelineYear: {
    color: "#FF6B1A",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  timelineRole: {
    fontSize: 18,
    fontWeight: 800,
    color: "#fff",
    marginBottom: 4,
  },
  timelineOrg: {
    color: "#666",
    fontSize: 14,
    marginBottom: 14,
  },
  timelineBullets: {
    paddingLeft: 18,
    margin: 0,
  },
  timelineBullet: {
    color: "#888",
    fontSize: 14,
    lineHeight: 1.7,
    marginBottom: 6,
  },
  certCard: {
    background: "#111",
    border: "1px solid rgba(255,107,26,0.15)",
    borderRadius: 14,
    padding: "20px 24px",
    display: "flex",
    flexDirection: "column",
    minWidth: 200,
  },
  contactSection: {
    textAlign: "center",
  },
  contactCards: {
    display: "flex",
    gap: 16,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  contactCard: {
    background: "#111",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 16,
    padding: "28px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    width: 180,
    textDecoration: "none",
    transition: "all 0.2s",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    padding: "40px",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    position: "relative",
    zIndex: 1,
  },
};