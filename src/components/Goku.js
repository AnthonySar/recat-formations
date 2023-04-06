import React, { Component } from 'react';
import countHits from './CountHits';
import goku from './goku.jpeg';

class Goku extends Component {
  render() {
    const {name, addOneHit, hocState, life, clickPictures} = this.props;
    const lifeValue = life > 0 ? (<td>{life} %</td>) : (<td><span className='badge badge-danger'>Mort</span></td>);
    const battle = life > 0 ? (<button onClick={addOneHit} className='btn btn-success m-3'>{name} lance Kamé Hamé Ha</button>) : (<button className='btn btn-danger m-3 disabled'>{name} est Mort</button>);

    return (
      <div className={`col ${hocState.bg}`}>
        <img onClick={clickPictures} src={goku} alt='Goku' width="250" height="200"/><br/>
        {battle}

        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Coups</th>
              <th scope='col'>Vie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hocState.hits}</td>
              {lifeValue}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default countHits(Goku, 12);