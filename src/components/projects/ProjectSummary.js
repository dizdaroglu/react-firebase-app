import React from 'react';
import moment from 'moment';
import 'moment/locale/tr';


const ProjectSummary = ({ project }) => {
    return (

        <div className="card  project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by the {project.authorFirstName} {project.authotLastName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar().toUpperCase()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary;