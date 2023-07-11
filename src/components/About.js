import React from 'react'
import Navbar from './Navbar'
// import { useLocation } from 'react-router-dom'
import AnimatedTextCharacter from './AnimatedTextCharachter'

const About = () => {
  const match = "/about"  //useLocation()
  console.log(match)
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100%' }}>
      <Navbar path={match} />
      <AnimatedTextCharacter text={"ABOUT"}/>
    </div>
  )
}

export default About
