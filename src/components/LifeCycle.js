import React, { Component } from "react";
import ChildLifeCycle from "./ChildLifeCycle";
import PureComp from "./PureComponent";

class LifeCycle extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Tony',
       step: 1
    }

    console.log(`Etape ${this.state.step} dans le constructor()`);
  }

  componentDidMount() {
    console.log(`Etape ${this.state.step} dans le compoDidMount`)
    this.setState({
      name: this.props.name,
      step: this.state.step +1
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`Etape ${this.state.step} Je suis dans le compoDidUpdate`)
    console.log(prevProps);
    console.log(prevState);
    console.log(this.state)
  }

  componentWillUnmount() {
    console.log(`Etape ${this.state.step} je suis dans le compoWillUnmount`)
  }

  render() {
    console.log(`Etape ${this.state.step} dans le render()`);

    return(
      <div>
        {
          console.log(`Etape ${this.state.step} dans le return()`)
        }
        <ChildLifeCycle />
      </div>
    )
  }
}

export default LifeCycle;