import React from 'react'

const ProjectCard = (props) => {
    const { title, image, strapLine, id, selectProject } = props

    const handleClick = () => {
        console.log("i've been clicked")
        selectProject(id)
    }
    return (
        <div
            className='project-wrapper'
            key={id}
            // style={{ backgroundImage: `url(${image})` }}
        >
            <h2 className='project-title'>{title}</h2>
            <p className='project-description'>{strapLine}</p>
            <img className='project-img' src={image} alt={image}></img>

            <div className='project-cta' onClick={handleClick}>
                Show more
            </div>
        </div>
    )
}

export default ProjectCard
