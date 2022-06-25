import React, { Component } from 'react'
import Card from './Card'

export default class Body extends Component {
    constructor(){
      console.log('contructor')
        super();
        this.state = {
            myjackpot : "lavu❤️"
        }
    }
  componentDidMount(){
    console.log('component did mount')
  } 
  render() {
    console.log('render')
    return (
      <div style={{display:"flex", justifyContent:"center"}}>
        <Card val={this.state.jackpot}/>
        <Card/>
      </div>
    )
  }
}
