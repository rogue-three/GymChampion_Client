import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Login from "./components/login/Login";
import MainView from "./components/mainView/MainView";
import Profile from "./components/profile/Profile";
import Statistic from "./components/statistics/Statistics";
import Calendar from "./components/calendar/Calendar";
import Diagnostic from "./components/diagnostics/Diagnostics";

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


  render() {

    if (this.state.isLogged) {
      return (
        <Switch>
        <Route exact={true} path="/" component={MainView}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/statistic" component={Statistic}/>
        <Route path="/diagnostic" component={Diagnostic}/>
        </Switch>
      );
    }
    else {
    return (
      <div>
        {this.renderLoginOrAppActiveUser()}
     </div>
    );
    }
  }
}
export default App;
