import React, { Component } from "react";
import ExerciseScheme from "./ExerciseScheme";
import Grid from '@material-ui/core/Grid';
import TrackWorkout from "../mainView/TrackWorkout";
import ActionButtons from "./ActionButtons";

class MainView extends Component {

  render() {
    return (
      <Grid container  direction="column" >
      
        <TrackWorkout/>
         <ActionButtons/>
      </Grid>
      // <div>
      //   <div style={this.styleTrackWorkout}>
      //     <p>TRACK WORKOUT </p>
      //     <a className="waves-effect waves-light btn-small">Edit</a>
      //   </div>

      //   <a
      //     style={this.styleButtonTrain}
      //     className="waves-effect waves-light btn-large"
      //   >
      //     Just start training now!
      //   </a>

      //   <div>
      //     <a
      //       style={this.styleButtonTrain}
      //       className="waves-effect waves-light btn-large"
      //     >
      //       Custom training plans
      //     </a>
      //   </div>

      //   <ExerciseScheme />
      // </div>
    );
  }
}
export default MainView;
