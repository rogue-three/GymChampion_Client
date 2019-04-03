import React, { Component } from "react";

class Start extends Component {

styleButtonTrain = {
    width:"100%",
}

styleTrackWorkout = {
    width:"100%",
    display:"flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:"DarkTurquoise",
    color:"white",
    fontStyle:"italic"
}


    render() {
        return (
        <div>
            <div style={this.styleTrackWorkout} >
                <h1>TRACK WORKOUT  </h1>
                <a class="waves-effect waves-light btn-large">Edit</a>

            </div>
            
            <a style={this.styleButtonTrain} className="btn-floating btn-large pulse">
            Just start training now!</a>
        </div>
        );
    }
}
export default Start;