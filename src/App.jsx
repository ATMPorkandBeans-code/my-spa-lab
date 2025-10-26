import { useState } from "react";
import "./App.css";
import ProjectForm from "./components/projectForm";
import Header from "./components/header";
import ProjectDisplay from "./components/projectDisplay";
import projectsArray from "./projectInfo.js";

function App() {
  const [projects, editArray] = useState(projectsArray);
  const [editCard, setEditCard] = useState({});
  //Establishes Projects Array and state to edit Array

  //Add new project to projectsArray
  function addProject(newProject) {
    editArray((prevArray) => [...prevArray, newProject]);
  }
  //deletes selected project from Project Aray using Delete button in Project Card
  function deleteProject(projectToDelete) {
    const newArray = projects.filter((project) => {
      if (project.title === projectToDelete.title) {
        return false;
      }
      return true;
    });
    editArray(newArray);
  }
  function editProject(projectToEdit) {
    deleteProject(projectToEdit);
    setEditCard(projectToEdit);
  }

  return (
    <div>
      <Header />
      <ProjectForm addProject={addProject} editCard={editCard} />
      <ProjectDisplay
        projects={projects}
        deleteProject={deleteProject}
        editProject={editProject}
      />
    </div>
  );
}

export default App;
