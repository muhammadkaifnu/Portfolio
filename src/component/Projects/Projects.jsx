import theme_pattern from '../../assets/theme_pattern.svg'
import './Projects.css'

const projects = [
  {
    title: 'FYP: Vehicle Re-Identification',
    stack: 'AI/Deep Learning · YOLOv8 · OSNet',
    summary:
      'Helpix: AI surveillance system for hit-and-run detection, identifying fleeing vehicles across cameras and mapping routes.',
    details: [
      'Accident detection & vehicle re-identification',
      'Route mapping for law enforcement',
      'Trained on VeRi-776 & CityFlow datasets',
    ],
  },
  {
    title: 'Baller.ai',
    stack: 'MERN Stack · AI',
    summary:
      'Comprehensive football platform featuring fixtures, news, match predictions, player market values, and league analytics.',
    details: [
      'Match predictions & league winner forecasting',
      'Real-time top scorers & assists tracking',
      'Player market value analysis',
    ],
  },
  {
    title: 'Evibe Event Booking',
    stack: 'PHP · Bootstrap · MySQL',
    summary:
      'Event management platform allowing users to seamlessly post, discover, and book events.',
    details: [
      'User-friendly event posting & booking',
      'Responsive design with Bootstrap',
      'Robust PHP & MySQL backend',
    ],
  },
  {
    title: 'FoodFront',
    stack: 'React · Redux',
    summary:
      'Restaurant booking application featuring interactive menus, chef profiles, and table reservation capabilities.',
    details: [
      'Dynamic menu & chef details',
      'Table reservation system',
      'Efficient state management with Redux',
    ],
  },
  {
    title: 'Flutter Projects Suite',
    stack: 'Flutter · ML · Dart',
    summary:
      'A collection of mobile apps including GPA Calculator, Weather, Chat, E-Commerce, and a Safe QR Code Scanner.',
    details: [
      'Safe QR: ML-based malicious URL detection',
      'Phishing & redirect warnings',
      'Diverse utility & e-commerce apps',
    ],
  },
  {
    title: 'Blood Bank System',
    stack: 'Django · Python',
    summary:
      'Multi-role platform designed to streamline blood donation processes and request management.',
    details: [
      'Multi-role user access control',
      'Efficient blood donation tracking',
      'Request management system',
    ],
  },
  {
    title: 'UI/UX Design Portfolio',
    stack: 'Figma · Prototyping',
    summary:
      'High-fidelity designs for Helpix, Movie App, Grocery App, Food Delivery, Nike Landing Page, and Hotel Booking.',
    details: [
      'Helpix Complete UI/UX Design',
      'Diverse app & web interface designs',
      'User-centric prototyping',
    ],
  },
  {
    title: 'AI Agent Automation',
    stack: 'n8n · VAPI · AI Agents',
    summary:
      'Suite of AI automation agents for restaurant ordering, email summarization, and voice reception.',
    details: [
      'Restaurant Agent: Orders & Excel updates',
      'Email Summarizer: Auto-summaries for new emails',
      'Voice Receptionist: 24/7 calls, booking, Calendar sync',
    ],
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-heading">
        <div className="projects-title">
          <p className="projects-eyebrow">Case Studies</p>
          <h1>Highlighted Projects</h1>

        </div>
        <p className="projects-subtitle">
          A snapshot of the platforms, apps, and design systems I&apos;ve built or supported—from
          desktop tooling to mobile-first products.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-card__meta">
              <p className="project-card__stack">{project.stack}</p>
            </div>
            <h3>
              <span className="project-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="project-title">{project.title}</span>
            </h3>
            <p className="project-card__summary">{project.summary}</p>
            <ul>
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

