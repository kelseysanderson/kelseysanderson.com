import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import './style.css'

const Projects = (props) => {
    return (
        <div className="project-page">
            <div className="project-grid">
                <ProjectCard />
            </div>
        </div>

    )
}

export default Projects