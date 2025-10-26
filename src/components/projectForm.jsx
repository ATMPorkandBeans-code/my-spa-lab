import { useState, React, useEffect } from "react";
import styles from "../styles/projectForm.module.css";

function ProjectForm({ addProject, editCard }) {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
  });
//establishes state for adding new project

//handles state change to update newProject variable
  function handleChange(e) {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  }
//Verifies and adds new project to Project Array 
  function handleSubmit(e) {
    e.preventDefault();
    addProject(newProject);
    setNewProject({
      title: "",
      description: "",
    });
  }

  useEffect(() => {
    if (editCard) {
      setNewProject({
        title: editCard.title || "",
        description: editCard.description || "",
      });
    }
  }, [editCard]);



  return (
    <div className={styles.formContainer}>
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={newProject.title}
          onChange={handleChange}
          required
        ></input>
        <label>Description</label>
        <textarea
          name="description"
          value={newProject.description}
          onChange={handleChange}
          required
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ProjectForm;
