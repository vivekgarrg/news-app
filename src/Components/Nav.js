import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
      </div>
    )
  }
}
