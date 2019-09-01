import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import "./mainNav.css";

class TestNav extends Component {
    constructor(props) {
        super(props)

        this.state = { Loggedin: false, ProfileName: "Profile" };
      }

      changeState = (pLoggedin, pProfileName) => {
          this.setState ({Loggedin: pLoggedin, ProfileName: pProfileName});
      }

      doLogout = () => {
        console.log(axios.get("https://students-apis.herokuapp.com/auth/logout"));
        this.changeState(false, "");
      }
    
    render() {
        return (
            <div className="navbar">
                <div className="content">
                    <NavLink activeClassName="selectedprofilelink" exact to="/studentsfront/" className="logo">{this.state.ProfileName}</NavLink>
                    <ul>
                        <NavLink activeClassName="selectedlink" exact to="/studentsfront">Home</NavLink>
                        <NavLink activeClassName="selectedlink" to="/studentsfront/register">Register</NavLink>
                        <NavLink activeClassName="selectedlink" to="/studentsfront/login" onClick={this.doLogout}>{this.state.Loggedin?"Logout":"Login"}</NavLink>
                    </ul>
                </div>
            </div>

        );
    }
}

export default TestNav;