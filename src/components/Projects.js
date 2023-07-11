import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import AnimatedTextCharacter from './AnimatedTextCharachter'

const Projects = () => {
  const match = useLocation()
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100%' }} >
      <Navbar path={match.pathname} />
      <AnimatedTextCharacter text={"PROJECTS"}/>
    </div>
  )
}

export default Projects
