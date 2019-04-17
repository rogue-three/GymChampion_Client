import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Timer from "./Timer";
import Grid from "@material-ui/core/Grid";

class TrainingNavigation extends Component {
  state = {};
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={24}
      >
        <Grid item xs={1} />
        <Grid item xs={2}>
          <Button variant="contained" color="primary">
            START
          </Button>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <Timer />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary">
            SAVE
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary">
            CHANCEL
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default TrainingNavigation;
