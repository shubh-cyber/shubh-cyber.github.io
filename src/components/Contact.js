import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import AnimatedTextCharacter from './AnimatedTextCharachter'

const Contact = () => {
  const match = useLocation()
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100%' }} >
      <Navbar path={match.pathname} />
      <AnimatedTextCharacter text={"CONTACT"}/>
    </div>
  )
}

export default Contact
