import React from 'react'

const Footer = (props) => {
    const { email, github, linkedin } = props
    return (
        <section id='contact'>
            <div className='contact-wrapper'>
                <img className='social-icons' src={email} alt='icon' />
                <img className='social-icons' src={github} alt='icon' />
                <img className='social-icons' src={linkedin} alt='icon' />
            </div>
        </section>
    )
}

export default Footer
