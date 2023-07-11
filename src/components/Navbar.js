import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import '../index.css'


const Navbar = ({ path }) => {
  console.log(path)
  const navigate = useNavigate();

    // const indextoTabName = {
    //   "/": 0,
    //   "/about": 1,
    //   "/projects": 2,
    //   "/experience": 3,
    //   "/contact": 4 
    // }

    const [selectedTab, setSelectedTab] = useState();

    const handleChange = (event, newValue) => {
      setSelectedTab(newValue)
      console.log(newValue, selectedTab)
      const tabNameToIndex = {
        0: "/",
        1: "/about",
        2: "/projects",
        3: "/experience",
        4: "/contact"
      }
        navigate(tabNameToIndex[newValue])
    }

    const style = {
      "color": "#30D5C8",
      "fontFamily": 'Comfortaa, cursive'
    }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={selectedTab} onChange={handleChange} aria-label="basic tabs example">
            {/* <Tabs> */}
            <Tab label="SB" style={style}/>
            <Tab label="ABOUT" style={style}/>
            <Tab label="PROJECTS" style={style}/>
            <Tab label="EXPERIENCE" style={style}/>
            <Tab label="CONTACT" style={style}/>
            </Tabs>
        </Box>
      </Box>
          {selectedTab === 0 && <Home />}
          {selectedTab === 1 && <About />}
          {selectedTab === 2 && <Projects />}
          {selectedTab === 3 && <Experience />}
          {selectedTab === 4 && <Contact />}

    </div>
  )
}

export default Navbar
