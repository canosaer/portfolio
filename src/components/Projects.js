import React, { useContext } from 'react';
import projectData from '../store/projectData'
import { Context } from '../store/store'
import Filters from './Filters'

export default function Projects() {
    const [state, dispatch] = useContext(Context)

    return(
        <section className="projects" id="projects">
            <h3 className="projects__heading">Projects</h3>
            <Filters />
            <div className="projects__card-display">
                {projectData.projects.map((project, i) => {
                    const key = `project--${i}`

                    if(state.activeTags.filter(tag => tag == project.tag).length > 0 || state.activeTags.length == 0){
                        return(
                            <article className="projects__card" key={key}>
                                <a className="projects__subheading" href={project.url} target="_blank">{project.name}</a>
                                <p className="projects__caption">{project.desc}</p>
                                <div className="projects__link-row">
                                    <a className="projects__link" href={project.url} target="_blank">View Site</a>
                                    <a className="projects__link" href={project.repo} target="_blank">View Code</a>
                                </div>
                            </article>
                        )
                    }
                    
                })}
            </div>
        </section>
    )
}