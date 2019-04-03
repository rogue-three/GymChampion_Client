import React, { Component } from "react";

class Start extends Component {

styleButtonTrain = {
    width:"100%",
 
}

    render() {
        return (
        <div>
            <h1>Example start of App</h1>
            <a style={this.styleButtonTrain} className="btn-floating btn-large pulse">
            Just start training now!</a>
        </div>
        );
    }
}
export default Start;