import React from 'react'

const ProjectModal = (props) => {
    const {
        title,
        image,
        description,
        tech,
        styling,
        icons,
        deployed,
        selectCloseModal,
        features,
    } = props

    const handleClick = () => {
        selectCloseModal()
    }
    return (
        <div className='modal-wrapper'>
            <div className='close-modal-wrapper' onClick={handleClick}>
                abcdefg
                {/* <img className='close-modal' src='' alt='' /> */}
            </div>
            <h1 className='modal-title'>{title}</h1>
            <img className='modal-img' src='{image}' alt={image}></img>
            <p className='modal-description'>{description}</p>
            {features.map((feature, i) => (
                <p className='modal-feature' key={i}>
                    {feature}
                </p>
            ))}
            {tech.map((technology, i) => (
                <p className='modal-tech' key={i}>
                    {technology}
                </p>
            ))}
            {deployed.map((deployment, i) => (
                <p className='modal-deployment' key={i}>
                    {deployment}
                </p>
            ))}
            <p className='modal-styling'>{styling}</p>
            {icons.map((icon, i) => (
                <a href='/' className='modal-icon-wrapper' key={i}>
                    <img src={icon} alt='{icon}' className='social-icons' />
                </a>
            ))}
        </div>
    )
}

export default ProjectModal
