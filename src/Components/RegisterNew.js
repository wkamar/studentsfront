import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import Login from './Login';

import axios from 'axios';
import backurl from '../glob';

class RegNewForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            lastname: "",
            inputEmail: "",
            Phone: "",
            inputPassword: "",
            inputPasswordConfirm: "",
            hire: 1
        }
    }


    changeHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value });

        if(this.validData()){

        }
        console.log({ [e.target.id]: e.target.value });
    }

    submitHandler = (e) => {
        if(this.validData()){
            console.log(this.state);
            console.log(backurl + "/stdapis/newuser");
            axios.post(backurl + "/stdapis/newuser", this.state).then(Response =>{
                console.log(Response);
                if(Response.data.newid>0)
                {
                    alert(Response.data.message);
                    ReactDOM.render(<Login />, document.getElementById('root'));
                }
                else{
                    alert(Response.data.message + "\n" + Response.data.errmessage);

                }
            }).catch(error => {
                console.log(error);
            });

        }
    }

    radioClicked = (e) => {
        this.setState({ hire: !document.getElementById("work").checked | 0 });
    }

    validData = () => {

        // valid firstname
        if (!(/^[0-9a-zA-Z]+$/.test(document.getElementById("firstname").value))) {
            document.getElementById("firstname").style.color = "#ff0000";
            return (false);
        }
        else{
            document.getElementById("firstname").style.color = "#000000";
        }

        // valid lastname
        if (!(/^[0-9a-zA-Z]+$/.test(document.getElementById("lastname").value))) {
            document.getElementById("lastname").style.color = "#ff0000";
            return (false);
        }
        else{
            document.getElementById("lastname").style.color = "#000000";
        }

        // valid email
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("inputEmail").value))) {
            document.getElementById("inputEmail").style.color = "#ff0000";
            return (false);
        }
        else{
            document.getElementById("inputEmail").style.color = "#000000";
        }

        // valid phone No
        if (!(/^\d{10}$/.test(document.getElementById("Phone").value))) {
            document.getElementById("Phone").style.color = "#ff0000";
            return (false);
        }
        else{
            document.getElementById("Phone").style.color = "#000000";
        }

        // valid password
        if (!(/^[A-Za-z]\w{5,14}$/.test(document.getElementById("inputPassword").value))) {
            document.getElementById("inputPassword").style.color = "#ff0000";
            return (false);
        }
        else{
            document.getElementById("inputPassword").style.color = "#000000";
        }

        // valid PasswordConfirm
        if (!(/^[A-Za-z]\w{5,14}$/.test(document.getElementById("inputPasswordConfirm").value))) {
            document.getElementById("inputPasswordConfirm").style.color = "#ff0000";
            return (false);
        }
        else if (document.getElementById("inputPassword").value !== document.getElementById("inputPasswordConfirm").value){
            document.getElementById("inputPasswordConfirm").style.color = "#ff0000";
            return (false);
        }
        else{
            document.getElementById("inputPasswordConfirm").style.color = "#000000";
        }

        

        return (true);
    }
    
    async fetchRandomData() {

        var resp = await fetch("http://localhost:3003/userslist");
        var data = await resp.json();

        console.log(data);

        document.getElementById("firstname").value = data.results[0].name.first;
        document.getElementById("lastname").value = data.results[0].name.last;
    }



    render() {
        const { firstname, lastname, inputEmail, Phone, inputPassword, inputPasswordConfirm, hire } = this.state;
        return (
            <div className="content-agileits">
                <h1 className="title">Student Registration Form</h1>
                <div className="left">
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstname" className="control-label">First Name:</label>
                            <input type="text" className="form-control" id="firstname" value={firstname} onChange={this.changeHandler} placeholder="First Name" data-error="Enter Your First Name" required />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname" className="control-label">Last Name:</label>
                            <input type="text" className="form-control" id="lastname" value={lastname} onChange={this.changeHandler} placeholder="Last Name" data-error="Enter Your Last Name" required />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail" className="control-label">Email:</label>
                            <input type="email" className="form-control" id="inputEmail" value={inputEmail} onChange={this.changeHandler} placeholder="Email" data-error="This email address is invalid" required />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone" className="control-label">Phone:</label>
                            <input type="text" className="form-control" id="Phone" value={Phone} onChange={this.changeHandler} placeholder="Phone" data-error="Enter Your Phone Number" required />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword" className="control-label">Password:</label>
                            <div className="form-inline row">
                                <div className="form-group col-sm-6 agileits-w3layouts">
                                    <input type="password" data-minlength={6} className="form-control" id="inputPassword" value={inputPassword} onChange={this.changeHandler} placeholder="Password" required />
                                    <div className="help-block">Minimum of 6 characters</div>
                                </div>
                                <div className="form-group col-sm-6 w3-agile">
                                    <input type="password" className="form-control" id="inputPasswordConfirm" value={inputPasswordConfirm} onChange={this.changeHandler} data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm Password" required />
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
                        <button type="submit" className="btn btn-lg" id="btnRegisterNewStudent" onClick={this.submitHandler}>submit</button>
                    </div>

                </div>
                <div className="right" />
                <div className="clear" />
            </div>

        );
    }
}

export default RegNewForm;