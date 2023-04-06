import React  from "react";

const RouterThree = (props) => {
  console.log(props)
    setTimeout(() => {
      props.history.push('/');
    }, 5000)

  return (
    
    <div className="container mt-4">
      <div className="alert alert-warning alert-dismissible fade show">
        <strong>Oups,</strong> la page est en construction, vous serez redirigé vers la page d'accueil dans 4 secondes
      </div>
      <h2>Redirection</h2>
    </div>
  )
}

export default RouterThree;