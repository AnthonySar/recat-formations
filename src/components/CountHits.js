import React, { Component } from "react";

const countHits = (WrapperComponent, power) => {

  class CountHits extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        hits: 0, 
        bg: ''
      }
    }

    addOne = () => {
      this.setState((prevState) => {
        return {
          hits: prevState.hits + 1
        }
      })
    }

    handleBg = () => {
      if(WrapperComponent.name === "Goku") {
        this.setState(({
          bg: 'bg-danger'
        }))
      } else {
        this.setState(({
          bg: 'bg-success'
        }))
      }
    }
    
    componentDidUpdate(prevProps, prevState) {
      if(this.state !== prevState) {
        const compName = WrapperComponent.name;
        this.props.reduceHandler(compName, power);
      }
    }

    render() {
      // Le spread operator ici, 
      //permet de récupérer les props qui sont instancié côté App, et les récupérer sur les composants
      return <WrapperComponent addOneHit={this.addOne} hocState={this.state} clickPictures={this.handleBg} {...this.props}/>
    }
  }

  return CountHits
}

export default countHits;