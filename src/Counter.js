import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    Incr() {
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <h1>Simple Counter-{this.state.count}</h1>
        <button onClick={this.Incr.bind(this)}>Count</button>
      </div>
    )
  }
}

export default Counter