import React, { Component } from 'react'

class ClassCountUseEffect extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       name: ''
    }
  }

  componentDidMount() { 
    document.title = `React formation N°${this.state.count}`;
  }

  // componentDidUpdate(prevProps ,prevState) {
  //   if (this.state.count !== prevState.count) {
  //     document.title = `React formation N°${this.state.count}`;
  //   }
  // }

  render() {
    return (
      <div>
        <h2>HOOKS : useEffect dans une Class</h2>
        <p>Dans ce cas la, on utilise les méthodes classique de cycle de vie du composant</p>
        <span>Vous avez cliqué {this.state.count} fois</span>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Cliquer pour +1</button>
        
        <input type="text" value={this.state.name} onChange={e => {
          this.setState({
            name: e.target.value
          })
        }} />
      </div>
    )
  }
}

export default ClassCountUseEffect
