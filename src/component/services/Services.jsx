import { useState } from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import services_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

function Services() {
  const [selectedService, setSelectedService] = useState(null)

  const handleOpen = (service) => setSelectedService(service)
  const handleClose = () => setSelectedService(null)

  return (
    <section id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
      
      </div>
      <p className="services-subtitle">
        From strategy and experience design to production-ready code and teaching, here
        are the ways I help teams ship faster with confidence.
      </p>

      <div className="services-container">
        {services_data.map((service) => (
          <button
            key={service.s_no}
            type="button"
            className="services-card"
            onClick={() => handleOpen(service)}
          >
            <div className="services-card__header">
              <span className='serial_no'>{service.s_no}</span>
              <p>{service.tagline}</p>
            </div>
            <h2>{service.s_name}</h2>
            <p className="services-card__summary">{service.s_desc}</p>
            <div className="services-card__cta">
              <span>Read More</span>
              <img src={arrow_icon} alt="" />
            </div>
          </button>
        ))}
      </div>

      {selectedService && (
        <div className="services-modal" onClick={handleClose}>
          <div
            className="services-modal__panel"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedService.s_name} details`}
          >
            <button
              type="button"
              className="services-modal__close"
              onClick={handleClose}
              aria-label="Close service details"
            >
              ×
            </button>
            <p className="services-modal__eyebrow">{selectedService.tagline}</p>
            <h2>{selectedService.s_name}</h2>
            <p className="services-modal__description">
              {selectedService.description}
            </p>

            {!!selectedService.highlights?.length && (
              <div className="services-modal__section">
                <p className="services-modal__label">How I help</p>
                <ul>
                  {selectedService.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {!!selectedService.stack?.length && (
              <div className="services-modal__section">
                <p className="services-modal__label">Tooling</p>
                <div className="services-modal__chips">
                  {selectedService.stack.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Services