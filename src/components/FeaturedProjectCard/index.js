import React, { useState, useEffect } from 'react';
import Card from '../Card';
import './style.css'

/**
* @author
* @function ProjectCard
**/

const ProjectCard = (props) => {


  return (
      <Card style={{ width: "100%", display:"flex", marginBottom:"40px", flexDirection: "row"}}>
        <img className="featured-project-image" src="https://github.com/rashidk83/project3/raw/main/screenshots/options_page.jpg" alt="project screenshot"/>
        <div className="featured-project-container">
        <a className="project-link" href="https://floating-ravine-14544.herokuapp.com/" target="_blank" rel="noreferrer" >
          <h1 className="featured-project-title">Gin</h1>
          <p className="featured-project-description">This was a group project in which we developed an app using the MERN stack. A user can login and play a game of gin rummy with another online player using socket.io. The user will also be able to view their past game statistics. In this project, I implemented the backend functionality and worked with teammates on some frontend tasks and styling for the login, options, and stats pages.</p>
          <ul className="featured-project-list">
            <li>
              <a href="https://floating-ravine-14544.herokuapp.com/" target="_blank" rel="noreferrer" >Live App</a>
            </li>
            <li> | </li>
            <li>
              <a href="https://github.com/kelseysanderson/gin" target="_blank" rel="noreferrer"> Github Repository</a>
            </li>
          </ul>
          </a>
        </div>

      </Card>
    )

}

export default ProjectCard
