import React from "react";

const Toto = (props) => {

  return(
    <div className="toto">
      <h2>{props.name}</h2>
      <button 
        disabled={props.leState.disabled}
        onClick={() => props.responseTotoProp('Non merci :)')}>Réponse de Toto</button>
      <p>{props.leState.messageToto}</p>
    </div>
  )
}

export default Toto;