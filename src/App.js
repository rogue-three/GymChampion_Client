import React, { Component } from "react";
import "./App.css";

// import Profile from "./components/profile/Profile";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/MuiComponentTheme";
import Login from "./components/login/Login";

class App extends Component {
  renderLoginOrAppActiveUser() {
    // todo : logic to verify user token
    return <Login />;
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          {this.renderLoginOrAppActiveUser()}
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
