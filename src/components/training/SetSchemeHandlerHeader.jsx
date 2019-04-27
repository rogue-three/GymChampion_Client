import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class SetSchemeHandlerHeader extends Component {
  render() {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={1} />
        <Grid item xs={2}>
          <Typography>SET</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>EXERCISE</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>WEIGHT</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>REPS</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default SetSchemeHandlerHeader;
