import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/MuiComponentTheme";
import Login from "./components/login/Login";
import MainView from "./components/mainView/MainView";
import Profile from "./components/profile/Profile";
import Statistic from "./components/statistics/Statistics";
import TrainingLog from "./components/training_log/TrainingLog";
import Diagnostic from "./components/diagnostics/Diagnostics";
import SignUp from "./components/login/SignUp";
import Navigation from "./components/mainView/Navigation";
import Grid from "@material-ui/core/Grid";
import Training from "./components/training/Training";
import CustomTraining from "./components/mainView/CustomTraining";

class App extends Component {
  state = {
    login: "",
    isLogged: false
  };

  setLogin = dataFromLogin => {
    this.setState({ login: dataFromLogin });
    this.setState({ isLogged: true });
  };

  renderLoginOrAppActiveUser() {
    // todo : logic to verify user token
    return <Login callBackLogin={this.setLogin} />;
  }

  setCallBackOnLoginComponent = () => {
    return <Login callBackLogin={this.setLogin} />;
  };

  render() {
    if (this.state.isLogged) {
      return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
          >
            <Switch>
              <Route
                exact={true}
                path="/"
                render={props => (
                  <MainView {...props} activeUser={this.state.login} />
                )}
              />
              <Route
                path="/profile"
                render={props => (
                  <Profile {...props} activeUser={this.state.login} />
                )}
              />
              <Route
                path="/training_log"
                render={props => (
                  <TrainingLog {...props} activeUser={this.state.login} />
                )}
              />
              <Route
                path="/statistic"
                render={props => (
                  <Statistic {...props} activeUser={this.state.login} />
                )}
              />
              <Route
                path="/diagnostic"
                render={props => (
                  <Diagnostic {...props} activeUser={this.state.login} />
                )}
              />
              <Route
                path="/e-s-moreoptions"
                render={props => (
                  <Training {...props} activeUser={this.state.login} />
                )}
              />
              <Route
                path="/training"
                render={props => (
                  <Training {...props} activeUser={this.state.login} />
                )}
              />
              <Route
                path="/quicktrain"
                render={props => (
                  <Training {...props} activeUser={this.state.login} />
                )}
              />
              <Route
                path="/customtrain"
                render={props => (
                  <CustomTraining {...props} activeUser={this.state.login} />
                )}
              />
            </Switch>
            <Navigation />
          </Grid>
        </MuiThemeProvider>
      );
    } else {
      return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route
              exact={true}
              path="/"
              component={this.setCallBackOnLoginComponent}
            />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </MuiThemeProvider>
      );
    }
  }
}
export default App;
