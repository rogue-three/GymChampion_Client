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

    render() {

        
        return (
        <form style={this.stylesForm}>
            <label style={this.stylesLabel}>Create a new account:</label>
            <br/>
            <input placeholder="Enter Your login..."></input>
            <br/>
            <input placeholder="Enter Your email..."></input>
            <br/>
            <input placeholder="Enter Your password..."></input>
            <br/>
            <a  className="waves-effect waves-light btn">Sign in</a> 
            <br/>
        </form>);
    }
}
export default SignIn;