import { useState, useEffect } from 'react'
import './ResumeModal.css'

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openResume = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeResume = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeResume()
    }
  }

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeResume()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isOpen])

  return (
    <>
      {/* Resume Modal */}
      {isOpen && (
        <div className="resume-modal-backdrop" onClick={handleBackdropClick}>
          <div className="resume-modal-container">
            {/* Modal Header */}
            <div className="resume-modal-header">
              <h2>My Resume</h2>
              <button 
                className="resume-modal-close" 
                onClick={(e) => closeResume(e)}
                aria-label="Close resume"
                type="button"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="resume-modal-content">
              {/* PDF Viewer */}
              <object
                data="/resume.pdf"
                type="application/pdf"
                className="resume-pdf-viewer"
              >
                <p>Your browser does not support PDFs. <a href="/resume.pdf" download>Download the PDF</a></p>
              </object>
            </div>

            {/* Modal Footer */}
            <div className="resume-modal-footer">
              <a href="/resume.pdf" download="Muhammad_Kaif_Resume.pdf" className="btn-primary-lg">
                📥 Download PDF
              </a>
              <button 
                className="btn-secondary-lg" 
                onClick={(e) => closeResume(e)}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
