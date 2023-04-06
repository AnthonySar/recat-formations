import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {

  // Dans le cas ou la modal est dans App, App n'a donc pas de position relative
  // render() {
  //   return(
  //     <div className="modal-custom" onClick={this.props.hideModal}>
  //       <div>
  //         <p>Contenu de la modal</p>
  //         <button>Fermer</button>
  //       </div>
  //     </div>
  //   )
  // }

  // Dans le cas ou on doit call la modal en dehors de App
  constructor(props) {
    super(props)
  
    this.popUpContainer = document.createElement('div');
    document.body.appendChild(this.popUpContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.popUpContainer)
  }

  render() {
    return ReactDOM.createPortal (
      <div className="modal-custom" onClick={this.props.hideModal}>
        <div>
          <p>Contenu de la modal</p>
          <button>Fermer</button>
        </div>
      </div>, 
      this.popUpContainer
    )
  }
}

export default Modal;