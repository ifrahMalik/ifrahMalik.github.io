import './App.css';
import profilePic from './assets/_DSC1919.jpeg';
// Add Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="container">
      {/* About Me */}
      <section className="section">
        <div className="profile-section">
          <img 
            src={profilePic} 
            alt="Your portrait" 
            className="profile-pic"
          />
          <h1 className="name">
            Ifrah Malik
          </h1>
          <p className="subtitle">
            <i className="fas fa-graduation-cap contact-icon"></i> TCNJ CS '25
          </p>
          <p className="title">
            Software Engineering | Full-Stack Development | Accessibility
          </p>
        </div>
        </section>
        {/* About Me & Contact Section */}
        <section className="section two-column">
          <div className="about-me">
            <h2 className="section-title">
              About Me
            </h2>
            <p className="description">
              I am a recent Computer Science graduate passionate about 
              technology and creating practical, user-focused software. 
              With experience in full-stack development and agile collaboration 
              in production environments, I am curious, quick to learn, and motivated 
              by projects that deliver real impact. I am eager to apply my skills across 
              software development, operations, and data-driven initiatives.
            </p>
          </div>
          
          <div className="contact-container">
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
              <li>
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <span>NJ, USA</span>
              </li>
            </ul>
          </div>
        </section>

      {/* Tools/Technologies */}
      <section className="section">
        <h2 className="section-title">
          Tools & Technologies
        </h2>
        <div className="tech-categories">
          <div className="tech-category">
            <h3 className="tech-category-title">Languages</h3>
            <ul className="tech-list">
              {['Java', 'Python', 'Ruby', 'C#', 'C++', 'C', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'R'].map((tech) => (
                <li key={tech} className="tech-item">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="tech-category">
            <h3 className="tech-category-title">Frameworks & Libraries</h3>
            <ul className="tech-list">
              {['Spring Boot', '.NET', 'Flask', 'Ruby on Rails', 'React', 'Angular', 'NgRx', 'Pygame', 'PyAudio', 'Vosk'].map((tech) => (
                <li key={tech} className="tech-item">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="tech-category">
            <h3 className="tech-category-title">Cloud & DevOps</h3>
            <ul className="tech-list">
              {['AWS (S3, EC2)', 'Terraform', 'Terragrunt', 'Jenkins', 'Docker', 'CI/CD pipelines', 'Infrastructure as Code'].map((tech) => (
                <li key={tech} className="tech-item">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="tech-category">
            <h3 className="tech-category-title">Databases & APIs</h3>
            <ul className="tech-list">
              {['PostgreSQL', 'MySQL', 'MongoDB Atlas', 'SQLyog', 'REST APIs', 'Swagger', 'JSON'].map((tech) => (
                <li key={tech} className="tech-item">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="tech-category">
            <h3 className="tech-category-title">Tools</h3>
            <ul className="tech-list">
              {['Git', 'GitHub', 'Bitbucket', 'GitLab', 'Jira', 'Confluence', 'Splunk', 'OpenSearch Dashboard', 'Unix/Linux', 'CLI', 'GitHub Co-Pilot'].map((tech) => (
                <li key={tech} className="tech-item">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2 className="section-title">
          Projects
        </h2>
        <ul className="projects-list">
          <li className="project-card">
            <a 
              href="https://github.com/ifrahMalik/luna_cycle"
              className="project-link"
            >
              Luna Cycle
            </a>
            <span className="project-description">
              A full-stack period tracking app built on Emergent, 
              the world’s new agentic platform, with a FastAPI backend, 
              React frontend, and MongoDB storage to deliver intuitive 
              cycle insights and unique Islamic prayer guidance on a 
              scalable, well-tested architecture.
            </span>
          </li>
          <li className="project-card">
            <a 
              href="https://github.com/ifrahMalik/NextGenHire"
              className="project-link"
            > 
              NextGenHire
            </a>
            <a 
              href="https://devpost.com/software/nextgenhire"
              className="project-link"
            > 
              Devpost: Hackathon Winning Project
            </a>
            <span className="project-description">
              Built a secure AI-driven (Gemini) career platform with Flask, 
              HTML, and Auth0 to rapidly implement features, debug, and refactor 
              code. Engineered AI prompts to improve candidate–job matching logic 
              and streamline backend workflows to latest development standards.
            </span>
          </li>
          <li className="project-card">
            <a 
              href="https://github.com/ifrahMalik/PACTALK"
              className="project-link"
            >
              PACTALK
            </a>
            <span className="project-description">
              Developed a Python-based PacMan game with voice commands using Pygame and Vosk, 
              enhancing accessibility for individuals with motor disabilities.
            </span>
          </li>
          <li className="project-card">
            <a className="project-link">
              Appointment Scheduler for Arm in Arm
            </a>
            <span className="project-description">
              A web-based application to increase efficiency at a local non-profit organization (Arm-in-Arm) by reducing lines to the food pantry. 
              Followed Agile Software Development techniques, used Ruby on Rails, configured the PSQL database, and worked on the appointment availability algorithm.
            </span>
          </li>
          <li className="project-card">
            <a className="project-link">
              Open-Source Project: Rails of Justice for Atlantic Center for Capital Representation (ACCR)
            </a>
            <span className="project-description">
              Rails of Justice is a web-based application that assists the staff of ACCR combat racial and economic inequities in the criminal justice system. 
              My contributions include creating the manual webinar registrant verification functionality and improving the download CSV files feature.
            </span>
          </li>
          <li className="project-card">
            <a 
              href="https://github.com/ifrahMalik/DatabaseSystemsFinalProject-QueryingTool"
              className="project-link"
            >
              Sustainability Project for Sustainable Jersey Staff
            </a>
            <span className="project-description">
              Developed a database system and user-friendly interface for the Sustainable Jersey staff, integrating multiple datasets on community profiles, vehicle usage (fuel vs. electric), and emissions from fuel-based passenger vehicles. Designed the UI to provide accessible, streamlined querying capabilities, enabling staff to quickly retrieve insights for research and decision-making. This project strengthened my understanding of database management systems (DBMS) and demonstrated the impact of combining structured data with intuitive interfaces to support sustainability initiatives
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
