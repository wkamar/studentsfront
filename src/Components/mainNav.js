import React, { Component } from 'react';

//import "./mainNav.css";

class mainNav extends Component {
    render() {
        return (
            // <div className="navbar">
            //     <div className="content">
            //     <a href="\" className="logo">Logo</a>
            //     <ul>
            //         <a href="\">Home</a>
            //         <a href="\register">Register</a>
            //         <a href="\login">Login</a>
            //         <a href="\profile">Profile</a>
            //         <button>Cliiiiick</button>
            //     </ul>
            //     </div>
            // </div>

            <div>
                <label>Username:</label>
                <input type="text" id="firstname" name="username" />
                <br />
            </div>

            // <div>
            //     <div>
            //         <button>Cliiiiick</button>
            //         {/* <a href="\">Logo</a> */}
            //         <ul>
            //             <a href="\new">Home</a>
            //             <a href="\register">Register</a>
            //             <a href="\login">Login</a>
            //             <a href="\profile">Profile</a>
            //             <button>Cliiiiick</button>
            //         </ul>
            //     </div>
            // </div>
        );
    }

}


export default mainNav;