import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import RegisterNew from './Components/RegisterNew'
import Login from './Components/Login'
import TestLogin from './Components/TestLogin'
import mainNav from './Components/mainNav';
import Items from './Components/Items';
import TestNav from './Components/TestNav';

//ReactDOM.render(<RegisterNew />, document.getElementById('root'));

//ReactDOM.render(<TestNav></TestNav>, document.getElementById('root'));

//ReactDOM.render(<Login></Login>, document.getElementById('root'));
//ReactDOM.render(<TestLogin />, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App ref={(AppComponent) => {window.AppComponent = AppComponent}} />, document.getElementById("root"));

//ReactDOM.render(<mainNav>main Nav</mainNav>, document.getElementById('root'));



//

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
