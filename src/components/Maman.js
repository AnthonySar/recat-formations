import React, { Component } from "react";
import Toto from "./Toto";

class Maman extends Component {

  state = {
    messageMaman: null,
    messageToto: null,
    disabled: true
  };

  ordreMaman = (msg) => {
    this.setState({
      messageMaman: msg,
      disabled: false,
    })
  };

  responseToto = (msg) => {
    this.setState({
      messageToto: msg,
    })
  };

  render() {
    return (
      <div className="maman">
        <h2>Maman</h2>
        <button
          onClick={() => this.ordreMaman('Peux-tu me render un service ?')}>Ordre de la mère</button>
        <p>{this.state.messageMaman}</p>
        <hr />

        <Toto name='Toto' leState={this.state} responseTotoProp={this.responseToto} />
        <hr />
      </div>
    );
  }
}

export default Maman;