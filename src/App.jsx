import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import Home from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'
import Header from './components/header/header'

import projects from './data/projects.json'
import Footer from './components/footer/footer'
import { useEffect, useState } from 'react'
import ProjectPage from './pages/projectpage'
import ScrollToTop from './components/scrolltotop/scrolltotop'
import Loader from './components/loader/loader'
import { AnimatePresence, motion } from 'motion/react'

function App() {
  const [loading, setLoading] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState("Tous")

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3600);

    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();

  return (
      <>
        <AnimatePresence>
          {loading && 
            <Loader />
          }
        </AnimatePresence>
        {!loading &&
          <>
            <Header />
            <ScrollToTop />
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{x: "100%", opacity: 0}}
                animate={{x: "0%", opacity: 1}}
                exit={{  opacity: 0}}
                transition={{ duration: 0.3, type: "tween"}}
              >
                <Routes location={location}>
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
              </motion.div>
            </AnimatePresence>
            <Footer />
          </>
        }
      </>
  )
}

export default App
