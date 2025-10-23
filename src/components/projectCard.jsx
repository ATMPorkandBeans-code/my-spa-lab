import React from "react";
// import { Card } from "semantic-ui-css/semantic.min.css";

function ProjectCard({ project }) {
  console.log(project);
  return (
    <div>
     
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      
    </div>
  );
}

export default ProjectCard;
