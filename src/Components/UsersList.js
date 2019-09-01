import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Login from './Login';

import axios from 'axios';

class UsersList extends Component {
  constructor(props) {
    super(props)

    this.state = { Users: [] };
  }

  submitHandler = (e) => {
  }

  changeHandler = (e) => {

  }

  getallusers = () => {
    axios.post("https://students-apis.herokuapp.com/stdapis/getusersAll", this.state).then(Response => {
      console.log(Response);
      this.setState({ Users: Response.data.user });
    }).catch(error => {
      console.log(error);
    });

  }

  componentDidMount() {
    this.getallusers();
  };

  render() {
    const uList = this.state.Users.map((u) => {
      return (
        <div className="content-agileits" key={u.EmailAddress}>
          <h1 className="title" id="welcomeprofilename">{u.FirstName} Profile Data</h1>
          <div className="left">
            <form>
              <div className="form-group">
                <label htmlFor="firstname" className="control-label">First Name:</label>
                <input type="text" className="form-control" id="firstname" onChange={this.changeHandler} value={u.FirstName} placeholder="First Name" data-error="Enter Your First Name" required />
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <label htmlFor="lastname" className="control-label">Last Name:</label>
                <input type="text" className="form-control" id="lastname" onChange={this.changeHandler} value={u.LastName} placeholder="Last Name" data-error="Enter Your Last Name" required />
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail" className="control-label">Email:</label>
                <input type="email" className="form-control" id="inputEmail" onChange={this.changeHandler} value={u.EmailAddress} placeholder="Email" data-error="This email address is invalid" required />
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <label htmlFor="Phone" className="control-label">Phone:</label>
                <input type="text" className="form-control" id="Phone" onChange={this.changeHandler} value={u.PhoneNumber} placeholder="Phone" data-error="Enter Your Phone Number" required />
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword" className="control-label">Password:</label>
                <div className="form-inline row">
                  <div className="form-group col-sm-6 agileits-w3layouts">
                    <input type="text" className="form-control" id="inputPassword" value={u.Password} onChange={this.changeHandler} placeholder="Password" required />
                  </div>
                </div>
              </div>

              <div className="form-group w3ls-opt">
                <label htmlFor="Phone" className="control-label">Gender</label>
                <label className="w3layouts">
                  <input type="radio" name="work" id="hire" onClick={this.radioClicked} checked={u.Gender & true} />Male
              </label>
                <label className="w3layouts label2">
                  <input type="radio" name="work" id="work" onClick={this.radioClicked} checked={!(u.Gender & true)} />Female
                  </label>
              </div>

            </form>
            <br></br>
            <br></br>
            <div className="form-group">
              <button type="submit" className="btn btn-lg3" id="btnRegisterNewStudent" onClick={this.submitHandler}>Update {u.FirstName} Data</button>
            </div>

          </div>
          <div className="right" />
          <div className="clear" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      )
    });

    return (
      <div>
        {uList}
      </div>
    );
  }
}

export default UsersList;