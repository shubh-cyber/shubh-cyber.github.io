import React from 'react'
import Navbar from './Navbar'
import AnimatedTextCharacter from './AnimatedTextCharachter'
import './Projects.css'
import simple from './simple.png'
import output from './Final Output.jpeg'
import leaveManagement from './leave-management.jpg'
import { FaGithub } from 'react-icons/fa6'

const Projects = () => {
  return (
    <div style={{ backgroundColor: '#202121', width: '100%' }} >
      <Navbar/>
      <AnimatedTextCharacter text={"PROJECTS"}/>
    <figure class="snip1543"><img src={ leaveManagement } alt="sample101" style={{ 'height': '230px'}} />
      <figcaption>
        <h3>Leave Management System</h3>
        <p>An Android App to manage leaves using Android Studio and SQLite</p>
      </figcaption>
    </figure>
    <figure class="snip1543">
      <img src={ simple } alt="sample108" style={{ 'height': '230px' }}/>
      <figcaption>
        <h3>Simple Site</h3>
        <p>An e-commerce website using HTML/CSS, PHP and SQL</p>
      </figcaption>
    </figure>
    <figure class="snip1543"><img src={ output } alt="sample101" style={{ 'height': '230px'}} />
      <figcaption>
        <h3>Continuous Stress Detection</h3>
        <p>To determine continuous stress of individuals in daily life by using k-Nearest neighbour</p>
      </figcaption>
    </figure>
    <div style={{ fontSize: '4vh', display: 'block'}}>
      <a href="https://github.com/shubh-cyber/simple_Site"><FaGithub style={{ marginRight: '300px', color: 'turquoise' }}/></a>
      <a href="https://github.com/s0umitra/RASS-LMS"><FaGithub style={{ marginRight: '295px', color: 'turquoise' }}/></a>
      <a href="https://github.com/shubh-cyber/Stress-Monitoring-using-ML"><FaGithub style={{ marginRight: '290px', color: 'turquoise' }}/></a>
    </div>
    </div>
  )
}

export default Projects
