import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import AnimatedTextCharacter from './AnimatedTextCharachter'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa6'
import { SiLinkedin } from 'react-icons/si'

const Contact = () => {
  const match = useLocation()
  return (
    <div style={{ backgroundColor: '#202121', height: '100vh', width: '100%' }} >
      <Navbar path={match.pathname} />
      <AnimatedTextCharacter text={"CONTACT"}/>
      <div style={{ maxHeight:'fit-content', width: '95%' }} >
        <div style={{ borderColor: '#C5FDD3', height: '60px', width: '95%', border: '1px solid #C5FDD3', padding: '10px', margin: '10px', float: 'right' }} >
          <BsFillEnvelopeFill style={{ color: 'turquoise', fontSize: '55px', float: 'left'}}/>
        </div>
        <div style={{ borderColor: '#C5FDD3', height: '60px', width: '85%', border: '1px solid #C5FDD3', padding: '10px', margin: '10px', float: 'right' }} >
          <FaGithub style={{ color: 'turquoise', fontSize: '55px', float: 'left'}}/>
        </div>
        <div style={{ borderColor: '#C5FDD3', height: '60px', width: '75%', border: '1px solid #C5FDD3', padding: '10px', margin: '10px', float: 'right' }} >
          <SiLinkedin style={{ color: 'turquoise', fontSize: '55px', float: 'left'}}/>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '20px', textAlign: 'center', width: '97%' }}>
        <h4>View my <span><a href="">resume</a></span></h4>
      </div>
    </div>
  )
}

export default Contact
