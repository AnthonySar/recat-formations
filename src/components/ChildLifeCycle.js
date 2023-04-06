import React, { Component } from 'react'

class ChildLifeCycle extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }

    console.log(`Etape ${this.state.step} dans le constructor() enfant`);
  }


  componentDidMount() {
    console.log(`Etape ${this.state.step} dans le compoDidMount enfant`)
  }


  render() {
    console.log(`Etape ${this.state.step} dans le render() enfant`)

    return (

      <div>childLifeCycle
        {console.log(`Etape ${this.state.step} dans le return() enfant`)}
      </div>
    )
  }
}

export default ChildLifeCycle