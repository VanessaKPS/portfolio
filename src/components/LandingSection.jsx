import React from 'react'
import HeaderBackground from './HeaderBackground'
// import Cursor from './Cursor'

const LandingSection = () => {
    return (
        <header id='header-wrapper'>
            <h1 className='header-title'>VANESSA KPS</h1>
            {/* <h1 className='header-title'>KPS</h1> */}
            {/* <Cursor /> */}
            <HeaderBackground />

            <p className='header-text'>web developer</p>
            <div className='cta'>
                <p className='header-text'>projects</p>
            </div>
        </header>
    )
}

export default LandingSection
