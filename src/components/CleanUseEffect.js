import React, { useState } from "react";
import CleanUseEffectClass from "./CleanUseEffectClass";
import CleanUseEffectFct from "./CleanUseEffectFct";

const CleanUseEffect = () => {
  const [show, setShow] = useState(true);
  const [showFct, setShowfct] = useState(true);
  const btnDisplay = show ? 'Cacher' : 'Afficher';

  return (
    <div className="container container-cs">
      <h2>UseEffect Nettoyage</h2>
      <p>ici nous sommes sur un container qui servira à démonter les 2 types de useEffect : Class & Foncion</p>
      <p>Lorsqu'on démonte un composant, il faut s'assurer que les useEffect, eventListener ne se propage plus et soit bien arrété</p>
      <button className="btn btn-primary m-3" onClick={() => setShow(!show)}>{btnDisplay}</button>
      {
        show && <CleanUseEffectClass />
      }

      <button className="btn btn-primary m-3" onClick={() => setShowfct(!showFct)}>{btnDisplay}</button>
      {
        showFct && <CleanUseEffectFct />
      }
    </div>
  )
}

export default CleanUseEffect;