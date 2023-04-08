import React, { Component } from "react";

class Result extends Component {

  state = {
    name: 'le boolean est à true et le state passe parfaitement', 
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
      <div className="container-cs">
        <h2>Afficher un état et son contenu</h2>
        <button className="btn btn-primary m-3" onClick={this.changeStatus}>Changement d'état</button>
        <div className={`alert ${alertColor}`} role="alert">
          { this.state.winner ? `Bravo, ${this.state.name}` : 'Oups, cette fois ci il est à false' }
        </div>
      </div>
    )
  }
}

export default Result;