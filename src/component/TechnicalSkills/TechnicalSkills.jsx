import theme_pattern from '../../assets/theme_pattern.svg'
import './TechnicalSkills.css'

const skillsData = [
  {
    title: 'Product & Experience',
    caption: 'Crafting interfaces that feel intuitive and delightful.',
    items: [
      { label: 'Flutter UI', value: 90, color: '#59c9f6' },
      { label: 'UI/UX Strategy', value: 85, color: '#a774ff' },
      { label: 'Figma Systems', value: 80, color: '#ff8ec9' },
    ],
  },
  {
    title: 'Full-Stack & APIs',
    caption: 'Building performant web apps with clean, scalable APIs.',
    items: [
      { label: 'MERN Stack', value: 88, color: '#ffbb56' },
      { label: 'API Development', value: 86, color: '#5ff5c6' },
      { label: 'MySQL & Data Modeling', value: 82, color: '#5f8bff' },
    ],
  },
  {
    title: 'Automation & AI',
    caption: 'Orchestrating workflows and intelligent assistants.',
    items: [
      { label: 'AI Agent Automation', value: 78, color: '#ff5fa2' },
      { label: 'n8n Workflows', value: 80, color: '#8dff8a' },
      { label: 'Git & Delivery', value: 85, color: '#ff7045' },
    ],
  },
]

const expertiseTags = [
  'Flutter UI',
  'UI/UX Design',
  'MERN Stack',
  'AI Agent Automation',
  'n8n',
  'MySQL',
  'API Development',
  'Figma',
  'Git',
]

function TechnicalSkills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-heading">
        <div className="skills-title">
          <p className="skills-eyebrow">Capabilities</p>
          <h1>
            Technical <span>Skills</span>
          </h1>
      
        </div>
        <p className="skills-subtitle">
          A cross-functional toolkit for building responsive products, automating
          workflows, and shipping reliable experiences end to end.
        </p>
      </div>

      <div className="skills-grid">
        {skillsData.map((group) => (
          <article className="skills-card" key={group.title}>
            <div className="skills-card__header">
              <h3>{group.title}</h3>
              <p>{group.caption}</p>
            </div>
            <div className="skills-card__body">
              {group.items.map((item) => (
                <div className="skill" key={item.label}>
                  <div className="skill__meta">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="skill__bar">
                    <span
                      style={{ width: `${item.value}%`, background: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="skills-tags">
        {expertiseTags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </section>
  )
}

export default TechnicalSkills

