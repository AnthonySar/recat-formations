import React, { Component } from 'react'

class CleanUseEffectClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       keyCode: null
    }
  }

  handleKeyCode = (e) => {
    this.setState({
      keyCode: e.code
    })
  }

  componentDidMount() { 
    document.addEventListener('keyup', this.handleKeyCode)
   }

  render() {
    const { keyCode } = this.state;
    return (
      <div className='card'>
        <div className='card-body'>
          <h3>UseEffect avec Class</h3>
          <p>Utiliser votre clavier pour apercevoir votre keyCode : {keyCode}</p>
        </div>
      </div>
    )
  }
}

export default CleanUseEffectClass;