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
         <ExerciseScheme/>
      </Grid>
    );
  }
}
export default MainView;
