import React, { Component } from "react";

import LogValidation from "./LogValidation";

import gym1 from "../img/gym1.jpg";

class Login extends Component {

   

    loginStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft: '5%',
        marginTop: '2%'
    }

    render() {
       return (
       <div style={this.loginStyles}>
            <img src={gym1} alt="logo" height="212" width="347"></img>
            <LogValidation />         
        </div>);
    }
} 
export default Login;
