# Component Examples - Copy & Paste Ready

Use these examples to maintain design consistency across your portfolio.

---

## Hero Section Example

```jsx
import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} alt="Hero" />
      
      <h1 className="gradient-text">
        Welcome to My Portfolio
      </h1>
      
      <p className="text-large">
        I'm a passionate developer creating amazing digital experiences
      </p>
      
      <div className="hero-action">
        <button className="btn-primary-lg">Get In Touch</button>
        <button className="btn-secondary-lg">Download Resume</button>
      </div>
    </section>
  )
}
```

---

## About Section Example

```jsx
export default function About() {
  return (
    <section className="about">
      <div>
        <h1 className="gradient-text">About Me</h1>
        <p className="text-large">
          I'm a full-stack developer with 5+ years of experience...
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
        <div className="card">
          <p className="text-eyebrow">Experience</p>
          <h3>5+ Years</h3>
          <p>Building web applications</p>
        </div>
        
        <div className="card">
          <p className="text-eyebrow">Projects</p>
          <h3>20+ Projects</h3>
          <p>Completed successfully</p>
        </div>
        
        <div className="card">
          <p className="text-eyebrow">Skills</p>
          <h3>Full Stack</h3>
          <p>React, Node, MongoDB</p>
        </div>
        
        <div className="card">
          <p className="text-eyebrow">Clients</p>
          <h3>15+ Clients</h3>
          <p>Satisfied customers</p>
        </div>
      </div>
    </section>
  )
}
```

---

## Projects Section Example

```jsx
export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution",
      tech: ["React", "Node.js", "MongoDB"]
    },
    // ... more projects
  ]
  
  return (
    <section className="projects">
      <div>
        <p className="text-eyebrow">Featured Work</p>
        <h1 className="gradient-text">My Projects</h1>
        <p className="text-large">
          Here are some of my recent projects
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
        {projects.map((project) => (
          <div key={project.title} className="card">
            <p className="text-eyebrow">{project.tech.join(", ")}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="btn-primary">View Project</button>
          </div>
        ))}
      </div>
    </section>
  )
}
```

---

## Services Section Example

```jsx
export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful user interfaces"
    },
    {
      title: "Mobile Apps",
      description: "iOS and Android apps"
    },
    {
      title: "Consulting",
      description: "Technical guidance"
    }
  ]
  
  return (
    <section className="services">
      <div>
        <h1 className="gradient-text">Services</h1>
        <p className="text-large">What I can do for you</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        {services.map((service) => (
          <div key={service.title} className="card-compact">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

---

## Contact Section Example

```jsx
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }
  
  return (
    <section className="contact">
      <div>
        <h1 className="gradient-text">Let's Connect</h1>
        <p className="text-large">
          Have a project in mind? Let's talk about it.
        </p>
      </div>
      
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Your Message</label>
            <textarea
              className="form-textarea"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button className="btn-primary-lg" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
```

---

## Skills Section Example

```jsx
export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Vue.js", "HTML/CSS", "JavaScript"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "Django"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "AWS", "Figma"]
    }
  ]
  
  return (
    <section className="skills">
      <div>
        <h1 className="gradient-text">Skills</h1>
        <p className="text-large">Technologies I work with</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
        {skillCategories.map((category) => (
          <div key={category.category} className="card">
            <h3>{category.category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: '8px 16px',
                    background: 'rgba(223, 137, 8, 0.2)',
                    borderRadius: '20px',
                    fontSize: '14px',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

---

## Experience Section Example

```jsx
export default function Experience() {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading development team"
    },
    {
      title: "Full Stack Developer",
      company: "Startup",
      period: "2020 - 2022",
      description: "Built scalable applications"
    }
  ]
  
  return (
    <section className="experience">
      <div>
        <h1 className="gradient-text">Experience</h1>
        <p className="text-large">My professional journey</p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {experiences.map((exp) => (
          <div key={exp.title} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <h3>{exp.title}</h3>
                <p className="text-eyebrow">{exp.company}</p>
              </div>
              <p className="text-small">{exp.period}</p>
            </div>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

---

## Education Section Example

```jsx
export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      school: "University Name",
      year: "2020"
    },
    {
      degree: "Certification",
      field: "Full Stack Development",
      school: "Online Academy",
      year: "2019"
    }
  ]
  
  return (
    <section className="education">
      <div>
        <h1 className="gradient-text">Education</h1>
        <p className="text-large">My learning journey</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
        {education.map((edu) => (
          <div key={edu.degree} className="card-compact">
            <h4>{edu.degree}</h4>
            <p className="text-eyebrow">{edu.field}</p>
            <p className="text-small">{edu.school} • {edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

---

## Footer Section Example

```jsx
export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      color: 'var(--text-secondary)',
      padding: '60px 80px',
      textAlign: 'center',
      borderTop: '1px solid var(--border-color)'
    }}>
      <div style={{ marginBottom: '40px' }}>
        <h3>Let's Work Together</h3>
        <p className="text-large">
          Have a project or question? I'd love to hear from you.
        </p>
        <button className="btn-primary-lg">Get In Touch</button>
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        marginBottom: '40px'
      }}>
        <a href="#" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
        <a href="#" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
        <a href="#" style={{ color: 'var(--text-secondary)' }}>Twitter</a>
      </div>
      
      <p className="text-small">
        © 2024 Muhammad Kaif. All rights reserved.
      </p>
    </footer>
  )
}
```

---

## Reusable Card Component Example

```jsx
// Card.jsx
export default function Card({ eyebrow, title, description, children, compact = false }) {
  return (
    <div className={compact ? "card-compact" : "card"}>
      {eyebrow && <p className="text-eyebrow">{eyebrow}</p>}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}

// Usage
<Card
  eyebrow="Featured"
  title="Project Name"
  description="Project description"
>
  <button className="btn-primary">View More</button>
</Card>
```

---

## Reusable Button Component Example

```jsx
// Button.jsx
export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  ...props 
}) {
  const className = `btn-${variant}${size === 'lg' ? '-lg' : ''}`
  return <button className={className} {...props}>{children}</button>
}

// Usage
<Button variant="primary" size="lg">Click Me</Button>
<Button variant="secondary" size="md">Secondary</Button>
```

---

## Form Component Example

```jsx
// FormInput.jsx
export default function FormInput({ label, ...props }) {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <input className="form-input" {...props} />
    </div>
  )
}

// FormTextarea.jsx
export default function FormTextarea({ label, ...props }) {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <textarea className="form-textarea" {...props}></textarea>
    </div>
  )
}

// Usage
<FormInput label="Name" type="text" placeholder="Your name" />
<FormTextarea label="Message" placeholder="Your message" />
```

---

## Tips for Consistency

1. **Always use the provided classes** - Don't create custom styles
2. **Use CSS variables for colors** - Never hardcode colors
3. **Follow the spacing system** - Use consistent gaps and padding
4. **Test in both themes** - Ensure dark mode works
5. **Test on mobile** - Ensure responsive design works
6. **Use semantic HTML** - Use proper heading hierarchy
7. **Add focus states** - Ensure accessibility
8. **Use consistent transitions** - 0.3s ease for all animations

---

## Common Mistakes to Avoid

❌ **DON'T:**
```jsx
<button style={{ background: '#DF8908' }}>Click</button>
<h1 style={{ fontSize: '60px' }}>Title</h1>
<div style={{ color: '#ffffff' }}>Text</div>
```

✅ **DO:**
```jsx
<button className="btn-primary-lg">Click</button>
<h1 className="gradient-text">Title</h1>
<div><p>Text</p></div>
```

---

## Quick Copy-Paste Snippets

### Section Wrapper
```jsx
<section style={{ margin: '80px 170px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
  {/* Content */}
</section>
```

### Grid Layout (2 columns)
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
  {/* Cards */}
</div>
```

### Grid Layout (3 columns)
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
  {/* Cards */}
</div>
```

### Flex Row
```jsx
<div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
  {/* Items */}
</div>
```

### Flex Column
```jsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
  {/* Items */}
</div>
```

---

All examples follow the design system and will automatically support dark mode!
