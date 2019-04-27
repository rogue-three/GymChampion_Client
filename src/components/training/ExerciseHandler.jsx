import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class ExerciseHandler extends Component {
  render() {
    const { exercises, addExerciseSetField } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
        spacing={24}
      >
        <Grid item />
        <Grid item>
          <Typography style={{ color: "white" }}>
            CLICK EXERCISE TO ADD A SET
          </Typography>
        </Grid>
        {exercises.map(exercise => (
          <Grid item key={exercise.exerciseId}>
            <Button
              variant="contained"
              onClick={() => addExerciseSetField(exercise)}
            >
              {exercise.exerciseName.replace(/_/g, " ")}
            </Button>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default ExerciseHandler;
