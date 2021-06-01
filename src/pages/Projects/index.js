import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import FeaturedProjectCard from '../../components/FeaturedProjectCard'
import './style.css'

/**
* @author
* @function Projects
**/

const Projects = (props) => {
    document.querySelector('#home-link')?.classList.remove('active-nav')
    document.querySelector('#work-link')?.classList.add('active-nav')
    document.querySelector('#contact-link')?.classList.remove('active-nav')

    return (
        <div className="project-page">
            <h1 className="project-page-title">Recent Projects</h1>
            <FeaturedProjectCard />
            <div className="project-grid">
                <ProjectCard />
            </div>
        </div>

    )
}

export default Projects