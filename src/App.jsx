import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProjectForm from "./components/projectForm";
import Header from "./components/header";
import ProjectDisplay from "./components/projectDisplay";
import projectsArray from "./projectInfo.js"

function App() {
  const [projects, editProjects] = useState(projectsArray);

  function addProject(newProject) {
    editProjects((prevArray) => [...prevArray, newProject]);
  }

  function deleteProject(projectToDelete) {
    const newArray = projects.filter((project) => {
      if (project.title === projectToDelete.title) {
        return false;
      }
      return true;
    });
    editProjects(newArray);
  }

  console.log(projects);
  return (
    <div>
      <Header />
      <ProjectForm addProject={addProject} />
      <ProjectDisplay projects={projects} deleteProject={deleteProject} />
    </div>
  );
}

export default App;
