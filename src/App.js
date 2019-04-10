import React, { Component } from "react";
import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/MuiComponentTheme";
import Profile from "./components/profile/Profile";
// import Navbar from "./components/mainView/Navbar";
// import Login from "./components/login/Login";

class App extends Component {
  renderLoginOrAppActiveUser() {
    // todo : logic to verify user token
    return <Profile />;
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Profile />
        {/* <Navbar /> */}
      </MuiThemeProvider>
    );
  }
}

export default App;
