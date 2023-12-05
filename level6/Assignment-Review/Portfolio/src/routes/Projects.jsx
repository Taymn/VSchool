import React from 'react'
import ProjectItem from '../components/ProjectItem.jsx'
import { ProjectList } from '../components/ProjectList.jsx'

import '../styles/Projects.css'

function Projects() {
  return (
    <div className='projects'>
      <h1> Unlaunched Projects </h1>
      <div className='projectList'>
        {ProjectList.map((project, index) => {
          return <ProjectItem id={index} name={project.name} image={project.image}/>
        })}
      </div>
    </div>
  )
}

export default Projects