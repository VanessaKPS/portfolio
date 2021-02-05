import React, { useState, useEffect, useRef } from 'react'
import Cursor from './Cursor'
import NavBar from './NavBar'
import LandingSection from './LandingSection'
import ProjectsSection from './ProjectsSection'
import About from './About'
import Footer from './Footer'
import Email from '../assets/email.svg'
import Github from '../assets/github.svg'
import LinkedIn from '../assets/linkedin.svg'
import ScrollSnap from 'scroll-snap'

const App = () => {
    const [isMouseOver, setIsMouseOver] = useState(true)
    const appRef = useRef()
    const homeRef = useRef()
    const projectsRef = useRef()
    const aboutRef = useRef('about')

    const mouseLeave = (e) => {
        setIsMouseOver(false)
    }
    const mouseEnter = (e) => {
        setIsMouseOver(true)
    }
    const bindScrollSnap = () => {
        const element = appRef.current
        const snapElement = new ScrollSnap(element, {
            snapDestinationY: window.innerHeight,
            duration: 300,
            threshold: 0.1,
            timeout: 100,
        })
        console.log(snapElement)

        snapElement.bind()
    }
    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
        console.log(window.innerHeight)
    }

    useEffect(() => {
        appHeight()
        window.addEventListener('resize', appHeight)

        bindScrollSnap()

        const homeWrapper = homeRef.current
        homeWrapper.addEventListener('mouseleave', mouseLeave)

        homeWrapper.addEventListener('mouseenter', mouseEnter)

        return () => {
            homeWrapper.removeEventListener('mouseleave', mouseLeave)
            homeWrapper.removeEventListener('mouseenter', mouseEnter)
        }
    }, [])

    const handleClick = (name) => {
        console.log(name)
        if (name === 'logo') {
            homeRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        if (name === 'projects-nav' || name === 'cta') {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' })
        }

        if (name === 'about-nav') {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <div id='app' className='app-wrapper' ref={appRef}>
            <div id='home-wrapper' ref={homeRef}>
                <NavBar selectNav={handleClick} />
                <LandingSection status={isMouseOver} selectNav={handleClick} />
            </div>
            <div ref={projectsRef} id='projects-wrapper'>
                <ProjectsSection />
            </div>
            <div id='profile-wrapper' ref={aboutRef}>
                <About github={Github} linkedin={LinkedIn} />

                <Footer email={Email} github={Github} linkedin={LinkedIn} />
            </div>
            <Cursor />
        </div>
    )
}

export default App
