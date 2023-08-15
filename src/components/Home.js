import React from 'react'
import './Home.css'
import Navbar from './Navbar';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa6'
import { SiLinkedin } from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'

const Home = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
}, []);

 const options = {
    "fpsLimit": 60,
    "preset": "bigCircles",
    "backgroundMask": {
      "enable": true,
      "cover": {
        "color": "#000000"
      }
    },
    "particles": {
      "number": {
        "value": 0,
        "density": {
          "enable": true,
          "area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1
        }
      },
      "opacity": {
        "value": 0.2
      },
      "size": {
        "value": 7,
        "random": {
          "enable": true,
          "minimumValue": 5
        },
        "animation": {
          "enable": true,
          "speed": 2,
          "minimumValue": 1
        },
      },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "outMode": "out"
        }
    },
    "interactivity": {
      "detectsOn": "window",
      "events": {
        "onHover": {
          "enable": true,
          "mode": "trail"
        },
        "resize": true
      },
      "modes": {
        "trail": {
          "delay": 0.1,
          "quantity": 7,
          "particles": {
            "size": {
              "value": 50,
              "random": {
                "enable": true,
                "minimumValue": 10
              },
              "animation": {
                "enable": true,
                "speed": 3,
                "minimumValue": 10,
                "sync": true,
                "startValue": "min",
                "destroy": "max"
              }
            },
            "move": {
              "enable": true,
              "speed": 10,
              "direction": "none",
              "random": false,
              "straight": false,
              "outMode": "destroy"
            }
          }
        }
      }
    },
    "detectRetina": true,
  }

    return (
      <>
        <div className='backImg'>
          <Particles 
          className='particles'
          id="tsparticles"
          init={particlesInit}
          options={options}
          /> 
          <div style={{ position: 'fixed' }}>
            <Navbar/>
          </div>
          <div className='intro'>
            <div style={{ color: 'rgba(64, 224, 208, 0.4)', fontSize: '8vh', display: 'flex', justifyContent: 'center'}}>
              <BiCodeAlt style={{ marginRight: '20px' }}/>
            </div>
            <div className='heading'>
                <p>S</p>
                  <p>H</p>
                  <p>U</p>
                  <p>B</p>
                  <p>H</p>
                  <p>A</p>
                  <p>D</p>
                  <p>A&nbsp;</p>
                  <p>B</p>
                  <p>A</p>
                  <p>R</p>
                  <p>I</p>
            </div>
            <div style={{ color: 'rgba(64, 224, 208, 0.6)', fontSize: '5vh', display: 'block'}}>
              <a href="mailto:shubhadabari@gmail.com" style={{ color: 'rgba(64, 224, 208, 0.6)', fontSize: '5vh'}}><BsFillEnvelopeFill style={{ marginRight: '20px' }}/></a>
              <a href="https://github.com/shubh-cyber" style={{ color: 'rgba(64, 224, 208, 0.6)', fontSize: '5vh'}}><FaGithub style={{ marginRight: '20px' }}/></a>
              <a href="https://www.linkedin.com/in/shubhada-bari-a3b08a1a0/" style={{ color: 'rgba(64, 224, 208, 0.6)', fontSize: '5vh'}}><SiLinkedin style={{ marginRight: '20px' }}/></a>
            </div>
          </div>
        </div>
      </>
    );
};

export default Home
