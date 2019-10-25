import React, { Component } from "react";

import "./sign-in.styles.scss";

class SignInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (e) =>
  {
    e.preventDefault();
    this.setState({email:'', password:''})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input name="email" value={this.state.email} required/>
          <label htmlFor="password">Password</label>
          <input name="password" value={this.state.password} required/>
          <input type='submut' value='Submit Form'/>
        </form>
      </div>
    );
  }
}

export default SignInComponent;
