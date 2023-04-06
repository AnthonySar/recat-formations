import React from "react";

const Btn = (alertBtn, gameBtn, children, handleClick) => {

  const btnStyle = {
    backgroundColor: 'blue', 
    color: 'white',
    padding: '20px',
    border: 'none',
    borderRadius: '20px'
  }

  return(
    <button style={btnStyle}>{children}</button>
  )
}

export default Btn;