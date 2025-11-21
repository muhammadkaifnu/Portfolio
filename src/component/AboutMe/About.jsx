import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const focusAreas = [
  {
    title: 'Web Development',
    headline: 'Front-to-back experiences',
    description:
      'Full-stack builds with MERN, Django, Vite, and performance-focused CI/CD pipelines.',
  },
  {
    title: 'Mobile Development',
    headline: 'Flutter-first solutions',
    description:
      'Production-ready Flutter apps with bespoke UI kits, animations, and device integrations.',
  },
  {
    title: 'Database Management',
    headline: 'Reliable data flows',
    description:
      'MySQL, MongoDB, and Supabase expertise to keep apps secure, scalable, and observable.',
  },
  {
    title: 'Continuous Learning',
    headline: 'AI + automation focus',
    description:
      'Working with AI agents, workflow tools like n8n, and ML experiments to extend my toolkit.',
  },
]

const stats = [
  { label: 'Years of Study', value: '3+' },
  { label: 'Projects Completed', value: '8+' },
  { label: 'Certificates Earned', value: '5+' },
  { label: 'Passion for Coding', value: '∞' },
]

function About() {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      
      </div>
   

      <div className="about-grid">
        <div className="about-journey">
        <p className="about-subtitle">
        I&apos;m a passionate Software Engineering student at FAST NUCES with
        hands-on experience in web and mobile development. I love building
        purposeful products and continuously expanding my skills into AI and
        automation.
      </p>
          <h2>My Journey</h2>
          <p>
            My journey began at FAST NUCES where I discovered how much I enjoy
            crafting digital solutions. From building my first web application to
            delivering cross-platform mobile apps, I&apos;ve been constantly
            learning and growing.
          </p>
          <p>
            I&apos;ve served as a Teaching Assistant for multiple programming
            courses, collaborated on freelance projects, and experimented with
            intelligent workflows. Each project sharpened my problem-solving
            skills and reinforced the impact of user-centered design.
          </p>
          <p>
            Today I&apos;m focused on blending solid engineering practices with
            delightful experiences—shipping fast, collaborating closely with
            teams, and iterating based on real user feedback.
          </p>
        </div>

        <div className="about-focus">
          {focusAreas.map((area) => (
            <article className="about-card" key={area.title}>
              <p className="about-card__tagline">{area.headline}</p>
              <h3>{area.title}</h3>
              <p className="about-card__description">{area.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="about-metrics">
        {stats.map((stat) => (
          <div className="about-metric" key={stat.label}>
            <span>{stat.value}</span>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About