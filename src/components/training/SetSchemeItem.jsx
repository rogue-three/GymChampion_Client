import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";

class SetSchemeItem extends Component {
  render() {
    const { exercise, setSchemeItemNumber } = this.props;
    return (
      <Grid item xs={12}>
        <Paper square>
          <Typography>
            {setSchemeItemNumber} {exercise.replace(/_/g, " ")}
          </Typography>
          <Typography>WEIGHT:</Typography>
          <Input type="number" name="weight" />
          <Typography>REPS:</Typography>
          <Input type="number" name="reps" />
        </Paper>
      </Grid>
    );
  }
}

export default SetSchemeItem;
