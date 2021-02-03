import React from 'react'

const Footer = (props) => {
    const { email, github, linkedin } = props
    return (
        <section id='contact'>
            <div className='contact-wrapper'>
                <a className='icon-anchors' href='mailto:v.kang.ps@gmail.com'>
                    <img className='social-icons' src={email} alt='icon' />
                </a>
                <a
                    className='icon-anchors'
                    href='https://github.com/VanessaKPS'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img className='social-icons' src={github} alt='icon' />
                </a>
                <a
                    className='icon-anchors'
                    href='https://www.linkedin.com/in/vanessa-kang-85013a154/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img className='social-icons' src={linkedin} alt='icon' />
                </a>
            </div>
        </section>
    )
}

export default Footer
