import React, { Component, Fragment } from "react";
import Svg from "./Svg";
import PureComp from "./PureComponent";

class Form extends Component {

  state = {
    username: '', 
    color: '', 
    colors: ["", "red", "blue", "pink"], 
    comment: ''
  }

  handlePseudo = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleColor = (e) => {
    this.setState({
      color: e.target.value
    })
  }

  handleComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(`User: ${this.state.username}, Color: ${this.state.color}, Comment: ${this.state.comment}`)
  }

  render() {  
    return(
      <Fragment> 
        <h2>Formulaires</h2>
        <form onSubmit={this.handleSubmitForm}>
          <div>
            <label>Pseudo</label>
            <input type='text' value={this.state.username} onChange={this.handlePseudo}></input>
          </div>
          <div>
            <label>Couleur</label>
            <select value={this.state.color} onChange={this.handleColor}>
              {
                this.state.colors.map((color, index) => {
                  return <option key={index} value={color}>{color}</option>
                })
              }
            </select>
            <Svg color={this.state.color} />
          </div>
          <div>
            <label>Commentaire</label>
            <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
          </div>

          <button>Valider le formulaire</button>
        </form>
        
        <PureComp />
      </Fragment>
    )
  }
}

export default Form;