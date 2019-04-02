import React, { Component } from "react";

import LogValidation from "./LogValidation";
import Footer from "./Footer";

import gym1 from "../../img/gym1.jpg";

class Login extends Component {

   

    loginStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: '5%',
        paddingTop: '2%',
      
    }

    render() {
       return (
        <span>
            <div style={this.loginStyles}>
                <img src={gym1} alt="logo" height="212" width="347"></img>
                <LogValidation />        
            </div>
            <Footer/>
        </span> 
        );
    }
} 
export default Login;
