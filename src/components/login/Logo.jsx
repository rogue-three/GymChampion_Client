import React, { Component } from "react";
import gym1 from "../../img/logo.svg";
import Grid from "@material-ui/core/Grid";

class Logo extends Component {
  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <img src={gym1} alt="logo" width="300px" />
        </Grid>
        <Grid item>
          <h2>GYM CHAMPION</h2>
        </Grid>
      </Grid>
    );
  }
}

export default Logo;
