import React, { Component } from "react";
import ExerciseSchemeTable from "./ExerciseSchemeTable";
import Grid from "@material-ui/core/Grid";
import TrackWorkout from "../mainView/TrackWorkout";
import ActionButtons from "./ActionButtons";

class MainView extends Component {
  render() {
    return (
      <Grid container direction="column">
        <TrackWorkout />
        <ActionButtons />
        <ExerciseSchemeTable />
      </Grid>
    );
  }
}
export default MainView;
