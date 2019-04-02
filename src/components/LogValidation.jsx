import React, { Component } from "react";

class LogValidation extends Component {

    stylesLabel = {
        color:"green",
        fontSize:20
    };

    stylesForm = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '20%',
        marginLeft: '35%'
    };

    render() {
       return (
            <form style={this.stylesForm}>
                <label style={this.stylesLabel}>Login:</label>
                <input></input>
                <br/>
                <label style={this.stylesLabel}>Password:</label>
                <input></input>
                <br/>
                <a className="waves-effect waves-light btn">Log in</a> 
            </form>  
                     
        );
    }
} 
export default LogValidation;
