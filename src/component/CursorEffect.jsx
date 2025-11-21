import { useEffect, useRef } from 'react'
import './CursorEffect.css'

export default function CursorEffect() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const trailRef = useRef([])
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }

      // Move main cursor
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }

      // Move cursor dot
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = e.clientX + 'px'
        cursorDotRef.current.style.top = e.clientY + 'px'
      }

      // Create trail particles
      createTrail(e.clientX, e.clientY)
    }

    const createTrail = (x, y) => {
      const trail = document.createElement('div')
      trail.className = 'cursor-trail'
      trail.style.left = x + 'px'
      trail.style.top = y + 'px'
      document.body.appendChild(trail)

      setTimeout(() => {
        trail.remove()
      }, 600)
    }

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1'
      if (cursorDotRef.current) cursorDotRef.current.style.opacity = '1'
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0'
      if (cursorDotRef.current) cursorDotRef.current.style.opacity = '0'
    }

    // Add hover effects for interactive elements
    const handleElementHover = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('cursor-hover')
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.classList.add('cursor-dot-hover')
      }
    }

    const handleElementLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('cursor-hover')
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.classList.remove('cursor-dot-hover')
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, .card, .btn-primary, .btn-secondary'
    )
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleElementHover)
      el.addEventListener('mouseleave', handleElementLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleElementHover)
        el.removeEventListener('mouseleave', handleElementLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main Cursor Ring */}
      <div ref={cursorRef} className="cursor-ring"></div>

      {/* Cursor Dot */}
      <div ref={cursorDotRef} className="cursor-dot"></div>

      {/* Cursor Glow */}
      <div className="cursor-glow"></div>
    </>
  )
}
