import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../projects'
import ProjectModal from './ProjectModal'

const ProjectsSection = () => {
    const [selectModalById, setSelectModalById] = useState('')
    const [titleStyle, setTitleStyle] = useState('')
    const [closeModal, setCloseModal] = useState(true)

    const saveId = (id) => {
        setSelectModalById(id)
        setCloseModal((prevValue) => !prevValue)
        setTitleStyle('conceal')
    }

    const requestCloseModal = () => {
        setCloseModal((prevValue) => !prevValue)
        setTitleStyle('')
    }

    const modal = projects.filter((project) => project.id === selectModalById)
    return (
        <section id='projects'>
            <div className='projects-container'>
                {closeModal ? (
                    projects.map((project, index) => {
                        return (
                            <ProjectCard
                                selector={project.class}
                                key={index + project.name}
                                id={project.id}
                                title={project.name}
                                // image={project.img}
                                description={project.description}
                                tech={project.technology}
                                styling={project.styling}
                                icons={project.icons}
                                selectProject={saveId}
                                features={project.features}
                                strapLine={project.strapLine}
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
                        icons={modal[0].icons}
                        deployed={modal[0].deployed}
                        selectCloseModal={requestCloseModal}
                        features={modal[0].features}
                        libraries={modal[0].libraries}
                    />
                )}
            </div>
            <div className={`projects-title-wrapper ${titleStyle}`}>
                <h1 className='projects-title'>Projects</h1>
            </div>
        </section>
    )
}

export default ProjectsSection
