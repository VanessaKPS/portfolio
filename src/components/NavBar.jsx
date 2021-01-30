import React, { useState, useEffect } from 'react'

const NavBar = () => {
    const [hoverStyles, setHoverStyles] = useState({
        logo: '',
        navProjectsLink: '',
        navAboutLink: '',
    })

    const handleHover = () => {
        document.getElementById('logo').addEventListener('mouseover', () => {
            setHoverStyles((prevValue) => ({
                ...prevValue,
                logo: 'hover-logo-wrapper-style',
            }))
        })
        document.getElementById('logo').addEventListener('mouseout', () => {
            setHoverStyles((prevValue) => ({ ...prevValue, logo: '' }))
        })
        document
            .getElementById('projects-nav')
            .addEventListener('mouseover', () => {
                setHoverStyles((prevValue) => ({
                    ...prevValue,
                    navProjectsLink: 'hover-link-style',
                }))
            })
        document
            .getElementById('projects-nav')
            .addEventListener('mouseout', () => {
                setHoverStyles((prevValue) => ({
                    ...prevValue,
                    navProjectsLink: '',
                }))
            })
        document
            .getElementById('about-nav')
            .addEventListener('mouseover', () => {
                setHoverStyles((prevValue) => ({
                    ...prevValue,
                    navAboutLink: 'hover-link-style',
                }))
            })
        document
            .getElementById('about-nav')
            .addEventListener('mouseout', () => {
                setHoverStyles((prevValue) => ({
                    ...prevValue,
                    navAboutLink: '',
                }))
            })
    }

    useEffect(() => {
        handleHover()
    }, [])

    return (
        <nav id='nav-bar-wrapper'>
            <a
                href='/'
                id='logo'
                className={`logo-link-wrapper ${hoverStyles.logo}`}
            >
                <div className='logo'>V</div>
            </a>

            <div className='nav-links-wrapper'>
                <a
                    href='#projects'
                    id='projects-nav'
                    className={`nav-link ${hoverStyles.navProjectsLink}`}
                >
                    projects
                </a>
                <a
                    href='#about'
                    id='about-nav'
                    className={`nav-link ${hoverStyles.navAboutLink}`}
                >
                    about
                </a>
            </div>
        </nav>
    )
}

export default NavBar
