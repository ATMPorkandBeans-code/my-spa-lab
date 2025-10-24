import React from "react";
import styles from "../styles/projectCard.module.css";

function ProjectCard({ project, deleteProject }) {
  return (
    <div className={styles.card}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <button
        className={styles.deleteButton}
        onClick={() => deleteProject(project)}
      >
        Delete Project
      </button>
    </div>
  );
}

export default ProjectCard;
