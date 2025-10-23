import { useState, React } from "react";

function ProjectForm({ addProject }) {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
  });

  function handleChange(e) {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addProject(newProject);
    setNewProject({
      title: "",
      description: "",
    });
  }

  return (
    <div>
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
        <input
          type="text"
          name="description"
          value={newProject.description}
          onChange={handleChange}
          required
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ProjectForm;
