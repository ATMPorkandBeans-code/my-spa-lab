import { useState } from "react";
import "./App.css";
import ProjectForm from "./components/projectForm";
import Header from "./components/header";
import ProjectDisplay from "./components/projectDisplay";
import projectsArray from "./projectInfo.js";

function App() {
  const [projects, editProjects] = useState(projectsArray);
//Establishes Projects Array and state to edit Array

//Add new project to projectsArray
  function addProject(newProject) {
    editProjects((prevArray) => [...prevArray, newProject]);
  }
//deletes selected project from Project Aray using Delete button in Project Card
  function deleteProject(projectToDelete) {
    const newArray = projects.filter((project) => {
      if (project.title === projectToDelete.title) {
        return false;
      }
      return true;
    });
    editProjects(newArray);
  }

  return (
    <div>
      <Header />
      <ProjectForm addProject={addProject} />
      <ProjectDisplay projects={projects} deleteProject={deleteProject} />
    </div>
  );
}

export default App;
