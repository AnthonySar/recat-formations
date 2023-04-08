import React, { useState, useEffect } from "react";

const FctCountUseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    // Le count en second useParams, 
    //permet de définir un changement que si ce state reçoit un changement
    document.title = `React formation N°${count}`;
  }, [count])

  return (
    <div className="container-cs">
      <h2>HOOKS : useEffect dans une Fct</h2>
      <p>Cette fois, on se sert du Hook - useEffect</p>
      <span>Vous avez cliqué {count} fois</span>
      <button onClick={() => setCount(count + 1)}>Cliquer pour +1</button>
      <input type="text" value={name} onChange={e => {
        setName(e.target.value)
      }} />
    </div>
  )
}

export default FctCountUseEffect;