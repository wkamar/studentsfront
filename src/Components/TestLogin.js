import React, { Component } from 'react';
import { Redirect } from 'react-router'
import ReactDOM from 'react-dom';

import Login from './Login';

import axios from 'axios';

class TestLogin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputEmail: "",
      inputPassword: ""
    }
  }

  submitHandler = (e) => {
  }

  btnloginwithfacebookClicked = async () => {
    // console.log("/auth/facebook");
    console.log("http://localhost:3003/auth/facebook");
    // axios.get("/auth/facebook").then(Response => {
    axios.get("http://localhost:3003/auth/facebook").then(Response => {
      console.log(Response);
      if (Response.data.code > 0) {
        alert(Response.data.message);
        console.log(Response.data.user);
        //ReactDOM.render(<Login />, document.getElementById('root'));
      }
      else {
        alert(Response.data.message + "\n" + Response.data.errmessage);
        console.log(Response.data.user);

      }
    }).catch(error => {
      console.log(error);
    });

  }

  btnloginwithgoogleClicked = async () => {
    console.log("http://localhost:3003/auth/google");
    // axios.get("/auth/facebook").then(Response => {
    axios.get("http://localhost:3003/auth/google").then(Response => {
      console.log(Response);
      if (Response.data.code > 0) {
        alert(Response.data.message);
        console.log(Response.data.user);
        //ReactDOM.render(<Login />, document.getElementById('root'));
      }
      else {
        alert(Response.data.message + "\n" + Response.data.errmessage);
        console.log(Response.data.user);

      }
    }).catch(error => {
      console.log(error);
    });

  }

  componentDidMount() {
    // Fetch does not send cookies. So you should add credentials: 'include'
    fetch("http://localhost:3003/auth/facebook/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        console.log("failed to authenticate user");
        return <Redirect to='/Login'/>;
      })
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(error => {
        console.log(error);
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

  _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    // Upon successful login, a cookie session will be stored in the client
    var re = window.open("http://localhost:3003/auth/facebook", "_self");
  };

  async fetchRandomData() {

    var resp = await fetch("/stdapis/userslist");
    var data = await resp.json();

    console.log(data);

    document.getElementById("firstname").value = data.results[0].name.first;
    document.getElementById("lastname").value = data.results[0].name.last;
  }



  render() {
    return (
      //<form action={backurl+"/stdapis/user"} method="get">
      <div>

        <form>
          <div>
            <label>Username:</label>
            <input type="text" id="firstname" name="username" />
            <br />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" id="lastname" name="password" />
          </div>

        </form>
        <div>
          <input type="submit" defaultValue="Submit" onClick={this._handleSignInClick} />
        </div>

      </div>
    );
  }
}

export default TestLogin;