import { useState, React } from "react";
import ProjectCard from "./projectCard";
import styles from "../styles/projectDisplay.module.css";

function ProjectDisplay({ projects, deleteProject }) {
  const [search, setSearch] = useState("");
  console.log(search);

  //Filters Projects using input field and state set in SetSearch
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Projects List Bulletin Board</h2>
      <input
        type="text"
        name="search"
        placeholder="Use keyword to filter Projects..."
        className={styles.searchBar}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={styles.projectList}>
        {filteredProjects.map((project) => (
          <ProjectCard project={project} deleteProject={deleteProject} />
        ))}
      </div>
    </div>
  );
}

export default ProjectDisplay;
