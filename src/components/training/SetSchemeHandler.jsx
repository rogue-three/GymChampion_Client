import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SetSchemeItem from "./SetSchemeItem";
import Divider from "@material-ui/core/Divider";
import SetSchemeHandlerHeader from "./SetSchemeHandlerHeader";

class SetSchemeHandler extends Component {
  handleSchemeItemsFilled = areFilled => {
    this.props.changeSchemeItemsFilled(areFilled);
  };

  deleteSetScheme = setSchemeItemNumber => {
    this.props.deleteSetField(setSchemeItemNumber - 1);
  };

  render() {
    const { setsField } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <Grid item>
          <SetSchemeHandlerHeader />
        </Grid>

        {setsField.length !== 0 ? (
          setsField.map(exercise => (
            <Grid item key={exercise.setNumber}>
              <Divider />
              <SetSchemeItem
                setSchemeItemNumber={exercise.setNumber}
                exercise={exercise.exercise.exerciseName}
                changeSchemeItemsFilled={this.handleSchemeItemsFilled}
                deleteSetScheme={this.deleteSetScheme}
              />
            </Grid>
          ))
        ) : (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography color="secondary">ADD SET SCHEME HERE</Typography>
          </Grid>
        )}
      </Grid>
    );
  }
}

export default SetSchemeHandler;
