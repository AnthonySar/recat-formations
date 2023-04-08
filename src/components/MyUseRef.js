import React, { useRef, useState } from "react";

const MyUseRef = () => {
  const [name, setName] = useState(null);
  const usernameRef = useRef(null);

  const handleRef = () => {
    setName(usernameRef.current.value)
  };

  return (
    <div className="container-cs">
      <h2>HOOKS : useRef</h2>
      <p>Ici on utilise le useRef pour venir capturer la donnée que l'on entre dans l'input, au submit, on prend la valeur current de l'input que l'on mets dans une variable name</p>
      <span><strong>{name}</strong></span>
      <input ref={usernameRef} type='text' />
      <button onClick={handleRef}>Envoyer</button>
    </div>
  )
}

export default MyUseRef;