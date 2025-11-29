import Hero from "./component/hero"
import Navbar from "./component/Navbar"
import AnimatedBackground from "./component/AnimatedBackground"
import HackerTerminal from "./component/HackerTerminal"
import ScrollAnimation from "./component/ScrollAnimation"
import ResumeModal from "./component/ResumeModal"
import About from './component/AboutMe/About.jsx'
import Projects from './component/Projects/Projects.jsx'
import Services from './component/services/Services.jsx'
import TechnicalSkills from './component/TechnicalSkills/TechnicalSkills.jsx'
import Experience from './component/Experience/Experience.jsx'
import Education from './component/Education/Education.jsx'
import MyWork from "./component/MyWork/MyWork.jsx"
import Contact from "./component/Contact/Contact.jsx"
import Footer from "./component/footer/Footer.jsx"

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <ScrollAnimation />
      <HackerTerminal />
      <AnimatedBackground />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <ResumeModal />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <MyWork />
        <Services />
        <TechnicalSkills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
