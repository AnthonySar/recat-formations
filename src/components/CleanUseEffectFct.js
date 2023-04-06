import React, { useState, useEffect } from "react";

const CleanUseEffectFct = () => {
  const [keyCode, setKeyCode] = useState('');

  const handleKeyCode = (e) => {
    setKeyCode(e.code);
  }

  // [] en 2nd params, représente le Unmount
  useEffect(() => {
    document.addEventListener('keydown', handleKeyCode)

    return () => {
      document.removeEventListener('keydown', handleKeyCode)
    }
  }, [])

  return (
    <div className='card'>
      <div className='card-body'>
        <h3>UseEffect avec Fct</h3>
        <p>Utiliser votre clavier pour apercevoir votre keyCode : {keyCode}</p>
      </div>
    </div>
  )
}

export default CleanUseEffectFct;