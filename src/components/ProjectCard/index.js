import React, { useState, useEffect } from 'react';
import Card from '../Card';
import projects from '../data/projectdata.json';
import './style.css'

/**
* @author
* @function ProjectCard
**/

const ProjectCard = (props) => {
  return (
    projects.data.map((project => (
      <Card style={{ width: "49%", display:"flex", marginBottom:"40px", flexDirection:"column", justifyContent:"space-between"}}>
        <h1 className="project-title">{project.projectName}</h1>
        <img className="project-image" src={project.imageLocation} alt="project screenshot"/>
        <div className="project-container">
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
          {/* <button onClick={handleExpandInfo}>click</button> */}
        </div>
      </Card>
    ))
  ))

}

export default ProjectCard
