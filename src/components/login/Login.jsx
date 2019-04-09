import React, { Component } from "react";

import LogValidation from "./LogValidation";
import SignUp from "./SignUp";
import gym1 from "../../img/gym1.png";
import Navbar from "../mainView/Navbar";
import Logo from "./Logo";

import LoginValidationForm from "./LoginValidationForm";

class Login extends Component {

  state = {
    logIn: true,
    signIn: false,
    isLogged: false,
    login:""
  };

  loginStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: "5%",
    paddingTop: "2%"
  };

  renderLogInOrSignIn = () => {
    if (this.state.logIn)
      return <LogValidation callbackFromParent={this.setIsLogged} />;
    else if (this.state.signIn) return <SignUp />;
  };



  setLoginOnTrue = () => {
    this.setState({ logIn: true });
    this.setState({ signIn: false });
  };

  setSignInOnTrue = () => {
    this.setState({ logIn: false });
    this.setState({ signIn: true });
  };

  setIsLogged = logInfoFromValidator => {
    this.setState({ isLogged: logInfoFromValidator });
  };

  setLoginFromForm = (dataFromForm) => {
      this.props.callBackLogin(dataFromForm);
      
  }

  render() {
    if (this.state.isLogged) {
      return <Navbar />;
    } else {
      return (
        <span>
            <Logo/>
            <LoginValidationForm callBackForm={this.setLoginFromForm}/>      
            {/* <SignUp/> */}
          <br />
        </span>
      );
    }
  }
}
export default Login;
