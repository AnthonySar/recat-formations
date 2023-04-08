import React from "react";

const Container = ({children}) => {

  const styleWp = {
    width: 'fit-content', 
    margin: '10px auto', 
    boxShadow: '6px 6px 2px 1px pink', 
    padding: '15px', 
    borderRadius: '10px'
  };

  return (
    <div className="wrapper" style={styleWp}>
      {children}
    </div>
  )
}

export default Container;