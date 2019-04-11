import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class TrackWorkout extends Component {
  render() {
    return (
      <Grid
        container
        style={{ backgroundColor: "#80cbc4" }}
        justify="space-evenly"
        alignItems="center"
      >
        <h2>TRACK WORKOUT:</h2>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/trackedit"
        >
          Edit
        </Button>
      </Grid>
    );
  }
}
export default TrackWorkout;
