import React, { Component } from 'react';
import './App.css';

import Login from "./components/login/Login";
import Navbar from "./components/Navbar";



class App extends Component {

  

  render() {
    return (
      <div>
     {/* <Login /> */}
     <Navbar/>
     
     </div>
    );
  }
}

export default App;
