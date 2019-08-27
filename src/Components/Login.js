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

        this.state = { reqRegister: false, isAuthenticated: false, user: null, token: '' };
    }

    logout = () => {
        this.setState({ isAuthenticated: false, user: null, token: '' });
    };

    responseFacebook = (response) => {
        console.log(response);
    }

    responseGoogle = (response) => {
        console.log(response);
    }

    onFailure = (error) => {
        alert(error);
    }

    btnRegisterNewStudentClicked = () => {
        //ReactDOM.render(<RegisterNew />, document.getElementById('root'));
        this.setState({ reqRegister: true });
    }

    btnLoginClicked = () => {
        //ReactDOM.render(<RegisterNew />, document.getElementById('root'));
        this.setState({ reqRegister: true });
    }

    // btnloginwithfacebookClicked = async () => {
    //     console.log(backurl + "/auth/facebook");
    //     axios.get(backurl + "/auth/facebook").then(Response => {
    //         console.log(Response);
    //         if (Response.data.code > 0) {
    //             alert(Response.data.message);
    //             console.log(Response.data.user);
    //             //ReactDOM.render(<Login />, document.getElementById('root'));
    //         }
    //         else {
    //             alert(Response.data.message + "\n" + Response.data.errmessage);
    //             console.log(Response.data.user);

    //         }
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }

    // btnloginwithgoogleClicked = () => {
    //     console.log(backurl + "/auth/google");
    //     axios.get(backurl + "/auth/google").then(Response => {
    //         console.log(Response);
    //         if (Response.data.code > 0) {
    //             alert(Response.data.message);
    //             console.log(Response.data.user);
    //             //ReactDOM.render(<Login />, document.getElementById('root'));
    //         }
    //         else {
    //             alert(Response.data.message + "\n" + Response.data.errmessage);
    //             console.log(Response.data.user);

    //         }
    //     }).catch(error => {
    //         console.log(error);
    //     });

    // }

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
                            <h2> Login Here </h2>
                            <form action="#" method="post">
                                <div className="form-left-to-w3l">
                                    <span className="fa fa-envelope-o" aria-hidden="true" />
                                    <input type="email" name="email" placeholder="Email" required />
                                    <div className="clear" />
                                </div>
                                <div className="form-left-to-w3l ">
                                    <span className="fa fa-lock" aria-hidden="true" />
                                    <input type="password" name="password" placeholder="Password" required />
                                    <div className="clear" />
                                </div>
                                <div className="main-two-w3ls">
                                    <div className="left-side-forget">
                                        <input type="checkbox" className="checked" />
                                        <span className="remenber-me">Remember me </span>
                                    </div>
                                    <div className="right-side-forget">
                                        <a to="https://www.google.com/" className="for">Forgot password...?</a>
                                    </div>
                                </div>
                                <div className="btnn">
                                    <button type="submit">Login </button>
                                </div>
                            </form>
                            {/* ///////////////////////////////////// */}
                            <div className="w3layouts_more-buttn">
                                <button type="submit" className="btn btn-lg" id="btnloginwithfacebook" onClick={this.btnloginwithfacebookClicked}>Login with Facebook</button>
                                {/* <FacebookLogin appId="3168317616542352" autoLoad={false} fields="name, email" callback={this.responseFacebook}></FacebookLogin> */}
                            </div>
                            <br />
                            <div className="w3layouts_more-buttn">
                                <button type="submit" className="btn btn-lg" id="btnloginwithgoogle" onClick={this.btnloginwithgoogleClicked}>Login with Google</button>
                                {/* <GoogleLogin clientId="669717209161-bhchko2edea6if0i6gv3ol2g5hveu2tb.apps.googleusercontent.com" buttonText="LOGIN WITH GOOGLE" onSuccess={this.responseGoogle} onFailure={this.responseGoogle}></GoogleLogin> */}
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

        return (
            <div>
                {(this.state.reqRegister) ? <Redirect to='/studentsfront/register' /> : this.renderAll()}
            </div>


        );
    }
}

export default Login;