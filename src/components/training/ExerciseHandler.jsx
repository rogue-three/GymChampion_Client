import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class ExerciseHandler extends Component {
  render() {
    const { exercises } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        spacing={24}
      >
        <Typography color="secondary">CLICK EXERCISE TO ADD A SET</Typography>
        {exercises.map(exercise => (
          <Grid item key={exercise.exerciseId}>
            <Button variant="contained">
              {exercise.exerciseName.replace(/_/g, " ")}
            </Button>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default ExerciseHandler;
