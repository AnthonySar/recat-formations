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
      <div className="maman container-cs">
        <h2>Conversation</h2>
        <button
          onClick={() => this.ordreMaman('Bonjour, comment vas-tu ?')}>Lancer la conversation</button>
        <p>{this.state.messageMaman}</p>
        <hr />

        <Toto name='Réponse de la conversation' leState={this.state} responseTotoProp={this.responseToto} />
        <hr />
      </div>
    );
  }
}

export default Maman;