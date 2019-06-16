import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class SetSchemeHandlerHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={1}>
            <Typography style={{ color: "white" }}> SET</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography style={{ color: "white" }}>EXERCISE</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography style={{ color: "white" }}>WEIGHT</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography style={{ color: "white" }}>REPS</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography style={{ color: "white" }}>DELETE</Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default SetSchemeHandlerHeader;
