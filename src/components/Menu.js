import React from "react";
import { Link, NavLink }from 'react-router-dom';

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link className="nav-item nav-link" to="/first">1er Router</Link>
          <NavLink className="nav-item nav-link" to="/second">Snd Router</NavLink>

          {/* NavLink permet d'ajouter la class active au click sur le link */}
          <Link className="nav-item nav-link" to="/three">Redirection</Link>
        </div>
      </div>
    </nav>
  )
}

export default Menu