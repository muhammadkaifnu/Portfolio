import './hero.css'
import Profile from '../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useState } from 'react'

function Hero(){

    return (
        <>
            <div id='hero' className="hero">
                <img src={Profile} alt="" /> {/* Profile Pic*/}
                <h1><span>I'm Muhammad Kaif,</span> Mern Stack Developer</h1>
                <p>Hi, I'm Muhammad Kaif
A 7th-semester Software Engineering student at FAST NUCES, Peshawar.
I specialize in Flutter, UI/UX Design, and Full Stack Development (MERN).
Passionate about crafting user-friendly apps and teaching tech concepts.</p>
                <div className="hero-action">
                    <div className="hero-connect"><AnchorLink className='achor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                    <a 
                      href="/resume.pdf" 
                      download="Muhammad_Kaif_Resume.pdf" 
                      className="hero-download"
                    >
                      Download My Resume
                    </a>
                </div>
            </div>

        </>
    )
}
export default Hero