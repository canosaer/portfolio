import React, { useState, useEffect } from 'react'

import { CubeTransition } from 'react-3d-cube-transition'
import 'react-3d-cube-transition/dist/index.css'
import './styles/main.scss'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';

import Home from './Pages/Home';
import Other from './Pages/Other';

class App extends React.Component {
  constructor() {
    super();

    this.state = {currentFace: "left"} 

    this._handleButtonClick = this._handleButtonClick.bind(this)
  }
  
  render () {
    return (
      <>
        <CubeTransition 
          className="cube-container"
          face={this.state.currentFace}
          frontCSS={{background: "whitesmoke"}}
          rightCSS={{background: "whitesmoke"}}
          leftCSS={{background: "whitesmoke"}}
          backCSS={{background: "whitesmoke"}}
          topCSS={{background: "whitesmoke"}}
          bottomCSS={{background: "whitesmoke"}}
          frontPage={(<Home />)}
          leftPage={<About />}
          rightPage={<Projects />}
          backPage={<Contact />}
          topPage={<Skills />}
          bottomPage={<Other />}
          contentElevation={0}
        />
        <div className="nav-menu">
          <button className="nav-menu__button nav-menu__button_home" onClick={() => (this._handleButtonClick("front"))}>Home</button>
          <button className="nav-menu__button nav-menu__button_about" onClick={() => (this._handleButtonClick("left"))}>About Me</button>
          <button className="nav-menu__button nav-menu__button_projects" onClick={() => (this._handleButtonClick("right"))}>Projects</button>
          <button className="nav-menu__button nav-menu__button_contact" onClick={() => (this._handleButtonClick("back"))}>Contact</button>
          {/* <button className="nav-menu__button nav-menu__button_skills" onClick={() => (this._handleButtonClick("top"))}>Contact</button> */}
          {/* <button className="nav-menu__button nav-menu__button_other" onClick={() => (this._handleButtonClick("bottom"))}>Skills</button> */}
        </div>
      </>
    )
  }

  _handleButtonClick(face) {
    this.setState({currentFace: face});
  }
}

export default App 
