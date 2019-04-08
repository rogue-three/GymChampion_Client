import React, { Component } from "react";
import "./App.css";

import Profile from "./components/profile/Profile";

import CssBaseline from "@material-ui/core/CssBaseline";
import teal from "@material-ui/core/colors/teal";
// import Login from "./components/login/Login";

class App extends Component {
  state = {
    teal
  };
  renderLoginOrAppActiveUser() {
    // todo : logic to verify user token
    return <Profile />; //<Login/>
  }

  componentDidMount() {
    this.setState.teal = teal[50];
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {this.renderLoginOrAppActiveUser()}
      </React.Fragment>
    );
  }
}

export default App;
