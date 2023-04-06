import React, { useState } from "react";

const FctState = () => {

  const [counter, setCounter] = useState(0);
  const addOne = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  return (
    <div>
      <h2>HOOKS : useState dans une Fct</h2>
      <p>Counter : {counter}</p>
      <button onClick={addOne}>State dans Fct</button>
    </div>
  )
}

export default FctState;