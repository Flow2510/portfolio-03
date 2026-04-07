import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'
import Header from './components/header/header'

import projects from './data/projects.json'
import Footer from './components/footer/footer'
import { useState } from 'react'
import ProjectPage from './pages/projectpage'

function App() {
  const [selectedCategories, setSelectedCategories] = useState("Tous")

  return (
      <>
        <Header />
        <Routes>
          <Route 
            path='/' 
            element={<Home projects={projects} setSelectedCategories={setSelectedCategories}/>} 
          />
          <Route 
            path='/projects' 
            element={
              <Projects 
                projects={projects} 
                selectedCategories={selectedCategories} 
                setSelectedCategories={setSelectedCategories}
              />
            } 
          />
          <Route path='/about' element={<About />} />
          <Route path='/:id' element={<ProjectPage 
            projects={projects}
          />} />
        </Routes>
        <Footer />
      </>
  )
}

export default App
