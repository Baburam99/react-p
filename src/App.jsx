import React from 'react'
import Nav from './components/navbar.jsx'
import Home from './components/Home.jsx'
import Project from './components/Projects.jsx'
import Services from './components/Service'
import Contact from './components/contact'

function App() {
  return (
     <div>
     <Nav />

      <section id='home'>
        <Home />
      </section >
      <section id='project'>
        <Project />
      </section>
      <section id='service'>
        <Services/>
      </section>
      <section id='contact'>
        <Contact />
      </section>
     </div>
  )
}

export default App
