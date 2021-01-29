import React, { useState, useEffect } from 'react'
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

    const mouseLeave = (e) => {
        setIsMouseOver(false)
    }
    const mouseEnter = (e) => {
        setIsMouseOver(true)
    }
    const bindScrollSnap = () => {
        const element = document.getElementById('app')
        const snapElement = new ScrollSnap(element, {
            snapDestinationY: '100%',

            duration: 400,
            threshold: 0.1,
        })

        snapElement.bind(console.log('snapped'))
    }

    useEffect(() => {
        bindScrollSnap()
        document
            .getElementById('home-wrapper')
            .addEventListener('mouseleave', mouseLeave)
        document
            .getElementById('home-wrapper')
            .addEventListener('mouseenter', mouseEnter)

        return () => {
            document
                .getElementById('home-wrapper')
                .removeEventListener('mouseleave', mouseLeave)
            document
                .getElementById('home-wrapper')
                .removeEventListener('mouseenter', mouseEnter)
        }
    }, [])
    return (
        <div id='app' className='app-wrapper'>
            <div id='home-wrapper'>
                <NavBar />
                <LandingSection status={isMouseOver} />
            </div>

            <ProjectsSection />
            <div id='profile-wrapper'>
                <About github={Github} linkedin={LinkedIn} />

                <Footer email={Email} github={Github} linkedin={LinkedIn} />
            </div>
            <Cursor />
        </div>
    )
}

export default App
