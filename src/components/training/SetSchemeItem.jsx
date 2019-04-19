import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";

class SetSchemeItem extends Component {
  render() {
    const { exercise } = this.props;
    return (
      <Grid item xs={12}>
        <Paper>
          {exercise.replace(/_/g, " ")}
          <br />
          <span>REPS:</span>
          <br />
          <Input type="number" name="reps" />
          <br />
          <span>WEIGHT:</span>
          <br />
          <Input type="number" name="weight" />
        </Paper>
      </Grid>
    );
  }
}

export default SetSchemeItem;
