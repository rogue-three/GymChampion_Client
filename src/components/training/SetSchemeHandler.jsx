import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SetSchemeItem from "./SetSchemeItem";
import Divider from "@material-ui/core/Divider";

class SetSchemeHandler extends Component {
  state = {
    setSchemesCounter: 0
  };
  render() {
    const { setsField } = this.props;
    let { setSchemesCounter } = this.state;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        {setsField.length !== 0 ? (
          setsField.map(exercise => (
            <Grid key={(++setSchemesCounter).toString()}>
              <Divider />
              <SetSchemeItem
                setSchemeItemNumber={setSchemesCounter}
                exercise={exercise.exerciseName}
              />
            </Grid>
          ))
        ) : (
          <Typography color="secondary">ADD SET SCHEME HERE</Typography>
        )}
      </Grid>
    );
  }
}

export default SetSchemeHandler;
