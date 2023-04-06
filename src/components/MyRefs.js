import React, { Component } from 'react'

class MyRefs extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value: ''
    }

    // On créé une ref qui permettra d'appliquer un comportement quand le component est en Maj
    this.myTitle = React.createRef();
  }

  handleUpdate = (e) => {
    this.setState(() => ({
      value: e.target.value
    }))
  }

  componentDidUpdate(prevProps, prevState) {
    this.myTitle.current.style.color = 'red'
  }

  render() {
    return (
      <div>
        <h2>Les Refs</h2>
        <div>
          <p ref={this.myTitle}>Valeur : {this.state.value}</p>
          <input ref={this.myInput} type="text" value={this.state.value} onChange={this.handleUpdate} />
        </div>
      </div>
    )
  }
}

export default MyRefs;