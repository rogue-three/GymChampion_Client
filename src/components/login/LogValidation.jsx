import React, { Component } from "react";

class LogValidation extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            login:"",
            password:"",
            passwordFromDB:"",
            loginDataFromDb:{
                        "user": {"gender":{},"userRole":{}}
                    },
            logSuccess: false

        }
        this.getLoginAndPassword = this.getLoginAndPassword.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }

    stylesLabel = {
        color:"white",
        fontSize:20
    };

    stylesForm = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '60%',
    };

    getLoginAndPassword = () => {
    
        let apiUrl = 'http://localhost:8080/v1/login_data/login/' + this.state.login;
      
         fetch(apiUrl)
        .then(response => response.json())
        .then(result => {
            this.setState({passwordFromDB: result.password})
            this.setState({loginDataFromDb: result});
        });
    }


    frozen = (ms) => {
        return new Promise(r => setTimeout(r, ms));
      };

    async validatePassword() {
        await this.getLoginAndPassword();
        await this.frozen(1000);
        if (this.state.password === this.state.passwordFromDB) {
            this.setState({logSuccess: true});
            this.props.callbackFromParent(this.state.logSuccess);
        } else {
            alert("Bad password!");
        }
    } 

    loginChange = (event) => {
        this.setState({login: event.target.value})
        
      };

    passwordChange = (event) => {
        this.setState({password: event.target.value})
      };

    render() {
        return (
            <div style={this.stylesForm}>
                <label style={this.stylesLabel}>Login:</label>
                <input type="text" name="login" placeholder="Enter Your Login..." 
                value={this.state.login} onChange={this.loginChange}></input>
                <br/>
                <label style={this.stylesLabel}>Password:</label>
                <input type="text" name="password" placeholder="Enter Your Password..." 
                value={this.state.password} onChange={this.passwordChange}></input>
                <br/>
                <a className="waves-effect waves-light btn"
                onClick={this.validatePassword}>Log in</a> 
            
                <br/>
                <label style={this.stylesLabel}>OR</label>
            </div>            
        );
        }
    }

export default LogValidation;
