import { useEffect, useMemo, useState } from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import './MyWork.css'
import arrow_icon from '../../assets/arrow_icon.svg'
import mywork_data from '../../assets/mywork_data'

function MyWork() {
  const [selectedWork, setSelectedWork] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const galleryImages = useMemo(() => {
    if (!selectedWork) return []
    if (selectedWork.gallery?.length) return selectedWork.gallery
    return [selectedWork.w_img]
  }, [selectedWork])

  const handleOpen = (work) => setSelectedWork(work)
  const handleClose = () => setSelectedWork(null)

  useEffect(() => {
    if (!selectedWork) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [selectedWork])

  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>

      </div>
      <div className="mywork-container">
        {mywork_data.slice(0, showAll ? mywork_data.length : 6).map((work) => (
          <button
            type="button"
            className="mywork-card"
            key={work.w_no}
            onClick={() => handleOpen(work)}
            aria-label={`Open ${work.w_name} details`}
          >
            <img src={work.w_img} alt={work.w_name} />
            <div className="mywork-card__overlay">
              <p>View project</p>
            </div>
          </button>
        ))}
      </div>
      <button
        type="button"
        className="mywork-showmore"
        onClick={() => setShowAll(!showAll)}
        aria-label={showAll ? "Show less projects" : "Show more projects"}
      >
        <p>{showAll ? 'Show Less' : 'Show More'}</p>
        <img
          src={arrow_icon}
          alt=""
          style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
        />
      </button>

      {selectedWork && (
        <div className="mywork-modal" onClick={handleClose}>
          <div
            className="mywork-modal__panel"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedWork.w_name} project details`}
          >
            <button
              type="button"
              className="mywork-modal__close"
              onClick={handleClose}
              aria-label="Close project details"
            >
              ×
            </button>
            <div className="mywork-modal__header">
              <div>
                <p className="mywork-modal__eyebrow">{selectedWork.w_name}</p>
                <h2>{selectedWork.headline || selectedWork.w_name}</h2>
              </div>
              <div className="mywork-modal__links">
                {selectedWork.repo && (
                  <a
                    href={selectedWork.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mywork-modal__link"
                  >
                    Repo
                  </a>
                )}
                {selectedWork.live && (
                  <a
                    href={selectedWork.live}
                    target="_blank"
                    rel="noreferrer"
                    className="mywork-modal__link mywork-modal__link--primary"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
            <p className="mywork-modal__description">
              {selectedWork.description}
            </p>
            <div className="mywork-modal__gallery">
              {galleryImages.map((image, idx) => (
                <img
                  key={`${selectedWork.w_no}-${idx}`}
                  src={image}
                  alt={`${selectedWork.w_name} screenshot ${idx + 1}`}
                />
              ))}
            </div>

            {!!selectedWork.techStack?.length && (
              <div className="mywork-modal__tech">
                <p className="mywork-modal__tech-label">Tech used</p>
                <div className="mywork-modal__chips">
                  {selectedWork.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MyWork