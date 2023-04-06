import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: {},
    }
  }

  componentDidMount() { 
    const userId = this.props.match.params.profileId;


    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        data: json.users[userId]
      })
    })
   }

  render() {
    const {firstName, lastName, email, phone} = this.state.data;

    return (
      <div className='container mt-3'>
        <h2>Get Profil : /users/3 par exemple</h2>
        
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Name : {firstName} {lastName}</li>
          <li className='list-group-item'>Email : {email}</li>
          <li className='list-group-item'>Phone : {phone}</li>
        </ul>
      </div>
    )
  }
}

export default Profile;
