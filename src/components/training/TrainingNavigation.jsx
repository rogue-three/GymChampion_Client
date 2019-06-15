import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Timer from "./Timer";

class TrainingNavigation extends Component {
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
        <Grid item xs={5}>
          <Timer />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" disabled={true}>
            SAVE
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button component={Link} to="/" variant="contained" color="secondary">
            CHANCEL
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default TrainingNavigation;
