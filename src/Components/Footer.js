import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const colors = {
        color:"red",
        border:"1px solid red"
    }
    return (
      <div style={colors}>
        <ul>
            <li>Footer</li>
            <li>Footer</li>
            <li>Footer</li>
            <li>Footer</li>
        </ul>
      </div>
    )
  }
}
