import React, { useEffect, useState } from 'react'
import closeIcon from '../assets/cancel.svg'

const ProjectModal = (props) => {
    const {
        title,
        gif,
        image,
        description,
        tech,
        styling,

        deployed,
        selectCloseModal,
        features,
        libraries,
        disclaimer,
        info,
        selector,
        liveDemo,
        codeLink,
    } = props

    const [isLoaded, setIsLoaded] = useState(false)

    const frontEndLib = libraries[0].frontend
    console.log(frontEndLib)
    const backEndLib = libraries[1].backend

    const handleClick = (e) => {
        e.preventDefault()
        selectCloseModal(e)
    }

    useEffect(() => {
        setIsLoaded((prevValue) => !prevValue)
    }, [])
    return (
        <div className={`modal-wrapper ${selector}`}>
            <div className='illustration-wrapper'>
                <div className='close-modal-wrapper' onClick={handleClick}>
                    <img className='close-modal' src={closeIcon} alt='' />
                </div>
                <h1 className='modal-title'>{title}</h1>

                <div className='gif-wrapper'>
                    <img
                        className='modal-gif'
                        src={isLoaded ? gif : image}
                        alt='project-gif'
                    ></img>
                </div>
                <div className='modal-icons-container'>
                    <a
                        href={liveDemo.link}
                        className='modal-icon-wrapper'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={liveDemo.icon}
                            alt='icon'
                            className='social-icons'
                        />
                    </a>
                    <a
                        href={codeLink.link}
                        className='modal-icon-wrapper'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={codeLink.icon}
                            alt='icon'
                            className='social-icons'
                        />
                    </a>

                    {info === null ? null : (
                        <div className='info-wrapper'>
                            <div className='info-icon-wrapper'>
                                <img
                                    className='info-icon'
                                    src={info}
                                    alt='info'
                                />
                            </div>
                            <p className='disclaimer-text'>{disclaimer}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='information-wrapper'>
                <div className='description-wrapper'>
                    <h3 className='section-title'>Description</h3>
                    <p className='modal-description'>{description}</p>
                </div>
                <div className='features-wrapper'>
                    <h3 className='section-title'>Features</h3>
                    <ul>
                        {features.map((feature, i) => (
                            <li className='modal-feature' key={i}>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='tech-style-wrapper'>
                    <div className='technologies-wrapper'>
                        <h3 className='section-title'>Technologies</h3>
                        <ul>
                            {tech.map((technology, i) => (
                                <li className='modal-tech' key={i}>
                                    {technology}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='styling-wrapper'>
                        <h3 className='section-title'>Styling</h3>
                        <ul>
                            <li className='modal-styling'>{styling}</li>
                        </ul>
                    </div>
                </div>
                <div className='libraries-wrapper'>
                    <h3 className='section-title'>Dependencies/Libraries</h3>
                    <div className='front-back-wrapper'>
                        {frontEndLib[0] === 'N.A' ? (
                            <p className='modal-library'>N.A</p>
                        ) : (
                            <div className='frontend-wrapper'>
                                <p className='library-title'>Front End</p>
                                <ul>
                                    {frontEndLib.map((lib, i) => (
                                        <li className='modal-library' key={i}>
                                            {lib}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {backEndLib[0] === 'N.A' ? null : (
                            <div className='backend-wrapper'>
                                <p className='library-title'>Back End</p>
                                <ul>
                                    {backEndLib.map((lib, i) => (
                                        <li className='modal-library' key={i}>
                                            {lib}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className='deployment-wrapper'>
                    <h3 className='section-title'>Deployment</h3>
                    <ul>
                        {deployed.map((deployment, i) => (
                            <li className='modal-deployment' key={i}>
                                {deployment}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
