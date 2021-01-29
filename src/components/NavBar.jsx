import React, { useState, useEffect } from 'react'

const NavBar = () => {
    const [isHovered, setIsHovered] = useState({
        logo: false,
        projects: false,
        about: false,
        contact: false,
    })

    const handleHover = () => {
        document.getElementById('logo').addEventListener('mouseover', () => {
            setIsHovered((prevValue) => ({
                ...prevValue,
                logo: !prevValue.logo,
            }))
        })
        document.getElementById('logo').addEventListener('mouseout', () => {
            setIsHovered((prevValue) => ({
                ...prevValue,
                logo: !prevValue.logo,
            }))
        })
        document
            .getElementById('projects-nav')
            .addEventListener('mouseover', () => {
                setIsHovered((prevValue) => ({
                    ...prevValue,
                    projects: !prevValue.projects,
                }))
            })
        document
            .getElementById('projects-nav')
            .addEventListener('mouseout', () => {
                setIsHovered((prevValue) => ({
                    ...prevValue,
                    projects: !prevValue.projects,
                }))
            })
        document
            .getElementById('about-nav')
            .addEventListener('mouseover', () => {
                setIsHovered((prevValue) => ({
                    ...prevValue,
                    about: !prevValue.about,
                }))
            })
        document
            .getElementById('about-nav')
            .addEventListener('mouseout', () => {
                setIsHovered((prevValue) => ({
                    ...prevValue,
                    about: !prevValue.about,
                }))
            })
        // document
        //     .getElementById('contact-nav')
        //     .addEventListener('mouseover', () => {
        //         setIsHovered((prevValue) => ({
        //             ...prevValue,
        //             contact: !prevValue.contact,
        //         }))
        //     })
        // document
        //     .getElementById('contact-nav')
        //     .addEventListener('mouseout', () => {
        //         setIsHovered((prevValue) => ({
        //             ...prevValue,
        //             contact: !prevValue.contact,
        //         }))
        //     })
    }

    useEffect(() => {
        handleHover()
    }, [])

    return (
        <nav id='nav-bar-wrapper'>
            <a
                href='/'
                id='logo'
                className={
                    isHovered.logo
                        ? 'hover-logo-wrapper-style'
                        : 'logo-link-wrapper'
                }
            >
                <div className='logo'>V</div>
            </a>

            <div className='nav-links-wrapper'>
                <a
                    href='#projects'
                    id='projects-nav'
                    className={
                        isHovered.projects ? 'hover-link-style' : 'nav-link'
                    }
                >
                    projects
                </a>
                <a
                    href='#about'
                    id='about-nav'
                    className={
                        isHovered.about ? 'hover-link-style' : 'nav-link'
                    }
                >
                    about
                </a>
                {/* <a
                    href='#contact'
                    id='contact-nav'
                    className={
                        isHovered.contact ? 'hover-link-style' : 'nav-link'
                    }
                >
                    contact
                </a> */}
            </div>
        </nav>
    )
}

export default NavBar
