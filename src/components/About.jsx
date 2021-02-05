import React, { useState, useEffect } from 'react'
import Cloud1r from '../assets/Cloud1r.svg'
import Cloud2s from '../assets/Cloud2s.svg'

const About = (props) => {
    const [animationClass, setAnimationClass] = useState({
        title: 'about-title',
        clouds: 'cloud-wrapper',
    })
    useEffect(() => {
        const target = document.getElementById('about')
        const options = { threshold: 1 }

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setAnimationClass({
                        title: 'animate-about-title',
                        clouds: 'animate-cloud-wrapper',
                    })
                } else {
                }
            })
        }, options)
        observer.observe(target)
    }, [])
    return (
        <section id='about'>
            <div className='about-content-wrapper'>
                <h1 className={animationClass.title}>
                    <span>A</span>
                    <span>b</span>
                    <span>o</span>
                    <span>u</span>
                    <span>t</span> <span>m</span>
                    <span>e</span>
                </h1>
                <div className='about-text-wrapper'>
                    <p className='about-text'>
                        I am a Full-stack web developer specialising in Front
                        End development. <br></br>I have created applications
                        with technologies including;
                    </p>
                    <div className='about-technologies'>
                        <div className='frontend-wrapper'>
                            <h3 className='section-title'>Front End</h3>
                            <ul>
                                <li>React</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                                <li>RESTful APIs</li>
                                <li>SCSS</li>
                            </ul>
                        </div>
                        <div className='backend-wrapper'>
                            <h3 className='section-title'>Back End</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>EJS</li>
                                <li>RESTful APIs</li>
                                <li> Git/GitHub</li>
                            </ul>
                        </div>
                    </div>
                    <p className='about-text'>
                        My love for all things visual stems from a long history
                        in the arts as a performer and facilitator.
                        Additionally, I hold an MSc (Distinction) in the
                        psychology of Neuroaesthetics, Goldsmiths, UoL.
                    </p>
                </div>
            </div>
            <div className={animationClass.clouds}>
                <div className='group1'>
                    <img
                        src={Cloud1r}
                        alt='cloud'
                        className='cloud-1r cloud1'
                    />
                    <img
                        src={Cloud2s}
                        alt='cloud'
                        className='cloud-2s cloud2'
                    />

                    <img
                        src={Cloud1r}
                        alt='cloud'
                        className='cloud-1r cloud3'
                    />
                    <img
                        src={Cloud1r}
                        alt='cloud'
                        className='cloud-1r cloud4'
                    />
                </div>
                <div className='group2'>
                    <img
                        src={Cloud2s}
                        alt='cloud'
                        className='cloud-2s cloud5'
                    />
                    <img
                        src={Cloud2s}
                        alt='cloud'
                        className='cloud-2s cloud6'
                    />
                    <img
                        src={Cloud1r}
                        alt='cloud'
                        className='cloud-1r cloud7'
                    />
                </div>
            </div>
        </section>
    )
}

export default About
