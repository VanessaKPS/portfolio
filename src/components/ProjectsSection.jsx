import React, { useState, useRef, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../projects'
import ProjectModal from './ProjectModal'

const ProjectsSection = () => {
    const [chosenId, setChosenId] = useState()
    const [titleStyle, setTitleStyle] = useState('')
    const [closeModal, setCloseModal] = useState(true)
    const sectionRef = useRef()

    const saveId = (id) => {
        setChosenId(id)
        setCloseModal((prevValue) => !prevValue)
        setTitleStyle('conceal')
    }

    const requestCloseModal = (id) => {
        setChosenId(id)
        setCloseModal((prevValue) => !prevValue)
        setTitleStyle('')
    }

    useEffect(() => {
        if ((chosenId === 102 || chosenId === 103) && closeModal) {
            sectionRef.current.scrollIntoView({ block: 'end' })
        }
        if ((chosenId === 102 || chosenId === 103) && !closeModal) {
            sectionRef.current.scrollIntoView()
        }
    }, [chosenId, closeModal])

    const modal = projects.filter((project) => project.id === chosenId)
    return (
        <section id='projects' ref={sectionRef}>
            <div className='projects-container'>
                {closeModal ? (
                    projects.map((project, index) => {
                        return (
                            <ProjectCard
                                selector={project.class}
                                key={index + project.name}
                                id={project.id}
                                title={project.name}
                                image={project.img}
                                // description={project.description}
                                selectProject={saveId}
                                strapLine={project.strapLine}
                                gif={project.gif}
                            />
                        )
                    })
                ) : (
                    <ProjectModal
                        title={modal[0].name}
                        image={modal[0].img}
                        description={modal[0].description}
                        tech={modal[0].technology}
                        styling={modal[0].styling}
                        deployed={modal[0].deployed}
                        selectCloseModal={requestCloseModal}
                        features={modal[0].features}
                        libraries={modal[0].libraries}
                        gif={modal[0].gif}
                        info={modal[0].info}
                        disclaimer={modal[0].disclaimer}
                        selector={modal[0].class}
                        liveDemo={modal[0].liveDemo}
                        codeLink={modal[0].codeLink}
                        id={modal[0].id}
                    />
                )}
            </div>
            <div className={`projects-title-wrapper ${titleStyle}`}>
                <h1 className='projects-title'>
                    <span>Projects</span>
                </h1>
            </div>
        </section>
    )
}

export default ProjectsSection
