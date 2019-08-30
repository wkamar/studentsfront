import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import TestNav from './Components/TestNav';
import Login from './Components/Login'
import RegisterNew from './Components/RegisterNew';
import ProfilePage from './Components/Profilepage';

var backurl = "https://students-apis.herokuapp.com";

const homemess = () => {
  return (
    <div>
      <h3>
        Main 
      </h3>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <TestNav></TestNav> */}
          <TestNav ref={(TestNavComponent) => {window.TestNavComponent = TestNavComponent}}/>
          {/* <Login></Login> */}
          {/* <Route exact path="/" Component={homemess}></Route> */}
          <Switch>
            <Route path="/studentsfront/login" component={Login} />
            <Route path="/studentsfront/register" component={RegisterNew} />
            <Route path="/studentsfront/profile" component={ProfilePage} />
            <Route path="/studentsfront/" component={ProfilePage} />
            <Route exact path="/" component={ProfilePage} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}


export default App;
