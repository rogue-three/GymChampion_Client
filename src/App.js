import React, { Component } from 'react';
import './App.css';

import Login from "./components/login/Login";
import Navbar from "./components/mainView/Navbar";



class App extends Component {

  renderLoginOrAppActiveUser() {
    // todo : logic to verify user token
    return <Login/>
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
