import theme_pattern from '../../assets/theme_pattern.svg'
import './Education.css'

const educationItems = [
  {
    degree: 'Bachelor of Software Engineering',
    institution: 'FAST NUCES Peshawar, Pakistan',
    timeframe: 'Aug 2022 – Jun 2026',
    meta: 'CGPA: 3.24',
    description:
      'Pursuing Software Engineering with focus on modern development practices, automation, and intelligent systems.',
    keywords: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Systems',
      'Web Engineering',
      'Mobile App Development',
    ],
  },
]

const certifications = [
  {
    title: 'TA-ship Certificate',
    issuer: 'FAST NUCES',
    year: '2024',
    description: 'Recognition for outstanding contribution as Teaching Assistant.',
  },
]

const languages = [
  { label: 'English', level: 'Fluent' },
  { label: 'Urdu', level: 'Fluent' },
  { label: 'Pashto', level: 'Native' },
]

function Education() {
  return (
    <section id="education" className="education">
      <div className="education-heading">
        <div className="education-title">
          <p className="education-eyebrow">Academics</p>
          <h1>
            Education <span>& Achievements</span>
          </h1>
          <img src={theme_pattern} alt="" aria-hidden="true" />
        </div>
        <p className="education-subtitle">
          My academic background and the certifications that have shaped my
          engineering journey.
        </p>
      </div>

      <div className="education-grid">
        <div className="education-column">
          <div className="education-column__header">
            <span role="img" aria-hidden="true">
              🎓
            </span>
            <p>Education</p>
          </div>
          <div className="education-stack">
            {educationItems.map((item) => (
              <article className="education-card" key={item.degree}>
                <div className="education-card__header">
                  <h3>{item.degree}</h3>
                  <div>
                    <p>{item.timeframe}</p>
                    <p>{item.meta}</p>
                  </div>
                </div>
                <p className="education-card__institution">{item.institution}</p>
                <p className="education-card__description">{item.description}</p>
                <div className="education-card__tags">
                  {item.keywords.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="education-column">
          <div className="education-column__header">
            <span role="img" aria-hidden="true">
              🏅
            </span>
            <p>Certificates & Competitions</p>
          </div>
          <div className="education-stack">
            {certifications.map((certificate) => (
              <article className="education-card education-card--compact" key={certificate.title}>
                <div>
                  <h4>{certificate.title}</h4>
                  <p className="education-card__institution">
                    {certificate.issuer}
                  </p>
                </div>
                <div className="education-card__meta">{certificate.year}</div>
                <p className="education-card__description">
                  {certificate.description}
                </p>
              </article>
            ))}
          </div>

          <div className="education-column__header languages-header">
            <span role="img" aria-hidden="true">
              🌐
            </span>
            <p>Languages</p>
          </div>
          <div className="education-stack">
            <article className="education-card education-card--compact languages-card">
              {languages.map((language) => (
                <div key={language.label} className="language-row">
                  <p>{language.label}</p>
                  <span>{language.level}</span>
                </div>
              ))}
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

