import theme_pattern from '../../assets/theme_pattern.svg'
import './Projects.css'

const projects = [
  {
    title: 'Bank Management System',
    stack: 'C++ · OOP · WinForms',
    summary:
      'Desktop experience for account creation, transactions, and admin oversight with a Windows Forms GUI.',
    details: [
      'CRUD workflows for customers and accounts',
      'Authentication + admin dashboards',
      'File-based persistence tuned for quick lookups',
    ],
  },
  {
    title: 'Mimo Learning App',
    stack: 'Requirement Engineering',
    summary:
      'Requirements discovery and documentation for a mobile learning app focused on programming content.',
    details: [
      'Mapped personas, epics, and acceptance criteria',
      'Defined data flows and information architecture',
      'Delivered SRS + UX recommendations to dev team',
    ],
  },
  {
    title: 'Quiz Application',
    stack: 'Java · OOP · Patterns',
    summary:
      'Modular quiz engine leveraging design patterns for maintainability and feature extension.',
    details: [
      'Strategy + Factory patterns for question types',
      'Timer, scoring, and review modules',
      'Separation of UI, domain, and persistence layers',
    ],
  },
  {
    title: 'Blood Bank Platform',
    stack: 'Django · PostgreSQL',
    summary:
      'Role-based portal connecting donors, requesters, and admins to streamline blood donation logistics.',
    details: [
      'Inventory tracking and compatibility matching',
      'Email/SMS style notifications for urgent requests',
      'Admin analytics for supply forecasting',
    ],
  },
  {
    title: 'Evibe Event Management',
    stack: 'HTML/CSS/JS · PHP · MySQL',
    summary:
      'End-to-end booking portal for event planners with dashboards for hosts and attendees.',
    details: [
      'Custom CMS for packages and availability',
      'Responsive public site with booking wizard',
      'Payment-ready backend with admin approvals',
    ],
  },
  {
    title: 'Flutter Frontend Suite',
    stack: 'Flutter · Dart',
    summary:
      'Series of Flutter apps including GPA calculator, Weather, Chat, E‑commerce, Music, To‑Do, and iOS-style calculators.',
    details: [
      'Shared design tokens and component library',
      'Local/offline data storage patterns',
      'Focus on performance and animation polish',
    ],
  },
  {
    title: 'UI/UX Projects',
    stack: 'Figma',
    summary:
      'Movie, Grocery, Food Delivery, Nike, Hotel, and Evibe landing pages crafted as high-fidelity concept work.',
    details: [
      'Component-driven design systems',
      'Microcopy + storytelling for each flow',
      'Developer-ready exports and specs',
    ],
  },
  {
    title: 'Portfolio Website',
    stack: 'React · Vite · CSS Modules',
    summary:
      'This portfolio—highlighting services, work, and contact flows with smooth interactions and responsive layouts.',
    details: [
      'Reusable section system + theme accents',
      'Project modal interactions and data-driven sections',
      'Optimized asset loading with Vite',
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

