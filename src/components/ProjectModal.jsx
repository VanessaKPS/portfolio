import React from 'react'

const ProjectModal = (props) => {
    const {
        title,
        gif,
        description,
        tech,
        styling,
        icons,
        deployed,
        selectCloseModal,
        features,
        libraries,
    } = props

    const frontEndLib = libraries[0].frontend
    console.log(frontEndLib)
    const backEndLib = libraries[1].backend

    const handleClick = () => {
        selectCloseModal()
    }
    return (
        <div className='modal-wrapper'>
            <div className='illustration-wrapper'>
                <div className='close-modal-wrapper' onClick={handleClick}>
                    abcdefg
                    {/* <img className='close-modal' src='' alt='' /> */}
                </div>
                <h1 className='modal-title'>{title}</h1>
                <div className='gif-wrapper'>
                    <img
                        className='modal-gif'
                        src={gif}
                        alt='project-gif'
                    ></img>
                </div>
                <div className='modal-icons-container'>
                    {icons.map((icon, i) => (
                        <a href='/' className='modal-icon-wrapper' key={i}>
                            <img
                                src={icon}
                                alt='{icon}'
                                className='social-icons'
                            />
                        </a>
                    ))}
                </div>
            </div>
            <div className='information-wrapper'>
            <h3 className='section-title'>Description</h3>
                <p className='modal-description'>{description}</p>
                <div className='features-wrapper'>
                    <h3 className='section-title'>Features</h3>
                    {features.map((feature, i) => (
                        <p className='modal-feature' key={i}>
                            {feature}
                        </p>
                    ))}
                </div>
                <div className='tech-style-wrapper'>
                    <div className='technologies-wrapper'>
                        <h3 className='section-title'>Technologies</h3>
                        {tech.map((technology, i) => (
                            <p className='modal-tech' key={i}>
                                {technology}
                            </p>
                        ))}
                    </div>
                    <div className='styling-wrapper'>
                        <h3 className='section-title'>Styling</h3>
                        <p className='modal-styling'>{styling}</p>
                    </div>
                </div>
                <div className='libraries-wrapper'>
                    <h3 className='section-title'>Dependencies/Libraries</h3>
                    <div className='front-back-wrapper'>
                        {frontEndLib[0] && backEndLib[0] === 'N.A' ? (
                            <p className='library-title'>N.A</p>
                        ) : (
                            <div className='frontend-wrapper'>
                                <p className='library-title'>Front End</p>
                                {frontEndLib.map((lib, i) => (
                                    <p className='modal-library' key={i}>
                                        {lib}
                                    </p>
                                ))}
                            </div>
                        )}

                        {backEndLib[0] === 'N.A' ? null : (
                            <div className='backend-wrapper'>
                                <p className='library-title'>Back End</p>
                                {backEndLib.map((lib, i) => (
                                    <p className='modal-library' key={i}>
                                        {lib}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className='deployment-wrapper'>
                    <h3 className='section-title'>Deployment</h3>
                    {deployed.map((deployment, i) => (
                        <p className='modal-deployment' key={i}>
                            {deployment}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
