import { useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaSun, FaMoon } from 'react-icons/fa'
import logo from '../assets/profile_img.jpg'
import './Navbar.css'

const NAV_ITEMS = [
  { key: 'home', label: 'Home', href: '#home', offset: 0 },
  { key: 'about', label: 'About', href: '#about', offset: 50 },
  { key: 'projects', label: 'Projects', href: '#projects', offset: 50 },
  { key: 'services', label: 'Services', href: '#services', offset: 50 },
  { key: 'skills', label: 'Skills', href: '#skills', offset: 50 },
  { key: 'experience', label: 'Experience', href: '#experience', offset: 50 },
  { key: 'education', label: 'Education', href: '#education', offset: 50 },
  { key: 'work', label: 'Work', href: '#mywork', offset: 50 },
]

function Navbar() {
  const [activeLink, setActiveLink] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('darkMode')
      const isDark = savedTheme ? JSON.parse(savedTheme) : true // Default to dark mode
      // Apply theme immediately on load
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return isDark
    }
    return true // Default to dark mode
  })

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode
      localStorage.setItem('darkMode', JSON.stringify(newMode))
      return newMode
    })
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleNavClick = (key) => {
    setActiveLink(key)
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="nav-brand">
        <img className="logo-pic" src={logo} alt="Muhammad Kaif avatar" />
        <div className="nav-brand__copy">
          <p>Muhammad Kaif</p>
          <span>Software Engineer</span>
        </div>
      </div>

      <button
        type="button"
        className="nav-toggle nav-toggle--open"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-menu ${isMenuOpen ? 'nav-menu--open' : ''}`}>
        <button
          type="button"
          className="nav-toggle nav-toggle--close"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          ×
        </button>
        {NAV_ITEMS.map((item) => (
          <li key={item.key}>
            <AnchorLink
              className={`nav-link ${
                activeLink === item.key ? 'nav-link--active' : ''
              }`}
              href={item.href}
              offset={item.offset}
              onClick={() => handleNavClick(item.key)}
            >
              {item.label}
            </AnchorLink>
          </li>
        ))}
        <li className="nav-menu__cta">
          <AnchorLink
            className="nav-button nav-button--full"
            href="#contact"
            offset={50}
            onClick={() => handleNavClick('contact')}
          >
            Let&apos;s Talk
          </AnchorLink>
        </li>
        <li className="nav-menu__theme-toggle">
          <button 
            onClick={toggleDarkMode} 
            className="theme-toggle-mobile"
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </li>
      </ul>

      <div className="nav-actions">
        <button 
          onClick={toggleDarkMode} 
          className="theme-toggle"
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <AnchorLink className="nav-button" href="#contact" offset={50}>
          Let&apos;s Talk
        </AnchorLink>
      </div>
    </header>
  )
}

export default Navbar