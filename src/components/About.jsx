import React from 'react'
import Cloud1 from '../assets/Cloud1.svg'
import Cloud1r from '../assets/Cloud1r.svg'
import Cloud2s from '../assets/Cloud2s.svg'
import Cloud2sr from '../assets/Cloud2sr.svg'

import Cloud2ll from '../assets/Cloud2ll.svg'

const About = (props) => {
    const { github, linkedin } = props
    return (
        <section id='about'>
            <div className='about-content-wrapper'>
                <h1 className='about-title'>About</h1>
                <p className='about-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    impedit sed repudiandae libero consequuntur laborum vel vero
                    numquam! Totam cumque illum voluptatum quia ducimus
                    perferendis facilis quis accusamus rem molestiae natus ab,
                    ratione molestias harum reiciendis placeat necessitatibus.
                    Aperiam at culpa dolores ipsam saepe voluptatem laboriosam
                    natus ratione! Ipsam, ad.
                </p>
                <div className='social-icons-wrapper'>
                    <img className='social-icons' src={github} alt='icon' />
                    <img className='social-icons' src={linkedin} alt='icon' />
                </div>
            </div>
            <div className='cloud-wrapper'>
                <div className='enter-left'>
                    <img
                        src={Cloud2ll}
                        alt='cloud'
                        className='cloud-2-large '
                    />
                    {/* <img src={Cloud2ll} alt='cloud' className='cloud-2-large' />
                    <img src={Cloud2s} alt='cloud' className='cloud-2-small' /> */}
                </div>
                {/* <div className='enter-right'>
                    <img src={Cloud1} alt='cloud' className='cloud-1' />
                    <img src={Cloud1} alt='cloud' className='cloud-1' />
                    <img src={Cloud1r} alt='cloud' className='cloud-1' />

                    <img src={Cloud2sr} alt='cloud' className='cloud-2-small' />
                </div> */}
            </div>
        </section>
    )
}

export default About
