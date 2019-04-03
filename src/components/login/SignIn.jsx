import React, { Component} from 'react';

class SignIn extends Component {


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
            <input type="text" name="login" placeholder="Enter Your login..." 
            value={this.state.login} onChange={this.loginChange}></input>
            <br/>
            <input type="text" name="email" placeholder="Enter Your email..."
            value={this.state.email} onChange={this.emailChange}></input>
            <br/>
            <input type="text" name="password" placeholder="Enter Your password..." 
            value={this.state.password} onChange={this.passwordChange}></input>
            <br/>
            <a  className="waves-effect waves-light btn" 
            onClick={this.getLoginPasswordAndEmail}>Sign in</a> 
            <br/>
        </form>);
    }
}
export default SignIn;