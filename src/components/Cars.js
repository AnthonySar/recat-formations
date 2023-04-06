import React from "react";
import Wrapper from './Wrapper';

const Car = ({name, color, year}) => {

  let colorInfo = "";
  color ? colorInfo = color : colorInfo = 'Non renseigné';

  return name && (
    <Wrapper>
      <p>Marque : { name }</p>
      <p>Année : { year }</p>
      <p>Age : { year }</p>
      <p>Couleur : { colorInfo }</p>
    </Wrapper>
  );
}

export default Car; 
