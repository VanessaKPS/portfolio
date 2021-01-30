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
                <p className='about-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    impedit sed repudiandae libero consequuntur laborum vel vero
                    numquam! Totam cumque illum voluptatum quia ducimus
                    perferendis facilis quis accusamus rem molestiae natus ab,
                    ratione molestias harum reiciendis placeat necessitatibus.
                    Aperiam at culpa dolores ipsam saepe voluptatem laboriosam
                    natus ratione! Ipsam, ad.
                </p>
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
