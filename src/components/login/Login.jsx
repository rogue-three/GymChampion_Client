import React, { Component } from "react";
import Logo from "./Logo";
import LoginValidationForm from "./LoginValidationForm";

class Login extends Component {

  setLoginFromForm = (dataFromForm) => {
      this.props.callBackLogin(dataFromForm);
      
  }

  render() {
      return (
        <React.Fragment>
            <Logo/>
            <LoginValidationForm callBackForm={this.setLoginFromForm}/>      
        </React.Fragment>
      );
    }
}
export default Login;
