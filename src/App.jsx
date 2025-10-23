import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectForm from './components/projectForm'
import Header from './components/header'
import ProjectDisplay from './components/projectDisplay'

function App() {
  const [projects, editProjects] = useState([])

  function addProject (newProject){
    editProjects((prevArray) => [...prevArray, newProject])
  }
console.log(projects)
  return (
    
      <div>
      <Header />
      <ProjectForm addProject={addProject}/>
      <ProjectDisplay />
      </div>
      
   
  )
}

export default App
