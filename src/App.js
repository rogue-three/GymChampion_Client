import React, { Component } from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
// import Login from "./components/login/Login";

class App extends Component {
  renderLoginOrAppActiveUser() {
    // todo : logic to verify user token
    return <Profile />; //<Login/>
  }

  render() {
    return <div>{this.renderLoginOrAppActiveUser()}</div>;
  }
}

export default App;
