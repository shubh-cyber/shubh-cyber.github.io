import React from 'react'
import './Home.css'
import Navbar from './Navbar';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useLocation } from 'react-router-dom';

const Home = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
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

  const match = useLocation()

    return (
      <>
        <div className='backImg'>
          <Particles 
          className='particles'
          id="tsparticles"
          init={particlesInit}
          options={options}
          /> 
          <Navbar path={match.pathname} />
          <div className='intro'>
            <div className='heading'>
              {/* <h3> */}
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
              {/* </h3> */}
            </div>
            <div className='fadeInAndOut'>
              <div>MEAN/MERN</div>
              <div>SQL</div>
              <div>NestJS</div>
              <div>Typescript/Javascript/Python</div>
              <div>Flask</div>
              <div>Data Science</div>
            </div>
            <div className='fadeIn'>Full-Stack Developer</div>
          </div>
        </div>
      </>
    );
};

export default Home
