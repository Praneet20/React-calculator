import React, { Component } from 'react'

export default class Calculator extends Component {


    constructor(props) {
      super(props)
      this.state = {
         count: 30
      }
    }

    increement(){
        this.setState({
            count: this.state.count+1
       })
    }

  Decrement()
  {
      this.setState(
      {
          count: this.state.count-1
      })
  }
    

  render() {
    return (
      <div>
        <div className="Design">Count = {this.state.count}</div>
          <button onClick ={()=> this.increement()}>Increement</button>
          <br/>
          <button onClick={()=> this.Decrement()}>Decrement</button>
        
      </div>
    )
  }
}
