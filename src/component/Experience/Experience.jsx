import theme_pattern from '../../assets/theme_pattern.svg'
import experience_data from '../../assets/experience_data'
import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-heading">
        <div className="experience-title">
          <p className="experience-eyebrow">Work Journey</p>
          <h1>
            Work <span>Experience</span>
          </h1>
       
        </div>
        <p className="experience-subtitle">
          My professional journey in software development, teaching, and client
          work.
        </p>
      </div>

      <div className="experience-timeline">
        <span className="experience-timeline__line" aria-hidden="true" />
        {experience_data.map((item, index) => (
          <article className="experience-card" key={item.role}>
            <div className="experience-card__marker">
              <span className="experience-card__dot" />
              <span className="experience-card__stem" />
            </div>
            <div className="experience-card__body">
              <header className="experience-card__header">
                <div>
                  <p className="experience-card__role">{item.role}</p>
                  <p className="experience-card__org">{item.organization}</p>
                </div>
                <div className="experience-card__meta">
                  <p>{item.timeframe}</p>
                  <p>{item.location}</p>
                </div>
              </header>
              <ul>
                {item.summary.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="experience-card__tags">
                {item.tags.map((tag) => (
                  <span key={`${item.role}-${tag}`}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience

