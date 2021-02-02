import React, { useState, useRef, useEffect } from 'react'

const ProjectCard = (props) => {
    const { title, gif, strapLine, id, selectProject, selector } = props
    const cardRef = useRef()
    const [hoverStyle, setHoverStyle] = useState('')

    const handleClick = () => {
        console.log("i've been clicked")
        selectProject(id)
    }
    useEffect(() => {
        cardRef.current.addEventListener('mouseenter', () => {
            setHoverStyle('show-gif')
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
        >
            <img
                src={gif}
                className={`background-img ${hoverStyle}`}
                alt='project-gif'
            />
            <h2 className='project-title'>{title}</h2>
            <p className='project-description'>{strapLine}</p>

            <div className='project-cta'>Show more</div>
        </div>
    )
}

export default ProjectCard
