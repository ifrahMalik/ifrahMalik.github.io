import './App.css';
import profilePic from './assets/_DSC1919-BO84RIz9.jpeg';
import billtrustlogo from './assets/billtrust-logo.png';
import tcnjlogo from './assets/tcnj-logo.png';
import honeywelllogo from './assets/Honeywell_logo.svg.png';
import bgImage from './assets/bgwebpic.avif';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [currentProject, setCurrentProject] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const projectsRef = React.useRef(null);
  const [activeTab, setActiveTab] = React.useState('Languages');

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && projectsRef.current) {
        setCurrentProject((prev) =>
          prev === projectsRef.current.children.length - 1 ? 0 : prev + 1
        );
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  React.useEffect(() => {
    const handleNavClick = (e) => {
      const link = e.target;
      if (link.classList.contains('nav-link')) {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.querySelector('.nav-list').addEventListener('click', handleNavClick);
    return () => {
      const navList = document.querySelector('.nav-list');
      if (navList) {
        navList.removeEventListener('click', handleNavClick);
      }
    };
  }, []);

  return (
    <div className="app-background">
      <div className="container">
        {/* Navigation */}
        <nav className="nav-bar">
          <ul className="nav-list">
            <li>
              <a href="#profile" className="nav-link">Home</a>
            </li>
            <li>
              <a href="#about" className="nav-link">About Me</a>
            </li>
            <li>
              <a href="#contact" className="nav-link">Contact</a>
            </li>
            <li>
              <a href="#experience" className="nav-link">Experience</a>
            </li>
            <li>
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li>
              <a href="#skills" className="nav-link">Tools & Technologies</a>
            </li>

          </ul>
        </nav>

        {/* Profile Section */}
        <section id="profile" className="section">
          <div className="welcome">Welcome to my portfolio!</div>
          <div className="profile-section">
            <div className="profile-bg">

              <img
                src={profilePic}
                alt="Your portrait"
                className="profile-pic"
              />
              {/* Floating background shapes */}
              <div className="floating-icon">💻</div>
              <div className="floating-icon">⚡</div>
              <div className="floating-icon">🌸</div>
              <div className="floating-icon">📚</div>
            </div>
            <h1 className="name">
              Ifrah Malik
            </h1>
            <p className="subtitle">
              <i className="fas fa-graduation-cap contact-icon"></i> TCNJ CS '25
            </p>
            <div className="highlights">
              <a href="#experience" className="highlight-badge">💻 SWE Intern @ Billtrust</a>
              <a href="#experience" className="highlight-badge">💻 SWE Intern @ Honeywell</a>
              <p></p>
              <a href="#experience" className="highlight-badge">🔬 Research in Mobile App Development</a>
            </div>

          </div>
        </section>

        {/* About Me & Contact Section */}
        <section id="about" className="section two-column">
          <div className="about-me">
            <h2 className="section-title">
              About Me
            </h2>
            <p className="description">
              I am a recent Computer Science graduate passionate about
              technology and creating practical, user-focused software.
              With experience in full-stack development and agile collaboration
              in production environments, I am curious and motivated
              by projects that deliver real impact. I am eager to apply my skills across
              software development, operations, and data-driven initiatives.
            </p>
          </div>

          <div id="contact" className="contact-container">
            <h2 className="section-title">
              Contact
            </h2>
            <ul className="contact-list">
              <li>
                <i className="fas fa-envelope contact-icon"></i>
                <a
                  href="mailto:ifrah.malik728@gmail.com"
                  className="contact-link"
                >
                  ifrah.malik728@gmail.com
                </a>
              </li>

              <li>
                <i className="fab fa-github contact-icon"></i>
                <a
                  href="https://github.com/ifrahMalik"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <i className="fab fa-linkedin contact-icon"></i>
                <a
                  href="https://linkedin.com/in/ifrah-malik"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>

            </ul>
          </div>
        </section>

        <section id="experience" className="section">
          <h2 className="section-title">Professional & Research Experience</h2>
          <p className="project-note">
            Hover over each experience to learn more about my roles and contributions.
          </p>
          <div className="experience-timeline-horizontal">
            <div id="experience-research" className="experience-item">
              <div className="experience-logo">
                <img src={tcnjlogo} alt="TCNJ Logo" className="company-logo" />
              </div>
              <div className="experience-details">
                <h3 className="experience-title">Mobile App Development Research</h3>
                <h4 className="experience-subtitle">Faculty Mentor: Dr. Knox</h4>
                <h5 className="experience-subtitle">Jan 2023 - May 2023</h5>
                <p className="description">
                  Maintained key functionalities of the TCNJ Library App such as study room and computer occupancy features
                  by working with new software and hardware (raspberry pi).
                </p>
              </div>
            </div>
            <div id="experience-honeywell" className="experience-item">
              <div className="experience-logo">
                <img src={honeywelllogo} alt="Honeywell Logo" className="company-logo" />
              </div>
              <div className="experience-details">
                <h3 className="experience-title">SWE Intern @ Honeywell</h3>
                <h5 className="experience-subtitle">May 2023 - Aug 2023</h5>
                <p className="description">
                  At Honeywell, I collaborated in cross-functional teams in an Agile environment.
                  I worked with Java, Spring Boot SQL, and web technologies to build and test enterprise-grade
                  software solutions, while gaining experience in version control and unit testing.
                </p>
              </div>
            </div>
            <div id="experience-billtrust" className="experience-item">
              <div className="experience-logo">
                <img src={billtrustlogo} alt="Billtrust Logo" className="company-logo" />
              </div>
              <div className="experience-details">
                <h3 className="experience-title">SWE Intern @ Billtrust</h3>
                <h5 className="experience-subtitle">Jun 2024 - Jul 2025</h5>
                <p className="description">
                  At Billtrust, I worked on a Permission Audit Log feature for the Billtrust Platform that helps system admins
                  view permission audits for users of a tenant. I designed and implemented an Audit Log
                  table UI with search filters, tracked user actions, and created features to ensure
                  secure access management.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* Projects */}
        <section id="projects" className="section">
          <h2 className="section-title">
            Projects
          </h2>
          <ul
            className="projects-list"
            ref={projectsRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <li className={`project-card ${currentProject === 0 ? 'active' : ''}`}>
              <a
                href="https://github.com/ifrahMalik/luna_cycle"
                className="project-link"
                target="_blank"
              >
                🔗 Luna Cycle
              </a>
              <span className="project-description">
                A full-stack period tracking app built on Emergent,
                the world’s new agentic platform, with a FastAPI backend,
                React frontend, and MongoDB storage to deliver intuitive
                cycle insights and unique Islamic prayer guidance on a
                scalable, well-tested architecture.
              </span>
            </li>
            <li className={`project-card ${currentProject === 1 ? 'active' : ''}`}>
              <a
                href="https://github.com/ifrahMalik/NextGenHire"
                className="project-link"
                target="_blank"
              >
                🔗 NextGenHire
              </a>
              <a
                href="https://devpost.com/software/nextgenhire"
                className="project-link"
                target="_blank"
              >
                🔗 Devpost: Hackathon Winning Project
              </a>
              <span className="project-description">
                Built a secure AI-driven (Gemini) career platform with Flask,
                HTML, and Auth0 to rapidly implement features, debug, and refactor
                code. Engineered AI prompts to improve candidate–job matching logic
                and streamline backend workflows to latest development standards.
              </span>
            </li>
            <li className={`project-card ${currentProject === 2 ? 'active' : ''}`}>
              <a
                href="https://github.com/ifrahMalik/PACTALK"
                className="project-link"
                target="_blank"
              >
                🔗 PACTALK
              </a>
              <span className="project-description">
                Developed a Python-based PacMan game with voice commands using Pygame and Vosk,
                enhancing accessibility for individuals with motor disabilities.
              </span>
            </li>
            <li className={`project-card ${currentProject === 3 ? 'active' : ''}`}>
              <a className="project-link">
                Appointment Scheduler for Arm in Arm
              </a>
              <span className="project-description">
                A web-based application to increase efficiency at a local non-profit organization (Arm-in-Arm) by reducing lines to the food pantry.
                Followed Agile Software Development techniques, used Ruby on Rails, configured the PSQL database, and worked on the appointment availability algorithm.
              </span>
            </li>
            <li className={`project-card ${currentProject === 4 ? 'active' : ''}`}>
              <a className="project-link">
                Open-Source Project: Rails of Justice for Atlantic Center for Capital Representation (ACCR)
              </a>
              <span className="project-description">
                Rails of Justice is a web-based application that assists the staff of ACCR combat racial and economic inequities in the criminal justice system.
                My contributions include creating the manual webinar registrant verification functionality and improving the download CSV files feature.
              </span>
            </li>
            <li className={`project-card ${currentProject === 5 ? 'active' : ''}`}>
              <a
                href="https://github.com/ifrahMalik/DatabaseSystemsFinalProject-QueryingTool"
                className="project-link"
                target="_blank"
              >
                🔗 Sustainability Project for Sustainable Jersey Staff
              </a>
              <span className="project-description">
                Developed a database system and user-friendly interface for the Sustainable Jersey staff, integrating multiple datasets on community profiles, vehicle usage (fuel vs. electric), and emissions from fuel-based passenger vehicles. Designed the UI to provide accessible, streamlined querying capabilities, enabling staff to quickly retrieve insights for research and decision-making. This project strengthened my understanding of database management systems (DBMS) and demonstrated the impact of combining structured data with intuitive interfaces to support sustainability initiatives
              </span>
            </li>
          </ul>
          <button
            className="carousel-btn prev"
            onClick={() => setCurrentProject((prev) =>
              prev === 0
                ? projectsRef.current.children.length - 1
                : prev - 1
            )}
          >
            ❮
          </button>
          <button
            className="carousel-btn next"
            onClick={() => setCurrentProject((prev) =>
              prev === projectsRef.current.children.length - 1
                ? 0
                : prev + 1
            )}
          >
            ❯
          </button>
          <div className="carousel-indicators">
            {Array.from({ length: projectsRef.current?.children.length || 0 }).map((_, index) => (
              <span
                key={index}
                className={`indicator ${currentProject === index ? 'active' : ''}`}
                onClick={() => setCurrentProject(index)}
              />
            ))}
          </div>
          <p className="project-note">
            Note: The projects are displayed in a carousel format, changing every 5 seconds.
            Hover over the project list to pause the automatic transition. Click the project with a 🔗 to check it out. </p>
        </section>

        {/* Tools/Technologies */}
        <section id="skills" className="section">
          <h2 className="section-title">
            Tools & Technologies
          </h2>

          <div className="tech-tabs-container">
            {/* Tab Navigation */}
            <div className="tech-tabs">
              {['Languages', 'Frameworks & Libraries', 'Cloud & DevOps', 'Databases & APIs', 'Tools'].map((tab) => (
                <button
                  key={tab}
                  className={`tech-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="tech-content">
              <div className={`tech-category ${activeTab === 'Languages' ? 'active' : ''}`}>
                <h3 className="tech-category-title">Languages 📝 💻</h3>
                <ul className="tech-list">
                  {['Java', 'Python', 'Ruby', 'C#', 'C++', 'C', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'R'].map((tech) => (
                    <li key={tech} className="tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`tech-category ${activeTab === 'Frameworks & Libraries' ? 'active' : ''}`}>
                <h3 className="tech-category-title">Frameworks & Libraries 🛠️ 📚</h3>
                <ul className="tech-list">
                  {['Spring Boot', '.NET', 'Flask', 'Ruby on Rails', 'React', 'Angular', 'NgRx', 'Pygame', 'PyAudio', 'Vosk'].map((tech) => (
                    <li key={tech} className="tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`tech-category ${activeTab === 'Cloud & DevOps' ? 'active' : ''}`}>
                <h3 className="tech-category-title">Cloud & DevOps ☁️ 🚀</h3>
                <ul className="tech-list">
                  {['AWS (S3, EC2)', 'Terraform', 'Terragrunt', 'Jenkins', 'Docker', 'CI/CD pipelines', 'Infrastructure as Code'].map((tech) => (
                    <li key={tech} className="tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`tech-category ${activeTab === 'Databases & APIs' ? 'active' : ''}`}>
                <h3 className="tech-category-title">Databases & APIs 🗄️ 🔗</h3>
                <ul className="tech-list">
                  {['PostgreSQL', 'MySQL', 'MongoDB Atlas', 'SQLyog', 'REST APIs', 'Swagger', 'JSON'].map((tech) => (
                    <li key={tech} className="tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`tech-category ${activeTab === 'Tools' ? 'active' : ''}`}>
                <h3 className="tech-category-title">Tools 🔧 ⚙️</h3>
                <ul className="tech-list">
                  {['Git', 'GitHub', 'Bitbucket', 'GitLab', 'Jira', 'Confluence', 'Splunk', 'OpenSearch Dashboard', 'Unix/Linux', 'CLI', 'GitHub Co-Pilot'].map((tech) => (
                    <li key={tech} className="tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-text" align="center"> © 2025 Created by Ifrah Malik</p>
        </footer>

      </div>
    </div>

  );
}

export default App;
