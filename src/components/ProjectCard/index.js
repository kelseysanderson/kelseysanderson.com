import React from 'react';
import Card from '../Card';
import projects from '../data/projectdata.json';
import './style.css'
import '../../assets/blog-images/e-commerce.png'

/**
* @author
* @function ProjectCard
**/

const ProjectCard = (props) => {
  return (
    projects.data.map((project => (
      <div className="projects">
        {/* style={{ width: "49%", display: "flex", marginBottom: "40px", flexDirection: "column", justifyContent: "space-between" }} */}
        <Card >
          <div className="card-header">
            <h1 className="project-name">{project.projectName}</h1>
          </div>
          <div className="project-container">

          <img className="project-image" src={project.imageLocation} alt="project screenshot" />
          <div className="text-section">

          <a className="project-link" href={project.liveApp} target="_blank" rel="noreferrer" >

              <p className="project-description">{project.projectDescription}</p>
              <ul className="project-list">
                <li>
                  <a href={project.liveApp} target="_blank" rel="noreferrer" >Live App</a>
                </li>
                <li> | </li>
                <li>
                  <a href={project.githubRepo} target="_blank" rel="noreferrer"> Github Repository</a>
                </li>
              </ul>

            </a>
            </div>

         </div>
        </Card>
      </div>

    ))
    ))

}

export default ProjectCard
