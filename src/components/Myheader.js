import React from "react";

const Myheader = ({title, color}) => {

  return (
    <>
      <h1 style={{color: color}}>
        {title}
      </h1>
    </>
  )
}

export default Myheader;