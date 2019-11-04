import React, { Component } from 'react'
import './about.scss'

class About extends Component {
  // support proposal class properties
  content = 'this is About page'

  render() {
    return <div className="about">{this.content}</div>
  }
}

export default About
