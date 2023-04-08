import React, { Component } from 'react'

class ClassState extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      counter: 0     
    }
  }

  addOne = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }))
  }

  render() {
    return (
      <div className='container-cs'>
        <h2>HOOKS : useState dans une Class</h2>
        <p>Counter : {this.state.counter}</p>
        <button onClick={this.addOne}>State dans une class</button>
      </div>
    )
  }
}

export default ClassState;