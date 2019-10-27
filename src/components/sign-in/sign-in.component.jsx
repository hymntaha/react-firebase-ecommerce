import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

class SignInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            label="password"
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <input
            type="submut"
            value="Submit Form"
          />
        </form>
      </div>
    );
  }
}

export default SignInComponent;
