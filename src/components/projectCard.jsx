import { useState, React } from "react";
import styles from "../styles/projectCard.module.css";

function ProjectCard({ project, deleteProject, editProject }) {
  // const [editProject, setEditProject] = useState("");

  return (
    <div className={styles.card}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

       <div className={styles.cardActions}>
      <button
              className={styles.editButton}
              onClick={() => editProject(project)}
            >
              Edit
            </button>


      <button
        className={styles.deleteButton}
        onClick={() => deleteProject(project)}
      >
        Delete
      </button>
      </div>
    </div>
  );
}

export default ProjectCard;
