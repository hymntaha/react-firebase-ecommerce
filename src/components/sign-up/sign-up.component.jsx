import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/app/firebase.utils";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      displayName: '',
      confirmedPassword: ''
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
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            label='Display Name'
            name='displayName'
            value={displayName}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type='email'
            label='Email'
            name='email'
            value={email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type='password'
            label='Password'
            name='password'
            value={password}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type='password'
            label='Confirm Password'
            name='confirmPassword'
            value={confirmPassword}
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
