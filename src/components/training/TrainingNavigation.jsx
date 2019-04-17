import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Timer from "./Timer";
import Grid from "@material-ui/core/Grid";

class TrainingNavigation extends Component {
  state = {};
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={2}>
          <Button>STOP</Button>
        </Grid>
        <Grid item xs={4}>
          <Timer />
        </Grid>
        <Grid item xs={2}>
          <Button>SAVE</Button>
        </Grid>
        <Grid item xs={2}>
          <Button>CHANCEL</Button>
        </Grid>
      </Grid>
    );
  }
}

export default TrainingNavigation;
