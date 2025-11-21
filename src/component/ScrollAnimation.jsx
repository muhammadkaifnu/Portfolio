import { useEffect } from 'react'
import './ScrollAnimation.css'

export default function ScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animate-in')
          entry.target.classList.remove('scroll-animate-out')
        } else {
          entry.target.classList.add('scroll-animate-out')
          entry.target.classList.remove('scroll-animate-in')
        }
      })
    }, observerOptions)

    // Observe all cards and animated elements
    const cards = document.querySelectorAll(
      '.card, .card-compact, .project-card, .service-card, .skill-card, .experience-card, .education-card'
    )
    
    cards.forEach((card) => {
      card.classList.add('scroll-animate')
      observer.observe(card)
    })

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  return null
}
