import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import ReactDOM from 'react-dom';

import axios from 'axios';

import "./profile.css";
import "./bootstrap.css";


class Profilepage extends Component {
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
    console.log("componentDidMount() {");
    console.log("https://students-apis.herokuapp.com/auth/facebook/success");
    // Fetch does not send cookies. So you should add credentials: 'include'
    
    var config = {
      credentials: "include",
      headers: {'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Credentials": true, Accept: "application/json"}
  };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    fetch("https://students-apis.herokuapp.com/auth/facebook/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
    
    //axios.get("https://students-apis.herokuapp.com/auth/facebook/success", config)    
    ///////////////////////////////////////////////////////////////////////////////////////////////
      .then(response => {
        console.log(".then(response => {");
        console.log(response);
        if (response.status === 200) return response.json();
        console.log("failed to authenticate user");
        this.setState({ code: 0 });
      })
      .then(responseJson => {
        console.log(".then(responseJson => {");
        console.log(responseJson);
        this.setState({ code: responseJson.code, message: responseJson.message, errmessage: responseJson.errmessage, loggedwith: responseJson.loggedwith, user: responseJson.user });

        if (this.state.code > 0) {
          console.log("this.state.user.provider = " + this.state.user.provider);
          if (this.state.user.provider === "google") {
            document.getElementById("firstname").value = this.state.user._json.given_name;
            document.getElementById("lastname").value = this.state.user._json.family_name;
            document.getElementById("inputEmail").value = this.state.user._json.email;
            document.getElementById("welcomeprofilename").innerText = "Welcome " + this.state.user._json.given_name;
            
          }
          else if (this.state.user.provider === "facebook") {
            document.getElementById("firstname").value = this.state.user._json.first_name;
            document.getElementById("lastname").value = this.state.user._json.last_name;
            document.getElementById("inputEmail").value = this.state.user._json.email;
            document.getElementById("welcomeprofilename").innerText = "Welcome " + this.state.user._json.first_name;
          }
        }

      })
      .catch(error => {
        console.log("catch Error : " + error);
        this.setState({ code: 0 });
      });

    if (window.location.hash && window.location.hash === "#_=_") {
      // If you are not using Modernizr, then the alternative is:
      //   `if (window.history && history.replaceState) {`
      if (window.history) {
        window.history.replaceState("", document.title, window.location.pathname);
      } else {
        // Prevent scrolling by storing the page's current scroll offset
        var scroll = {
          top: document.body.scrollTop,
          left: document.body.scrollLeft
        };
        window.location.hash = "";
        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scroll.top;
        document.body.scrollLeft = scroll.left;
      }
    }
  };


  render() {
    const { code, message, errmessage, loggedwith, user, cookies } = this.state;
    console.log(this.state);
    if (this.state.code === -1) return (
      <div>
        <h1>Logging...</h1>
      </div>
    );
    return (
      <div className="content-agileits">
        {(this.state.code > 0) ? <h1 className="title" id="welcomeprofilename"> </h1> : this.renderRedirect()}
        {/* <h1 className="title">Your profile</h1> */}
        <div className="left">
          <form>
            <div className="form-group">
              <label htmlFor="firstname" className="control-label">First Name:</label>
              <input type="text" className="form-control" id="firstname" value="" onChange={this.changeHandler} placeholder="First Name" data-error="Enter Your First Name" required />
              <div className="help-block with-errors" />
            </div>
            <div className="form-group">
              <label htmlFor="lastname" className="control-label">Last Name:</label>
              <input type="text" className="form-control" id="lastname" value="" onChange={this.changeHandler} placeholder="Last Name" data-error="Enter Your Last Name" required />
              <div className="help-block with-errors" />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail" className="control-label">Email:</label>
              <input type="email" className="form-control" id="inputEmail" value="" onChange={this.changeHandler} placeholder="Email" data-error="This email address is invalid" required />
              <div className="help-block with-errors" />
            </div>
            <div className="form-group">
              <label htmlFor="Phone" className="control-label">Phone:</label>
              <input type="text" className="form-control" id="Phone" value="" onChange={this.changeHandler} placeholder="Phone" data-error="Enter Your Phone Number" required />
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

export default Profilepage;