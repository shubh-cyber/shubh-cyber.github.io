import React from 'react'
import Navbar from './Navbar'
import AnimatedTextCharacter from './AnimatedTextCharachter'
import '../index.css'

const About = () => {
  const match = "/about"
  console.log(match)
  const styleh2 = {
    'color': "#c9d7e3",
    'margin': '5px',
    'fontFamily': 'Comfortaa, cursive',
    'fontSize': '30px'
  }
  return (
    <div style={{ backgroundColor: '#202121', height: '100vh', width: '100%' }}>
      <Navbar/>
      <AnimatedTextCharacter text={"ABOUT"}/>
      <p style={ styleh2 }>Hello, I am Shubhada. I am a MEAN-Stack Developer.</p>
      <p style={ styleh2 }>My skills include Typescript, NestJS, GraphQL, MongoDB, Figma, Angular.</p>
      <p style={ styleh2 }>I have also worked in Python, Data-Science, Django, Flask projects.</p>
      <p style={ styleh2 }>I am currently learning React.</p>
    </div>
  )
}

export default About
