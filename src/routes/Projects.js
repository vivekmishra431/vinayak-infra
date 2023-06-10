import React from 'react'
import Navbar from '../components/Navbar'
// import Heroimage from '../components/Heroimage'
import FooterP from '../components/FooterProject'
import ProjectComponent from '../components/ProjectComponent'
// import ProjectOngoing from '../components/ProjectOngoing'
const Projects = () => {
  return (
    <div>
      <Navbar/>
      {/* <Heroimage heading="Our Projects" text="Passion for Excellence"/> */}
      <ProjectComponent/>
      {/* <ProjectOngoing/> */}
      <FooterP/>
    </div>
  )
}

export default Projects
