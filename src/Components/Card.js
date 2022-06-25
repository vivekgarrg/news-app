import React, { Component } from 'react'

export default class Card extends Component {
    constructor(){
        super();
        this.state={
            count : 0,
            name:""
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSub = this.handleSub.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

     handleAdd(){
        this.setState({
            count: this.state.count + 1
        })
    }
     handleSub(){
        this.setState({
            count : this.state.count - 1
        })
    }
    handleChange(event){
        this.setState({
            name:event.target.value
        })
    }

    componentDidUpdate(){
        console.log('component did update')
    }

    render() {
    return (
      <div style={{height:"300px", width:"200px", border:"2px solid gray", margin:"10px"}}>
        <div style={{height:"50px"}}>
            {this.state.count}
        </div>
        <div style={{height:"150px"}}>
            <button onClick={this.handleAdd}>+</button>&nbsp;&nbsp;&nbsp;
            <button onClick={this.handleSub}>-</button>
        </div>
        <div>
            {this.state.name}
            <input value={this.state.name} onChange={(e)=>this.handleChange(e)} type="text" />
        </div>
      </div>
    )
  }
}
