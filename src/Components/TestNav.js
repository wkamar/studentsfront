import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./mainNav.css";

class TestNav extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="content">
                    <NavLink activeClassName="selectedprofilelink" exact to="/studentsfront/" className="logo">My Profile</NavLink>
                    <ul>
                        <NavLink activeClassName="selectedlink" exact to="/studentsfront">Home</NavLink>
                        <NavLink activeClassName="selectedlink" to="/studentsfront/register">Register</NavLink>
                        <NavLink activeClassName="selectedlink" to="/studentsfront/login">Login</NavLink>
                    </ul>
                </div>
            </div>

        );
    }
}

export default TestNav;