import React, { Component } from "react";

import LogValidation from "./LogValidation";
import SigIn from "./SignIn";
import gym1 from "../../img/gym1.png";
import Navbar from "../mainView/Navbar";

class Login extends Component {
  state = {
    logIn: true,
    signIn: false,
    isLogged: false
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
    else if (this.state.signIn) return <SigIn />;
  };

  renderLoginOrSignInButton = () => {
    if (this.state.logIn) {
      return (
        <a
          className="waves-effect waves-light btn"
          onClick={this.setSignInOnTrue}
        >
          Create account
        </a>
      );
    } else if (this.state.signIn) {
      return (
        <a
          className="waves-effect waves-light btn"
          onClick={this.setLoginOnTrue}
        >
          Back to login
        </a>
      );
    }
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

  render() {
    if (this.state.isLogged) {
      return <Navbar />;
    } else {
      return (
        <span>
          <div style={this.loginStyles}>
            <img src={gym1} alt="logo" height="212" width="347" />
            {this.renderLogInOrSignIn()}
            {this.renderLoginOrSignInButton()}
          </div>
          <br />
        </span>
      );
    }
  }
}
export default Login;
