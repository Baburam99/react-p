import React from 'react'
import Nav from './components/navbar.jsx'
import Home from './components/Home.jsx'
import Project from './components/Projects.jsx'
import Services from './components/Service'
import Contact from './components/contact'
import Bar from './components/experience.jsx'

function App() {
  return (
     <div>
     <Nav />

      <section id='home'>
        <Home />
      </section >
      <section id='project'>
        <Bar/>
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
