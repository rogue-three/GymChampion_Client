import React, { Component } from 'react';
import './App.css';
import Login from "./components/login/Login";

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
    return (
      <div>
     {this.renderLoginOrAppActiveUser()}
     </div>
    );
  }
}
export default App;
