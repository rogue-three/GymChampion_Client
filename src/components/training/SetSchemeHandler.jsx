import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SetSchemeItem from "./SetSchemeItem";
import Divider from "@material-ui/core/Divider";
import SetSchemeHandlerHeader from "./SetSchemeHandlerHeader";

class SetSchemeHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setSchemesCounter: 0
    };
  }

  handleSchemeItemsFilled = areFilled => {
    this.props.changeSchemeItemsFilled(areFilled);
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
        <SetSchemeHandlerHeader />
        {setsField.length !== 0 ? (
          setsField.map(exercise => (
            <Grid item key={(++setSchemesCounter).toString()}>
              <Divider />
              <SetSchemeItem
                setSchemeItemNumber={setSchemesCounter}
                exercise={exercise.exerciseName}
                changeSchemeItemsFilled={this.handleSchemeItemsFilled}
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
