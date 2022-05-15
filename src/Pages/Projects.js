import React, { useContext, useRef, useState, useEffect } from 'react'
import projectData from '../store/projectData'
import { Context } from '../store/store'
import Filters from '../components/Filters'
import {useWindowDimensions} from '../utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Projects() {
    const [state, dispatch] = useContext(Context)
    const [projects, setProjects] = useState([])
    const [firstVisible, setFirstVisible] = useState(0)

    const width = useWindowDimensions().width
    const height = useWindowDimensions().height

    const rowSlots = Math.floor(width / 348) || 1
    const rows = Math.floor(height / 480) || 1
    const increment = rowSlots * rows

    useEffect(() => {
        let filteredProjects = []

        if(!state.activeTags[0]) filteredProjects = projectData.projects
        else{
            projectData.projects.forEach(project => {
                if(state.activeTags.includes(project.tag)) filteredProjects.push(project)
            })
        }

        if(projects !== filteredProjects) {
            setFirstVisible(0)
            setProjects(filteredProjects)
        }
    }, [state])

    return (
        <section className="projects">
            <h2 className="projects__heading">Projects</h2>
            <Filters />

            <div className="projects__card-display">
                {projects.map((project, i) => {
                    const key = `project--${i}`

                    if(i >= firstVisible && i < firstVisible+increment){
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
                <nav className="projects__nav">
                    {firstVisible !== 0 ?
                        <button className="projects__prev" onClick={() => {setFirstVisible(firstVisible-increment)}}>
                            <FontAwesomeIcon className="projects__left-arrow" icon={"chevron-left"} />
                            Prev
                        </button>
                        :
                        null
                    }
                    {projects[firstVisible+increment] ?
                        <button onClick={() => {setFirstVisible(firstVisible+increment)}} className="projects__next">
                            Next
                            <FontAwesomeIcon className="projects__right-arrow" icon={"chevron-right"} />
                        </button>
                        :
                        null
                    }
                </nav>
                
            </div>
        </section>
    )
}