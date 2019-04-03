import React, { Component} from 'react';

class SignIn extends Component {


    render() {

        return (
        <div>
            <input placeholder="Enter Your login..."></input>
            <br/>
            <input placeholder="Enter Your email..."></input>
            <br/>
            <input placeholder="Enter Your password..."></input>
            <br/>
            <a className="waves-effect waves-light btn">Sign in</a> 
            <br/>
        </div>
        );
    }
}