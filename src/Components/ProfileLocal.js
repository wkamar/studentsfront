import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import ReactDOM from 'react-dom';

import axios from 'axios';

import "./profile.css";
import "./bootstrap.css";


class ProfileLocal extends Component {
    constructor(props) {
        super(props)

        this.state = { code: -1, message: "", errmessage: "", loggedwith: "", user: {}, cookies: {} };

    }

    btnlogoutclicked = () => {

    }

    renderRedirect = () => {
        return <Redirect to='/studentsfront/login' />
    }

    componentDidMount() {

        this.setState({ user: this.props.location.state.user });
        document.getElementById("firstname").value = this.props.location.state.user.FirstName;
        document.getElementById("lastname").value = this.props.location.state.user.LastName;
        document.getElementById("inputEmail").value = this.props.location.state.user.EmailAddress;
        document.getElementById("Phone").value = this.props.location.state.user.PhoneNumber;
        document.getElementById("welcomeprofilename").innerText = "Welcome " + this.props.location.state.user.FirstName;

        document.getElementById("hire").checked = this.props.location.state.user.Gender & true;
        document.getElementById("work").checked = !document.getElementById("hire").checked;

        //this.setState({ code: 1, user: this.props.location.state.user });
        this.setState({ code: 1 });

    };


    render() {
        const { code, message, errmessage, loggedwith, user, cookies } = this.state;
        return (
            <div className="content-agileits">
                <h1 className="title" id="welcomeprofilename"> </h1>
                <div className="left">
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstname" className="control-label">First Name:</label>
                            <input type="text" className="form-control" id="firstname" onChange={this.changeHandler} placeholder="First Name" data-error="Enter Your First Name" required />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname" className="control-label">Last Name:</label>
                            <input type="text" className="form-control" id="lastname" onChange={this.changeHandler} placeholder="Last Name" data-error="Enter Your Last Name" required />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail" className="control-label">Email:</label>
                            <input type="email" className="form-control" id="inputEmail" onChange={this.changeHandler} placeholder="Email" data-error="This email address is invalid" required />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone" className="control-label">Phone:</label>
                            <input type="text" className="form-control" id="Phone" onChange={this.changeHandler} placeholder="Phone" data-error="Enter Your Phone Number" required />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword" className="control-label">Password:</label>
                            <div className="form-inline row">
                                <div className="form-group col-sm-6 agileits-w3layouts">
                                    <input type="password" data-minlength={6} className="form-control" id="inputPassword" value="" onChange={this.changeHandler} placeholder="Password" required />
                                    <div className="help-block">Min of 6 characters</div>
                                </div>
                                <div className="form-group col-sm-6 w3-agile">
                                    <input type="password" className="form-control" id="inputPasswordConfirm" value="" onChange={this.changeHandler} data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm Password" required />
                                    <div className="help-block with-errors" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group w3ls-opt">
                            <label htmlFor="Phone" className="control-label">Gender</label>
                            <label className="w3layouts">
                                {/* <input type="radio" name="work" id="hire" value={hire} onChange={this.changeHandler} defaultValue="male" defaultChecked />Male */}
                                <input type="radio" name="work" id="hire" onClick={this.radioClicked} defaultChecked />Male
  </label>
                            <label className="w3layouts label2">
                                {/* <input type="radio" name="work" id="work" defaultValue="female" />Female */}
                                <input type="radio" name="work" id="work" onClick={this.radioClicked} />Female </label>
                        </div>

                    </form>
                    <div className="form-group">
                        <button type="submit" className="btn btn-lg" id="btnRegisterNewStudent" onClick={this.submitHandler}>Update</button>
                    </div>

                </div>
                <div className="right" />
                <div className="clear" />
            </div>

        );
    }


}

export default ProfileLocal;