import React from 'react';
import '../index.css'
import { NavLink } from 'react-router-dom';


const NavLink1 = () => {

    const style = {
      "color": "#30D5C8",
      "fontFamily": 'Comfortaa, cursive',
      "fontSize": "20px",
      "margin": "10px"
    }

  return (
    <div style={{ 'width': '100%', marginBottom: '10px' }}>
            <div style={{ 'display': 'flex', justifyContent: 'left' }}>
              <NavLink to='/' style={style}>HOME</NavLink>
              <NavLink to='/about' style={style}>ABOUT</NavLink>
              <NavLink to='/projects' style={style}>PROJECTS</NavLink>
              <NavLink to='/experience' style={style}>EXPERIENCE</NavLink>
            </div>
    </div>
  )
}

export default NavLink1
