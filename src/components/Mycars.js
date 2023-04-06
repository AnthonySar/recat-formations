import React, { Component } from "react";
import Car from './Cars';
import Wrapper from './Wrapper';
import Myheader from './Myheader';
import Welcome from "./Welcome";

class Mycars extends Component {

  // State est équivalent à : 
  // constructor() super(props)
  state = {
    cars: [
      {name: "Audi RS4", color: "Noir", year: "2017"},
      {name: "Audi RS6", color: "Rouge", year: "2020"},
      {name: "Audi RS7", color: "", year: "2022"}
    ]
  }

  getAge = year => {
    const now = new Date().getFullYear();
    const age = now - year;

    let frYear;
    if (age === 1) {
      frYear = "an"
    } else if (age === 0) {
      frYear = ""
    } else {
      frYear = "ans"
    }

    return `${age} ${frYear}`;
  }

  render() {
    const {title, color} = {
      title: this.props.title,
      color: this.props.color
    };

    return (
      <div className="cars-container">
        <Welcome />

        <Wrapper>
          <Myheader title={title} color={color}/>
        </Wrapper>

        { 
          this.state.cars.map(({name, color, year}, index) => {
            return (
              <Car key={index} name={name} color={color} year={year} />
            );
          }) 
        }
      </div>
    );
  }
}

export default Mycars;