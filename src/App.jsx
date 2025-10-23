import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectForm from './components/projectForm'
import Header from './components/header'
import ProjectDisplay from './components/projectDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
      <Header />
      <ProjectForm />
      <ProjectDisplay />
      </div>
      
   
  )
}

export default App
