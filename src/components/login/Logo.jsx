import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import gym1 from "../../img/logo.svg";
import Grid from "@material-ui/core/Grid";

class Logo extends Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <img src={gym1} alt="logo" width="70%" />
        <br />
        <Typography>
          <h2>GYM CHAMPION</h2>
        </Typography>
      </Grid>
    );
  }
}

export default Logo;
