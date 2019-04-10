import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Login from "./components/login/Login";
import MainView from "./components/mainView/MainView";
import Profile from "./components/profile/Profile";
import Statistic from "./components/statistics/Statistics";
import Calendar from "./components/calendar/Calendar";
import Diagnostic from "./components/diagnostics/Diagnostics";
import SignUp from "./components/login/SignUp";
import Navigation from "./components/mainView/Navigation";
import Grid from '@material-ui/core/Grid';
import ExerciseSchemeOptions from "./components/mainView/ExerciseSchemeOptions";
import Training from "./components/mainView/Training";
import QuickTraining from "./components/mainView/QuickTraining";

class App extends Component {

  state = {
    login: "",
    isLogged: false
  }

  setLogin = dataFromLogin => {
    this.setState({login: dataFromLogin});
    this.setState({isLogged: true});
  }

  renderLoginOrAppActiveUser() {
    // todo : logic to verify user token
    return <Login callBackLogin={this.setLogin}/>
  }

  setCallBackOnLoginComponent = () => {
    return <Login callBackLogin={this.setLogin}/>;
  }
  
  render() {
    if (this.state.isLogged) {
      return (
        <Grid>
          <Switch>
            <Route exact={true} path="/" render={(props) => <MainView {...props} activeUser={this.state.login} />}/>
            <Route path="/profile" render={(props) => <Profile {...props} activeUser={this.state.login} />}/>
            <Route path="/calendar" render={(props) => <Calendar {...props} activeUser={this.state.login} />}/>
            <Route path="/statistic" render={(props) => <Statistic {...props} activeUser={this.state.login} />}/>
            <Route path="/diagnostic" render={(props) => <Diagnostic {...props} activeUser={this.state.login} />}/>
            <Route path="/e-s-moreoptions" render={(props) => <ExerciseSchemeOptions {...props} activeUser={this.state.login} />}/>
            <Route path="/training" render={(props) => <Training {...props} activeUser={this.state.login} />}/>
            <Route path="/quicktrain" render={(props) => <QuickTraining {...props} activeUser={this.state.login} />}/>
          </Switch>
          <Navigation/>
        </Grid>
      );
    }
    else {
    return (
      <Switch>
        <Route  exact={true} path="/"  component={this.setCallBackOnLoginComponent}/>
        <Route path="/signup" component={SignUp}/>
     </Switch>
    );
    }
  }
}
export default App;
