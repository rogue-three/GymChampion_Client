import React, { Component} from 'react';
import Logo from "./Logo";
import SignUpForm from "./SignUpForm";


class SignUp extends Component {

  render() {
    return (
    <React.Fragment>
      <Logo/>
      <SignUpForm/>
    </React.Fragment>
    );
  }
}

export default SignUp;