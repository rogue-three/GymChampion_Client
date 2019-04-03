import React, { Component } from "react";

import LogValidation from "./LogValidation";
import Footer from "./Footer";
import SigIn from "./SignIn";
import gym1 from "../../img/gym1.jpg";

class Login extends Component {

   state = {    
       logIn:true,
       signIn:false
   };

    loginStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: '5%',
        paddingTop: '2%'
  
    };

    renderLogInOrSignIn() {
        if (this.state.logIn) return (<LogValidation/>);
        else if (this.state.signIn) return (<SigIn/>);
    };

    renderLoginOrSignInLink()  {
        if (this.state.logIn)
         {return (<a className="waves-effect waves-light btn"
         onClick={this.setSignInOnTrue}>Create account</a>)
         ;} 
        else if (this.state.signIn) {
            return (<a className="waves-effect waves-light btn"
            onClick={this.setLoginOnTrue}>Back to login</a>)
            ;}
    };

    setLoginOnTrue = () => {
        this.setState({logIn: true});
        this.setState({signIn: false});
        console.log(this.state.logIn + " " + this.state.signIn);
    };

    setSignInOnTrue = () => {
        this.setState({logIn: false});
        this.setState({signIn: true});
        console.log(this.state.logIn + " " + this.state.signIn);
    };


    render() {
       return (
        <span>
            <div style={this.loginStyles}>
                <img src={gym1} alt="logo" height="212" width="347"></img>
                    {this.renderLogInOrSignIn()} 
                    <p>OR</p> 
                    {this.renderLoginOrSignInLink()}      
            </div>
                <br/>
            <Footer/>
        </span>);
    };
} 
export default Login;
