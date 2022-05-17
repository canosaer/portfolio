import React, { useContext, useState, useEffect } from 'react'
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

    const rowSlots = Math.floor(width / 275) || 1
    const rows = Math.floor(height / 372.5) || 1
    const increment = (rowSlots < 4 ? rowSlots : 3) * rows

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

    const prevButton = 
        firstVisible !== 0 ?
            <button className="nav-row__prev" onClick={() => {setFirstVisible(firstVisible-increment)}}>
                <FontAwesomeIcon className="nav-row__left-arrow" icon={"chevron-left"} />
                <span className="nav-row__text">Prev</span>
            </button>
            :
            null

    const nextButton =
        projects[firstVisible+increment] ?
            <button onClick={() => {setFirstVisible(firstVisible+increment)}} className="nav-row__next">
                <span className="nav-row__text">Next</span>
                <FontAwesomeIcon className="nav-row__right-arrow" icon={"chevron-right"} />
            </button>
            :
            null
    
    const navRow = 
        <nav className="nav-row">
            {prevButton}
            {nextButton}
        </nav>
    
    

    return (
        <section className="projects">
            <div className="projects__content">
                <h2 className="projects__heading">Projects</h2>
                <Filters />

                <div className="projects__card-display">
                    {width < 415 ? prevButton : null}
                    {width < 415 ? nextButton : null}
                    {projects.map((project, i) => {
                        const key = `project--${i}`

                        if(i >= firstVisible && i < firstVisible+increment){
                            return(
                                <article className="projects__card" key={key}>
                                    <a className="projects__subheading" href={project.url} rel="noreferrer" target="_blank">{project.name}</a>
                                    <p className="projects__caption">{project.desc}</p>
                                    <div className="projects__link-row">
                                        <a className="projects__link" href={project.url} rel="noreferrer" target="_blank">View Site</a>
                                        <a className="projects__link" href={project.repo} rel="noreferrer" target="_blank">View Code</a>
                                    </div>
                                </article>
                            )
                        }
                    })}
                    {width >= 415 ? navRow : null}
                    
                </div>

            </div>
        </section>
    )
}