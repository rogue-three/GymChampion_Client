import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class SetSchemeItem extends Component {
  render() {
    const { exercise } = this.props;
    return (
      <Grid item xs={12}>
        <Paper>{exercise}</Paper>
      </Grid>
    );
  }
}

export default SetSchemeItem;
