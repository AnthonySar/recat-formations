import React, { Component } from "react";

class Result extends Component {

  state = {
    name: 'Mario', 
    winner: true
  }

  changeStatus = (e) => {
    this.setState({
      winner: !this.state.winner
    })
  }

  render() {
    const alertColor = this.state.winner ? "alert-success" : "alert-danger";

    return(
      <div className="container">
        <button className="btn btn-primary" onClick={this.changeStatus}>Changement d'état</button>
        <div className={`alert ${alertColor}`} role="alert">
          { this.state.winner ? `Bravo ${this.state.name}` : 'Dommage' }
        </div>
      </div>
    )
  }
}

export default Result;