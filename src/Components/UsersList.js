import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Login from './Login';

import axios from 'axios';

class UsersList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputEmail: "",
      inputPassword: ""
    }
  }

  submitHandler = (e) => {
  }



  componentDidMount() {
  };


  render() {
    return (
      <div>
      </div>
    );
  }
}

export default UsersList;