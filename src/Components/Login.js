import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import RegisterNew from './RegisterNew';

import axios from 'axios';
import backurl from '../glob';
import { async } from 'q';

import "./loginstyle.css";
import "./font-awesome.min.css";


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = { reqRegister: false, isAuthenticated: false, user: {}, token: '' };
    }

    logout = () => {
        this.setState({ isAuthenticated: false, user: null, token: '' });
    };

    btnRegisterNewStudentClicked = () => {
        this.setState({ reqRegister: true });
    }

    btnLoginClicked = async () => {

        if (this.validData()) {
            try {
                const response = await axios.post("https://students-apis.herokuapp.com/auth/login", {
                    inputEmail: document.getElementById("inputEmail").value,
                    inputPassword: document.getElementById("inputPassword").value
                });
                console.log(response);
                if (response.data.code > -1) {
                    if (response.data.code > 0) {
                        //this.setState({ isAuthenticated: true, user: response.data.user });
                        this.setState({ isAuthenticated: true});
                    }
                    else {
                        document.getElementById("loginheretext").innerText = "Check your credentials";
                        document.getElementById("loginheretext").style.color = "#ff0000";
                        setTimeout(function () {
                            document.getElementById("loginheretext").style.color = "#60baaf";
                        }, 300);
                        

                    }

                }
            }
            catch (err) {
                console.log(err);
                alert(err);
            }



        }
    }

    changeHandler = (e) => {
        if (this.validData()) {

        }
    }

    validData = () => {

        // valid email
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("inputEmail").value))) {
            document.getElementById("inputEmail").style.color = "#ff0000";
            return (false);
        }
        else {
            document.getElementById("inputEmail").style.color = "#000000";
        }

        // valid password
        if (!(/^[A-Za-z]\w{5,14}$/.test(document.getElementById("inputPassword").value))) {
            document.getElementById("inputPassword").style.color = "#ff0000";
            return (false);
        }
        else {
            document.getElementById("inputPassword").style.color = "#000000";
        }

        return (true);
    }

    btnloginwithfacebookClicked = () => {
        window.open("https://students-apis.herokuapp.com/auth/facebook", "_self");
    }

    btnloginwithgoogleClicked = () => {
        window.open("https://students-apis.herokuapp.com/auth/google", "_self");
    }

    renderAll = () => {
        return (
            <div>
                <h1 className="error">Student Login Form</h1>
                <div className="w3layouts-two-grids">
                    <div className="mid-class">
                        <div className="txt-left-side">
                            <h2 id="loginheretext"> Login Here </h2>
                            <form>
                                <div className="form-left-to-w3l">
                                    <span className="fa fa-envelope-o" aria-hidden="true" />
                                    <input type="email" name="email" id="inputEmail" onChange={this.changeHandler} placeholder="Email" required />
                                    <div className="clear" />
                                </div>
                                <div className="form-left-to-w3l ">
                                    <span className="fa fa-lock" aria-hidden="true" />
                                    <input type="password" id="inputPassword" name="password" onChange={this.changeHandler} placeholder="Password" required />
                                    <div className="clear" />
                                </div>
                                {/* <div className="main-two-w3ls">
                                    <div className="left-side-forget">
                                        <input type="checkbox" className="checked" />
                                        <span className="remenber-me">Remember me </span>
                                    </div>
                                    <div className="right-side-forget">
                                        <a to="https://www.google.com/" className="for">Forgot password...?</a>
                                    </div>
                                </div> */}

                            </form>

                            {/* </div><div className="btnn"> */}
                            <div className="w3layouts_more-buttn">
                                <button type="submit" className="btn btn-lg" onClick={this.btnLoginClicked}>Login</button>
                            </div>
                            {/* ///////////////////////////////////// */}
                            <br />
                            <div className="w3layouts_more-buttn">
                                <button type="submit" className="btn btn-lg" id="btnloginwithfacebook" onClick={this.btnloginwithfacebookClicked}>Login with Facebook</button>
                            </div>
                            <br />
                            <div className="w3layouts_more-buttn">
                                <button type="submit" className="btn btn-lg" id="btnloginwithgoogle" onClick={this.btnloginwithgoogleClicked}>Login with Google</button>
                            </div>
                            {/* ///////////////////////////////////// */}

                            <div className="w3layouts_more-buttn">
                                <h3>Don't Have an account..? <button type="submit" className="btn btn-lg" id="btnRegisterNewStudent" onClick={this.btnRegisterNewStudentClicked}>Register Here</button> </h3>
                            </div>



                        </div>
                        <div className="img-right-side">
                            <h3>Welcome To Student Login Form</h3>
                            <img src="images/b11.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <footer className="copyrigh-wthree">
                    <p>If you can't explain it simply, you don't understand it well enough.</p>
                </footer>
            </div>
        );
    }

    render() {
        console.log("Login render() { this.state");
        console.log(this.state);

        return (
            <div>
                {(this.state.isAuthenticated) ? <Redirect to='/studentsfront/profile' /> : <span></span>}
                {(this.state.reqRegister) ? <Redirect to='/studentsfront/register' /> : this.renderAll()}
            </div>


        );
    }
}

export default Login;