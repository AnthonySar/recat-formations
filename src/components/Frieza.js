import React, { Component } from 'react';
import frieza from './frieza.jpg'

class Frieza extends Component {
  render() {
    return (
      <div className='col'>
        <img src={frieza} alt='Frieza' width="250" height="200"/><br/>

      </div>
    )
  }
}

export default Frieza;