import React, { useContext } from "react";
import { UserContext } from "./MyContext";

const MyContextDataContent = () => {
  const user = useContext(UserContext);

  return (
    <div className="container-cs">
      <h2>HOOKS : useContext</h2>
      <p>Ici on créé 3 components et 1 fichier de context afin de mettre en place le useContext</p>
      <p>grâce au useContext, on récupére le state et la data que l'on souhaite depuis App.js jusqu'au dernier composant enfant qui traitera et affichera la data<br />
      <strong>MyContextDataContent</strong> sera l'enfant qui en bénéficiera. <br/>
      Vous avez la possibilité de le voir en inspectant le composant avec React Dev Tools</p>

      <ul className="list-group">
        <li className="list-group-item">Nom : {user.name}</li>
        <li className="list-group-item">Age :{user.age}</li>
        </ul>
  </div> 
  )
}

export default MyContextDataContent;