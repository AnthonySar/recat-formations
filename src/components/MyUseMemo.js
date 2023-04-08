import React, { useState, useEffect, useMemo } from "react";

const MyUseMemo = () => {

  const [count, setCount] = useState(1);
  const [profile, setProfile] = useState({});

  // [] -> Est nécessaire pour éviter la propagation 
  // on fetch la donnée dans le cas ou elle est modifié et non pas en continu
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${count}`)
    .then(res => res.json())
    .then(json => {
        setProfile(json)
    })
    .catch(err => {
      console.log(err)
    })
  }, [count]);


  const memoizeValue = useMemo(() => {
    return count > 10
  }, [count]);

  return (
    <div className="container-cs">
      <h2>HOOKS : useMemo</h2>
      <p>Dans ce cas présent, on utilise le useState et le useEffect, combiné au fetch, on récupérer le json et on l'affiche dynamiquement</p>
      <button onClick={() => setCount(count + 1)} className="btn btn-info m-2">Changer d'User ID : {count}</button>

      { memoizeValue && <div className="alert alert-danger">useMemo se déclenche car elle à mémorisée le résultat de la fct qui nous permet de changer nos users et de sa conditions "count sup à  10"</div> }
      <div>
        <ul className="list-group">
          <li className="list-group-item"><strong>User ID:</strong> {profile.id}</li>
          <li className="list-group-item"><strong>Nom :</strong> {profile.lastName}</li>
          <li className="list-group-item"><strong>Prénom :</strong> {profile.firstName}</li>
          <li className="list-group-item"><strong>Pseudo :</strong> {profile.username}</li>
          <li className="list-group-item"><strong>Age :</strong> {profile.age}</li>
          <li className="list-group-item"><strong>Email : </strong> {profile.email}</li>
          <li className="list-group-item"><strong>Tél :</strong> {profile.phone}</li>
        </ul>
      </div>
    </div>
  )
}

export default MyUseMemo;