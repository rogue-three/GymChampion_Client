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
        login:"",
        password:"",
        email: ""
    }

    getLoginPasswordAndEmail = () => {
        console.log("login:" + this.state.login);
        console.log("password:" + this.state.password);
        console.log("email:" + this.state.email);
    }

    loginChange = (event) => {
        this.setState({login: event.target.value})
        
      }

    passwordChange = (event) => {
        this.setState({password: event.target.value})
        
      }

    emailChange = (event) => {
        this.setState({email: event.target.value})
        
      }

    render() {

        
        return (
        <form style={this.stylesForm}>
            <label style={this.stylesLabel}>Create a new account:</label>
            <br/>
            <input type="text" name="login" placeholder="Login..." 
            value={this.state.login} onChange={this.loginChange}></input>
            <br/>
            <input type="text" name="email" placeholder="@email..."
            value={this.state.email} onChange={this.emailChange}></input>
            <br/>
            <input type="text" name="password" placeholder="password..." 
            value={this.state.password} onChange={this.passwordChange}></input>
            <br/>
            <a  className="waves-effect waves-light btn" 
            onClick={this.getLoginPasswordAndEmail}>Sign in</a> 
            <br/>
        </form>);
    }
}
export default SignIn;