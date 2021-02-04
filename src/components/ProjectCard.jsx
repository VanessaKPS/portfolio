import React, { useState, useRef, useEffect } from 'react'

const ProjectCard = (props) => {
    const { title, image, gif, strapLine, id, selectProject, selector } = props
    const cardRef = useRef()
    const [hoverStyle, setHoverStyle] = useState('')

    const handleClick = (e) => {
        console.log("i've been clicked")
        e.preventDefault()
        selectProject(id)
    }
    useEffect(() => {
        cardRef.current.addEventListener('mouseenter', () => {
            setHoverStyle('show-gif-wrapper')
        })
        cardRef.current.addEventListener('mouseleave', () => {
            setHoverStyle('')
        })
    })
    return (
        <div
            onClick={handleClick}
            className={`project-wrapper ${selector} `}
            key={id}
            ref={cardRef}
            id={selector}
        >
            <div
                className='banner-image'
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className='copy-wrapper'>
                <h2 className='project-title'>{title}</h2>
                <p className='project-description'>{strapLine}</p>
                <div className='project-cta'>Show more</div>
            </div>
            <div className={`hover-wrapper ${hoverStyle}`}>
                <img
                    src={hoverStyle === 'show-gif-wrapper' ? gif : image}
                    className='background-img'
                    alt='project-gif'
                />
                <div className='project-cta'>
                    <div className='hover-cta-border'>Show more</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
