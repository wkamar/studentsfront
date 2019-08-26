import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import "./mainNav.css";

class TestNav extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="content">
                    <NavLink activeClassName="selectedprofilelink" to="/profile" className="logo">Logo</NavLink>
                    <ul>
                        <NavLink activeClassName="selectedlink" exact to="/">Home</NavLink>
                        <NavLink activeClassName="selectedlink" to="/register">Register</NavLink>
                        <NavLink activeClassName="selectedlink" to="/login">Login</NavLink>
                    </ul>
                </div>
            </div>

        );
    }
}

export default TestNav;