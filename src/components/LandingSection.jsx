import React, { useState, useEffect, useRef } from 'react'
import HeaderBackground from './HeaderBackground'

const LandingSection = (props) => {
    const { status, selectNav } = props
    const [hoverStyle, setHoverStyle] = useState('')
    const ctaRef = useRef(null)

    const handleHover = () => {
        ctaRef.current.addEventListener('mouseover', () => {
            setHoverStyle('hover-header-text')
        })
        ctaRef.current.addEventListener('mouseout', () => {
            setHoverStyle('')
        })
    }

    useEffect(() => {
        handleHover()
    }, [])

    const handleClick = (e) => {
        console.log('cliucked')
        console.log(e.target)
        selectNav(e.target.id)
    }

    return (
        <header id='header'>
            <HeaderBackground status={status} />
            <div className='profile-wrapper'>
                <h1 className='header-title'>VANESSA KPS</h1>

                <p className='header-text'>web developer</p>
            </div>

            <div
                id='cta'
                onClick={handleClick}
                className={`cta ${hoverStyle}`}
                ref={ctaRef}
            >
                projects
            </div>
        </header>
    )
}

export default LandingSection
