import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import './style.css'

const Projects = (props) => {
    document.querySelector('#home-link')?.classList.remove('active-nav')
    document.querySelector('#resume-link')?.classList.remove('active-nav')
    document.querySelector('#work-link')?.classList.add('active-nav')
    document.querySelector('#contact-link')?.classList.remove('active-nav')

    return (
        <div className="project-page">
            <div className="project-grid">
                <ProjectCard />
            </div>
        </div>

    )
}

export default Projects