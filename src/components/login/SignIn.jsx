import React, { Component} from 'react';

class SignIn extends Component {


    stylesLabel = {
        color:"white",
        fontSize:15
    };

    stylesForm = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '60%',
    };

    state = {
        loginFromClient:"",
        passwordFromClient:"",
        emailFromClient: ""

    }

    getLoginPasswordAndEmail = () => {
        console.log("login:" + this.state.loginFromClient);
        console.log("password:" + this.state.passwordFromClient);
        console.log("email:" + this.state.emailFromClient);

        let userToString = this.getJSONtoSendInBodyWithDataFromUser();
         
        console.log(userToString);
        
        
    }

    getJSONtoSendInBodyWithDataFromUser = () => {
        let userToString =   {
            "loginId": 1,
            "password": null,
            "email": "null",
            "user": {
                "login": "null",
                "nickname": null,
                "birthDate": null,
                "weight": null,
                "gender": null
                            },
            "userRole": {
                "id": 1,
                "roleName": "USER"
            },
            "archivized": false
        };
        userToString.email = this.state.emailFromClient;
        userToString.password = this.state.passwordFromClient;
        userToString.user.login = this.state.loginFromClient;

        return userToString;

    }

    loginChange = (event) => {
        this.setState({loginFromClient: event.target.value})
        
      }

    passwordChange = (event) => {
        this.setState({passwordFromClient: event.target.value})
        
      }

    emailChange = (event) => {
        this.setState({emailFromClient: event.target.value})
        
      }


    render() {

        
        return (
        <form style={this.stylesForm}>
            <label style={this.stylesLabel}>Create a new account:</label>
            <br/>
            <input type="text" name="login" placeholder="Login..." 
            value={this.state.loginFromClient} onChange={this.loginChange}></input>
            <br/>
            <input type="text" name="email" placeholder="@email..."
            value={this.state.emailFromClient} onChange={this.emailChange}></input>
            <br/>
            <input type="text" name="password" placeholder="password..." 
            value={this.state.passwordFromClient} onChange={this.passwordChange}></input>
            <br/>
            <a  className="waves-effect waves-light btn" 
            onClick={this.getLoginPasswordAndEmail}>Sign in</a> 
            <br/>
        </form>);
    }
}
export default SignIn;