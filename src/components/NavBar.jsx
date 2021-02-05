import React, { useState, useEffect } from 'react'
import { ReactComponent as MenuIcon } from '../assets/burger.svg'
import { ReactComponent as CloseIcon } from '../assets/cancel.svg'

const NavBar = (props) => {
    const { selectNav } = props
    const [hoverStyles, setHoverStyles] = useState({
        logo: '',
        navProjectsLink: '',
        navAboutLink: '',
    })
    const [isClicked, setIsClicked] = useState({ menu: false, close: false })

    const handleMenuClick = () => {
        console.log('burger clicked')
        setIsClicked((prevValue) => ({ ...prevValue, menu: !prevValue.menu }))
    }
    const handleCloseClick = () => {
        setIsClicked((prevValue) => ({
            menu: !prevValue.menu,
            close: !prevValue.close,
        }))
    }
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

    const handleClick = (e) => {
        console.log('logo clicked')
        selectNav(e.target.id)
    }

    return (
        <nav id='nav-bar-wrapper'>
            <div
                onClick={handleClick}
                id='logo'
                className={`logo-link-wrapper ${hoverStyles.logo}`}
            >
                <div className='logo'>V</div>
            </div>

            <div className='burger-menu-wrapper' onClick={handleMenuClick}>
                <MenuIcon className={isClicked.menu ? 'hide' : 'burger-menu'} />
            </div>
            <div
                className={
                    isClicked.menu
                        ? 'navbar-links-wrapper-mobile'
                        : 'nav-links-wrapper'
                }
            >
                <CloseIcon onClick={handleCloseClick} className='close-menu' />
                <button
                    id='projects-nav'
                    className={`nav-link ${hoverStyles.navProjectsLink}`}
                    onClick={handleClick}
                >
                    projects
                </button>
                <button
                    id='about-nav'
                    className={`nav-link ${hoverStyles.navAboutLink}`}
                    onClick={handleClick}
                >
                    about
                </button>
            </div>
        </nav>
    )
}

export default NavBar
