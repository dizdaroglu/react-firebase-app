import React from 'react';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card  project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by the Furkan Dizdaroglu</p>
                <p className="grey-text">Çarşamba , 23:12</p>
            </div>
        </div>
    )
}

export default ProjectSummary;