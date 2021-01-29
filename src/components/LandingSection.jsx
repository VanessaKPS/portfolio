import React, { useState, useEffect } from 'react'
import HeaderBackground from './HeaderBackground'

const LandingSection = (props) => {
    const { status } = props
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = () => {
        document.getElementById('cta').addEventListener('mouseover', () => {
            setIsHovered((prevValue) => !prevValue)
        })
        document.getElementById('cta').addEventListener('mouseout', () => {
            setIsHovered((prevValue) => !prevValue)
        })
    }

    useEffect(() => {
        handleHover()
    }, [])

    return (
        <header id='header'>
            <HeaderBackground status={status} />
            <div className='profile-wrapper'>
                <h1 className='header-title'>VANESSA KPS</h1>

                <p className='header-text'>web developer</p>
            </div>
            <a href='#projects' id='cta' className='cta'>
                <p className={isHovered ? 'hover-header-text' : 'header-text'}>
                    projects
                </p>
            </a>
        </header>
    )
}

export default LandingSection
