import React, { Component } from 'react'

class DerivedState extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Zelda'
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('%c DerivedState est go', 'color: red')
    console.log(props)
    console.log(state)
    return null;
  }

  forcingChange = () => {
    this.forceUpdate(() => {
      console.log('force le changement sans passer par le getDerivedStateFromProps')
    })
  }

  render() {
    return (
      <div>
        <p>Nom : {this.state.name}</p>
        <p>Age : {this.props.age}</p>
        <button onClick={this.forcingChange}>Forcer le changement</button>
      </div>
    )
  }
}

export default DerivedState