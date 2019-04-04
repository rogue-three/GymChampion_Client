import React, { Component } from "react";
import ExerciseScheme from "./ExerciseScheme";

class Start extends Component {

styleButtonTrain = {
    width:"100%",
    marginTop:"1%",
    borderRadius: 80
}

styleTrackWorkout = {
    width:"100%",
    display:"flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:"DarkTurquoise",
    color:"white",
    fontStyle:"italic",
    height:80
}


    render() {
        return (
        <div>
            <div style={this.styleTrackWorkout} >
                <p>TRACK WORKOUT  </p>
                <a className="waves-effect waves-light btn-small">Edit</a>
            </div>
            
            <a style={this.styleButtonTrain} className="waves-effect waves-light btn-large">
            Just start training now!</a>

            <div>
                <a style={this.styleButtonTrain} className="waves-effect waves-light btn-large">Custom training plans</a>
            </div>

            <ExerciseScheme/>
        </div>
        );
    }
}
export default Start;