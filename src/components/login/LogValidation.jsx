import React, { Component } from "react";

class LogValidation extends Component {

    stylesLabel = {
        color:"DarkTurquoise",
        fontSize:20
    };

    stylesForm = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '20%',
    };

    state = {
        login:"",
        password:""
    }

    getLoginAndPassword = () => {
        console.log("login:" + this.state.login);
        console.log("password:" + this.state.password);
    }

    loginChange = (event) => {
        this.setState({login: event.target.value})
        
      }

    passwordChange = (event) => {
        this.setState({password: event.target.value})
        
      }

    

    render() {
       return (
            <form style={this.stylesForm}>
                <label style={this.stylesLabel}>Login:</label>
                <input type="text" name="login" placeholder="Enter Your Login..." 
                value={this.state.login} onChange={this.loginChange}></input>
                <br/>
                <label style={this.stylesLabel}>Password:</label>
                <input type="text" name="password" placeholder="Enter Your Password..." 
                value={this.state.password} onChange={this.passwordChange}></input>
                <br/>
                <a className="waves-effect waves-light btn"
                 onClick={this.getLoginAndPassword}>Log in</a> 
                <br/>
                <a>If You haven't got account sign in !</a>
                <br/>
            </form>            
        );
    }
} 
export default LogValidation;
