import React from 'react'

const ProjectDetails = (props) => {

    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    loremloremloremloremloremlorem
                    </p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Furkan Dizdaroğlu</div>
                    <div>Çarşamba, 21:32</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
